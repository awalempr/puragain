// Client-side ad conversion firing on successful lead submit.
// Google Ads "Lead" conversion via gtag, with Enhanced Conversions user data
// (email/phone/name). gtag hashes the fields in-browser before sending.
// Dormant until the conversion label env var is set; the base Google tag
// (google-ads.tsx) provides window.gtag.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

type LeadUser = {
  email?: string;
  phone?: string;
  firstName?: string;
  lastName?: string;
};

// Enhanced Conversions prefers E.164 phone (+1XXXXXXXXXX for US).
function e164(phone?: string): string | undefined {
  const d = (phone || "").replace(/\D/g, "");
  if (d.length === 10) return `+1${d}`;
  if (d.length === 11 && d[0] === "1") return `+${d}`;
  return undefined;
}

export function trackGoogleAdsLead(user?: LeadUser): void {
  if (typeof window === "undefined") return;
  const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (!sendTo || typeof window.gtag !== "function") return;
  try {
    if (user && (user.email || user.phone)) {
      const userData: Record<string, unknown> = {};
      if (user.email) userData.email = user.email.trim().toLowerCase();
      const ph = e164(user.phone);
      if (ph) userData.phone_number = ph;
      if (user.firstName || user.lastName) {
        userData.address = {
          first_name: (user.firstName || "").trim().toLowerCase() || undefined,
          last_name: (user.lastName || "").trim().toLowerCase() || undefined,
        };
      }
      window.gtag("set", "user_data", userData);
    }
    window.gtag("event", "conversion", {
      send_to: sendTo,
      value: 1.0,
      currency: "USD",
    });
  } catch {
    // never let analytics break the form
  }
}
