// Invisible reCAPTCHA v3 helper.
// No-ops (returns null) when NEXT_PUBLIC_RECAPTCHA_SITE_KEY isn't set, so the
// forms keep working before the keys are added. The script is loaded lazily on
// first use so it never blocks page load, and errors never block a real user —
// the server fails open on a missing/unverifiable token.

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

interface Grecaptcha {
  ready: (cb: () => void) => void;
  execute: (siteKey: string, opts: { action: string }) => Promise<string>;
}
declare global {
  interface Window {
    grecaptcha?: Grecaptcha;
  }
}

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (typeof window === "undefined" || !SITE_KEY) return Promise.resolve();
  if (window.grecaptcha) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = `https://www.google.com/recaptcha/api.js?render=${SITE_KEY}`;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("recaptcha failed to load"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

/**
 * Returns a reCAPTCHA v3 token for the given action, or null if reCAPTCHA isn't
 * configured or fails to load. Callers should submit regardless — the server
 * treats a null/absent token as "unverified" and fails open, so a script hiccup
 * never costs a real lead.
 */
export async function getRecaptchaToken(action: string): Promise<string | null> {
  if (!SITE_KEY || typeof window === "undefined") return null;
  try {
    await loadScript();
    const grecaptcha = window.grecaptcha;
    if (!grecaptcha) return null;
    await new Promise<void>((r) => grecaptcha.ready(() => r()));
    return await grecaptcha.execute(SITE_KEY, { action });
  } catch {
    return null;
  }
}
