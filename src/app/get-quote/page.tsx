import type { Metadata } from "next";
import GetQuoteClient from "./get-quote-client";

export const metadata: Metadata = {
  title: "Get a Free Water Quote, $0 Down",
  description:
    "Get a free, no-obligation water filtration quote for your home. Free in-home water test, zero money down, financing from $26/mo, 7-year warranty. Serving Southern California.",
  alternates: { canonical: "/get-quote" },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Get a Free Water Quote, $0 Down | Puragain Water",
    description:
      "Free in-home water test and a custom filtration quote. Zero money down, 7-year warranty, lifetime service. Southern California's family-owned water experts.",
    url: "/get-quote",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Home Water Filtration Quote",
  serviceType: "Water filtration system quote and installation",
  provider: {
    "@type": "LocalBusiness",
    name: "Puragain Water",
    areaServed: "Southern California",
    telephone: "",
    email: "support@puragain.com",
  },
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "USD",
    description: "Free in-home water test and custom filtration quote with zero money down.",
  },
};

export default function GetQuotePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GetQuoteClient />
    </>
  );
}
