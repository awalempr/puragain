import Script from "next/script";

/**
 * Google Analytics 4. Renders nothing until NEXT_PUBLIC_GA_ID is set
 * (e.g. G-XXXXXXXXXX) as a Netlify environment variable, so it's safe to
 * ship and activates the moment the ID is provided — no code change needed.
 */
export function Analytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  if (!gaId) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}');`}
      </Script>
    </>
  );
}
