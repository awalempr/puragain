import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion";
import { Shield, Zap, Clock, Award, Droplets, ArrowRight, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "6-Stage Alkaline Reverse Osmosis System | Puragain Water",
  description:
    "Pure water plus essential minerals. Our 6-stage alkaline RO system removes 99% of contaminants then adds calcium, magnesium, and potassium back. $42/month with lifetime service.",
};

const stages = [
  {
    number: 1,
    title: "Sediment Pre-Filter",
    description:
      "Traps sand, dirt, rust, and large particles to protect downstream filters and extend system life.",
  },
  {
    number: 2,
    title: "Carbon Block Filter",
    description:
      "Absorbs chlorine, volatile organic compounds (VOCs), and chemical tastes that degrade water quality.",
  },
  {
    number: 3,
    title: "Carbon Block Filter",
    description:
      "A second carbon stage for deeper chemical removal, ensuring maximum chlorine and odor elimination.",
  },
  {
    number: 4,
    title: "RO Membrane",
    description:
      "Forces water through a semi-permeable membrane, rejecting up to 99% of all dissolved contaminants.",
  },
  {
    number: 5,
    title: "Post Carbon Polishing Filter",
    description:
      "A final polish that removes any residual taste or odor before the water enters the mineral stage.",
  },
  {
    number: 6,
    title: "Alkaline Mineral Cartridge",
    description:
      "Infuses purified water with calcium, magnesium, and potassium, raising pH to a healthy 8.5 to 9.5 range.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "99% Contaminant Removal",
    description:
      "The same hospital-grade RO purification, removing lead, arsenic, PFAS, fluoride, bacteria, and more.",
  },
  {
    icon: Droplets,
    title: "Essential Minerals Added",
    description:
      "Calcium, magnesium, and potassium are reintroduced after purification for optimal hydration.",
  },
  {
    icon: Zap,
    title: "Alkaline pH 8.5 to 9.5",
    description:
      "Elevated pH supports your body's natural acid-base balance and may improve hydration absorption.",
  },
  {
    icon: Award,
    title: "Smooth, Refreshing Taste",
    description:
      "Minerals give the water a naturally smooth, slightly sweet character that people prefer over flat RO water.",
  },
];

const stats = [
  { value: "99%", label: "Contaminant Removal" },
  { value: "6", label: "Purification Stages" },
  { value: "pH 9.5", label: "Alkaline Level" },
  { value: "7 yr", label: "Full Warranty" },
];

const pricingIncludes = [
  "6-Stage Alkaline RO system & dedicated faucet",
  "Professional installation",
  "Annual filter & mineral cartridge replacements",
  "Annual water quality & pH testing",
  "Unlimited service calls",
  "7-year warranty on all parts",
];

const faqs = [
  {
    question: "How is this different from the standard RO system?",
    answer:
      "The alkaline system includes all 5 stages of our standard reverse osmosis system, plus a 6th stage: an alkaline mineral cartridge. After purification removes 99% of contaminants, the 6th stage adds back beneficial minerals (calcium, magnesium, potassium) and raises the water's pH to 8.5 to 9.5.",
  },
  {
    question: "What minerals are added back to the water?",
    answer:
      "The alkaline mineral cartridge infuses your purified water with calcium, magnesium, and potassium. These are essential minerals your body needs daily. The exact mineral content is verified during your annual water test.",
  },
  {
    question: "What pH level does the water reach?",
    answer:
      "The alkaline cartridge raises purified water to a pH between 8.5 and 9.5, which is considered optimal for alkaline drinking water. For reference, regular tap water is typically between 6.5 and 7.5.",
  },
  {
    question: "How often does the mineral cartridge need replacing?",
    answer:
      "The alkaline mineral cartridge is replaced annually along with all other filters as part of your included lifetime service plan. Our technician handles everything during your annual maintenance visit at no additional cost.",
  },
  {
    question: "Is everything covered under lifetime service?",
    answer:
      "Yes. Your monthly plan includes all filter and mineral cartridge replacements, annual maintenance visits, annual water testing, pH verification, and unlimited service calls. The only thing not covered is damage caused by misuse or unauthorized modifications.",
  },
];

export default function AlkalinePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "6-Stage Alkaline Reverse Osmosis System",
    "description": "Pure water plus essential minerals. 6-stage alkaline RO system removes 99% of contaminants then adds calcium, magnesium, and potassium. Raises pH to 9.5.",
    "brand": { "@type": "Brand", "name": "Puragain Water" },
    "offers": {
      "@type": "Offer",
      "price": "42.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://puragainwaterfiltration.com/products/alkaline",
    },
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.7", "reviewCount": "430" },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      {/* ─── HERO ─── */}
      <section className="relative bg-white pt-24 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="up">
            <div>
              <span className="inline-block text-[#3a8fd4] text-sm font-semibold tracking-wide uppercase mb-4">
                6-Stage Alkaline RO
              </span>
              <h1
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy"
                style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Pure water, plus the minerals your body needs.
              </h1>
              <p
                className="mt-6 text-gray-600 text-lg max-w-lg"
                style={{ lineHeight: 1.7 }}
              >
                Six stages of purification remove 99% of contaminants, then our
                alkaline mineral cartridge adds back calcium, magnesium, and
                potassium for water that hydrates better.
              </p>

              <div className="mt-8 bg-offwhite rounded-2xl p-5 inline-block">
                <span className="text-3xl font-bold text-brand-red">
                  $42/month*
                </span>
                <span className="block text-sm text-gray-500 mt-1">
                  Zero Down &middot; Free Install &middot; 7-Year Warranty
                </span>
              </div>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#b00e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50 active:scale-[0.98]"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="tel:8554092837"
                  className="inline-flex items-center justify-center rounded-full border border-navy/20 px-8 py-3.5 text-[15px] font-semibold text-navy transition-colors duration-200 hover:border-navy/40 hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30 active:scale-[0.98]"
                >
                  Call 855-40-WATER
                </Link>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.2}>
            <div className="relative">
              <Image
                src="/images/products/alkaline-hero.jpeg"
                alt="6-Stage Alkaline Reverse Osmosis System by Puragain Water"
                width={720}
                height={540}
                className="rounded-3xl w-full h-auto object-cover aspect-[4/3]"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── KEY BENEFITS ─── */}
      <section className="bg-offwhite py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy text-center mb-16"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Why Alkaline Reverse Osmosis?
            </h2>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl p-8 text-center h-full shadow-[0_1px_3px_rgba(6,9,15,0.04),0_6px_24px_rgba(6,9,15,0.06)]">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#3a8fd4]/10 text-[#3a8fd4] mb-5">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-navy mb-3">
                    {item.title}
                  </h3>
                  <p
                    className="text-gray-500 text-sm"
                    style={{ lineHeight: 1.7 }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LARGE PRODUCT IMAGE + STATS ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="relative rounded-3xl overflow-hidden">
              <Image
                src="/images/products/alkaline-detail-1.jpeg"
                alt="Alkaline reverse osmosis system detail showing mineral cartridge"
                width={1400}
                height={700}
                className="w-full h-auto object-cover aspect-[2/1]"
              />
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.1}>
                <div className="text-center">
                  <p className="text-4xl md:text-5xl font-bold text-[#3a8fd4]" style={{ letterSpacing: "-0.03em" }}>
                    {stat.value}
                  </p>
                  <p className="text-gray-500 text-sm mt-2 font-medium">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 6-STAGE PROCESS ─── */}
      <section className="bg-offwhite py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy text-center mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              6 Stages of Purification & Mineralization
            </h2>
            <p
              className="text-gray-500 text-center text-lg mb-16 max-w-2xl mx-auto"
              style={{ lineHeight: 1.7 }}
            >
              Five stages remove everything harmful. The sixth puts the good
              stuff back in.
            </p>
          </FadeIn>

          <div className="space-y-6 max-w-3xl mx-auto">
            {stages.map((stage, i) => (
              <FadeIn key={stage.number} delay={i * 0.08}>
                <div className="flex gap-6 items-start bg-white rounded-2xl p-6 md:p-8 shadow-[0_1px_3px_rgba(6,9,15,0.04),0_6px_24px_rgba(6,9,15,0.06)]">
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-full text-white flex items-center justify-center font-bold text-lg ${
                      i === stages.length - 1 ? "bg-navy" : "bg-[#3a8fd4]"
                    }`}
                  >
                    {stage.number}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy mb-1">
                      {stage.title}
                    </h3>
                    <p
                      className="text-gray-500 text-sm"
                      style={{ lineHeight: 1.7 }}
                    >
                      {stage.description}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FEATURE IMAGE + CALLOUT (text left, image right) ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div>
              <h2
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
                style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                The alkaline advantage.
              </h2>
              <p
                className="text-gray-600 text-lg mb-8"
                style={{ lineHeight: 1.7 }}
              >
                Standard RO removes everything, including the beneficial
                minerals your body needs. Our 6th stage puts calcium,
                magnesium, and potassium back in, raising the pH to an
                optimal alkaline range.
              </p>
              <ul className="space-y-4">
                {[
                  "Better hydration at the cellular level",
                  "Supports bone health with added calcium",
                  "Smooth, naturally sweet taste",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-gray-600">
                    <div className="w-2 h-2 rounded-full bg-[#3a8fd4] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <Image
              src="/images/products/alkaline-detail-2.jpeg"
              alt="Close-up of alkaline mineral cartridge and purified water"
              width={720}
              height={540}
              className="rounded-3xl w-full h-auto object-cover aspect-[4/3]"
            />
          </FadeIn>
        </div>
      </section>

      {/* ─── LIFESTYLE IMAGE ─── */}
      <section className="bg-offwhite py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <Image
              src="/images/products/alkaline-lifestyle.jpeg"
              alt="Refreshing glass of alkaline water with mineral-rich properties"
              width={720}
              height={540}
              className="rounded-3xl w-full h-auto object-cover aspect-[4/3]"
            />
          </FadeIn>
          <FadeIn direction="right" delay={0.15}>
            <div>
              <h2
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy mb-6"
                style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Hydration, elevated.
              </h2>
              <p
                className="text-gray-600 text-lg mb-6"
                style={{ lineHeight: 1.7 }}
              >
                Mineral-rich alkaline water is absorbed more efficiently by
                your cells, helping you stay hydrated longer. It supports
                bone health, may help neutralize free radicals, and simply
                tastes better than flat, stripped-down purified water.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-[#3a8fd4] font-semibold text-[15px] hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3a8fd4]/30 active:scale-[0.98]"
              >
                Schedule a free consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── LIFETIME SERVICE ─── */}
      <section className="bg-[#3a8fd4] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white text-center mb-4"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Lifetime Service Included
            </h2>
            <p
              className="text-white/70 text-center text-lg mb-16 max-w-2xl mx-auto"
              style={{ lineHeight: 1.7 }}
            >
              Every plan comes with professional maintenance for the life of your
              system. No surprise bills, no hidden fees.
            </p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Award,
                title: "Annual Water & pH Testing",
                description:
                  "We test your water every year to ensure your system is performing at peak efficiency and proper pH levels.",
              },
              {
                icon: Shield,
                title: "Unlimited Service Calls",
                description:
                  "Something not right? We come out at no extra charge, as many times as you need.",
              },
              {
                icon: Clock,
                title: "Annual Maintenance",
                description:
                  "Filter and mineral cartridge replacements, sanitization, and full system check-up included every year.",
              },
            ].map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="bg-white/10 backdrop-blur-sm border border-white/10 rounded-2xl p-8 text-center h-full">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/10 text-white mb-5">
                    <item.icon className="w-7 h-7" />
                  </div>
                  <h3 className="font-heading text-lg font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p
                    className="text-white/70 text-sm"
                    style={{ lineHeight: 1.7 }}
                  >
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING CARD ─── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-lg mx-auto">
          <FadeIn>
            <div className="border border-gray-200 rounded-3xl p-10 md:p-12 text-center shadow-[0_1px_3px_rgba(6,9,15,0.04),0_8px_32px_rgba(6,9,15,0.08)]">
              <span className="inline-block text-[#3a8fd4] text-sm font-semibold tracking-wide uppercase mb-3">
                Everything Included
              </span>
              <h2
                className="font-heading text-3xl font-bold text-navy mb-2"
                style={{ letterSpacing: "-0.03em" }}
              >
                6-Stage Alkaline RO
              </h2>
              <div className="mt-6">
                <span className="text-5xl font-bold text-brand-red">$42</span>
                <span className="text-xl text-gray-400 font-medium">/month*</span>
              </div>
              <ul className="mt-10 space-y-4 text-left">
                {pricingIncludes.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-[15px] text-gray-600"
                  >
                    <Shield className="w-5 h-5 text-[#3a8fd4] flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="mt-10 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red px-8 py-4 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#b00e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50 active:scale-[0.98]"
              >
                Get Started Today
                <ArrowRight className="w-4 h-4" />
              </Link>
              <p className="mt-4 text-xs text-gray-400">
                *With approved credit. 7-year term. Price does not include tax. See
                full terms at checkout.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-offwhite py-24 px-6">
        <div className="max-w-3xl mx-auto">
          <FadeIn>
            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy text-center mb-16"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Frequently Asked Questions
            </h2>
          </FadeIn>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <FadeIn key={faq.question} delay={i * 0.05}>
                <details className="group border border-gray-200 rounded-2xl overflow-hidden bg-white">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-[15px] font-semibold text-navy hover:bg-offwhite transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#3a8fd4]/30 [&::-webkit-details-marker]:hidden list-none">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 ml-4 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform duration-200" />
                  </summary>
                  <div className="px-6 pb-6">
                    <p
                      className="text-gray-500 text-sm"
                      style={{ lineHeight: 1.7 }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <CtaBanner
        variant="navy"
        headline="Pure water with the minerals your body craves."
        subtext="Get started with alkaline reverse osmosis. Zero down, free installation, lifetime service."
        primaryCta={{ label: "Get Started Today", href: "/contact" }}
        secondaryCta={{ label: "Take the Quiz First", href: "/contact" }}
      />
    </>
  );
}
