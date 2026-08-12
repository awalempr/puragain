// Netlify Scheduled Function — runs in the cloud on a cron (no laptop/CLI needed).
// Turns inbound/missed Zoho calls that aren't linked to anyone into routed Leads,
// with the call recording + context in a note. Idempotent via a "Lead-Created"
// tag on the Call record (Who_Id linking is unreliable). Uses ZOHO_* env vars
// already set on the Netlify site.

const ACCOUNTS = process.env.ZOHO_ACCOUNTS_HOST || "https://accounts.zoho.com";
const API = process.env.ZOHO_API_HOST || "https://www.zohoapis.com";

async function getToken() {
  const p = new URLSearchParams({
    refresh_token: process.env.ZOHO_REFRESH_TOKEN,
    client_id: process.env.ZOHO_CLIENT_ID,
    client_secret: process.env.ZOHO_CLIENT_SECRET,
    grant_type: "refresh_token",
  });
  const r = await fetch(`${ACCOUNTS}/oauth/v2/token`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: p.toString(),
  });
  const j = await r.json();
  return j.access_token || null;
}

function callerPhone(call) {
  // The phone is always the trailing number in the Subject, whatever the format:
  //   "from +17137057585", "from George Saubon (+16193060004)", "from + 17082003684".
  // Take the last 10 digits of the subject (the number sits at the end).
  const d = (call.Subject || "").replace(/\D/g, "");
  if (d.length >= 10) return d.slice(-10);
  const cid = (call.Caller_ID || "").replace(/\D/g, "");
  return cid.length >= 10 ? cid.slice(-10) : null;
}

export default async () => {
  const token = await getToken();
  if (!token) return new Response("Zoho auth failed", { status: 500 });
  const H = { Authorization: `Zoho-oauthtoken ${token}`, "Content-Type": "application/json" };
  const last10 = (p) => (p || "").replace(/\D/g, "").slice(-10);

  async function findLeadIdByPhone(phone) {
    const p = last10(phone);
    for (const field of ["Phone", "Mobile"]) {
      const r = await fetch(`${API}/crm/v6/Leads/search?criteria=(${field}:contains:${p})&fields=id&per_page=1`, { headers: H });
      if (r.status === 200) {
        const j = await r.json().catch(() => null);
        const id = j?.data?.[0]?.id;
        if (id) return String(id);
      }
    }
    return null;
  }

  const url = `${API}/crm/v6/Calls?fields=id,Subject,Call_Type,Call_Start_Time,Call_Duration,Voice_Recording__s,Owner,Who_Id,Caller_ID,Tag&sort_by=Created_Time&sort_order=desc&per_page=200`;
  const calls = (await (await fetch(url, { headers: H })).json()).data || [];
  const isDone = (c) => (c.Tag || []).some((x) => x.name === "Lead-Created");
  const candidates = calls.filter(
    (c) => ["Inbound", "Missed"].includes(c.Call_Type) && !c.Who_Id && !isDone(c)
  );

  let created = 0, existingNoted = 0, skipped = 0;
  for (const c of candidates) {
    const phone = callerPhone(c);
    if (!phone) { skipped++; continue; }
    const area = phone.slice(0, 3);
    const noteBody = [
      `📞 Inbound ${c.Call_Type} call`,
      `From: +1 ${phone.slice(0, 3)}-${phone.slice(3, 6)}-${phone.slice(6)}  (area code ${area})`,
      `When: ${(c.Call_Start_Time || "").slice(0, 16).replace("T", " ")}`,
      `Duration: ${c.Call_Duration || "—"}`,
      `Answered by: ${c.Owner?.name || "—"}`,
      c.Voice_Recording__s ? `Recording: ${c.Voice_Recording__s}` : "Recording: (none)",
    ].join("\n");

    const existing = await findLeadIdByPhone(phone);
    if (existing) {
      await fetch(`${API}/crm/v6/Leads/${existing}/Notes`, { method: "POST", headers: H,
        body: JSON.stringify({ data: [{ Note_Title: "📞 Inbound Call", Note_Content: noteBody }] }) });
      await fetch(`${API}/crm/v6/Leads/actions/add_tags?ids=${existing}`, { method: "POST", headers: H,
        body: JSON.stringify({ tags: [{ name: "Inbound Call" }] }) });
      existingNoted++;
    } else {
      const base = { Last_Name: `Inbound Caller ${phone.slice(-4)}`, Phone: `+1${phone}`, Company: "Inbound Call" };
      let res = await fetch(`${API}/crm/v6/Leads`, { method: "POST", headers: H,
        body: JSON.stringify({ data: [{ ...base, Lead_Source: "Inbound Call" }], trigger: ["workflow"] }) });
      let jr = await res.json().catch(() => null);
      if (jr?.data?.[0]?.status === "error" && jr.data[0].details?.api_name === "Lead_Source") {
        res = await fetch(`${API}/crm/v6/Leads`, { method: "POST", headers: H,
          body: JSON.stringify({ data: [base], trigger: ["workflow"] }) });
        jr = await res.json().catch(() => null);
      }
      const leadId = jr?.data?.[0]?.details?.id;
      if (leadId) {
        await fetch(`${API}/crm/v6/Leads/${leadId}/Notes`, { method: "POST", headers: H,
          body: JSON.stringify({ data: [{ Note_Title: "📞 Inbound Call — no prior CRM match", Note_Content: noteBody }] }) });
        created++;
      }
    }
    // durable idempotency marker
    await fetch(`${API}/crm/v6/Calls/actions/add_tags?ids=${c.id}`, { method: "POST", headers: H,
      body: JSON.stringify({ tags: [{ name: "Lead-Created" }] }) }).catch(() => {});
  }

  const summary = `inbound-sweep: scanned ${calls.length}, candidates ${candidates.length}, new leads ${created}, existing noted ${existingNoted}, skipped ${skipped}`;
  console.log(summary);
  return new Response(summary, { status: 200 });
};

// Runs every 15 minutes (Netlify cron is UTC). Adjust as needed.
export const config = { schedule: "*/15 * * * *" };
