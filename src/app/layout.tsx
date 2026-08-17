import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ExitIntent } from "@/components/exit-intent";
import { CookieConsent } from "@/components/cookie-consent";
import { Analytics } from "@/components/analytics";
import { MetaPixel } from "@/components/meta-pixel";
import { GoogleAds } from "@/components/google-ads";
import { TrackingInit } from "@/components/tracking-init";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://puragainwater.com"),
  title: {
    default: "Puragain Water | California Water Filtration Systems",
    template: "%s | Puragain Water",
  },
  description:
    "California water filtration systems that remove 99% of contaminants. Serving homeowners across Southern California, from Santa Barbara and Ventura through Los Angeles, Orange County, and the Inland Empire down to San Diego. Free in-home water test, professional installation, and lifetime service.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    // title/description intentionally omitted so each page derives its own
    // og:title / og:description from its metadata; image + site info inherited.
    url: "https://puragainwater.com",
    siteName: "Puragain Water",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://puragainwater.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Puragain Water - Your Family Deserves Water You Can Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    // title/description derive per-page from each page's metadata.
    images: ["https://puragainwater.com/images/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// JSON-LD Schema Markup
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://puragainwater.com/#organization",
      name: "Puragain Water",
      url: "https://puragainwater.com",
      telephone: "+1-760-254-0089",
      logo: "https://puragainwater.com/images/brand/logo.png",
      description:
        "Family-owned water filtration company with 30+ years experience. We install home water filtration systems that remove 99% of contaminants.",
      foundingDate: "1996",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "50+" },
      areaServed: { "@type": "State", name: "California" },
      sameAs: [
        "https://www.yelp.com/biz/puragain-water-escondido-3",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://puragainwater.com/#localbusiness",
      name: "Puragain Water",
      url: "https://puragainwater.com",
      telephone: "+1-760-254-0089",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Escondido",
        addressRegion: "CA",
        addressCountry: "US",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 33.1192,
        longitude: -117.0864,
      },
      areaServed: [
        { "@type": "State", name: "California" },
        { "@type": "AdministrativeArea", name: "Santa Barbara County" },
        { "@type": "AdministrativeArea", name: "Ventura County" },
        { "@type": "AdministrativeArea", name: "Los Angeles County" },
        { "@type": "AdministrativeArea", name: "Orange County" },
        { "@type": "AdministrativeArea", name: "Riverside County" },
        { "@type": "AdministrativeArea", name: "San Bernardino County" },
        { "@type": "AdministrativeArea", name: "San Diego County" },
      ],
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.7",
        reviewCount: "430",
        bestRating: "5",
      },
      priceRange: "$26-$74/month",
    },
    {
      "@type": "WebSite",
      "@id": "https://puragainwater.com/#website",
      url: "https://puragainwater.com",
      name: "Puragain Water",
      publisher: {
        "@id": "https://puragainwater.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans text-navy antialiased bg-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ExitIntent />
        <CookieConsent />
        <Analytics />
        <MetaPixel />
        <GoogleAds />
        <TrackingInit />
      </body>
    </html>
  );
}
