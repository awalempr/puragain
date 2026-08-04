import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/motion";
import { CityLeadForm } from "@/components/city-lead-form";
import { Shield, Droplets, Award, Clock, ArrowRight, MapPin, Check, ChevronDown } from "lucide-react";
import { CITIES, CITY_MAP, REGIONS, nearbyCities } from "@/lib/service-areas";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const c = CITY_MAP[city];
  if (!c) return {};
  return {
    title: `Water Filtration in ${c.name}, CA`,
    description: `Home water filtration and reverse osmosis systems in ${c.name}, ${c.county}. Free in-home water test, professional installation, and lifetime service from Puragain Water. Removes 99% of contaminants.`,
    alternates: { canonical: `/water-filtration/${c.slug}` },
    openGraph: {
      title: `Water Filtration in ${c.name}, CA | Puragain Water`,
      description: `Free in-home water test + professional install in ${c.name}. Remove hard water, chlorine, and 99% of contaminants.`,
      url: `https://puragain.com/water-filtration/${c.slug}`,
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

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const c = CITY_MAP[city];
  if (!c) notFound();
  const region = REGIONS[c.region];
  const nearby = nearbyCities(c);

  const faqs = [
    {
      q: `Do you offer free water testing in ${c.name}?`,
      a: `Yes. A certified Puragain Water technician comes to your ${c.name} home, tests your water on the spot, and shows you exactly what's in it — at no cost and no obligation.`,
    },
    {
      q: `Is the tap water in ${c.name} hard?`,
      a: `${c.name}, in ${c.county}, ${region.water} A Puragain Water system removes hardness minerals, chlorine, and up to 99% of contaminants.`,
    },
    {
      q: `How much does a water filtration system cost in ${c.name}?`,
      a: `Systems start at $26/month for reverse osmosis, with zero money down (subject to credit approval), free professional installation, and a lifetime service plan included.`,
    },
    {
      q: `What types of systems do you install in ${c.name}?`,
      a: `We install under-sink 5-stage reverse osmosis, 6-stage alkaline, and whole-house salt-free conditioning systems throughout ${c.name} and nearby communities.`,
    },
    {
      q: `How long does installation take?`,
      a: `Most installations take 1 to 4 hours and are handled by our certified technicians, who schedule around you and clean up when finished.`,
    },
  ];

  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `https://puragain.com/water-filtration/${c.slug}#business`,
      name: "Puragain Water",
      url: `https://puragain.com/water-filtration/${c.slug}`,
      image: "https://puragain.com/images/brand/logo.png",
      description: `Home water filtration and reverse osmosis installation serving ${c.name}, ${c.county}.`,
      address: {
        "@type": "PostalAddress",
        streetAddress: "1249 Simpson Way",
        addressLocality: "Escondido",
        addressRegion: "CA",
        postalCode: "92029",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 33.1192, longitude: -117.0864 },
      areaServed: { "@type": "City", name: `${c.name}, CA` },
      priceRange: "$$",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: "Water Filtration System Installation",
      provider: { "@type": "LocalBusiness", name: "Puragain Water" },
      areaServed: { "@type": "City", name: `${c.name}, CA` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: "https://puragain.com" },
        { "@type": "ListItem", position: 2, name: "Service Areas", item: "https://puragain.com/service-areas" },
        { "@type": "ListItem", position: 3, name: c.name, item: `https://puragain.com/water-filtration/${c.slug}` },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
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
                <MapPin className="w-4 h-4" /> {region.label} &middot; Water Filtration
              </span>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-[3.4rem] font-bold text-navy" style={{ letterSpacing: "-0.03em", lineHeight: 1.08 }}>
                Water Filtration in {c.name}, California
              </h1>
              <p className="mt-6 text-gray-600 text-lg max-w-lg" style={{ lineHeight: 1.7 }}>
                Cleaner, better-tasting water at every tap in {c.name} &mdash; with a free in-home
                water test, professional installation, and a lifetime service plan included.
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
            <div id="quote">
              <CityLeadForm city={c.name} />
            </div>
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
            <p className="text-gray-600 text-lg leading-relaxed">
              {c.name}, in {c.county}, {region.water}
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              A Puragain Water system removes up to 99% of those contaminants &mdash; chlorine,
              hardness minerals, lead, PFAS and more &mdash; so the water your family drinks, cooks
              with, and showers in is genuinely clean. The only way to know what&rsquo;s in yours is
              to test it, and that test is free.
            </p>
            <div className="mt-8">
              <Link href="#quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#b00e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50 active:scale-[0.98]">
                Get my free {c.name} water test <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* SYSTEMS */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-3" style={{ letterSpacing: "-0.02em" }}>
              Systems we install in {c.name}
            </h2>
            <p className="text-gray-500 text-center max-w-2xl mx-auto mb-12">
              Every system includes professional installation and our lifetime service plan.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-6">
            {systems.map((s, i) => (
              <FadeIn key={s.href} direction="up" delay={i * 0.1}>
                <Link href={s.href} className="group block h-full rounded-2xl border border-gray-100 bg-white p-7 transition-all hover:border-[#3a8fd4]/30 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                  <h3 className="font-heading text-xl font-bold text-navy mb-2 group-hover:text-[#3a8fd4] transition-colors">{s.name}</h3>
                  <p className="text-gray-500 text-[15px] leading-relaxed mb-4">{s.desc}</p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-red">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-12" style={{ letterSpacing: "-0.02em" }}>
              Why {c.name} homeowners choose Puragain
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trust.map((t, i) => (
              <FadeIn key={t.title} direction="up" delay={i * 0.08}>
                <div className="rounded-2xl bg-white p-6 h-full border border-gray-100">
                  <t.icon className="w-8 h-8 text-[#3a8fd4] mb-4" />
                  <h3 className="font-heading text-lg font-bold text-navy mb-1.5">{t.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{t.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA + NEARBY */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-4" style={{ letterSpacing: "-0.02em" }}>
              Proudly serving {c.name} &amp; nearby communities
            </h2>
            <p className="text-gray-500 leading-relaxed mb-6">
              Based in Escondido at 1249 Simpson Way, our certified technicians serve {c.name} and
              the surrounding area:
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {nearby.map((n) => (
                <Link key={n.slug} href={`/water-filtration/${n.slug}`}
                  className="rounded-full border border-gray-200 px-4 py-1.5 text-sm text-gray-600 hover:border-[#3a8fd4]/40 hover:text-[#3a8fd4] transition-colors">
                  {n.name}
                </Link>
              ))}
            </div>
            <div className="mt-8">
              <Link href="/service-areas" className="text-sm font-semibold text-[#3a8fd4] hover:underline">
                View all service areas &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy text-center mb-10" style={{ letterSpacing: "-0.02em" }}>
              {c.name} water filtration FAQs
            </h2>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((f, i) => (
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

      {/* GUIDES */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn direction="up">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy mb-2" style={{ letterSpacing: "-0.02em" }}>
              Learn about your water
            </h2>
            <p className="text-gray-600 mb-6">Straight answers before you decide anything.</p>
          </FadeIn>
          <div className="flex flex-wrap gap-2">
            {[
              c.region === "inland-empire"
                ? { label: "Why is SoCal water so hard?", href: "/guides/hard-water-southern-california" }
                : c.region === "south-oc"
                ? { label: "Chlorine vs. chloramine", href: "/guides/chlorine-vs-chloramine" }
                : { label: "Is San Diego tap water safe?", href: "/guides/is-san-diego-tap-water-safe" },
              { label: "RO vs. water softener", href: "/guides/reverse-osmosis-vs-water-softener" },
              { label: "What does a system cost?", href: "/guides/water-filtration-cost" },
              { label: "All water guides", href: "/guides" },
            ].map((g) => (
              <Link key={g.href} href={g.href} className="inline-flex items-center gap-1.5 rounded-full border border-gray-200 px-4 py-2 text-sm text-gray-600 hover:border-[#3a8fd4]/40 hover:text-[#3a8fd4] transition-colors">
                {g.label} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-brand-blue py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn direction="up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4" style={{ letterSpacing: "-0.02em" }}>
              Ready for cleaner water in {c.name}?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Book your free, no-obligation in-home water test today &mdash; and see exactly what
              you&rsquo;re drinking.
            </p>
            <Link href="#quote" className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-9 py-4 text-[15px] font-semibold text-white transition-colors hover:bg-[#b00e0e] shadow-lg shadow-black/15">
              Book My Free Water Test <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
