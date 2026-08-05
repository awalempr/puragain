import { NextResponse } from "next/server";
import { CITY_MAP, CITIES, REGIONS } from "@/lib/service-areas";

// Resolve a submitted city (accepts our slug OR the display name) to the
// structured service-area record, so leads carry clean City/State/County for
// routing and reporting.
function resolveCity(input?: string) {
  if (!input) return null;
  const key = input.toLowerCase().trim();
  if (CITY_MAP[key]) return CITY_MAP[key];
  return CITIES.find((c) => c.name.toLowerCase() === key) || null;
}

// Simple in-memory rate limiter (same pattern as the reviews route)
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 5; // lead submissions per window per IP
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimit.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }
  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

// Content-based dedup: collapse accidental double-submits (rapid clicks, retries)
// that would otherwise create identical leads. Best-effort per warm instance —
// the client also disables the submit button; this is the belt-and-suspenders.
const recentLeads = new Map<string, number>();
const DEDUP_WINDOW = 30 * 1000; // 30s
function isDuplicateLead(key: string): boolean {
  const now = Date.now();
  for (const [k, t] of recentLeads) if (now - t > DEDUP_WINDOW) recentLeads.delete(k);
  const last = recentLeads.get(key);
  recentLeads.set(key, now);
  return last !== undefined && now - last < DEDUP_WINDOW;
}

// Data-center-configurable hosts (US defaults). Override via env for EU/IN/AU/etc.
const ACCOUNTS_HOST = process.env.ZOHO_ACCOUNTS_HOST || "https://accounts.zoho.com";
const API_HOST = process.env.ZOHO_API_HOST || "https://www.zohoapis.com";

// reCAPTCHA v3. Minimum score below which we treat a submission as a bot.
const RECAPTCHA_MIN_SCORE = Number(process.env.RECAPTCHA_MIN_SCORE || "0.5");

// Verify an invisible reCAPTCHA v3 token. Bias is toward NEVER dropping a real
// lead: if reCAPTCHA isn't configured, or Google errors, or the token is simply
// missing (client JS failed), we allow the lead and just note it. We only reject
// on a positively bad signal — an invalid token or a score below the threshold.
async function checkRecaptcha(
  token: string | undefined,
  ip: string
): Promise<{ allow: boolean; note?: string }> {
  const secret = process.env.RECAPTCHA_SECRET_KEY;
  if (!secret) return { allow: true }; // not configured yet — don't block anyone
  if (!token) return { allow: true, note: "⚠️ reCAPTCHA: no token (client JS may have failed)" };
  try {
    const params = new URLSearchParams({ secret, response: token });
    if (ip && ip !== "unknown") params.set("remoteip", ip);
    const res = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: params.toString(),
    });
    const json = await res.json().catch(() => null);
    if (!json) return { allow: true, note: "⚠️ reCAPTCHA: verify unavailable (allowed)" };
    if (json.success !== true) return { allow: false }; // forged/invalid token → bot
    const score = typeof json.score === "number" ? json.score : 1;
    if (score < RECAPTCHA_MIN_SCORE) return { allow: false }; // low score → bot
    return { allow: true, note: `reCAPTCHA score: ${score.toFixed(2)}` };
  } catch {
    return { allow: true, note: "⚠️ reCAPTCHA: verify error (allowed)" };
  }
}

// Website leads are assigned round-robin to the California team so they never
// fall into the old (now broken) distribution. IDs can be overridden via env.
const LEAD_OWNERS = (process.env.ZOHO_LEAD_OWNER_IDS ||
  "1973355000192043001,1973355000066081001") // David Emm, Carlos Canjura
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

function pickOwner(seed: string): string {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  return LEAD_OWNERS[h % LEAD_OWNERS.length];
}

// Cache the short-lived access token in memory to avoid minting one per request.
let cachedToken: { value: string; expiresAt: number } | null = null;

async function getAccessToken(): Promise<string | null> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;

  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.value;
  }

  const params = new URLSearchParams({
    refresh_token: refreshToken,
    client_id: clientId,
    client_secret: clientSecret,
    grant_type: "refresh_token",
  });

  const res = await fetch(`${ACCOUNTS_HOST}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: params.toString(),
  });

  if (!res.ok) return null;
  const json = await res.json();
  if (!json.access_token) return null;

  // Tokens last ~1h; refresh a minute early.
  cachedToken = {
    value: json.access_token,
    expiresAt: Date.now() + (json.expires_in ? json.expires_in * 1000 : 3600 * 1000) - 60_000,
  };
  return json.access_token;
}

interface LeadPayload {
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  system?: string;
  message?: string;
  address?: string;
  city?: string; // service-area city (slug or name), for location tagging/routing
  smsOptIn?: boolean;
  source?: string; // "contact" | "quiz" | "get-quote" | "city"
  answers?: string[]; // quiz answers
  company_website?: string; // honeypot — must stay empty
  recaptchaToken?: string; // invisible reCAPTCHA v3 token
  // first-touch source attribution
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  landing_page?: string;
}

export async function POST(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  const ip = forwarded?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) {
    return NextResponse.json({ error: "Too many requests" }, { status: 429 });
  }

  let data: LeadPayload;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: bots fill hidden fields. Pretend success, create nothing.
  if (data.company_website) {
    return NextResponse.json({ ok: true });
  }

  // Invisible reCAPTCHA v3. Drops clear bots; flags borderline/unverified.
  const recaptcha = await checkRecaptcha(data.recaptchaToken, ip);
  if (!recaptcha.allow) {
    return NextResponse.json({ ok: true }); // looks like a bot — pretend success, create nothing
  }

  // Minimal validation: need a name and a way to reach them.
  const firstName = (data.firstName || "").trim();
  const lastName = (data.lastName || "").trim();
  const email = (data.email || "").trim();
  const phone = (data.phone || "").trim();
  if (!firstName && !lastName) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!email && !phone) {
    return NextResponse.json({ error: "Email or phone is required" }, { status: 400 });
  }

  // Collapse duplicate submissions of the same person within a short window.
  if (isDuplicateLead(`${email}|${phone}`.toLowerCase())) {
    return NextResponse.json({ ok: true }); // duplicate — pretend success, create nothing
  }

  const accessToken = await getAccessToken();
  if (!accessToken) {
    // Zoho not configured yet, or token exchange failed. Log for Netlify function logs.
    console.error("Zoho not configured or token fetch failed for lead:", { email, phone });
    return NextResponse.json(
      { error: "Lead service not configured" },
      { status: 503 }
    );
  }

  // Build the CRM Lead. Company is a required field in the Leads module,
  // so default it for B2C. Everything without a dedicated field goes to
  // Description so nothing is lost even before custom fields exist.
  const systemLabels: Record<string, string> = {
    "reverse-osmosis": "5-Stage Reverse Osmosis",
    alkaline: "6-Stage Alkaline",
    "whole-house": "Whole House System",
    "not-sure": "Not sure yet",
  };

  const cityObj = resolveCity(data.city);

  const descriptionLines: string[] = [];
  if (recaptcha.note) descriptionLines.push(recaptcha.note);
  if (cityObj) descriptionLines.push(`Service area: ${cityObj.name}, ${cityObj.county} (${REGIONS[cityObj.region].label})`);
  else if (data.city === "other") descriptionLines.push("⚠️ City not in service-area list (out of area?)");
  else if (data.city) descriptionLines.push(`City (unmatched): ${data.city}`);
  if (data.system) descriptionLines.push(`System of interest: ${systemLabels[data.system] || data.system}`);
  if (data.address) descriptionLines.push(`Install address: ${data.address}`);
  if (typeof data.smsOptIn === "boolean") descriptionLines.push(`SMS opt-in: ${data.smsOptIn ? "Yes" : "No"}`);
  if (data.message) descriptionLines.push(`Message: ${data.message}`);
  if (data.answers?.length) {
    descriptionLines.push("Quiz answers:");
    data.answers.forEach((a, i) => a && descriptionLines.push(`  ${i + 1}. ${a}`));
  }
  // Attribution detail without a dedicated CRM field goes to Description too.
  if (data.utm_medium) descriptionLines.push(`UTM medium: ${data.utm_medium}`);
  if (data.utm_term) descriptionLines.push(`UTM term: ${data.utm_term}`);
  if (data.landing_page) descriptionLines.push(`Landing page: ${data.landing_page}`);

  // Derive a human-readable Source tag when there's no explicit utm_source.
  const sourceTag =
    data.utm_source ||
    (data.gclid ? "google-ads" : undefined) ||
    (data.fbclid ? "facebook-ads" : undefined) ||
    (data.referrer ? "referral" : "website-direct");

  const trim = (v?: string) => (v ? v.slice(0, 255) : undefined);

  // Mapped to PurAgain's actual Leads module: "Website Lead" is an existing
  // Lead_Source picklist value; Form_Name distinguishes which form it came from;
  // the source-tracking fields let website leads be attributed by channel.
  const lead: Record<string, unknown> = {
    First_Name: firstName || undefined,
    Last_Name: lastName || firstName || "Website Lead",
    Email: email || undefined,
    Phone: phone || undefined,
    City: cityObj?.name || (data.city && data.city !== "other" ? data.city : undefined),
    State: cityObj ? "CA" : undefined,
    County: cityObj?.county || undefined,
    Company: "Website Lead",
    Owner: LEAD_OWNERS.length ? { id: pickOwner(email || phone || `${Date.now()}`) } : undefined,
    Lead_Source: "Website Lead",
    Form_Name:
      data.source === "quiz"
        ? "Website Quiz"
        : data.source === "get-quote"
          ? "Get Quote Landing Page"
          : "Website Contact Form",
    Source: sourceTag,
    Campaign: trim(data.utm_campaign),
    gclid_field: trim(data.gclid),
    fbclid: trim(data.fbclid),
    adgroup: trim(data.utm_content),
    Referrer_URL: trim(data.referrer),
    // This Leads module has no standard Description field; use its real fields.
    Interested_in: data.system ? (systemLabels[data.system] || data.system) : undefined,
    Question: trim(data.message),
    Comments: descriptionLines.join("\n") || undefined,
  };

  try {
    const res = await fetch(`${API_HOST}/crm/v6/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [lead], trigger: ["workflow"] }),
    });

    const json = await res.json().catch(() => null);
    const record = json?.data?.[0];
    if (res.ok && record?.status === "success") {
      return NextResponse.json({ ok: true });
    }

    console.error("Zoho lead create failed:", JSON.stringify(json));
    return NextResponse.json({ error: "Could not save lead" }, { status: 502 });
  } catch (err) {
    console.error("Zoho lead create error:", err);
    return NextResponse.json({ error: "Could not save lead" }, { status: 502 });
  }
}
