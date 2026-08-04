import Link from "next/link";
import type { Metadata } from "next";
import { FadeIn } from "@/components/motion";
import { ArrowRight, Droplets } from "lucide-react";
import { GUIDES } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Southern California Home Water Guide | Puragain Water",
  description:
    "Straight answers about San Diego, Inland Empire, and South OC water — hardness, chloramine, PFAS, well water, reverse osmosis, and system costs. Written by Puragain Water.",
  alternates: { canonical: "/guides" },
};

const CATEGORY_ORDER = ["Water Quality", "Hard Water", "Contaminants", "Well Water", "Buying Guide"];

export default function GuidesHub() {
  const byCategory = CATEGORY_ORDER.map((cat) => ({
    cat,
    items: GUIDES.filter((g) => g.category === cat),
  })).filter((c) => c.items.length);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "The Southern California Home Water Guide",
    description: metadata.description,
    url: "https://puragain.com/guides",
    hasPart: GUIDES.map((g) => ({
      "@type": "Article",
      headline: g.title,
      url: `https://puragain.com/guides/${g.slug}`,
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="bg-brand-blue pt-28 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FadeIn direction="up">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 mb-6">
              <Droplets className="w-4 h-4" /> Water Guides
            </span>
            <h1 className="font-heading text-4xl md:text-6xl font-bold text-white" style={{ letterSpacing: "-0.03em", lineHeight: 1.08 }}>
              The Southern California Home Water Guide
            </h1>
            <p className="mt-6 text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Straight, no-nonsense answers about the water coming into your home — hardness, chloramine, PFAS, well water, and how to fix it all.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* WAVE */}
      <div className="bg-brand-blue">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none" style={{ height: 60 }}>
          <path d="M0 40 C 240 90, 480 0, 720 32 C 960 64, 1200 20, 1440 44 L1440 80 L0 80 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* ARTICLES */}
      <section className="bg-white pb-20 px-6">
        <div className="max-w-5xl mx-auto space-y-14">
          {byCategory.map(({ cat, items }) => (
            <div key={cat}>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6" style={{ letterSpacing: "-0.02em" }}>{cat}</h2>
              <div className="grid md:grid-cols-2 gap-5">
                {items.map((g, i) => (
                  <FadeIn key={g.slug} direction="up" delay={i * 0.05}>
                    <Link
                      href={`/guides/${g.slug}`}
                      className="group block h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all hover:border-[#3a8fd4]/40 hover:shadow-md"
                    >
                      <span className="block text-[#3a8fd4] text-xs font-semibold tracking-wide uppercase mb-2">{g.category}</span>
                      <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-[#1a6bb5] transition-colors" style={{ letterSpacing: "-0.01em" }}>
                        {g.title}
                      </h3>
                      <p className="text-gray-600 text-[15px] leading-relaxed mb-4">{g.description}</p>
                      <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                        Read the guide <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </FadeIn>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-offwhite py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-4" style={{ letterSpacing: "-0.02em" }}>Stop guessing about your water</h2>
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">A free in-home water test shows you exactly what&rsquo;s in your water — no obligation, no pressure.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-9 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#b00e0e] shadow-lg shadow-black/15">
              Book My Free Water Test <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
