import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/motion";
import { MapPin, ArrowRight } from "lucide-react";
import { COUNTIES, citiesInCounty } from "@/lib/service-areas";

export const metadata: Metadata = {
  title: "Service Areas — Water Filtration Across Southern California",
  description:
    "Puragain Water installs home water filtration and reverse osmosis systems across Santa Barbara, Ventura, Los Angeles, Orange, Riverside, San Bernardino, and San Diego counties. Find your city and book a free water test.",
  alternates: { canonical: "/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-white pt-24 pb-14 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-1.5 text-[#3a8fd4] text-sm font-semibold tracking-wide uppercase mb-4">
              <MapPin className="w-4 h-4" /> Southern California
            </span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Where we install
            </h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              Puragain Water serves homeowners across all of Southern California, from Santa Barbara
              down to Chula Vista and inland through the deserts. Seven counties, a free in-home water
              test, and professional installation in every one. Find your county and city below.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* COUNTY GROUPS */}
      <section className="bg-offwhite py-16 px-6">
        <div className="max-w-5xl mx-auto space-y-12">
          {COUNTIES.map((county) => {
            const cities = citiesInCounty(county.name);
            return (
              <FadeIn key={county.slug} direction="up">
                <div>
                  <Link
                    href={`/water-filtration/county/${county.slug}`}
                    className="group inline-flex items-center gap-2 mb-5"
                  >
                    <h2 className="font-heading text-2xl font-bold text-navy group-hover:text-[#3a8fd4] transition-colors" style={{ letterSpacing: "-0.02em" }}>
                      {county.name}
                    </h2>
                    <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#3a8fd4] group-hover:translate-x-0.5 transition-all" />
                  </Link>
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5">
                    {cities.map((c) => (
                      <Link key={c.slug} href={`/water-filtration/${c.slug}`}
                        className="group flex items-center justify-between rounded-xl bg-white border border-gray-100 px-4 py-3 transition-all hover:border-[#3a8fd4]/30 hover:shadow-[0_6px_24px_rgba(0,0,0,0.05)]">
                        <span className="text-sm font-medium text-navy group-hover:text-[#3a8fd4] transition-colors">{c.name}</span>
                      </Link>
                    ))}
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
              Not sure if we&rsquo;re in your area?
            </h2>
            <p className="text-white/80 text-lg mb-8">Reach out. If you own a home anywhere in Southern California, chances are we cover you.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-9 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#b00e0e] shadow-lg shadow-black/15">
              Book a Free Water Test <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
