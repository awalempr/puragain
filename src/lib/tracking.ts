// First-touch lead attribution captured on the visitor's first page and
// persisted for the session, so form submissions carry their true source.

export interface LeadTracking {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string; // Google click id
  fbclid?: string; // Facebook click id
  referrer?: string;
  landing_page?: string;
}

const KEY = "pg_lead_tracking";
const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_term",
  "utm_content",
  "gclid",
  "fbclid",
] as const;

/** Capture first-touch attribution. Safe to call on every page load —
 *  existing values are never overwritten (first touch wins). */
export function captureTracking(): void {
  if (typeof window === "undefined") return;
  const stored = getTracking();
  const t: LeadTracking = { ...stored };
  const params = new URLSearchParams(window.location.search);

  for (const k of UTM_KEYS) {
    const v = params.get(k);
    if (v && !t[k]) (t as Record<string, string>)[k] = v.slice(0, 300);
  }
  if (!t.referrer) {
    const ref = document.referrer;
    if (ref && !ref.includes(window.location.host)) t.referrer = ref;
  }
  if (!t.landing_page) {
    t.landing_page = window.location.pathname + window.location.search;
  }

  try {
    sessionStorage.setItem(KEY, JSON.stringify(t));
  } catch {
    /* private mode / storage disabled — non-fatal */
  }
}

/** Read the stored attribution (empty object if none / SSR). */
export function getTracking(): LeadTracking {
  if (typeof window === "undefined") return {};
  try {
    return JSON.parse(sessionStorage.getItem(KEY) || "{}");
  } catch {
    return {};
  }
}
