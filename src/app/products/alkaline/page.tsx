import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Droplets, ShieldCheck, Sparkles, Wrench, Phone, TestTube, CalendarCheck, Heart, Zap, Beaker } from "lucide-react";

export const metadata: Metadata = {
  title: "6-Stage Alkaline Reverse Osmosis System | Puragain Water",
  description:
    "Pure water plus essential minerals. Our 6-stage alkaline RO system removes 99% of contaminants then adds calcium, magnesium, and potassium. $42/month with lifetime service.",
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
      "Infuses purified water with calcium, magnesium, and potassium, raising pH to a healthy 8.5–9.5 range.",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Up to 99% contaminant removal",
    description:
      "The same hospital-grade RO purification, removing lead, arsenic, PFAS, fluoride, bacteria, and more.",
  },
  {
    icon: Beaker,
    title: "Essential minerals added back",
    description:
      "Calcium, magnesium, and potassium are reintroduced after purification for optimal hydration.",
  },
  {
    icon: Heart,
    title: "Alkaline pH 8.5–9.5",
    description:
      "Elevated pH supports your body's natural acid-base balance and may improve hydration absorption.",
  },
  {
    icon: Sparkles,
    title: "Smooth, refreshing taste",
    description:
      "Minerals give the water a naturally smooth, slightly sweet character that people prefer over flat RO water.",
  },
];

const alkalineBenefits = [
  {
    title: "Better Hydration",
    description:
      "Mineral-rich alkaline water is absorbed more efficiently by your cells, helping you stay hydrated longer throughout the day.",
  },
  {
    title: "Supports Bone Health",
    description:
      "The added calcium and magnesium contribute to your daily mineral intake, supporting strong bones and teeth.",
  },
  {
    title: "Antioxidant Properties",
    description:
      "Alkaline water has a negative oxidation-reduction potential (ORP), which may help neutralize free radicals in the body.",
  },
];

const serviceItems = [
  {
    icon: TestTube,
    title: "Annual Water Testing",
    description:
      "We test your water every year to ensure your system is performing at peak efficiency and proper pH levels.",
  },
  {
    icon: Phone,
    title: "Unlimited Service Calls",
    description:
      "Something not right? We come out at no extra charge, as many times as you need.",
  },
  {
    icon: CalendarCheck,
    title: "Annual Maintenance",
    description:
      "Filter and mineral cartridge replacements, sanitization, and full system check-up included every year.",
  },
];

const faqs = [
  {
    question: "How is this different from the standard RO system?",
    answer:
      "The alkaline system includes all 5 stages of our standard reverse osmosis system, plus a 6th stage: an alkaline mineral cartridge. After purification removes 99% of contaminants, the 6th stage adds back beneficial minerals (calcium, magnesium, potassium) and raises the water's pH to 8.5–9.5.",
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

const pricingIncludes = [
  "6-Stage Alkaline RO system & dedicated faucet",
  "Professional installation",
  "Annual filter & mineral cartridge replacements",
  "Annual water quality & pH testing",
  "Unlimited service calls",
  "7-year warranty on all parts",
];

export default function AlkalinePage() {
  return (
    <>
      {/* ─── HERO ─── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1
              className="font-heading text-4xl lg:text-5xl font-bold text-navy leading-tight"
              style={{ letterSpacing: "-0.03em" }}
            >
              Everything pure water does, plus the minerals your body actually needs.
            </h1>
            <p
              className="mt-6 text-gray-600 text-lg max-w-lg"
              style={{ lineHeight: 1.7 }}
            >
              Six stages of purification remove 99% of contaminants, then our
              alkaline mineral cartridge adds back calcium, magnesium, and
              potassium for water that hydrates better.
            </p>

            <div className="mt-8 bg-offwhite rounded-xl p-4 inline-block">
              <span className="text-2xl font-bold text-brand-red">
                $42/month*
              </span>
              <span className="block text-xs text-gray-500 mt-1">
                Zero Down &middot; Free Install &middot; 7-Year Warranty
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-red px-8 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#b00e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50 active:scale-[0.98]"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-navy/20 px-8 py-3.5 text-[15px] font-semibold text-navy transition-colors duration-200 hover:border-navy/40 hover:bg-navy/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy/30 active:scale-[0.98]"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/images/products/alkaline-hero.jpeg"
              alt="6-Stage Alkaline Reverse Osmosis System by Puragain Water"
              width={560}
              height={420}
              className="rounded-2xl w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── 6-STAGE PROCESS ─── */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-heading text-3xl lg:text-4xl font-bold text-navy text-center mb-16"
            style={{ letterSpacing: "-0.03em" }}
          >
            How It Works: 6 Stages of Purification &amp; Mineralization
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, i) => (
              <div key={stage.number} className="relative text-center bg-white rounded-2xl p-6 shadow-[0_1px_3px_rgba(6,9,15,0.04),0_6px_24px_rgba(6,9,15,0.06)]">
                <div
                  className={`inline-flex items-center justify-center w-12 h-12 rounded-full text-white font-bold text-lg mb-4 ${
                    i === stages.length - 1 ? "bg-navy" : "bg-brand-red"
                  }`}
                >
                  {stage.number}
                </div>
                <h3 className="font-heading text-sm font-bold text-navy mb-2">
                  {stage.title}
                </h3>
                <p
                  className="text-gray-500 text-xs"
                  style={{ lineHeight: 1.7 }}
                >
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── KEY BENEFITS ─── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-heading text-3xl lg:text-4xl font-bold text-navy text-center mb-12"
            style={{ letterSpacing: "-0.03em" }}
          >
            Why Alkaline Reverse Osmosis?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="bg-offwhite rounded-2xl p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-red/10 text-brand-red mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-base font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p
                  className="text-gray-500 text-sm"
                  style={{ lineHeight: 1.7 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── THE ALKALINE ADVANTAGE ─── */}
      <section className="bg-[#3a8fd4] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-heading text-3xl lg:text-4xl font-bold text-white text-center mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            The Alkaline Advantage
          </h2>
          <p
            className="text-white/60 text-center text-lg mb-12 max-w-2xl mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            Standard RO removes everything, including beneficial minerals.
            Our 6th stage puts the good stuff back in.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {alkalineBenefits.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center"
              >
                <h3 className="font-heading text-lg font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p
                  className="text-white/60 text-sm"
                  style={{ lineHeight: 1.7 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LIFETIME SERVICE ─── */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-heading text-3xl lg:text-4xl font-bold text-navy text-center mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Lifetime Service Included
          </h2>
          <p
            className="text-gray-500 text-center text-lg mb-12 max-w-2xl mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            Every plan comes with professional maintenance for the life of your
            system. No surprise bills, no hidden fees.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {serviceItems.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-8 text-center shadow-[0_1px_3px_rgba(6,9,15,0.04),0_6px_24px_rgba(6,9,15,0.06)]"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-brand-blue/10 text-brand-blue mb-4">
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-navy mb-2">
                  {item.title}
                </h3>
                <p
                  className="text-gray-500 text-sm"
                  style={{ lineHeight: 1.7 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING CARD ─── */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-md mx-auto border border-gray-200 rounded-2xl p-10 text-center shadow-[0_1px_3px_rgba(6,9,15,0.04),0_6px_24px_rgba(6,9,15,0.06)]">
          <h2
            className="font-heading text-2xl font-bold text-navy mb-2"
            style={{ letterSpacing: "-0.03em" }}
          >
            6-Stage Alkaline RO
          </h2>
          <div className="mt-4">
            <span className="text-4xl font-bold text-brand-red">
              $42/month*
            </span>
          </div>
          <ul className="mt-8 space-y-3 text-left">
            {pricingIncludes.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-sm text-gray-600"
              >
                <ShieldCheck className="w-5 h-5 text-brand-red flex-shrink-0 mt-0.5" />
                {item}
              </li>
            ))}
          </ul>
          <Link
            href="/contact"
            className="mt-8 inline-flex w-full items-center justify-center rounded-full bg-brand-red px-8 py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#b00e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50 active:scale-[0.98]"
          >
            Get Started Today
          </Link>
          <p className="mt-4 text-xs text-gray-400">
            *With approved credit. 7-year term. Price does not include tax. See
            full terms at checkout.
          </p>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2
            className="font-heading text-3xl lg:text-4xl font-bold text-navy text-center mb-12"
            style={{ letterSpacing: "-0.03em" }}
          >
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-gray-200 rounded-xl overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-[15px] font-semibold text-navy hover:bg-offwhite transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30 [&::-webkit-details-marker]:hidden list-none">
                  {faq.question}
                  <span className="ml-4 flex-shrink-0 text-gray-400 group-open:rotate-45 transition-transform duration-200">
                    +
                  </span>
                </summary>
                <div className="px-6 pb-5">
                  <p
                    className="text-gray-500 text-sm"
                    style={{ lineHeight: 1.7 }}
                  >
                    {faq.answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BOTTOM CTA ─── */}
      <CtaBanner
        variant="navy"
        headline="Pure water with the minerals your body craves."
        subtext="Get started with alkaline reverse osmosis. Zero down, free installation, lifetime service."
        primaryCta={{ label: "Get Started Today", href: "/quiz" }}
        secondaryCta={{ label: "Take the Quiz First", href: "/quiz" }}
      />
    </>
  );
}
