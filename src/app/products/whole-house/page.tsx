import Image from "next/image";
import Link from "next/link";
import { FadeIn } from "@/components/motion";
import { Shield, Zap, Clock, Award, Droplets, ArrowRight, ChevronDown } from "lucide-react";
import type { Metadata } from "next";
import { CtaBanner } from "@/components/cta-banner";

export const metadata: Metadata = {
  title: "Whole House Water Filtration System | Puragain Water",
  description:
    "Clean water from every tap, shower, and appliance. Salt-free whole house filtration for $74/month with lifetime service, zero down, and free professional installation.",
};

const benefits = [
  {
    icon: Shield,
    title: "Every Faucet, Every Tap",
    description:
      "One system filters all the water entering your home. Kitchen, bathroom, laundry, and outdoor spigots.",
  },
  {
    icon: Droplets,
    title: "Healthier Showers & Baths",
    description:
      "Chlorine-free water means less dry skin, less hair damage, and no chemical vapor in your bathroom.",
  },
  {
    icon: Zap,
    title: "Salt-Free Technology",
    description:
      "No salt bags, no brine discharge, no wasted water. Environmentally responsible and virtually maintenance-free.",
  },
  {
    icon: Clock,
    title: "Protects Your Plumbing",
    description:
      "Prevents scale buildup in pipes, water heaters, and appliances, extending their lifespan and efficiency.",
  },
];

const stats = [
  { value: "100%", label: "Salt-Free" },
  { value: "0", label: "Gallons Wasted" },
  { value: "2-4 hr", label: "Professional Install" },
  { value: "7 yr", label: "Full Warranty" },
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
      "Salt brine runoff pollutes local waterways and is banned in many communities. Salt-free is always compliant.",
  },
  {
    title: "Retains Healthy Minerals",
    description:
      "Unlike salt-based softeners that strip calcium and magnesium, our system keeps beneficial minerals in your water.",
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

export default function WholeHousePage() {
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "Whole House Water Filtration System",
    "description": "Clean water from every tap, shower, and appliance. Salt-free whole house filtration and conditioning system.",
    "brand": { "@type": "Brand", "name": "Puragain Water" },
    "offers": {
      "@type": "Offer",
      "price": "74.00",
      "priceCurrency": "USD",
      "priceValidUntil": "2027-12-31",
      "availability": "https://schema.org/InStock",
      "url": "https://puragainwaterfiltration.com/products/whole-house",
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
                Whole House Filtration
              </span>
              <h1
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy"
                style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Clean water from every tap in your home.
              </h1>
              <p
                className="mt-6 text-gray-600 text-lg max-w-lg"
                style={{ lineHeight: 1.7 }}
              >
                One system at your main water line filters everything. Drinking,
                bathing, laundry, and more. Salt-free, eco-friendly, and built to
                last.
              </p>

              <div className="mt-8 bg-offwhite rounded-2xl p-5 inline-block">
                <div className="flex items-baseline gap-3">
                  <span className="text-lg text-gray-400 line-through">
                    $101/month
                  </span>
                  <span className="text-3xl font-bold text-brand-red">
                    $74/month*
                  </span>
                </div>
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
                src="/images/products/whole-house-hero.jpeg"
                alt="Whole House Water Filtration System by Puragain Water"
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
              Why Whole House Filtration?
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
                src="/images/products/whole-house-detail-1.jpeg"
                alt="Whole house filtration system detail showing installation"
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

      {/* ─── SALT-FREE SECTION (visual step flow) ─── */}
      <section className="bg-offwhite py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy text-center mb-6"
              style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
            >
              Why Salt-Free?
            </h2>
            <p
              className="text-gray-500 text-center text-lg mb-16 max-w-2xl mx-auto"
              style={{ lineHeight: 1.7 }}
            >
              Traditional water softeners come with hidden costs: salt bags,
              wasted water, and environmental damage. We skipped all of that.
            </p>
          </FadeIn>

          <div className="space-y-6 max-w-3xl mx-auto">
            {saltFreeAdvantages.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="flex gap-6 items-start bg-white rounded-2xl p-6 md:p-8 shadow-[0_1px_3px_rgba(6,9,15,0.04),0_6px_24px_rgba(6,9,15,0.06)]">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#3a8fd4] text-white flex items-center justify-center font-bold text-lg">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy mb-1">
                      {item.title}
                    </h3>
                    <p
                      className="text-gray-500 text-sm"
                      style={{ lineHeight: 1.7 }}
                    >
                      {item.description}
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
                See the difference. Feel the difference.
              </h2>
              <p
                className="text-gray-600 text-lg mb-8"
                style={{ lineHeight: 1.7 }}
              >
                Side by side, the difference is undeniable. Filtered water
                means softer skin, healthier hair, cleaner dishes, and
                longer-lasting appliances. Your entire home benefits from
                every drop.
              </p>
              <ul className="space-y-4">
                {[
                  "Softer water, better lather with less soap",
                  "No more mineral spots on glass and chrome",
                  "Extends water heater and appliance lifespan",
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
              src="/images/products/whole-house-comparison.jpeg"
              alt="Before and after comparison of whole house water filtration results"
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
              src="/images/products/whole-house-lifestyle.jpeg"
              alt="Family enjoying clean filtered water throughout their entire home"
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
                Protection for your whole home.
              </h2>
              <p
                className="text-gray-600 text-lg mb-6"
                style={{ lineHeight: 1.7 }}
              >
                From the kitchen sink to the shower to the washing machine,
                every water outlet in your home delivers clean, filtered water.
                Your family bathes in it, cooks with it, and drinks it knowing
                chlorine and chemicals are gone.
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
                  "We test your water every year at multiple points in your home to verify system performance.",
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
                  "Full system inspection, media check, pre-filter replacement, and performance verification included every year.",
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
                Whole House Filtration
              </h2>
              <div className="mt-6 flex items-baseline justify-center gap-3">
                <span className="text-xl text-gray-400 line-through">
                  $101/month
                </span>
                <span className="text-5xl font-bold text-brand-red">$74</span>
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
        headline="Clean water from every tap in your home."
        subtext="Whole house filtration. Salt-free, zero down, free installation, lifetime service."
        primaryCta={{ label: "Get Started Today", href: "/contact" }}
        secondaryCta={{ label: "Take the Quiz First", href: "/contact" }}
      />
    </>
  );
}
