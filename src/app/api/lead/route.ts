import { NextResponse } from "next/server";

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

// Data-center-configurable hosts (US defaults). Override via env for EU/IN/AU/etc.
const ACCOUNTS_HOST = process.env.ZOHO_ACCOUNTS_HOST || "https://accounts.zoho.com";
const API_HOST = process.env.ZOHO_API_HOST || "https://www.zohoapis.com";

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
  smsOptIn?: boolean;
  source?: string; // "contact" | "quiz"
  answers?: string[]; // quiz answers
  company_website?: string; // honeypot — must stay empty
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

  const descriptionLines: string[] = [];
  if (data.system) descriptionLines.push(`System of interest: ${systemLabels[data.system] || data.system}`);
  if (data.address) descriptionLines.push(`Install address: ${data.address}`);
  if (typeof data.smsOptIn === "boolean") descriptionLines.push(`SMS opt-in: ${data.smsOptIn ? "Yes" : "No"}`);
  if (data.message) descriptionLines.push(`Message: ${data.message}`);
  if (data.answers?.length) {
    descriptionLines.push("Quiz answers:");
    data.answers.forEach((a, i) => a && descriptionLines.push(`  ${i + 1}. ${a}`));
  }

  // Mapped to PurAgain's actual Leads module: "Website Lead" is an existing
  // Lead_Source picklist value; Form_Name distinguishes which form it came from.
  const lead: Record<string, unknown> = {
    First_Name: firstName || undefined,
    Last_Name: lastName || firstName || "Website Lead",
    Email: email || undefined,
    Phone: phone || undefined,
    Company: "Website Lead",
    Lead_Source: "Website Lead",
    Form_Name: data.source === "quiz" ? "Website Quiz" : "Website Contact Form",
    Description: descriptionLines.join("\n") || undefined,
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
