import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ExitIntent } from "@/components/exit-intent";
import { CookieConsent } from "@/components/cookie-consent";

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
  metadataBase: new URL("https://puragainwaterfiltration.com"),
  title: {
    default: "Puragain Water | Pure Water. Pure Life.",
    template: "%s | Puragain Water",
  },
  description:
    "Home water filtration systems that remove 99% of contaminants. Free water test, professional install, lifetime service. Call 855-40-WATER.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Puragain Water | Pure Water. Pure Life.",
    description:
      "Home water filtration systems that remove 99% of contaminants. Free water test, professional install, lifetime service.",
    url: "https://puragainwaterfiltration.com",
    siteName: "Puragain Water",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://puragainwaterfiltration.com/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Puragain Water - Your Family Deserves Water You Can Trust",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Puragain Water | Pure Water. Pure Life.",
    description:
      "Home water filtration that removes 99% of contaminants. 33K+ families served.",
    images: ["https://puragainwaterfiltration.com/images/og-image.png"],
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
      "@id": "https://puragainwaterfiltration.com/#organization",
      name: "Puragain Water",
      url: "https://puragainwaterfiltration.com",
      logo: "https://puragainwaterfiltration.com/images/brand/logo.png",
      telephone: "+18554092837",
      description:
        "Family-owned water filtration company with 30+ years experience. We install home water filtration systems that remove 99% of contaminants.",
      foundingDate: "1996",
      numberOfEmployees: { "@type": "QuantitativeValue", value: "50+" },
      areaServed: { "@type": "Country", name: "United States" },
      sameAs: [
        "https://www.yelp.com/biz/puragain-water-escondido-3",
      ],
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://puragainwaterfiltration.com/#localbusiness",
      name: "Puragain Water",
      url: "https://puragainwaterfiltration.com",
      telephone: "+18554092837",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Escondido",
        addressRegion: "CA",
        addressCountry: "US",
      },
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
      "@id": "https://puragainwaterfiltration.com/#website",
      url: "https://puragainwaterfiltration.com",
      name: "Puragain Water",
      publisher: {
        "@id": "https://puragainwaterfiltration.com/#organization",
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
      </body>
    </html>
  );
}
