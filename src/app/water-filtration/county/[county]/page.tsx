import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion";
import { CityLeadForm } from "@/components/city-lead-form";
import { Shield, Droplets, Award, Clock, ArrowRight, MapPin, Check } from "lucide-react";
import { COUNTIES, COUNTY_MAP, citiesInCounty } from "@/lib/service-areas";

export function generateStaticParams() {
  return COUNTIES.map((c) => ({ county: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ county: string }> }): Promise<Metadata> {
  const { county } = await params;
  const c = COUNTY_MAP[county];
  if (!c) return {};
  return {
    title: `Water Filtration in ${c.name}, CA`,
    description: `Home water filtration and reverse osmosis systems across ${c.name}. Free in-home water test, professional installation, and lifetime service from Puragain Water. Removes 99% of contaminants.`,
    alternates: { canonical: `/water-filtration/county/${c.slug}` },
    openGraph: {
      title: `Water Filtration in ${c.name} | Puragain Water`,
      description: `Serving homeowners across ${c.name}. Free in-home water test, professional install, and lifetime service.`,
      url: `https://puragainwater.com/water-filtration/county/${c.slug}`,
    },
  };
}

const systems = [
  { name: "5-Stage Reverse Osmosis", href: "/products/reverse-osmosis", desc: "Hospital-grade purification that removes 99% of contaminants at your kitchen tap." },
  { name: "6-Stage Alkaline", href: "/products/alkaline", desc: "All the purification of RO, then calcium, magnesium & potassium added back." },
  { name: "Whole House System", href: "/products/whole-house", desc: "Salt-free conditioning that protects your plumbing, appliances, skin & hair." },
];

const trust = [
  { icon: Droplets, title: "Free in-home water test", desc: "A certified technician tests your water on-site and shows you exactly what's in it." },
  { icon: Shield, title: "Removes 99% of contaminants", desc: "Lead, arsenic, PFAS, chlorine, hardness minerals, and more." },
  { icon: Clock, title: "Lifetime service plan", desc: "Annual filter changes, testing, and unlimited service calls, included." },
  { icon: Award, title: "7-year warranty", desc: "Professional installation and full parts warranty on every system." },
];

export default async function CountyPage({ params }: { params: Promise<{ county: string }> }) {
  const { county } = await params;
  const c = COUNTY_MAP[county];
  if (!c) notFound();
  const cities = citiesInCounty(c.name);

  const faqs = [
    {
      q: `Do you offer free water testing in ${c.name}?`,
      a: `Yes. A certified Puragain Water technician comes to your home anywhere in ${c.name}, tests your water on the spot, and shows you exactly what's in it, at no cost and no obligation.`,
    },
    {
      q: `Which cities in ${c.name} do you serve?`,
      a: `We serve homeowners across ${c.name}, including ${cities.slice(0, 8).map((x) => x.name).join(", ")}, and the surrounding communities.`,
    },
    {
      q: `How much does a water filtration system cost in ${c.name}?`,
      a: `Systems start at $26/month for reverse osmosis, with zero money down (subject to credit approval), free professional installation, and a lifetime service plan included.`,
    },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://puragainwater.com/water-filtration/county/${c.slug}#business`,
      name: "Puragain Water",
      url: `https://puragainwater.com/water-filtration/county/${c.slug}`,
      image: "https://puragainwater.com/images/brand/logo.png",
      description: `Home water filtration and reverse osmosis installation serving ${c.name}.`,
      address: { "@type": "PostalAddress", addressRegion: "CA", addressCountry: "US" },
      areaServed: { "@type": "AdministrativeArea", name: c.name },
      priceRange: "$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://puragainwater.com" },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://puragainwater.com/service-areas" },
        { "@type": "ListItem", position: 3, name: c.name, item: `https://puragainwater.com/water-filtration/county/${c.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* HERO */}
      <section className="relative bg-white pt-24 pb-16 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <FadeIn direction="up">
            <div>
              <span className="inline-flex items-center gap-1.5 text-[#3a8fd4] text-sm font-semibold tracking-wide uppercase mb-4">
                <MapPin className="w-4 h-4" /> {c.name} &middot; Water Filtration
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-navy" style={{ letterSpacing: "-0.03em", lineHeight: 1.08 }}>
                Water Filtration across {c.name}
              </h1>
              <p className="mt-6 text-gray-600 text-lg max-w-lg" style={{ lineHeight: 1.7 }}>
                Cleaner, better-tasting water at every tap, with a free in-home water test,
                professional installation, and a lifetime service plan included.
              </p>
              <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2">
                {["Free water test", "Zero money down*", "7-year warranty"].map((t) => (
                  <span key={t} className="inline-flex items-center gap-1.5 text-sm font-medium text-navy">
                    <Check className="w-4 h-4 text-green-600" /> {t}
                  </span>
                ))}
              </div>
              <p className="mt-6 text-xs text-gray-400">*Subject to credit approval.</p>
            </div>
          </FadeIn>
          <FadeIn direction="up" delay={0.15}>
            <div id="quote"><CityLeadForm city={c.name} /></div>
          </FadeIn>
        </div>
      </section>

      {/* LOCAL WATER */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-5" style={{ letterSpacing: "-0.02em" }}>
              What&rsquo;s in {c.name}&rsquo;s water?
            </h2>
            <p className="text-gray-600 text-lg" style={{ lineHeight: 1.75 }}>
              {c.water} A Puragain Water system removes hardness minerals, chlorine, lead, PFAS and more,
              so the water your family drinks, cooks, and bathes in is clean at every tap.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-12" style={{ letterSpacing: "-0.02em" }}>
              Systems we install in {c.name}
            </h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {systems.map((s, i) => (
              <FadeIn key={s.name} direction="up" delay={i * 0.1}>
                <Link href={s.href} className="block h-full rounded-2xl border border-gray-100 p-7 hover:border-[#3a8fd4]/40 hover:shadow-[0_8px_40px_rgba(0,0,0,0.06)] transition-all group">
                  <h3 className="font-heading text-xl font-bold text-navy mb-2">{s.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1 text-[#3a8fd4] text-sm font-semibold">Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" /></span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trust.map((t, i) => (
            <FadeIn key={t.title} direction="up" delay={i * 0.08}>
              <div className="bg-white rounded-2xl border border-gray-100 p-6 h-full">
                <t.icon className="w-8 h-8 text-[#3a8fd4] mb-3" />
                <h3 className="font-heading text-base font-bold text-navy mb-1.5">{t.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* CITIES IN COUNTY */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl font-bold text-navy mb-3" style={{ letterSpacing: "-0.02em" }}>
              Cities we serve in {c.name}
            </h2>
            <p className="text-gray-500 mb-8">Find your city for local water details and a free in-home test.</p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/water-filtration/${city.slug}`}
                className="rounded-lg border border-gray-100 px-4 py-2.5 text-sm text-gray-600 hover:border-[#3a8fd4]/40 hover:text-[#3a8fd4] transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl font-bold text-navy mb-8" style={{ letterSpacing: "-0.02em" }}>
              {c.name} water filtration FAQs
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.06}>
                <div className="bg-white rounded-2xl border border-gray-100 p-6">
                  <h3 className="font-semibold text-navy mb-2">{f.q}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{f.a}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
