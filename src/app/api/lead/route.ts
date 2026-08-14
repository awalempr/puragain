import { NextResponse } from "next/server";
import { CITY_MAP, CITIES, REGIONS } from "@/lib/service-areas";
import { normalizePhone } from "@/lib/validation";
import { sendMetaLead } from "@/lib/meta-capi";

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

// Lead_Source value used for referral submissions. PurAgain's Leads module has
// a (dormant) Referral source; if this exact picklist value doesn't exist the
// create is retried with the known-good "Website Lead" (see createZohoLead), so
// a referral is never lost to a bad picklist value. Overridable via env.
const REFERRAL_LEAD_SOURCE = process.env.ZOHO_REFERRAL_LEAD_SOURCE || "Referral";

// De-duplication against the CRM (by email + phone, across Leads and Contacts).
// On a match we log the submission as a Note on the existing record rather than
// create a duplicate. Set ZOHO_DEDUPE=off to disable (kill switch).
const DEDUPE_ENABLED = process.env.ZOHO_DEDUPE !== "off";

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
  source?: string; // "contact" | "quiz" | "get-quote" | "city" | "refer"
  answers?: string[]; // quiz answers (legacy: bare option text)
  quiz?: { q: string; a: string }[]; // quiz question/answer pairs (for rep call notes)
  homeownership?: string; // contact/city forms: "own" | "rent" | "unsure"
  // Referral program ("refer"): the first-class name/email/phone above belong to
  // the REFERRED friend (the new lead reps will call); these describe the
  // existing customer who sent them, so ops can pay the referral reward.
  referrerName?: string;
  referrerFirstName?: string;
  referrerLastName?: string;
  referrerEmail?: string;
  referrerPhone?: string;
  referrerConsent?: boolean; // referrer attests they have the friend's permission
  ownHome?: string; // "own" | "rent" | "unsure" — referred friend must be a homeowner to qualify
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
  // Normalize the phone so it never carries a leading 1/+1 — Kixie's back-end
  // workflow prepends +1, so a leading country code here would create +11…
  const phone = normalizePhone(data.phone);
  if (!firstName && !lastName) {
    return NextResponse.json({ error: "Name is required" }, { status: 400 });
  }
  if (!email && !phone) {
    return NextResponse.json({ error: "Email or phone is required" }, { status: 400 });
  }

  // A referral must identify the referring customer (so the reward can be paid),
  // and that customer needs a way to be reached.
  const isReferral = data.source === "refer";
  const referrerName = (data.referrerName || "").trim();
  const referrerEmail = (data.referrerEmail || "").trim();
  const referrerPhone = normalizePhone(data.referrerPhone);
  if (isReferral) {
    if (!referrerName) {
      return NextResponse.json({ error: "Your name is required" }, { status: 400 });
    }
    if (!referrerEmail && !referrerPhone) {
      return NextResponse.json({ error: "Your email or phone is required" }, { status: 400 });
    }
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
  // Referral attribution goes first so reps/ops see it at a glance. Kept in the
  // known-good Comments field so nothing depends on a custom "Referred By" field
  // existing yet (map to that field later once its API name is confirmed).
  if (isReferral) {
    descriptionLines.push("REFERRAL · PurAgain Rewards");
    descriptionLines.push(`Referred by: ${referrerName}`);
    if (referrerPhone) descriptionLines.push(`Referrer phone: ${referrerPhone}`);
    if (referrerEmail) descriptionLines.push(`Referrer email: ${referrerEmail}`);
    descriptionLines.push(
      `Referrer consent to share friend's info: ${data.referrerConsent ? "Yes" : "Not confirmed"}`
    );
    const ownLabel =
      data.ownHome === "own" ? "Yes, homeowner" : data.ownHome === "rent" ? "No, renter" : "Not confirmed";
    descriptionLines.push(`Friend owns home: ${ownLabel}`);
    descriptionLines.push(
      "Reward: $25 filter credit to referrer AFTER this friend COMPLETES the free water test (not on booking) · $200 to referrer + $100 to this friend on verified install (new customer at a new address, one reward per household, ops-approved)."
    );
    descriptionLines.push("· · ·");
  }
  if (recaptcha.note) descriptionLines.push(recaptcha.note);
  if (cityObj) descriptionLines.push(`Service area: ${cityObj.name}, ${cityObj.county} (${REGIONS[cityObj.region].label})`);
  else if (data.city === "other") descriptionLines.push("NOTE: City not in service-area list (out of area?)");
  else if (data.city) descriptionLines.push(`City (unmatched): ${data.city}`);
  if (data.system) descriptionLines.push(`System of interest: ${systemLabels[data.system] || data.system}`);
  if (data.address) descriptionLines.push(`Install address: ${data.address}`);
  if (typeof data.smsOptIn === "boolean") descriptionLines.push(`SMS opt-in: ${data.smsOptIn ? "Yes" : "No"}`);
  if (data.message) descriptionLines.push(`Message: ${data.message}`);
  // Quiz answers, paired with their questions so reps have call-ready context.
  // Prefer the structured {q,a} pairs; fall back to the legacy bare-answer list.
  const quizPairs = (
    data.quiz?.length ? data.quiz : (data.answers || []).map((a) => ({ q: "", a }))
  ).filter((x) => x.a);
  if (quizPairs.length) {
    descriptionLines.push("Water quiz answers:");
    quizPairs.forEach((x) =>
      descriptionLines.push(x.q ? `  • ${x.q} → ${x.a}` : `  • ${x.a}`)
    );
  }

  // Which form this lead came from — drives Form_Name and the call-prep note title.
  const formName = isReferral
    ? "Referral Program"
    : data.source === "quiz"
      ? "Website Quiz"
      : data.source === "get-quote"
        ? "Get Quote Landing Page"
        : data.source === "city"
          ? "City Landing Page"
          : "Website Contact Form";

  // Rep-facing call-prep note, built for EVERY form (quiz, contact, get-quote,
  // city, referral) so whatever the customer told us surfaces in the lead's
  // Notes timeline — not just the quiz.
  const noteLines: string[] = [];
  if (data.system) noteLines.push(`System of interest: ${systemLabels[data.system] || data.system}`);
  if (data.message) noteLines.push(`In their words: "${data.message}"`);
  const ownAns = data.homeownership || data.ownHome;
  if (ownAns) {
    const owns = /^(own|i own)/i.test(ownAns);
    const rents = /^(rent|i rent)/i.test(ownAns);
    noteLines.push(`Homeowner: ${owns ? "Yes" : rents ? "No (renter)" : ownAns}`);
  }
  if (cityObj) noteLines.push(`Service area: ${cityObj.name}, ${cityObj.county}`);
  else if (data.city && data.city !== "other") noteLines.push(`City: ${data.city}`);
  if (typeof data.smsOptIn === "boolean") noteLines.push(`SMS opt-in: ${data.smsOptIn ? "Yes" : "No"}`);
  if (quizPairs.length) {
    noteLines.push("");
    noteLines.push("Water quiz answers:");
    quizPairs.forEach((x) => noteLines.push(x.q ? `• ${x.q}\n   ↳ ${x.a}` : `• ${x.a}`));
  }
  if (isReferral) {
    noteLines.push("");
    noteLines.push(`Referral from: ${referrerName}${referrerPhone ? ` (${referrerPhone})` : ""}`);
  }
  const noteContent = noteLines.length
    ? `Lead from ${formName}. Use this on your call:\n\n${noteLines.join("\n")}`
    : "";

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
    Company: isReferral ? "Referral" : "Website Lead",
    Owner: LEAD_OWNERS.length ? { id: pickOwner(email || phone || `${Date.now()}`) } : undefined,
    Lead_Source: isReferral ? REFERRAL_LEAD_SOURCE : "Website Lead",
    Form_Name: formName,
    Source: isReferral ? "referral" : sourceTag,
    Campaign: trim(data.utm_campaign),
    gclid_field: trim(data.gclid),
    fbclid: trim(data.fbclid),
    adgroup: trim(data.utm_content),
    Referrer_URL: trim(data.referrer),
    // This Leads module has no standard Description field; use its real fields.
    Interested_in: data.system ? (systemLabels[data.system] || data.system) : undefined,
    Question: trim(data.message),
    Comments: descriptionLines.join("\n") || undefined,
    // Real custom field on the Leads module. If its picklist values differ, the
    // create falls back by dropping it (see createWithFallback) — the same
    // homeowner answer is preserved in Comments regardless.
    Do_you_own_your_home:
      data.ownHome === "own" ? "Yes" : data.ownHome === "rent" ? "No" : undefined,
    // Referral: populate the real referrer fields (they exist on the Leads
    // module) so a Zoho workflow can personalize the "you've been referred"
    // email and credit the referrer. Self-healing create drops any that error.
    Referrer_First_Name: isReferral ? (data.referrerFirstName?.trim() || referrerName.split(" ")[0] || undefined) : undefined,
    Referrer_Last_Name: isReferral ? (data.referrerLastName?.trim() || referrerName.split(" ").slice(1).join(" ") || undefined) : undefined,
    Referrer_Phone: isReferral ? (referrerPhone || undefined) : undefined,
    Referrer_Email: isReferral ? (referrerEmail || undefined) : undefined,
    Referred_By_Customer: isReferral ? true : undefined,
  };

  // POST the record. Returns the parsed per-record result (or null on transport
  // error) so the caller can inspect Zoho's field-level error codes.
  async function createLead(record: Record<string, unknown>) {
    const res = await fetch(`${API_HOST}/crm/v6/Leads`, {
      method: "POST",
      headers: {
        Authorization: `Zoho-oauthtoken ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ data: [record], trigger: ["workflow"] }),
    });
    const json = await res.json().catch(() => null);
    return { ok: res.ok, json, record: json?.data?.[0] };
  }

  // Create the lead, healing field-level rejections so a bad custom-field value
  // never costs us a lead. If Zoho rejects a specific field: Lead_Source is
  // swapped for the known-good "Website Lead" (it's likely required); any other
  // rejected field is dropped and the create retried. Everything dropped is
  // still preserved in the Comments text, so no information is lost.
  async function createWithFallback(record: Record<string, unknown>) {
    const attempt = { ...record };
    let result = await createLead(attempt);
    for (let i = 0; i < 3; i++) {
      if (result.ok && result.record?.status === "success") return result;
      const rec = result.record as Record<string, unknown> | undefined;
      if (!rec || rec.status !== "error") return result;
      const code = String(rec.code || "");
      const apiName = (rec.details as { api_name?: string } | undefined)?.api_name;
      const fieldError = code === "INVALID_DATA" || code === "MANDATORY_NOT_FOUND";
      if (!fieldError || !apiName || !(apiName in attempt)) return result;
      if (apiName === "Lead_Source" && attempt.Lead_Source !== "Website Lead") {
        console.warn(`Zoho rejected Lead_Source="${attempt.Lead_Source}" — retrying as "Website Lead".`);
        attempt.Lead_Source = "Website Lead";
      } else {
        console.warn(`Zoho rejected field "${apiName}" — dropping it and retrying (value kept in Comments).`);
        delete attempt[apiName];
      }
      result = await createLead(attempt);
    }
    return result;
  }

  // ---- De-dupe: find an existing Lead/Contact by email or phone ----
  // Search one module; 204 = none, any error = null (fail-open). Never throws.
  async function searchExisting(moduleName: string, criteria: string): Promise<string | null> {
    try {
      const res = await fetch(
        `${API_HOST}/crm/v6/${moduleName}/search?criteria=${encodeURIComponent(criteria)}&fields=id&per_page=1`,
        { headers: { Authorization: `Zoho-oauthtoken ${accessToken}` } }
      );
      if (res.status === 204 || !res.ok) return null;
      const json = await res.json().catch(() => null);
      const id = json?.data?.[0]?.id;
      return id ? String(id) : null;
    } catch {
      return null;
    }
  }

  // Match on email (case-insensitive equals) OR phone. Phone uses the last-10
  // digits with `equals`: Zoho normalizes phone values for equality, so digits
  // match records stored as "5551234567" or "(555) 123-4567" alike. (`contains`
  // and parenthesized values are rejected as INVALID_QUERY by this org's search.)
  // Zoho search allows only two conditions per group, so the OR is folded
  // pairwise into nested groups. Checks Leads first, then Contacts.
  async function findDuplicate(): Promise<{ module: string; id: string } | null> {
    const emailNorm = email.toLowerCase();
    const digits = phone.replace(/\D/g, "");
    const last10 = digits.length >= 10 ? digits.slice(-10) : "";
    const parts: string[] = [];
    if (emailNorm) parts.push(`(Email:equals:${emailNorm})`);
    if (last10) parts.push(`(Phone:equals:${last10})`, `(Mobile:equals:${last10})`);
    if (!parts.length) return null;
    const criteria = parts.reduce((acc, p) => (acc ? `(${acc}or${p})` : p));
    for (const moduleName of ["Leads", "Contacts"]) {
      const id = await searchExisting(moduleName, criteria);
      if (id) return { module: moduleName, id };
    }
    return null;
  }

  // Conversions API payload (fired on any successful conversion below). Dormant
  // until META_CAPI_TOKEN is set; hashes PII server-side before sending.
  const capiInput = {
    email,
    phone,
    firstName,
    lastName,
    city: cityObj?.name || (data.city && data.city !== "other" ? data.city : undefined),
    state: cityObj ? "CA" : undefined,
    fbclid: trim(data.fbclid),
    clientIp: request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || undefined,
    userAgent: request.headers.get("user-agent") || undefined,
    eventSourceUrl: trim(data.referrer) || "https://puragainwater.com",
  };

  try {
    // If this person already exists, log the submission as a Note on the existing
    // record instead of creating a duplicate. Fail-open (see helpers) means a
    // lookup hiccup falls through to normal creation, so a real lead is never lost.
    if (DEDUPE_ENABLED && (email || phone)) {
      const dup = await findDuplicate();
      if (dup) {
        const kind = dup.module === "Contacts" ? "contact" : "lead";
        const title = `${isReferral ? "Referral" : "Website"} re-submission · existing ${kind}`;
        const details = [descriptionLines.join("\n"), noteContent]
          .filter(Boolean)
          .filter((v, i, a) => a.indexOf(v) === i)
          .join("\n\n");
        const body = `Duplicate-safe: matched an existing ${dup.module} record by email/phone, so no new ${kind} was created.\n\nNew ${formName} submission:\n\n${details}`.slice(0, 32000);
        await fetch(`${API_HOST}/crm/v6/${dup.module}/${dup.id}/Notes`, {
          method: "POST",
          headers: { Authorization: `Zoho-oauthtoken ${accessToken}`, "Content-Type": "application/json" },
          body: JSON.stringify({ data: [{ Note_Title: title.slice(0, 120), Note_Content: body }] }),
        }).catch(() => {});
        await sendMetaLead(capiInput);
        return NextResponse.json({ ok: true, duplicate: true });
      }
    }

    const result = await createWithFallback(lead);
    if (result.ok && result.record?.status === "success") {
      // Attach the quiz Q&A as a dedicated Note so it surfaces in the lead's
      // Notes timeline (where reps prep), not just the Comments field.
      // Best-effort: a failed note must never fail the lead.
      const leadId = (result.record?.details as { id?: string } | undefined)?.id;
      if (leadId && noteContent) {
        try {
          await fetch(`${API_HOST}/crm/v6/Leads/${leadId}/Notes`, {
            method: "POST",
            headers: {
              Authorization: `Zoho-oauthtoken ${accessToken}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              data: [
                {
                  Note_Title: `${formName} · Customer Details`,
                  Note_Content: noteContent.slice(0, 32000),
                },
              ],
            }),
          });
        } catch (noteErr) {
          console.warn("Lead note add failed (non-blocking):", noteErr);
        }
      }
      await sendMetaLead(capiInput);
      return NextResponse.json({ ok: true });
    }

    console.error("Zoho lead create failed:", JSON.stringify(result.json));
    return NextResponse.json({ error: "Could not save lead" }, { status: 502 });
  } catch (err) {
    console.error("Zoho lead create error:", err);
    return NextResponse.json({ error: "Could not save lead" }, { status: 502 });
  }
}
