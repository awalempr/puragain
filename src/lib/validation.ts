// Client-side validation shared by every lead form. Blocks submission on a
// malformed email or incomplete phone and returns a human-readable message the
// forms show inline — including a "Did you mean ...?" suggestion for common
// email typos (like ".con" instead of ".com", or "gmial.com").

// Common misspellings of popular mailbox providers (domain name, before the dot).
const PROVIDER_TYPOS: Record<string, string> = {
  gmial: "gmail", gmai: "gmail", gmal: "gmail", gmil: "gmail", gnail: "gmail",
  gamil: "gmail", gmaill: "gmail", gmali: "gmail", gmailc: "gmail", gmail: "gmail",
  yaho: "yahoo", yahooo: "yahoo", yhaoo: "yahoo", yahho: "yahoo", yaoo: "yahoo",
  hotmial: "hotmail", hotmal: "hotmail", hotmil: "hotmail", hotmali: "hotmail", hotmaill: "hotmail",
  outlok: "outlook", outook: "outlook", outlool: "outlook", outllook: "outlook", outloook: "outlook",
  iclod: "icloud", iclould: "icloud", icoud: "icloud", iclou: "icloud",
  comcst: "comcast", comcasr: "comcast", comcat: "comcast",
};

// Clearly-invalid top-level domains that are almost always a typo of a real one.
// (Ambiguous real ccTLDs like .co, .cm, .om are intentionally NOT listed.)
const TLD_TYPOS: Record<string, string> = {
  con: "com", cpm: "com", vom: "com", xom: "com", cok: "com", ocm: "com",
  comm: "com", cmo: "com", coom: "com", ccom: "com", conm: "com", cormo: "com",
  nte: "net", ner: "net", nett: "net",
  ogr: "org", orgg: "org",
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

// Returns a corrected email when a likely typo is detected, else null.
export function suggestEmail(email: string): string | null {
  const v = (email || "").trim();
  const at = v.lastIndexOf("@");
  if (at < 1) return null;
  const local = v.slice(0, at);
  const domain = v.slice(at + 1).toLowerCase();
  const dot = domain.lastIndexOf(".");
  if (dot < 1) return null;
  let name = domain.slice(0, dot);
  let tld = domain.slice(dot + 1);
  let changed = false;
  if (TLD_TYPOS[tld]) { tld = TLD_TYPOS[tld]; changed = true; }
  if (PROVIDER_TYPOS[name] && PROVIDER_TYPOS[name] !== name) { name = PROVIDER_TYPOS[name]; changed = true; }
  return changed ? `${local}@${name}.${tld}` : null;
}

// Validator for react-hook-form (and manual use). Empty passes so `required`
// owns the "this field is blank" case; a filled value must be well-formed.
export function validateEmail(value?: string): true | string {
  const v = (value || "").trim();
  if (!v) return true;
  if (!EMAIL_RE.test(v)) return "Please enter a valid email, like name@example.com.";
  const suggestion = suggestEmail(v);
  if (suggestion) return `Did you mean ${suggestion}?`;
  return true;
}

export function digitsOnly(value?: string): string {
  return (value || "").replace(/\D/g, "");
}

// Strips a leading US country code so a stored number never carries a leading
// 1 / +1. Kixie's back-end workflow prepends +1, so we must hand it the national
// number only — otherwise values become +11XXXXXXXXXX. Returns a clean
// "(XXX) XXX-XXXX" for a standard 10-digit US number; for anything non-standard
// it just removes a leading +1/1 and keeps the rest as typed.
export function normalizePhone(value?: string): string {
  const v = (value || "").trim();
  if (!v) return "";
  const d = v.replace(/\D/g, "");
  const national = d.length === 11 && d[0] === "1" ? d.slice(1) : d;
  if (national.length === 10) {
    return `(${national.slice(0, 3)}) ${national.slice(3, 6)}-${national.slice(6)}`;
  }
  // Non-standard length: drop a leading +1/1 country code, keep the remainder.
  return v.replace(/^\s*\+?\s*1[\s.\-()]*/, "").trim();
}

// US phone: 10 digits, or 11 with a leading 1. Empty passes (see above).
export function validatePhone(value?: string): true | string {
  const v = (value || "").trim();
  if (!v) return true;
  const d = digitsOnly(v);
  if (d.length < 10) return "Please enter a complete 10-digit phone number.";
  if (d.length === 10) return true;
  if (d.length === 11 && d[0] === "1") return true;
  return "That phone number doesn't look right. Enter a 10-digit US number.";
}
