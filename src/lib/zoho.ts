// Minimal Zoho CRM helper used by server routes (lead intake + Kixie webhook).
// Reuses the OAuth refresh-token flow; token cached in memory per warm instance.

const ACCOUNTS_HOST = process.env.ZOHO_ACCOUNTS_HOST || "https://accounts.zoho.com";
const API_HOST = process.env.ZOHO_API_HOST || "https://www.zohoapis.com";

let cachedToken: { value: string; expiresAt: number } | null = null;

export async function getZohoToken(): Promise<string | null> {
  const clientId = process.env.ZOHO_CLIENT_ID;
  const clientSecret = process.env.ZOHO_CLIENT_SECRET;
  const refreshToken = process.env.ZOHO_REFRESH_TOKEN;
  if (!clientId || !clientSecret || !refreshToken) return null;
  if (cachedToken && Date.now() < cachedToken.expiresAt) return cachedToken.value;

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
  cachedToken = {
    value: json.access_token,
    expiresAt: Date.now() + (json.expires_in ? json.expires_in * 1000 : 3600 * 1000) - 60_000,
  };
  return json.access_token;
}

async function zoho(path: string, init?: RequestInit): Promise<Response | null> {
  const token = await getZohoToken();
  if (!token) return null;
  return fetch(`${API_HOST}${path}`, {
    ...init,
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
      ...(init?.headers || {}),
    },
  });
}

export function last10(phone: string): string | null {
  const d = (phone || "").replace(/\D/g, "");
  return d.length >= 10 ? d.slice(-10) : null;
}

// Find a Leads record id by phone (checks Phone then Mobile, matched on last 10 digits).
// Uses `equals` on the 10-digit form: Zoho normalizes phone values for equality, so
// this matches records stored as "5551234567" or "(555) 123-4567" alike. NOTE: this
// org's search API rejects `contains` on phone with INVALID_QUERY, so `equals` is required.
export async function findLeadIdByPhone(phone: string): Promise<string | null> {
  const p = last10(phone);
  if (!p) return null;
  for (const field of ["Phone", "Mobile"]) {
    const res = await zoho(
      `/crm/v6/Leads/search?criteria=(${field}:equals:${p})&fields=id&per_page=1`
    );
    if (res && res.status === 200) {
      const json = await res.json().catch(() => null);
      const id = json?.data?.[0]?.id;
      if (id) return String(id);
    }
  }
  return null;
}

export async function addLeadNote(leadId: string, title: string, content: string): Promise<boolean> {
  const res = await zoho(`/crm/v6/Leads/${leadId}/Notes`, {
    method: "POST",
    body: JSON.stringify({
      data: [{ Note_Title: title.slice(0, 120), Note_Content: content.slice(0, 32000) }],
    }),
  });
  return !!res && (res.status === 201 || res.status === 200);
}

export async function addLeadTags(leadId: string, tags: string[]): Promise<boolean> {
  const res = await zoho(`/crm/v6/Leads/actions/add_tags?ids=${leadId}`, {
    method: "POST",
    body: JSON.stringify({ tags: tags.map((name) => ({ name })) }),
  });
  return !!res && res.status === 200;
}

export async function updateLead(leadId: string, fields: Record<string, unknown>): Promise<boolean> {
  const res = await zoho(`/crm/v6/Leads/${leadId}`, {
    method: "PUT",
    body: JSON.stringify({ data: [fields] }),
  });
  return !!res && (res.status === 200 || res.status === 202);
}
