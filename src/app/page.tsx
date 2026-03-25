import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/motion";
import { Hero } from "@/components/hero";
import { AnimatedStats } from "@/components/animated-stats";
import { FeatureCarousel } from "@/components/ui/feature-carousel";
import { ReviewCarousel } from "@/components/review-carousel";
import {
  Star,
  ArrowRight,
  Phone,
  Shield,
  Zap,
  ChevronDown,
  Clock,
  Award,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      <Hero />


      {/* ═══ HERO → PROBLEM gradient transition ═══ */}
      <div className="-mt-px h-[140px] md:h-[280px]" style={{ background: "linear-gradient(to bottom, #2f5e8f, #ffffff)" }} />

      {/* ═══ PROBLEM ═══ */}
      <section className="px-6 pt-12 pb-24 lg:pt-16 lg:pb-32 bg-white">
        <div className="max-w-[1100px] mx-auto">
          {/* Top: headline left, image right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <FadeIn>
              <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">The Problem</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                The water in your home isn&apos;t as clean as you think.
              </h2>
              <p className="text-gray-500 text-[17px] leading-relaxed">
                Tap water across America contains chlorine, lead, PFAS, bacteria, and microplastics. Even in systems rated &ldquo;safe.&rdquo;
                Hard water silently damages your skin, hair, appliances, and plumbing.
              </p>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="relative flex items-center justify-center overflow-hidden rounded-2xl group cursor-pointer">
                <Image
                  src="/images/dirty-water.jpeg"
                  alt="Contaminated tap water"
                  width={350}
                  height={350}
                  className="w-[70%] h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.15]"
                />
              </div>
            </FadeIn>
          </div>

          {/* Bottom: Animated stat callouts */}
          <AnimatedStats />
        </div>
      </section>


      {/* ═══ AVOIDING FAILURE ═══ */}
      <section className="px-6 py-24 lg:py-32 bg-gray-50">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-brand-red text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">The Risk</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              What happens when you do nothing?
            </h2>
          </FadeIn>

          <FeatureCarousel />
        </div>
      </section>


      {/* ═══ GUIDE ═══ */}
      <section className="px-6 py-24 lg:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto">
          {/* Big centered headline */}
          <FadeIn className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              <span className="text-[#3a8fd4]">30 years</span> of protecting<br />
              families like yours.
            </h2>
            <p className="text-gray-500 text-[17px] leading-relaxed max-w-2xl mx-auto">
              Puragain Water is family-owned. Every system includes zero money down, free installation,
              a 7-year warranty, and a lifetime servicing plan. We don&apos;t just sell you a system. We stand behind it.
            </p>
          </FadeIn>

          {/* Full-width image + proof points overlay */}
          <FadeIn delay={0.15}>
            <div className="relative rounded-3xl overflow-hidden max-w-4xl mx-auto">
              <div className="aspect-[4/3] relative">
                <Image
                  src="/images/hero-lifestyle.jpeg"
                  alt="Child filling a glass of clean water from a Puragain filtered tap"
                  fill
                  className="object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />

              {/* Proof points overlaid on bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
                    {[
                      { icon: <Shield className="w-5 h-5" />, title: "7-Year Warranty" },
                      { icon: <Zap className="w-5 h-5" />, title: "Free Installation" },
                      { icon: <Clock className="w-5 h-5" />, title: "Lifetime Service" },
                      { icon: <Award className="w-5 h-5" />, title: "Zero Down" },
                    ].map((item) => (
                      <div
                        key={item.title}
                        className="flex items-center gap-3 rounded-xl px-4 py-3"
                        style={{
                          background: "rgba(255,255,255,0.15)",
                          backdropFilter: "blur(16px)",
                          WebkitBackdropFilter: "blur(16px)",
                          border: "1px solid rgba(255,255,255,0.2)",
                        }}
                      >
                        <div className="text-white/80">{item.icon}</div>
                        <span className="text-white text-[13px] font-semibold">{item.title}</span>
                      </div>
                    ))}
                  </div>
                </div>
            </div>
          </FadeIn>

          {/* CTA below */}
          <FadeIn className="text-center mt-10">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-red text-white rounded-full px-8 py-4 text-[15px] font-semibold hover:bg-[#b00e0e] transition-colors shadow-lg shadow-red-500/15">
              Schedule Your Free Test <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>


      {/* ═══ DIVIDER ═══ */}
      <div className="max-w-[1100px] mx-auto px-6"><div className="border-t border-gray-100" /></div>


      {/* ═══ PRODUCTS ═══ */}
      <section id="systems" className="px-6 py-24 lg:py-32 bg-white">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="text-center mb-16">
            <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">Water Filtration Systems</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Designed to protect your home.
            </h2>
          </FadeIn>

          <StaggerContainer className="grid lg:grid-cols-3 gap-6">
            {[
              {
                href: "/products/reverse-osmosis",
                image: "/images/products/ro-lifestyle.jpeg",
                badge: "Most Popular",
                name: "5-Stage Reverse Osmosis",
                desc: "Removes 99% of contaminants from your kitchen tap. Compact under-sink installation.",
                price: "$26",
                priceOld: null,
              },
              {
                href: "/products/alkaline",
                image: "/images/products/alkaline-detail-2.jpeg",
                badge: "Premium",
                name: "6-Stage Alkaline",
                desc: "Everything the RO does, plus alkaline mineral restoration. Raises pH to 9.5.",
                price: "$42",
                priceOld: null,
              },
              {
                href: "/products/whole-house",
                image: "/images/products/whole-house-lifestyle.jpeg",
                badge: "Complete Home",
                name: "Whole House System",
                desc: "Clean water from every tap, shower, and appliance. Salt-free conditioning.",
                price: "$74",
                priceOld: "$101",
              },
            ].map((p) => (
              <StaggerItem key={p.name}>
                <Link href={p.href} className="group block bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-[#3a8fd4]/8 shadow-[0_2px_16px_rgba(58,143,212,0.06),inset_0_1px_0_rgba(255,255,255,0.8)] h-full hover:shadow-[0_8px_30px_rgba(58,143,212,0.12)] hover:-translate-y-1 transition-transform duration-300">
                  <div className="relative aspect-[4/3] bg-gray-50 overflow-hidden">
                    <Image src={p.image} alt={p.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                    <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest text-[#3a8fd4] px-3 py-1.5 rounded-full">
                      {p.badge}
                    </span>
                  </div>
                  <div className="p-7">
                    <h3 className="font-heading text-lg font-bold text-gray-900 mb-2 group-hover:text-[#3a8fd4] transition-colors">{p.name}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed mb-5">{p.desc}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        {p.priceOld && <span className="text-gray-400 text-sm line-through mr-2">{p.priceOld}</span>}
                        <span className="text-brand-red text-xl font-bold">{p.price}<span className="text-gray-400 text-sm font-normal">/mo*</span></span>
                      </div>
                      <span className="text-[#3a8fd4] text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-transform">
                        Details <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <FadeIn className="text-center mt-6">
            <p className="text-gray-400 text-xs">*Monthly payment may vary based on credit approval. Zero down, free installation on all systems.</p>
          </FadeIn>
        </div>
      </section>


      {/* ═══ HOW IT WORKS ═══ */}
      <section className="px-6 py-28 lg:py-36 bg-white overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          <FadeIn className="text-center mb-20">
            <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">The Plan</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Three steps. That&apos;s it.
            </h2>
          </FadeIn>

          {/* Step 1 — text left, image slides from right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <FadeIn>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#3a8fd4] flex items-center justify-center text-white text-xl font-bold">1</div>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
                  We test your water.
                </h3>
                <p className="text-gray-500 text-[16px] leading-relaxed mb-6">
                  A certified technician visits your home, tests your water on-site, and shows you exactly what&apos;s in it. You see the results in real time.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3a8fd4]" />Free, no obligation</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3a8fd4]" />Results in minutes</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-50">
                <Image
                  src="/images/we-test.jpeg"
                  alt="Puragain technician testing water in your home"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          {/* Step 2 — image slides from left, text right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
            <FadeIn direction="left" delay={0.15} className="order-2 lg:order-1">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-50">
                <Image
                  src="/images/water-test.jpeg"
                  alt="Puragain water quality test results"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn className="order-1 lg:order-2">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#3a8fd4] flex items-center justify-center text-white text-xl font-bold">2</div>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
                  We match you with the right system.
                </h3>
                <p className="text-gray-500 text-[16px] leading-relaxed mb-6">
                  Based on your water quality results, not a sales script. We recommend the exact system your home needs, with flexible financing options.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3a8fd4]" />Zero money down</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3a8fd4]" />Financing available</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Step 3 — text left, image slides from right */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <FadeIn>
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-[#3a8fd4] flex items-center justify-center text-white text-xl font-bold">3</div>
                  <div className="h-px flex-1 bg-gray-200" />
                </div>
                <h3 className="font-heading text-2xl lg:text-3xl font-bold text-gray-900 mb-4" style={{ letterSpacing: "-0.02em" }}>
                  We install and service it forever.
                </h3>
                <p className="text-gray-500 text-[16px] leading-relaxed mb-6">
                  Professional installation by our certified team. Then every filter change, tune-up, water test, and service call is covered for life.
                </p>
                <div className="flex items-center gap-6 text-sm text-gray-400">
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3a8fd4]" />Free installation</span>
                  <span className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#3a8fd4]" />Lifetime service plan</span>
                </div>
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.15}>
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-50">
                <Image
                  src="/images/install.jpeg"
                  alt="Puragain technician installing water filtration system"
                  fill
                  className="object-cover"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn className="text-center">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-red text-white rounded-full px-8 py-4 text-[15px] font-semibold hover:bg-[#b00e0e] transition-colors shadow-lg shadow-red-500/15">
              Schedule Your Free Test <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>


      {/* ═══ COMPARISON ═══ */}
      <section
        className="px-6 py-28 lg:py-36 relative overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #2f5e8f 0%, #3a8fd4 40%, #4a9de0 70%, #3672a3 100%)",
        }}
      >
        {/* Subtle radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)" }} />

        <div className="max-w-[1000px] mx-auto relative">
          <FadeIn className="text-center mb-16">
            <span className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">The Smarter Choice</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Water delivery vs. Puragain.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div
              className="grid grid-cols-[1.2fr_1fr_1fr] md:grid-cols-[1fr_1fr_1fr] rounded-3xl overflow-hidden text-xs md:text-sm"
              style={{
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.25)",
                boxShadow: "0 8px 40px rgba(0,0,0,0.15), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              {/* Header row */}
              <div className="p-3 md:p-6" />
              <div className="p-3 md:p-6 text-center border-x border-white/15">
                <p className="text-white/40 text-[11px] font-semibold uppercase tracking-[0.15em]">Water Delivery</p>
              </div>
              <div className="p-3 md:p-6 bg-white/10 text-center">
                <p className="text-white text-[11px] font-bold uppercase tracking-[0.15em]">Puragain Water</p>
              </div>

              {/* Data rows */}
              {[
                { label: "Monthly cost", delivery: "$40+/mo", puragain: "$26/mo", highlight: true },
                { label: "Cost per gallon", delivery: "$1.40/gal", puragain: "$0.01/gal", highlight: true },
                { label: "Gallons per month", delivery: "25 gallons", puragain: "1,500 gallons", highlight: true },
                { label: "Point of use", delivery: "Water dispenser", puragain: "Your faucet", highlight: false },
                { label: "Water testing", delivery: "Not available", puragain: "Annual, free", highlight: false },
                { label: "Lifetime service", delivery: "Not available", puragain: "Included", highlight: false },
                { label: "7-year warranty", delivery: "Not available", puragain: "Included", highlight: false },
              ].map((row) => (
                <React.Fragment key={row.label}>
                  <div className="px-3 md:px-6 py-4 md:py-5 flex items-center border-t border-white/15">
                    <span className="text-white text-[14px] font-semibold">{row.label}</span>
                  </div>
                  <div className="px-3 md:px-6 py-4 md:py-5 text-center border-t border-x border-white/15">
                    <span className="text-white/50 text-[14px]">{row.delivery}</span>
                  </div>
                  <div className="px-3 md:px-6 py-4 md:py-5 text-center border-t border-white/15 bg-white/5">
                    <span className={`text-[14px] font-semibold ${row.highlight ? "text-white" : "text-white/90"}`}>
                      {row.delivery === "Not available" ? (
                        <span className="flex items-center justify-center gap-1.5">
                          <span className="w-4 h-4 rounded-full bg-white/20 flex items-center justify-center text-white text-[10px]">&#10003;</span>
                          {row.puragain}
                        </span>
                      ) : (
                        row.puragain
                      )}
                    </span>
                  </div>
                </React.Fragment>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <p className="text-white/50 text-[15px] leading-relaxed">
                  That&apos;s just <span className="text-white font-semibold">50 cents a day</span> for 50 gallons of the purest, cleanest drinking water. Right from your faucet. That&apos;s only <span className="text-white font-bold">1 penny per gallon</span>.
                </p>
              </div>
              <div className="flex justify-center lg:justify-end">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#3a8fd4] rounded-full px-8 py-4 text-[15px] font-semibold hover:bg-gray-50 transition-colors shadow-lg shadow-black/10">
                  Get Started Today <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ═══ SUCCESS ═══ */}
      <section className="px-6 py-24 lg:py-32 bg-gray-50">
        <FadeIn className="max-w-[700px] mx-auto text-center">
          <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">The Transformation</span>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Imagine turning on any tap and knowing the water is clean.
          </h2>
          <p className="text-gray-500 text-[16px] max-w-xl mx-auto mb-10 leading-relaxed">
            No more plastic bottles. No more worrying. Just clean, pure, great-tasting water from every faucet, shower, and appliance in your home.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-brand-red text-white rounded-full px-8 py-4 text-[15px] font-semibold hover:bg-[#b00e0e] transition-colors shadow-lg shadow-red-500/15">
            Get Started Today <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </section>


      {/* ═══ REVIEWS ═══ */}
      <section className="px-6 py-28 lg:py-36 bg-gray-50 overflow-hidden">
        <div className="max-w-[1100px] mx-auto">
          {/* Header — left aligned like the Figma */}
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 lg:gap-16 items-start">
            <FadeIn>
              <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">Reviews</span>
              <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
                What our<br />
                <span className="text-[#3a8fd4]">clients</span> say.
              </h2>
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm text-gray-500">4.7 stars on Yelp</span>
              </div>
              <a
                href="https://www.yelp.com/biz/puragain-water-escondido-3"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#3a8fd4] text-sm font-semibold inline-flex items-center gap-1.5 hover:gap-3 transition-transform"
              >
                Read all 430+ reviews <ArrowRight className="w-4 h-4" />
              </a>
            </FadeIn>

            <FadeIn delay={0.15}>
              <ReviewCarousel />
            </FadeIn>
          </div>
        </div>
      </section>


      {/* ═══ DIVIDER ═══ */}
      <div className="max-w-[1100px] mx-auto px-6"><div className="border-t border-gray-100" /></div>


      {/* ═══ FAQ ═══ */}
      <section id="faq" className="px-6 py-24 lg:py-32 bg-white">
        <div className="max-w-[800px] mx-auto">
          <FadeIn className="text-center mb-14">
            <span className="text-[#3a8fd4] text-[11px] font-semibold uppercase tracking-[0.2em] mb-4 block">FAQ</span>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Frequently asked questions.
            </h2>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-3">
              {[
                { q: "What exactly does your system remove?", a: "Our reverse osmosis systems remove up to 99% of contaminants including chlorine, lead, PFAS, fluoride, arsenic, bacteria, pesticides, microplastics, herbicides, radium, pharmaceuticals, and more." },
                { q: "How much does it cost?", a: "Systems start at just $26/month with zero money down and free professional installation. Every system includes a 7-year warranty and a lifetime servicing plan at no extra cost." },
                { q: "What's included in the lifetime servicing plan?", a: "Annual water testing, annual maintenance visits with filter checks and system tune-ups, unlimited service calls at no cost, and 24/7 live support. All included for the life of your system." },
                { q: "How long does installation take?", a: "Most installations are completed in 1-2 hours by our certified technicians. No plumber needed. We handle everything." },
                { q: "Do I need to own my home?", a: "While homeowners are our most common customers, renters can also qualify with landlord approval. Our under-sink systems are compact and non-invasive." },
                { q: "Will it affect my water pressure?", a: "No. Our reverse osmosis systems use a dedicated faucet for drinking water, so your existing water pressure is completely unaffected. Whole house systems maintain full flow." },
                { q: "How often do filters need replacing?", a: "Filters are typically replaced once a year and it's included in your lifetime servicing plan. Our technician handles it during your annual maintenance visit." },
                { q: "Is the water testing really free?", a: "Yes. A certified technician visits your home, tests your water on-site, and shows you the results. No cost, no obligation, no pressure." },
              ].map((faq) => (
                <details key={faq.q} className="group rounded-2xl bg-gray-50 border border-gray-200 overflow-hidden">
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-5 text-[15px] font-semibold text-gray-900 hover:text-[#3a8fd4] transition-colors list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-4" />
                  </summary>
                  <div className="px-6 pb-5 text-gray-500 text-[14px] leading-relaxed border-t border-gray-200 pt-4">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>


      {/* ═══ CTA — Card that bleeds into footer ═══ */}
      <section className="px-6 pt-16 pb-0 bg-white">
        <FadeIn>
          <div
            className="max-w-[1000px] mx-auto rounded-3xl px-8 py-16 lg:px-16 lg:py-20 text-center relative overflow-hidden -mb-20"
            style={{
              background: "linear-gradient(135deg, #2f5e8f 0%, #3a8fd4 50%, #4a9de0 100%)",
            }}
          >
            {/* Glass inner border */}
            <div className="absolute inset-[1px] rounded-[23px] pointer-events-none" style={{ border: "1px solid rgba(255,255,255,0.1)" }} />
            <div className="relative">
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4" style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Stop guessing.<br />Start drinking clean.
              </h2>
              <p className="text-white/60 text-[16px] mb-10 max-w-md mx-auto leading-relaxed">
                Join 5,000+ families who trust Puragain Water every day.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link href="/contact" className="bg-brand-red text-white rounded-full px-8 py-4 text-[15px] font-semibold hover:bg-[#b00e0e] transition-colors shadow-lg shadow-black/15">
                  Get Started Today
                </Link>
                <a href="tel:8554092837" className="flex items-center gap-2 text-white/60 text-sm font-medium hover:text-white transition-colors">
                  <Phone className="w-4 h-4" /> 855-40-WATER
                </a>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>
    </>
  );
}
