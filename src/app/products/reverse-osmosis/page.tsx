import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion";
import { Shield, Zap, Clock, Award, Droplets, ArrowRight, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "5-Stage Reverse Osmosis System | Puragain Water",
  description:
    "Hospital-grade 5-stage reverse osmosis removes 99% of contaminants from your drinking water. $26/month, zero down, free installation, and lifetime service included.",
};

const stages = [
  {
    number: 1,
    title: "Sediment Pre-Filter",
    description:
      "Captures sand, dirt, rust, and large particles to protect the downstream filters and extend their life.",
  },
  {
    number: 2,
    title: "Carbon Block Filter",
    description:
      "Absorbs chlorine, volatile organic compounds (VOCs), and chemical tastes that affect water quality.",
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
      "The heart of the system. Forces water through a semi-permeable membrane, rejecting 99% of dissolved contaminants.",
  },
  {
    number: 5,
    title: "Post Carbon Polishing Filter",
    description:
      "A final polish that removes any residual taste or odor, delivering crisp, clean water to your faucet.",
  },
];

const benefits = [
  {
    icon: Shield,
    title: "99% Contaminant Removal",
    description:
      "Independently tested to remove the widest range of harmful substances from your tap water.",
  },
  {
    icon: Droplets,
    title: "Removes Lead, PFAS & More",
    description:
      "Targets lead, arsenic, PFAS, fluoride, bacteria, and pesticides found in municipal water.",
  },
  {
    icon: Zap,
    title: "Crystal Clear Taste",
    description:
      "No more plastic bottles. Enjoy unlimited purified water straight from your kitchen faucet.",
  },
  {
    icon: Clock,
    title: "Compact Under-Sink Install",
    description:
      "Fits neatly under your kitchen sink with no visible changes to your countertop or cabinetry.",
  },
];

const stats = [
  { value: "99%", label: "Contaminant Removal" },
  { value: "5", label: "Purification Stages" },
  { value: "60 min", label: "Professional Install" },
  { value: "7 yr", label: "Full Warranty" },
];

const pricingIncludes = [
  "5-Stage RO system & dedicated faucet",
  "Professional installation",
  "Annual filter replacements",
  "Annual water quality testing",
  "Unlimited service calls",
  "7-year warranty on all parts",
];

const faqs = [
  {
    question: "What exactly does reverse osmosis remove?",
    answer:
      "Our 5-stage RO system removes up to 99% of dissolved contaminants including lead, arsenic, fluoride, PFAS (forever chemicals), chlorine, bacteria, pesticides, nitrates, and hundreds of other harmful substances. It's the most thorough purification method available for home use.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Professional installation typically takes 60 to 90 minutes. Our certified technician handles everything. We install the system under your kitchen sink and add a dedicated faucet to your countertop.",
  },
  {
    question: "Does it affect water pressure?",
    answer:
      "The RO system uses its own pressurized storage tank, so you get strong, consistent flow from the dedicated faucet. Your existing kitchen faucet and all other fixtures in the home are completely unaffected.",
  },
  {
    question: "How often do filters need replacing?",
    answer:
      "Filters are replaced annually as part of your included lifetime service plan. Our technician comes to your home, swaps all filters, sanitizes the system, and tests the output water, all at no additional cost.",
  },
  {
    question: "Is everything covered under lifetime service?",
    answer:
      "Yes. Your monthly plan includes all filter replacements, annual maintenance visits, annual water testing, and unlimited service calls. The only thing not covered is damage caused by misuse or unauthorized modifications.",
  },
];

export default function ReverseOsmosisPage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "5-Stage Reverse Osmosis System",
    "description": "Hospital-grade 5-stage reverse osmosis removes 99% of contaminants from your drinking water. Compact under-sink installation.",
    "brand": { "@type": "Brand", "name": "Puragain Water" },
    "offers": {
      "@type": "Offer",
      "price": "26.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://puragainwaterfiltration.com/products/reverse-osmosis",
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
                5-Stage Reverse Osmosis
              </span>
              <h1
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy"
                style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                The gold standard in drinking water purification.
              </h1>
              <p
                className="mt-6 text-gray-600 text-lg max-w-lg"
                style={{ lineHeight: 1.7 }}
              >
                Removes chlorine, lead, PFAS, bacteria, pesticides, and 99% of
                all harmful contaminants. Right from your kitchen faucet.
              </p>

              <div className="mt-8 bg-offwhite rounded-2xl p-5 inline-block">
                <span className="text-3xl font-bold text-brand-red">
                  $26/month*
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
                src="/images/products/ro-hero.jpeg"
                alt="5-Stage Reverse Osmosis System by Puragain Water"
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
              Why Reverse Osmosis?
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
                src="/images/products/ro-detail-1.jpeg"
                alt="Reverse osmosis system detail showing filtration components"
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

      {/* ─── 5-STAGE PROCESS ─── */}
      <section className="bg-offwhite py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy text-center mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              5 Stages of Purification
            </h2>
            <p
              className="text-gray-500 text-center text-lg mb-16 max-w-2xl mx-auto"
              style={{ lineHeight: 1.7 }}
            >
              Each stage targets a different class of contaminant, so nothing
              makes it through to your glass.
            </p>
          </FadeIn>

          <div className="space-y-6 max-w-3xl mx-auto">
            {stages.map((stage, i) => (
              <FadeIn key={stage.number} delay={i * 0.08}>
                <div className="flex gap-6 items-start bg-white rounded-2xl p-6 md:p-8 shadow-[0_1px_3px_rgba(6,9,15,0.04),0_6px_24px_rgba(6,9,15,0.06)]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3a8fd4] text-white flex items-center justify-center font-bold text-lg">
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
                Engineered for purity. Designed to disappear.
              </h2>
              <p
                className="text-gray-600 text-lg mb-8"
                style={{ lineHeight: 1.7 }}
              >
                The entire system tucks under your kitchen sink. No bulky
                equipment on display, no noise, no hassle. Just a sleek
                dedicated faucet on your countertop and pure water on demand.
              </p>
              <ul className="space-y-4">
                {[
                  "Compact design fits standard cabinets",
                  "Dedicated chrome faucet included",
                  "Pressurized tank for instant flow",
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
              src="/images/products/ro-detail-2.jpeg"
              alt="Under-sink reverse osmosis system installation detail"
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
              src="/images/products/ro-lifestyle.jpeg"
              alt="Family enjoying purified water from their Puragain reverse osmosis system"
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
                Water your family can trust.
              </h2>
              <p
                className="text-gray-600 text-lg mb-6"
                style={{ lineHeight: 1.7 }}
              >
                Every glass from your RO system is free from the chemicals,
                heavy metals, and microorganisms that standard filtration
                leaves behind. Cooking, drinking, baby formula, coffee: it all
                starts with pure water.
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
                title: "Annual Water Testing",
                description:
                  "We test your water every year to ensure your system is performing at peak efficiency.",
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
                  "Filter replacements, sanitization, and full system check-up included every year.",
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
                5-Stage Reverse Osmosis
              </h2>
              <div className="mt-6">
                <span className="text-5xl font-bold text-brand-red">$26</span>
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
        headline="Ready for water you can finally trust?"
        subtext="Get started with reverse osmosis. Zero down, free installation, lifetime service."
        primaryCta={{ label: "Get Started Today", href: "/contact" }}
        secondaryCta={{ label: "Take the Quiz First", href: "/contact" }}
      />
    </>
  );
}
