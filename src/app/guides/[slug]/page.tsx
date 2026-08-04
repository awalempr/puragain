import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { GUIDES, GUIDE_MAP } from "@/lib/guides";

export function generateStaticParams() {
  return GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const g = GUIDE_MAP[slug];
  if (!g) return {};
  return {
    title: g.metaTitle,
    description: g.description,
    alternates: { canonical: `/guides/${g.slug}` },
    openGraph: { title: g.metaTitle, description: g.description, url: `https://puragainwater.com/guides/${g.slug}`, type: "article" },
  };
}

export default async function GuidePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const g = GUIDE_MAP[slug];
  if (!g) notFound();

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: g.title,
      description: g.description,
      author: { "@type": "Organization", name: "Puragain Water" },
      publisher: { "@type": "Organization", name: "Puragain Water", logo: { "@type": "ImageObject", url: "https://puragainwater.com/images/brand/logo.png" } },
      mainEntityOfPage: `https://puragainwater.com/guides/${g.slug}`,
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: g.faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://puragainwater.com" },
        { "@type": "ListItem", position: 2, name: "Guides", item: "https://puragainwater.com/guides" },
        { "@type": "ListItem", position: 3, name: g.title, item: `https://puragainwater.com/guides/${g.slug}` },
      ],
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="bg-white pt-24 pb-10 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <Link href="/guides" className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#3a8fd4] hover:underline mb-6">
              <ArrowLeft className="w-4 h-4" /> All guides
            </Link>
            <span className="block text-[#3a8fd4] text-sm font-semibold tracking-wide uppercase mb-3">{g.category}</span>
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-navy" style={{ letterSpacing: "-0.03em", lineHeight: 1.12 }}>
              {g.title}
            </h1>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed">{g.intro}</p>
          </FadeIn>
        </div>
      </section>

      {/* BODY */}
      <section className="bg-white pb-16 px-6">
        <div className="max-w-3xl mx-auto space-y-10">
          {g.sections.map((s, i) => (
            <FadeIn key={i} direction="up">
              <div>
                <h2 className="font-heading text-2xl md:text-[1.7rem] font-bold text-navy mb-3" style={{ letterSpacing: "-0.02em" }}>{s.h}</h2>
                {s.p.map((para, j) => (
                  <p key={j} className="text-gray-600 text-[17px] leading-relaxed mb-4">{para}</p>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-8" style={{ letterSpacing: "-0.02em" }}>Frequently asked</h2>
          </FadeIn>
          <div className="space-y-3">
            {g.faqs.map((f, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <details className="group rounded-2xl bg-white border border-gray-100 p-5">
                  <summary className="flex items-center justify-between cursor-pointer list-none font-heading font-bold text-navy">
                    <span className="pr-4">{f.q}</span>
                    <ChevronDown className="w-5 h-5 shrink-0 text-[#3a8fd4] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-gray-600 leading-relaxed">{f.a}</p>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* RELATED */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-xl font-bold text-navy mb-4">Keep reading</h2>
          <div className="flex flex-wrap gap-2">
            {g.related.map((r) => (
              <Link key={r.href} href={r.href} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:border-[#3a8fd4]/40 hover:text-[#3a8fd4] transition-colors">
                {r.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-blue py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>See what&rsquo;s in your water</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">Book a free, no-obligation in-home water test and get real answers about your home&rsquo;s water.</p>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-9 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#b00e0e] shadow-lg shadow-black/15">
              Book My Free Water Test <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
