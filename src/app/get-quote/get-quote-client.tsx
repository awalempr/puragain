"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion, useReducedMotion } from "framer-motion";
import {
  Star,
  ShieldCheck,
  Droplets,
  ClipboardCheck,
  CircleDollarSign,
  CheckCircle2,
  Lock,
  PhoneCall,
  ArrowRight,
} from "lucide-react";
import { getTracking } from "@/lib/tracking";
import { getRecaptchaToken } from "@/lib/recaptcha";
import { CITIES, REGIONS, type RegionKey } from "@/lib/service-areas";

interface QuoteFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
  system: string;
  message: string;
  smsOptIn: boolean;
  company_website?: string; // honeypot
}

const reviews = [
  {
    name: "Shreyans P.",
    location: "Cerritos, CA",
    text: "Customer service and installation were absolutely amazing. The quality of the water is incredible.",
  },
  {
    name: "Angelina M.",
    location: "Oceanside, CA",
    text: "No more hard water on my shower doors or dishwasher. My skin and hair feel so much better.",
  },
  {
    name: "Rob C.",
    location: "Carlsbad, CA",
    text: "Very responsive, and the system cleared the scale out of my pipes. Great investment.",
  },
];

const valueProps = [
  { icon: ClipboardCheck, title: "Free in-home water test", copy: "A local specialist tests your exact water at no cost, with no obligation to buy." },
  { icon: CircleDollarSign, title: "$0 money down", copy: "Financing from $26/mo* with nothing due at installation." },
  { icon: Droplets, title: "Up to 99% removed", copy: "Chlorine, lead, PFAS and more, filtered out at every tap." },
  { icon: ShieldCheck, title: "7-year warranty", copy: "Backed by lifetime service from a 30-year family business." },
];

const steps = [
  { n: "01", title: "Tell us about your home", copy: "Fill out the quick form below. It takes about 60 seconds." },
  { n: "02", title: "Get a free in-home test", copy: "A specialist tests your water and builds a quote tailored to it, with zero pressure." },
  { n: "03", title: "Install with $0 down", copy: "Certified installation, zero money down, and lifetime service included." },
];

export default function GetQuoteClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const reduce = useReducedMotion();

  // reveal variant, motion-safe: collapses to a plain fade when the user
  // prefers reduced motion so nothing translates on screen.
  const fade = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, y: 24 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: reduce ? 0 : i * 0.08, ease: [0.25, 1, 0.5, 1] as const },
    }),
  };

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<QuoteFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      city: "",
      system: "",
      message: "",
      smsOptIn: false,
    },
  });

  const onSubmit = async (data: QuoteFormData) => {
    setSubmitError(false);
    try {
      const recaptchaToken = await getRecaptchaToken("get_quote");
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          ...getTracking(),
          source: "get-quote",
          recaptchaToken,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
      // surface the confirmation without making the user hunt for it
      if (typeof document !== "undefined") {
        document.getElementById("quote")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch {
      setSubmitError(true);
    }
  };

  const inputClass =
    "border border-gray-200 rounded-xl px-4 py-3 w-full text-sm text-navy placeholder:text-gray-400 focus:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/15 outline-none transition-colors duration-200";
  const labelClass =
    "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block";

  return (
    <div className="bg-white">
      {/* ─────────────────────────── HERO + FORM ─────────────────────────── */}
      <section className="relative overflow-hidden">
        {/* airy water-light backdrop — layered radial washes, never a flat fill */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(1100px 620px at 78% -8%, rgba(58,143,212,0.16), transparent 60%), radial-gradient(760px 520px at 6% 4%, rgba(26,107,181,0.10), transparent 55%), linear-gradient(180deg, #ffffff 0%, #f2f8fd 62%, #eaf3fb 100%)",
          }}
        />

        <div className="relative mx-auto max-w-[1180px] px-6 pt-24 pb-16 md:pt-28 md:pb-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            {/* Left — the pitch */}
            <div>
              <motion.span
                custom={0}
                variants={fade}
                initial="hidden"
                animate="show"
                className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue backdrop-blur-sm"
              >
                Free quote · $0 down
              </motion.span>

              <motion.h1
                custom={1}
                variants={fade}
                initial="hidden"
                animate="show"
                className="font-heading mt-6 text-[2.85rem] font-bold leading-[1.04] text-navy sm:text-5xl lg:text-[3.9rem]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Get your free
                <br />
                <span className="text-brand-blue">water quote.</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fade}
                initial="hidden"
                animate="show"
                className="mt-6 max-w-md text-[15px] leading-[1.7] text-gray-600 md:text-lg"
              >
                Tell us about your home and we&apos;ll send a custom filtration
                quote, starting with a free in-home water test.
              </motion.p>

              {/* trust row — proof, not a feature list (those live below) */}
              <motion.div
                custom={3}
                variants={fade}
                initial="hidden"
                animate="show"
                className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm"
              >
                <span className="inline-flex items-center gap-1.5">
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </span>
                  <span className="font-semibold text-navy">4.7</span>
                  <span className="text-gray-400">on Yelp</span>
                </span>
                <span className="hidden h-4 w-px bg-gray-200 sm:block" />
                <span className="text-gray-500">
                  <span className="font-semibold text-navy">33,000+</span> families served
                </span>
              </motion.div>
            </div>

            {/* Right — the signature: elevated quote card */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : 0.15, ease: [0.25, 1, 0.5, 1] }}
              id="quote"
              className="scroll-mt-28"
            >
              <div className="relative rounded-[26px] bg-white p-6 shadow-[0_30px_80px_-24px_rgba(26,107,181,0.4)] ring-1 ring-black/5 sm:p-8">
                {/* thin water accent along the top edge */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-6 top-0 h-1 rounded-full"
                  style={{ background: "linear-gradient(90deg, #1a6bb5, #3a8fd4, #7ec3f0)" }}
                />

                {submitted ? (
                  <div className="py-8 text-center">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle2 className="h-9 w-9 text-green-600" />
                    </div>
                    <h2 className="font-heading text-2xl font-bold text-navy">
                      You&apos;re all set.
                    </h2>
                    <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-gray-500">
                      A Puragain specialist will reach out within 24 hours to schedule
                      your free water test and quote. Keep an eye on your phone and inbox.
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-offwhite px-4 py-3 text-sm text-gray-600">
                      <PhoneCall className="h-4 w-4 text-brand-blue" />
                      Prefer to talk now? Email{" "}
                      <a href="mailto:support@puragain.com" className="font-semibold text-brand-blue hover:underline">
                        support@puragain.com
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="mb-6">
                      <h2 className="font-heading text-[1.7rem] font-bold leading-tight text-navy">
                        Get my free quote
                      </h2>
                      <p className="mt-1.5 text-sm text-gray-500">
                        Takes about a minute. We&apos;ll do the rest.
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="firstName" className={labelClass}>First name</label>
                          <input id="firstName" type="text" className={inputClass} placeholder="John"
                            {...register("firstName", { required: "Required" })} />
                          {errors.firstName && <p className="mt-1 text-xs text-brand-red">{errors.firstName.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="lastName" className={labelClass}>Last name</label>
                          <input id="lastName" type="text" className={inputClass} placeholder="Doe"
                            {...register("lastName", { required: "Required" })} />
                          {errors.lastName && <p className="mt-1 text-xs text-brand-red">{errors.lastName.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="email" className={labelClass}>Email</label>
                          <input id="email" type="email" className={inputClass} placeholder="john@example.com"
                            {...register("email", {
                              required: "Required",
                              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                            })} />
                          {errors.email && <p className="mt-1 text-xs text-brand-red">{errors.email.message}</p>}
                        </div>
                        <div>
                          <label htmlFor="phone" className={labelClass}>Phone</label>
                          <input id="phone" type="tel" className={inputClass} placeholder="(555) 123-4567"
                            {...register("phone", { required: "Required" })} />
                          {errors.phone && <p className="mt-1 text-xs text-brand-red">{errors.phone.message}</p>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div>
                          <label htmlFor="city" className={labelClass}>City</label>
                          <select id="city" className={inputClass} defaultValue="" {...register("city")}>
                            <option value="" disabled>Select your city</option>
                            {(Object.keys(REGIONS) as RegionKey[]).map((rk) => (
                              <optgroup key={rk} label={REGIONS[rk].label}>
                                {CITIES.filter((c) => c.region === rk).map((c) => (
                                  <option key={c.slug} value={c.slug}>{c.name}</option>
                                ))}
                              </optgroup>
                            ))}
                            <option value="other">My city isn&rsquo;t listed</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="system" className={labelClass}>System</label>
                          <select id="system" className={inputClass} defaultValue="" {...register("system")}>
                            <option value="">Not sure yet</option>
                            <option value="reverse-osmosis">5-Stage Reverse Osmosis</option>
                            <option value="alkaline">6-Stage Alkaline</option>
                            <option value="whole-house">Whole House System</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="message" className={labelClass}>
                          Anything we should know? <span className="normal-case text-gray-300">(optional)</span>
                        </label>
                        <textarea id="message" rows={2} className={inputClass}
                          placeholder="Hard water, bad taste, a recent test result…"
                          {...register("message")} />
                      </div>

                      <div className="flex items-start gap-3">
                        <input id="smsOptIn" type="checkbox"
                          className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue/30"
                          {...register("smsOptIn")} />
                        <label htmlFor="smsOptIn" className="text-[13px] leading-relaxed text-gray-400">
                          Text me updates about my quote. Msg &amp; data rates may apply.
                        </label>
                      </div>

                      {/* honeypot — hidden from users, catches bots */}
                      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
                        className="absolute left-[-9999px] h-px w-px opacity-0" {...register("company_website")} />

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-red py-4 text-[15px] font-semibold text-white shadow-lg shadow-red-500/20 transition-colors duration-200 hover:bg-[#b00e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSubmitting ? "Sending…" : "Get My Free Quote"}
                        {!isSubmitting && (
                          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                        )}
                      </button>

                      {submitError && (
                        <p className="text-center text-sm text-brand-red">
                          Something went wrong. Please try again or email{" "}
                          <a href="mailto:support@puragain.com" className="font-semibold underline">support@puragain.com</a>.
                        </p>
                      )}

                      <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-[12px] text-gray-400">
                        <Lock className="h-3.5 w-3.5" />
                        Your info is private. We never sell it.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── VALUE STRIP ─────────────────────────── */}
      <section className="border-y border-gray-100 bg-offwhite py-16 px-6">
        <div className="mx-auto grid max-w-[1180px] gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {valueProps.map(({ icon: Icon, title, copy }, i) => (
            <motion.div
              key={title}
              custom={i}
              variants={fade}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="flex flex-col"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{copy}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */}
      <section className="bg-white py-20 px-6 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-navy md:text-[2.6rem]" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              From quote to clean water in three steps.
            </h2>
          </div>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
            {/* connective hairline between steps */}
            <div aria-hidden="true" className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-brand-blue/25 to-transparent md:block" />
            {steps.map((s, i) => (
              <motion.div
                key={s.n}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className="relative"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-white font-heading text-lg font-bold text-brand-blue ring-1 ring-brand-blue/20 shadow-[0_8px_24px_-10px_rgba(26,107,181,0.4)]">
                  {s.n}
                </div>
                <h3 className="font-heading text-xl font-bold text-navy">{s.title}</h3>
                <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-gray-500">{s.copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── PROOF ─────────────────────────── */}
      <section className="bg-offwhite py-20 px-6 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            {/* real lifestyle photo */}
            <motion.div
              variants={fade}
              custom={0}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              className="relative"
            >
              <div className="relative overflow-hidden rounded-[26px] shadow-[0_30px_70px_-28px_rgba(6,9,15,0.45)]">
                <Image
                  src="/images/hero-lifestyle.jpeg"
                  alt="A family enjoying clean, filtered water at home"
                  width={720}
                  height={720}
                  className="aspect-square w-full object-cover"
                />
                <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
              </div>
              {/* floating rating chip */}
              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_50px_-18px_rgba(26,107,181,0.5)] ring-1 ring-black/5 sm:right-6">
                <div className="flex items-center gap-1.5">
                  <span className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </span>
                  <span className="font-heading text-lg font-bold text-navy">4.7</span>
                </div>
                <p className="mt-0.5 text-xs text-gray-500">33,000+ families served</p>
              </div>
            </motion.div>

            {/* reviews */}
            <div>
              <h2 className="font-heading text-3xl font-bold text-navy md:text-[2.4rem]" style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Homeowners don&apos;t just switch. They tell their neighbors.
              </h2>

              <div className="mt-8 space-y-4">
                {reviews.map((r, i) => (
                  <motion.figure
                    key={r.name}
                    custom={i}
                    variants={fade}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    className="rounded-2xl border border-gray-100 bg-white p-5 shadow-[0_10px_30px_-20px_rgba(6,9,15,0.3)]"
                  >
                    <div className="mb-2 flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, j) => (
                        <Star key={j} className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-[15px] leading-relaxed text-gray-700">&ldquo;{r.text}&rdquo;</blockquote>
                    <figcaption className="mt-3 text-sm font-semibold text-navy">
                      {r.name}
                      <span className="ml-2 font-normal text-gray-400">{r.location}</span>
                    </figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── GUARANTEE BAND ─────────────────────────── */}
      {/* wave divider into the one rich water-blue moment */}
      <div className="bg-offwhite">
        <svg viewBox="0 0 1440 80" fill="none" preserveAspectRatio="none" className="block w-full" style={{ height: 60 }} aria-hidden="true">
          <path d="M0 40 C 240 90, 480 0, 720 32 C 960 64, 1200 20, 1440 44 L1440 80 L0 80 Z" fill="#1a6bb5" />
        </svg>
      </div>
      <section
        className="relative overflow-hidden px-6 pb-24 pt-8 text-center md:pb-28"
        style={{ background: "linear-gradient(160deg, #1a6bb5 0%, #2f5e8f 60%, #234d74 100%)" }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{ background: "radial-gradient(700px 400px at 80% 120%, rgba(126,195,240,0.25), transparent 60%)" }}
        />
        <div className="relative mx-auto max-w-2xl">
          <ShieldCheck className="mx-auto h-10 w-10 text-white/80" />
          <h2 className="font-heading mt-5 text-3xl font-bold text-white md:text-5xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            Zero risk. Zero money down.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg">
            The quote is free, the water test is free, and there&apos;s nothing due at
            install. See what better water would cost your home, then decide.
          </p>
          <Link
            href="#quote"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-9 py-4 text-[15px] font-semibold text-white shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-[#b00e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f5e8f] active:scale-[0.98]"
          >
            Get My Free Quote
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ─────────────────────────── STICKY MOBILE CTA ─────────────────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <Link
          href="#quote"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#b00e0e] active:scale-[0.98]"
        >
          Get My Free Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      {/* spacer so the sticky bar never covers the footer on mobile */}
      <div aria-hidden="true" className="h-20 lg:hidden" />
    </div>
  );
}
