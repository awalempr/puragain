import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CtaBanner } from "@/components/cta-banner";
import { Droplets, ShieldCheck, Sparkles, Wrench, Phone, TestTube, CalendarCheck, Home, ShowerHead, Leaf } from "lucide-react";

export const metadata: Metadata = {
  title: "Whole House Water Filtration System | Puragain Water",
  description:
    "Clean water from every tap, shower, and appliance. Salt-free whole house filtration for $74/month with lifetime service, zero down, and free professional installation.",
};

const benefits = [
  {
    icon: Home,
    title: "Every faucet, every tap",
    description:
      "One system filters all the water entering your home. Kitchen, bathroom, laundry, and outdoor spigots.",
  },
  {
    icon: ShowerHead,
    title: "Healthier showers & baths",
    description:
      "Chlorine-free water means less dry skin, less hair damage, and no chemical vapor in your bathroom.",
  },
  {
    icon: Leaf,
    title: "Salt-free technology",
    description:
      "No salt bags, no brine discharge, no wasted water. Environmentally responsible and virtually maintenance-free.",
  },
  {
    icon: ShieldCheck,
    title: "Protects your plumbing",
    description:
      "Prevents scale buildup in pipes, water heaters, and appliances, extending their lifespan and efficiency.",
  },
  {
    icon: Sparkles,
    title: "Softer water, better lather",
    description:
      "Use less soap and detergent. Clothes come out softer, dishes come out spotless, and skin feels smoother.",
  },
  {
    icon: Wrench,
    title: "Professional whole-home install",
    description:
      "Our certified plumber connects the system at your main water line. One installation covers your entire house.",
  },
];

const saltFreeAdvantages = [
  {
    title: "No Salt Bags to Haul",
    description:
      "Traditional softeners need 40-lb salt bags refilled monthly. Our salt-free system eliminates that chore entirely.",
  },
  {
    title: "No Wasted Water",
    description:
      "Salt-based softeners waste up to 10,000 gallons per year on regeneration cycles. Ours wastes zero.",
  },
  {
    title: "No Brine Discharge",
    description:
      "Salt brine runoff pollutes local waterways and is banned in many California communities. Salt-free is always compliant.",
  },
  {
    title: "Retains Healthy Minerals",
    description:
      "Unlike salt-based softeners that strip calcium and magnesium, our system keeps beneficial minerals in your water.",
  },
];

const serviceItems = [
  {
    icon: TestTube,
    title: "Annual Water Testing",
    description:
      "We test your water every year at multiple points in your home to verify system performance.",
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
      "Full system inspection, media check, pre-filter replacement, and performance verification included every year.",
  },
];

const faqs = [
  {
    question: "How is this different from a traditional water softener?",
    answer:
      "Traditional softeners use salt and an ion-exchange process that strips minerals and produces brine waste. Our salt-free system uses template-assisted crystallization (TAC) to neutralize hardness minerals without removing them, wasting water, or requiring salt. It's better for your health, your plumbing, and the environment.",
  },
  {
    question: "What does the whole house system remove?",
    answer:
      "The system removes chlorine, chloramines, sediment, and volatile organic compounds (VOCs) from all the water entering your home. It also neutralizes hardness minerals to prevent scale buildup. For drinking water purification (removing lead, PFAS, etc.), we recommend pairing this with an under-sink RO system.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Professional whole-house installation typically takes 2 to 4 hours. Our licensed plumber connects the system at your main water line, usually in the garage or utility area. No major construction is needed.",
  },
  {
    question: "Will it affect my water pressure?",
    answer:
      "Our systems are sized specifically for your home's flow rate. Most homeowners notice no difference in water pressure. During your free consultation, we'll assess your home to ensure the right system size.",
  },
  {
    question: "Is everything covered under lifetime service?",
    answer:
      "Yes. Your monthly plan includes all pre-filter replacements, annual maintenance visits, annual water testing, and unlimited service calls. The TAC media lasts the lifetime of the system and never needs replacing. The only thing not covered is damage caused by misuse or unauthorized modifications.",
  },
];

const pricingIncludes = [
  "Whole house filtration system",
  "Salt-free conditioner",
  "Professional installation at main line",
  "Annual pre-filter replacements",
  "Annual water quality testing",
  "Unlimited service calls",
  "7-year warranty on all parts",
];

export default function WholeHousePage() {
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
              Clean water from every tap, shower, and appliance in your home.
            </h1>
            <p
              className="mt-6 text-gray-600 text-lg max-w-lg"
              style={{ lineHeight: 1.7 }}
            >
              One system at your main water line filters everything. Drinking,
              bathing, laundry, and more. Salt-free, eco-friendly, and built to
              last.
            </p>

            <div className="mt-8 bg-offwhite rounded-xl p-4 inline-block">
              <div className="flex items-baseline gap-3">
                <span className="text-lg text-gray-400 line-through">
                  $101/month
                </span>
                <span className="text-2xl font-bold text-brand-red">
                  $74/month*
                </span>
              </div>
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
              src="/images/products/whole-house-hero.jpeg"
              alt="Whole House Water Filtration System by Puragain Water"
              width={560}
              height={420}
              className="rounded-2xl w-full h-auto object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* ─── KEY BENEFITS ─── */}
      <section className="bg-offwhite py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-heading text-3xl lg:text-4xl font-bold text-navy text-center mb-12"
            style={{ letterSpacing: "-0.03em" }}
          >
            Why Whole House Filtration?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 text-center shadow-[0_1px_3px_rgba(6,9,15,0.04),0_6px_24px_rgba(6,9,15,0.06)]"
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

      {/* ─── SALT-FREE CALLOUT ─── */}
      <section className="bg-[#3a8fd4] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2
            className="font-heading text-3xl lg:text-4xl font-bold text-white text-center mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Why Salt-Free?
          </h2>
          <p
            className="text-white/60 text-center text-lg mb-12 max-w-2xl mx-auto"
            style={{ lineHeight: 1.7 }}
          >
            Traditional water softeners come with hidden costs: salt bags,
            wasted water, and environmental damage. We skipped all of that.
          </p>
          <div className="grid sm:grid-cols-2 gap-8">
            {saltFreeAdvantages.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
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
            Whole House Filtration
          </h2>
          <div className="mt-4 flex items-baseline justify-center gap-3">
            <span className="text-xl text-gray-400 line-through">
              $101/month
            </span>
            <span className="text-4xl font-bold text-brand-red">
              $74/month*
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
        headline="Clean water from every tap in your home."
        subtext="Whole house filtration. Salt-free, zero down, free installation, lifetime service."
        primaryCta={{ label: "Get Started Today", href: "/quiz" }}
        secondaryCta={{ label: "Take the Quiz First", href: "/quiz" }}
      />
    </>
  );
}
