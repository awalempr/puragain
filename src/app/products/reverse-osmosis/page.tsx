import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Droplets, ShieldCheck, Sparkles, Wrench, Phone, TestTube, CalendarCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "5-Stage Reverse Osmosis System | Puragain Water",
  description:
    "Remove 99% of contaminants from your drinking water with our 5-stage reverse osmosis system. $26/month, zero down, free installation, and lifetime service included.",
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
    icon: ShieldCheck,
    title: "Up to 99% contaminant removal",
    description:
      "Independently tested to remove the widest range of harmful substances from your tap water.",
  },
  {
    icon: Droplets,
    title: "Removes lead, arsenic, PFAS, fluoride, bacteria, pesticides",
    description:
      "Targets the most dangerous contaminants found in Southern California municipal water supplies.",
  },
  {
    icon: Sparkles,
    title: "Crystal clear, great-tasting water",
    description:
      "No more plastic bottles. Enjoy unlimited purified water straight from your kitchen faucet.",
  },
  {
    icon: Wrench,
    title: "Compact under-sink install",
    description:
      "Fits neatly under your kitchen sink with no visible changes to your countertop or cabinetry.",
  },
];

const serviceItems = [
  {
    icon: TestTube,
    title: "Annual Water Testing",
    description:
      "We test your water every year to ensure your system is performing at peak efficiency.",
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
      "Filter replacements, sanitization, and full system check-up included every year.",
  },
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
      "Professional installation typically takes 60 to 90 minutes. Our certified technician handles everything - no plumbing experience needed on your end. We install the system under your kitchen sink and add a dedicated faucet to your countertop.",
  },
  {
    question: "Does it affect water pressure?",
    answer:
      "The RO system uses its own pressurized storage tank, so you get strong, consistent flow from the dedicated faucet. Your existing kitchen faucet and all other fixtures in the home are completely unaffected.",
  },
  {
    question: "How often do filters need replacing?",
    answer:
      "Filters are replaced annually as part of your included lifetime service plan. Our technician comes to your home, swaps all filters, sanitizes the system, and tests the output water - all at no additional cost.",
  },
  {
    question: "Is everything covered under lifetime service?",
    answer:
      "Yes. Your monthly plan includes all filter replacements, annual maintenance visits, annual water testing, and unlimited service calls. The only thing not covered is damage caused by misuse or unauthorized modifications.",
  },
];

const pricingIncludes = [
  "5-Stage RO system & dedicated faucet",
  "Professional installation",
  "Annual filter replacements",
  "Annual water quality testing",
  "Unlimited service calls",
  "7-year warranty on all parts",
];

export default function ReverseOsmosisPage() {
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
              The gold standard in drinking water purification.
            </h1>
            <p
              className="mt-6 text-gray-600 text-lg max-w-lg"
              style={{ lineHeight: 1.7 }}
            >
              Removes chlorine, lead, PFAS, bacteria, pesticides, and 99% of
              all harmful contaminants. Right from your kitchen faucet.
            </p>

            <div className="mt-8 bg-offwhite rounded-xl p-4 inline-block">
              <span className="text-2xl font-bold text-brand-red">
                $26/month*
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
              src="/images/products/ro-hero.jpeg"
              alt="5-Stage Reverse Osmosis System by Puragain Water"
              width={560}
              height={420}
              className="rounded-2xl w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── 5-STAGE PROCESS ─── */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-heading text-3xl lg:text-4xl font-bold text-navy text-center mb-16"
            style={{ letterSpacing: "-0.03em" }}
          >
            How It Works: 5 Stages of Purification
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {stages.map((stage, i) => (
              <div key={stage.number} className="relative text-center">
                {/* Connecting line */}
                {i < stages.length - 1 && (
                  <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-[2px] bg-brand-red/20" />
                )}

                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-brand-red text-white font-bold text-lg mb-4">
                  {stage.number}
                </div>
                <h3 className="font-heading text-sm font-bold text-navy mb-2">
                  {stage.title}
                </h3>
                <p
                  className="text-gray-500 text-xs leading-relaxed"
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
            Why Reverse Osmosis?
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
            5-Stage Reverse Osmosis
          </h2>
          <div className="mt-4">
            <span className="text-4xl font-bold text-brand-red">
              $26/month*
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
        headline="Ready for water you can finally trust?"
        primaryCta={{ label: "Get Started Today", href: "/quiz" }}
        secondaryCta={{ label: "Take the Quiz First", href: "/quiz" }}
      />
    </>
  );
}
