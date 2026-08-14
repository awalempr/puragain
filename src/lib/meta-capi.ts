import crypto from "crypto";

// Meta Conversions API — server-side event forwarding. Dormant until
// META_CAPI_TOKEN is set in env (same "activate with a secret" pattern as the
// browser pixel). Fires a standard "Lead" event when a website form converts,
// so Meta gets the conversion signal server-side (iOS / ad-blocker resilient),
// deduplicated against the browser pixel by event_id.

const GRAPH_VERSION = "v21.0";

function sha256(value?: string): string | undefined {
  const v = (value || "").trim().toLowerCase();
  if (!v) return undefined;
  return crypto.createHash("sha256").update(v).digest("hex");
}

function digits(value?: string): string | undefined {
  const d = (value || "").replace(/\D/g, "");
  if (!d) return undefined;
  return d.length === 10 ? `1${d}` : d; // Meta wants country code
}

export type MetaLeadInput = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
  city?: string;
  state?: string;
  zip?: string;
  fbclid?: string;
  fbp?: string;
  clientIp?: string;
  userAgent?: string;
  eventSourceUrl?: string;
  eventId?: string; // for browser<->server dedupe
};

// Best-effort, never throws, never blocks the caller. Returns quietly if the
// CAPI token isn't configured yet.
export async function sendMetaLead(input: MetaLeadInput): Promise<void> {
  const token = process.env.META_CAPI_TOKEN;
  const pixelId = process.env.META_PIXEL_ID || process.env.NEXT_PUBLIC_META_PIXEL_ID;
  if (!token || !pixelId) return;

  const userData: Record<string, unknown> = {
    em: sha256(input.email),
    ph: sha256(digits(input.phone)),
    fn: sha256(input.firstName),
    ln: sha256(input.lastName),
    ct: sha256(input.city),
    st: sha256(input.state),
    zp: sha256(input.zip),
    country: sha256("us"),
  };
  // fbc is built from the click id; fbp comes from the browser cookie if passed.
  if (input.fbclid) userData.fbc = `fb.1.${Date.now()}.${input.fbclid}`;
  if (input.fbp) userData.fbp = input.fbp;
  if (input.clientIp) userData.client_ip_address = input.clientIp;
  if (input.userAgent) userData.client_user_agent = input.userAgent;
  // Strip undefined so we only send what we actually have.
  for (const k of Object.keys(userData)) if (userData[k] === undefined) delete userData[k];

  const body = {
    data: [
      {
        event_name: "Lead",
        event_time: Math.floor(Date.now() / 1000),
        action_source: "website",
        event_source_url: input.eventSourceUrl || "https://puragainwater.com",
        event_id: input.eventId,
        user_data: userData,
      },
    ],
  };

  try {
    await fetch(
      `https://graph.facebook.com/${GRAPH_VERSION}/${pixelId}/events?access_token=${encodeURIComponent(token)}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      }
    );
  } catch (err) {
    console.warn("Meta CAPI Lead event failed (non-blocking):", err);
  }
}
