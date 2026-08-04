import { NextResponse } from "next/server";
import { findLeadIdByPhone, addLeadNote, addLeadTags } from "@/lib/zoho";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Kixie webhook receiver.
// Configure Kixie event webhooks (SMS, Disposition, Call Outcome, Voicemail...) to
// POST here at:  https://puragainwater.com/api/kixie?token=<KIXIE_WEBHOOK_TOKEN>
//
// It logs every call/SMS event onto the matching Zoho lead and flags opt-outs and
// hot replies so routing/suppression happens automatically. Payload shapes vary by
// event type, so field extraction is best-effort and the raw payload is logged to
// the function logs to calibrate on the first live events.

const OPT_OUT = /^\s*(stop|stopall|unsubscribe|cancel|end|quit|opt\s*out|optout|remove)\b/i;
const POSITIVE = /\b(yes|yep|yeah|yup|sure|ok|okay|book|schedule|interested)\b/i;

function pick(obj: Record<string, unknown>, keys: string[]): string | undefined {
  for (const k of keys) {
    const v = obj?.[k];
    if (v != null && v !== "") return String(v);
  }
  return undefined;
}

export async function POST(request: Request) {
  const url = new URL(request.url);
  const expected = process.env.KIXIE_WEBHOOK_TOKEN;
  if (expected && url.searchParams.get("token") !== expected) {
    return NextResponse.json({ error: "unauthorized" }, { status: 401 });
  }

  // Kixie may send JSON or form-encoded — accept both.
  let e: Record<string, unknown> = {};
  try {
    e = await request.json();
  } catch {
    try {
      const t = await request.text();
      e = Object.fromEntries(new URLSearchParams(t)) as Record<string, unknown>;
    } catch {
      /* empty body */
    }
  }

  const eventType = pick(e, ["eventname", "event", "type", "webhookType"]) || "event";
  const direction = (pick(e, ["direction", "callDirection"]) || "").toLowerCase();
  const phone = pick(e, [
    "customerNumber", "target", "phone", "externalNumber", "contactNumber", "from", "to",
  ]);
  const agent = pick(e, ["agentEmail", "email", "userEmail"]) || "";
  const message = pick(e, ["smstext", "message", "text", "body", "sms"]) || "";
  const disposition = pick(e, ["disposition", "callDisposition", "outcome"]) || "";
  const duration = pick(e, ["duration", "callDuration"]) || "";
  const crmId = pick(e, ["crmContactId", "crmContactID", "contactId", "crmObjectId"]);

  // Calibration: log the raw payload (truncated) to the function logs.
  console.log("Kixie webhook:", JSON.stringify(e).slice(0, 2000));

  // Resolve the Zoho lead — prefer the crmContactId we set at enrollment, else phone.
  let leadId: string | null = crmId && /^\d{8,}$/.test(crmId) ? crmId : null;
  if (!leadId && phone) leadId = await findLeadIdByPhone(phone);
  if (!leadId) {
    return NextResponse.json({ ok: true, matched: false });
  }

  const isInboundSms =
    /sms|text|message/i.test(eventType) &&
    (direction.includes("in") || /received|inbound|reply/i.test(eventType) || (!direction && !!message));

  // Log the event as a note on the lead.
  const parts: string[] = [`Kixie ${eventType}${direction ? ` (${direction})` : ""}`];
  if (phone) parts.push(`# ${phone}`);
  if (agent) parts.push(`agent ${agent}`);
  if (disposition) parts.push(`disposition: ${disposition}`);
  if (duration) parts.push(`duration: ${duration}`);
  if (message) parts.push(`msg: "${message}"`);
  await addLeadNote(leadId, `Kixie ${eventType}`, parts.join(" · "));

  // React to inbound SMS.
  const tags: string[] = [];
  if (isInboundSms && message) {
    if (OPT_OUT.test(message)) tags.push("SMS-Opt-Out", "Do-Not-Text");
    else if (POSITIVE.test(message)) tags.push("Hot-Reply");
  }
  // React to call dispositions.
  if (disposition) {
    if (/not interested|do not call|dnc|wrong number|dead|bad number/i.test(disposition)) {
      tags.push("Reactivation-Closed");
    } else if (/interested|appointment|booked|callback|hot|quote/i.test(disposition)) {
      tags.push("Hot-Lead");
    }
  }
  if (tags.length) await addLeadTags(leadId, tags);

  return NextResponse.json({ ok: true, matched: true, leadId, tags });
}

// Simple health check.
export async function GET() {
  return NextResponse.json({ ok: true, service: "kixie-webhook" });
}
