// Client-side ad conversion firing on successful lead submit.
// Google Ads "Lead" conversion via gtag. Dormant until the conversion label
// env var is set; the base Google tag (google-ads.tsx) provides window.gtag.

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackGoogleAdsLead(): void {
  if (typeof window === "undefined") return;
  const sendTo = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
  if (!sendTo || typeof window.gtag !== "function") return;
  try {
    window.gtag("event", "conversion", {
      send_to: sendTo,
      value: 1.0,
      currency: "USD",
    });
  } catch {
    // never let analytics break the form
  }
}
