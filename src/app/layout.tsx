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
  title: "Puragain Water | Pure Water. Pure Life.",
  description:
    "Home water filtration systems that remove 99% of contaminants. Free water test, professional install, lifetime service. Call 855-40-WATER.",
  openGraph: {
    title: "Puragain Water | Pure Water. Pure Life.",
    description:
      "Home water filtration systems that remove 99% of contaminants. Free water test, professional install, lifetime service.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} h-full`}>
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
