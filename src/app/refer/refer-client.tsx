"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion, useReducedMotion } from "framer-motion";
import {
  Star,
  Gift,
  Users,
  ClipboardCheck,
  CheckCircle2,
  Lock,
  PhoneCall,
  ArrowRight,
  ArrowLeft,
  HandCoins,
  BadgeCheck,
  UserPlus,
} from "lucide-react";
import { getTracking } from "@/lib/tracking";
import { getRecaptchaToken } from "@/lib/recaptcha";
import { validateEmail, validatePhone } from "@/lib/validation";

interface ReferFormData {
  referrerFirstName: string;
  referrerLastName: string;
  referrerEmail: string;
  referrerPhone: string;
  friendFirstName: string;
  friendLastName: string;
  friendPhone: string;
  friendEmail: string;
  friendOwnsHome: string; // "own" | "rent" | "unsure"; renters can't install, so they don't qualify
  message: string;
  referrerConsent: boolean;
  company_website?: string; // honeypot
}

const reviews = [
  {
    name: "Shreyans P.",
    location: "Cerritos, CA",
    text: "Customer service and installation were absolutely amazing. I've already told three neighbors about it.",
  },
  {
    name: "Angelina M.",
    location: "Oceanside, CA",
    text: "No more hard water on my shower doors. My whole family's on Puragain now. I sent my sister next.",
  },
  {
    name: "Rob C.",
    location: "Carlsbad, CA",
    text: "Very responsive, and the system cleared the scale out of my pipes. Easy to recommend to friends.",
  },
];

// The three rewards, front and center. This is what drives the action.
const rewards = [
  {
    icon: HandCoins,
    amount: "$25",
    who: "To you: booking bonus",
    copy: "Paid the moment your friend books their free in-home water test. You get rewarded before they even buy.",
    accent: "from-brand-blue/12 to-brand-blue/5",
  },
  {
    icon: Gift,
    amount: "$200",
    who: "To you: per install",
    copy: "For every friend who gets a Puragain system installed. Refer as many friends as you like. There's no cap.",
    accent: "from-brand-red/12 to-brand-red/5",
    featured: true,
  },
  {
    icon: BadgeCheck,
    amount: "$100",
    who: "To your friend: at install",
    copy: "Plus a free in-home water test. Your intro gives them a real head start on cleaner water.",
    accent: "from-brand-blue/12 to-brand-blue/5",
  },
];

const steps = [
  {
    n: "01",
    icon: UserPlus,
    title: "Send us their info",
    copy: "Drop in your friend's name and number below. Takes about 30 seconds. We do the rest.",
  },
  {
    n: "02",
    icon: ClipboardCheck,
    title: "They book a free test",
    copy: "A local specialist tests their water at no cost. The moment they book, $25 is yours.",
  },
  {
    n: "03",
    icon: HandCoins,
    title: "They install, you get $200",
    copy: "When your friend installs their system, you earn $200 and they get $100 off. Everybody wins.",
  },
];

const faqs = [
  {
    q: "How much can I earn?",
    a: "$200 for every friend who gets a system installed, plus a $25 bonus the moment they book their free water test. There's no cap. Refer as many friends as you'd like.",
  },
  {
    q: "When do I get paid?",
    a: "The $25 booking bonus is paid once your friend books their free in-home water test. The $200 install reward is paid after their system is installed and verified.",
  },
  {
    q: "Who counts as a referral?",
    a: "Your friend must own their home and be a new customer (not an existing Puragain customer) in our Southern California service area. Renters aren't eligible since the system is installed in the home. One reward is paid per referred household.",
  },
  {
    q: "What does my friend get?",
    a: "A free in-home water test with a local specialist, $100 off at install, zero money down, and a 7-year warranty backed by 30 years of family-owned service.",
  },
  {
    q: "Do I need my friend's permission?",
    a: "Yes, please only share a friend's details if they're happy to hear from us. We'll reach out on your behalf to schedule their free water test.",
  },
];

export default function ReferClient() {
  const [submitted, setSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [renterBlocked, setRenterBlocked] = useState(false);
  const [step, setStep] = useState(0); // 0 = you, 1 = your friend, 2 = finish
  const reduce = useReducedMotion();

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
    trigger,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<ReferFormData>({
    mode: "onTouched",
    defaultValues: {
      referrerFirstName: "",
      referrerLastName: "",
      referrerEmail: "",
      referrerPhone: "",
      friendFirstName: "",
      friendLastName: "",
      friendPhone: "",
      friendEmail: "",
      friendOwnsHome: "",
      message: "",
      referrerConsent: false,
    },
  });

  const onSubmit = async (data: ReferFormData) => {
    setSubmitError(false);
    // Renters can't install a system, so they don't qualify. Gate here rather
    // than create a lead that reps will have to disqualify.
    if (data.friendOwnsHome === "rent") {
      setRenterBlocked(true);
      return;
    }
    setRenterBlocked(false);
    try {
      const recaptchaToken = await getRecaptchaToken("refer");
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          // The first-class lead is the referred FRIEND (reps call them).
          firstName: data.friendFirstName,
          lastName: data.friendLastName,
          phone: data.friendPhone,
          email: data.friendEmail,
          ownHome: data.friendOwnsHome,
          message: data.message,
          // The customer doing the referring, for reward payout.
          referrerFirstName: data.referrerFirstName,
          referrerLastName: data.referrerLastName,
          referrerName: `${data.referrerFirstName} ${data.referrerLastName}`.trim(),
          referrerEmail: data.referrerEmail,
          referrerPhone: data.referrerPhone,
          referrerConsent: data.referrerConsent,
          company_website: data.company_website,
          ...getTracking(),
          source: "refer",
          recaptchaToken,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
      if (typeof document !== "undefined") {
        document.getElementById("refer-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    } catch {
      setSubmitError(true);
    }
  };

  const inputClass =
    "border border-gray-200 rounded-xl px-4 py-3 w-full text-sm text-navy placeholder:text-gray-400 focus:border-brand-blue focus-visible:ring-2 focus-visible:ring-brand-blue/15 outline-none transition-colors duration-200";
  const labelClass =
    "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block";

  // Fields validated before each step can advance (optionals excluded).
  const STEP_FIELDS: (keyof ReferFormData)[][] = [
    ["referrerFirstName", "referrerLastName", "referrerEmail", "referrerPhone"],
    ["friendFirstName", "friendPhone", "friendEmail", "friendOwnsHome"],
    ["referrerConsent"],
  ];
  const firstName = (watch("referrerFirstName") || "").trim();
  const stepLabels = ["Your details", "Your friend", "Finish"];
  const stepHeading =
    step === 0 ? "Refer a friend" : step === 1 ? (firstName ? `Thanks, ${firstName}!` : "Your friend") : "One last step";
  const stepSub =
    step === 0
      ? "Start with your details. It takes about 30 seconds."
      : step === 1
        ? "Now, who are you referring?"
        : "Confirm and send. We'll handle the intro from here.";

  const goNext = async () => {
    const ok = await trigger(STEP_FIELDS[step]);
    if (!ok) return;
    // Gate renters before they can advance past the friend step.
    if (step === 1 && watch("friendOwnsHome") === "rent") {
      setRenterBlocked(true);
      return;
    }
    setRenterBlocked(false);
    setStep((s) => Math.min(s + 1, STEP_FIELDS.length - 1));
  };
  const goBack = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <div className="bg-white">
      {/* ─────────────────────────── HERO + FORM ─────────────────────────── */}
      <section className="relative overflow-hidden">
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
            {/* Left: the pitch */}
            <div>
              <motion.span
                custom={0}
                variants={fade}
                initial="hidden"
                animate="show"
                className="inline-flex items-center gap-2 rounded-full border border-brand-blue/20 bg-white/70 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-blue backdrop-blur-sm"
              >
                <Gift className="h-3.5 w-3.5" />
                PurAgain Rewards
              </motion.span>

              <motion.h1
                custom={1}
                variants={fade}
                initial="hidden"
                animate="show"
                className="font-heading mt-6 text-[2.85rem] font-bold leading-[1.04] text-navy sm:text-5xl lg:text-[3.9rem]"
                style={{ letterSpacing: "-0.03em" }}
              >
                Give better water.
                <br />
                <span className="text-brand-blue">Get paid for it.</span>
              </motion.h1>

              <motion.p
                custom={2}
                variants={fade}
                initial="hidden"
                animate="show"
                className="mt-6 max-w-md text-[15px] leading-[1.7] text-gray-600 md:text-lg"
              >
                Earn <span className="font-semibold text-navy">$200</span> for every friend who gets a
                system installed, plus <span className="font-semibold text-navy">$25</span> the moment
                they book a free water test. Your friend gets{" "}
                <span className="font-semibold text-navy">$100</span> off and a free test, too.
              </motion.p>

              {/* reward chips: the offer at a glance */}
              <motion.div
                custom={3}
                variants={fade}
                initial="hidden"
                animate="show"
                className="mt-8 flex flex-wrap gap-3"
              >
                {[
                  { amt: "$25", label: "when they book" },
                  { amt: "$200", label: "when they install" },
                  { amt: "$100", label: "for your friend" },
                ].map((c) => (
                  <span
                    key={c.label}
                    className="inline-flex items-baseline gap-1.5 rounded-full bg-white px-4 py-2 text-sm shadow-[0_8px_24px_-16px_rgba(6,9,15,0.4)] ring-1 ring-black/5"
                  >
                    <span className="font-heading text-lg font-bold text-brand-blue">{c.amt}</span>
                    <span className="text-gray-500">{c.label}</span>
                  </span>
                ))}
              </motion.div>

              <motion.div
                custom={4}
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

            {/* Right: the referral card */}
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: reduce ? 0 : 0.15, ease: [0.25, 1, 0.5, 1] }}
              id="refer-form"
              className="scroll-mt-28"
            >
              <div className="relative rounded-[26px] bg-white p-6 shadow-[0_30px_80px_-24px_rgba(26,107,181,0.4)] ring-1 ring-black/5 sm:p-8">
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
                      Referral sent{firstName ? `, ${firstName}` : ""}!
                    </h2>
                    <p className="mx-auto mt-3 max-w-sm text-[15px] leading-relaxed text-gray-500">
                      We&apos;ll reach out to your friend to schedule their free water test. The moment
                      they book, your <span className="font-semibold text-navy">$25</span> is on the
                      way, and <span className="font-semibold text-navy">$200</span> more when they
                      install.
                    </p>
                    <button
                      onClick={() => { setSubmitted(false); setStep(0); }}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition-colors duration-200 hover:bg-[#155a99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:ring-offset-2 active:scale-[0.98]"
                    >
                      Refer another friend
                      <UserPlus className="h-4 w-4" />
                    </button>
                    <div className="mt-6 flex items-center justify-center gap-2 rounded-xl bg-offwhite px-4 py-3 text-sm text-gray-600">
                      <PhoneCall className="h-4 w-4 text-brand-blue" />
                      Questions? Email{" "}
                      <a href="mailto:support@puragain.com" className="font-semibold text-brand-blue hover:underline">
                        support@puragain.com
                      </a>
                    </div>
                  </div>
                ) : (
                  <>
                    {/* progress */}
                    <div className="mb-5">
                      <div className="flex items-center justify-between">
                        <p className="text-[11px] font-semibold uppercase tracking-wider text-brand-blue">
                          Step {step + 1} of 3
                        </p>
                        <p className="text-[11px] text-gray-400">{stepLabels[step]}</p>
                      </div>
                      <div className="mt-2 flex gap-1.5">
                        {[0, 1, 2].map((i) => (
                          <span
                            key={i}
                            className={`h-1.5 flex-1 rounded-full transition-colors duration-300 ${i <= step ? "bg-brand-blue" : "bg-gray-200"}`}
                          />
                        ))}
                      </div>
                    </div>

                    <div className="mb-5">
                      <h2 className="font-heading text-[1.55rem] font-bold leading-tight text-navy">
                        {stepHeading}
                      </h2>
                      <p className="mt-1.5 text-sm text-gray-500">{stepSub}</p>
                    </div>

                    <form
                      onSubmit={(e) => {
                        // Enter advances mid-wizard; only the final step submits.
                        if (step < 2) { e.preventDefault(); goNext(); } else { handleSubmit(onSubmit)(e); }
                      }}
                      className="space-y-5"
                      noValidate
                    >
                      <motion.div
                        key={step}
                        initial={reduce ? { opacity: 0 } : { opacity: 0, x: 12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                        className="space-y-4"
                      >
                        {/* STEP 1: you */}
                        {step === 0 && (
                          <>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div>
                                <label htmlFor="referrerFirstName" className={labelClass}>Your first name</label>
                                <input id="referrerFirstName" type="text" className={inputClass} placeholder="John"
                                  {...register("referrerFirstName", { required: "Required" })} />
                                {errors.referrerFirstName && <p className="mt-1 text-xs text-brand-red">{errors.referrerFirstName.message}</p>}
                              </div>
                              <div>
                                <label htmlFor="referrerLastName" className={labelClass}>Your last name</label>
                                <input id="referrerLastName" type="text" className={inputClass} placeholder="Doe"
                                  {...register("referrerLastName", { required: "Required" })} />
                                {errors.referrerLastName && <p className="mt-1 text-xs text-brand-red">{errors.referrerLastName.message}</p>}
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div>
                                <label htmlFor="referrerEmail" className={labelClass}>Your email</label>
                                <input id="referrerEmail" type="email" className={inputClass} placeholder="john@example.com"
                                  {...register("referrerEmail", { required: "Required", validate: validateEmail })} />
                                {errors.referrerEmail && <p className="mt-1 text-xs text-brand-red">{errors.referrerEmail.message}</p>}
                              </div>
                              <div>
                                <label htmlFor="referrerPhone" className={labelClass}>Your phone</label>
                                <input id="referrerPhone" type="tel" className={inputClass} placeholder="(555) 123-4567"
                                  {...register("referrerPhone", { required: "Required", validate: validatePhone })} />
                                {errors.referrerPhone && <p className="mt-1 text-xs text-brand-red">{errors.referrerPhone.message}</p>}
                              </div>
                            </div>
                          </>
                        )}

                        {/* STEP 2: your friend */}
                        {step === 1 && (
                          <>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div>
                                <label htmlFor="friendFirstName" className={labelClass}>Friend&apos;s first name</label>
                                <input id="friendFirstName" type="text" className={inputClass} placeholder="Jane"
                                  {...register("friendFirstName", { required: "Required" })} />
                                {errors.friendFirstName && <p className="mt-1 text-xs text-brand-red">{errors.friendFirstName.message}</p>}
                              </div>
                              <div>
                                <label htmlFor="friendLastName" className={labelClass}>
                                  Last name <span className="normal-case text-gray-300">(optional)</span>
                                </label>
                                <input id="friendLastName" type="text" className={inputClass} placeholder="Smith"
                                  {...register("friendLastName")} />
                              </div>
                            </div>
                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                              <div>
                                <label htmlFor="friendPhone" className={labelClass}>Friend&apos;s phone</label>
                                <input id="friendPhone" type="tel" className={inputClass} placeholder="(555) 987-6543"
                                  {...register("friendPhone", { required: "Required", validate: validatePhone })} />
                                {errors.friendPhone && <p className="mt-1 text-xs text-brand-red">{errors.friendPhone.message}</p>}
                              </div>
                              <div>
                                <label htmlFor="friendEmail" className={labelClass}>
                                  Their email <span className="normal-case text-gray-300">(recommended)</span>
                                </label>
                                <input id="friendEmail" type="email" className={inputClass} placeholder="jane@example.com"
                                  {...register("friendEmail", { validate: validateEmail })} />
                                {errors.friendEmail && <p className="mt-1 text-xs text-brand-red">{errors.friendEmail.message}</p>}
                                <p className="mt-1 text-[11px] text-gray-400">We&apos;ll send them a friendly heads-up that you referred them.</p>
                              </div>
                            </div>
                            <div>
                              <label htmlFor="friendOwnsHome" className={labelClass}>Does your friend own their home?</label>
                              <select
                                id="friendOwnsHome"
                                className={inputClass}
                                defaultValue=""
                                {...register("friendOwnsHome", {
                                  required: "Please let us know",
                                  onChange: () => renterBlocked && setRenterBlocked(false),
                                })}
                              >
                                <option value="" disabled>Select one…</option>
                                <option value="own">Yes, they own their home</option>
                                <option value="unsure">Not sure</option>
                                <option value="rent">No, they rent</option>
                              </select>
                              {errors.friendOwnsHome && <p className="mt-1 text-xs text-brand-red">{errors.friendOwnsHome.message}</p>}
                              {renterBlocked && (
                                <p className="mt-2 rounded-lg bg-brand-red/5 px-3 py-2 text-[13px] leading-relaxed text-brand-red">
                                  Our systems are installed for homeowners, so renters aren&apos;t eligible for the
                                  reward. Know a friend who owns their home? We&apos;d love the intro.
                                </p>
                              )}
                            </div>
                          </>
                        )}

                        {/* STEP 3: finish */}
                        {step === 2 && (
                          <>
                            <div>
                              <label htmlFor="message" className={labelClass}>
                                Anything we should know? <span className="normal-case text-gray-300">(optional)</span>
                              </label>
                              <textarea id="message" rows={2} className={inputClass}
                                placeholder="Best time to reach them, their water concerns…"
                                {...register("message")} />
                            </div>
                            <div className="flex items-start gap-3">
                              <input id="referrerConsent" type="checkbox"
                                className="mt-0.5 h-4 w-4 rounded border-gray-300 text-brand-blue focus:ring-brand-blue/30"
                                {...register("referrerConsent", { required: "Please confirm your friend is happy to hear from us" })} />
                              <label htmlFor="referrerConsent" className="text-[13px] leading-relaxed text-gray-500">
                                My friend is happy to hear from Puragain about a free water test.
                              </label>
                            </div>
                            {errors.referrerConsent && <p className="-mt-1 text-xs text-brand-red">{errors.referrerConsent.message}</p>}
                          </>
                        )}
                      </motion.div>

                      {/* honeypot: always rendered */}
                      <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
                        className="absolute left-[-9999px] h-px w-px opacity-0" {...register("company_website")} />

                      {/* nav */}
                      <div className="flex items-center gap-3">
                        {step > 0 && (
                          <button
                            type="button"
                            onClick={goBack}
                            className="inline-flex items-center justify-center gap-1.5 rounded-full border border-gray-200 px-5 py-4 text-sm font-semibold text-gray-600 transition-colors duration-200 hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30 active:scale-[0.98]"
                          >
                            <ArrowLeft className="h-4 w-4" />
                            Back
                          </button>
                        )}
                        {step < 2 ? (
                          <button
                            type="button"
                            onClick={goNext}
                            className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-blue py-4 text-[15px] font-semibold text-white shadow-lg shadow-brand-blue/20 transition-colors duration-200 hover:bg-[#155a99] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/40 focus-visible:ring-offset-2 active:scale-[0.98]"
                          >
                            Continue
                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                          </button>
                        ) : (
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="group inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-brand-red py-4 text-[15px] font-semibold text-white shadow-lg shadow-red-500/20 transition-colors duration-200 hover:bg-[#b00e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/40 focus-visible:ring-offset-2 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
                          >
                            {isSubmitting ? "Sending…" : "Send My Referral"}
                            {!isSubmitting && (
                              <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                            )}
                          </button>
                        )}
                      </div>

                      {submitError && (
                        <p className="text-center text-sm text-brand-red">
                          Something went wrong. Please try again or email{" "}
                          <a href="mailto:support@puragain.com" className="font-semibold underline">support@puragain.com</a>.
                        </p>
                      )}

                      <p className="flex items-center justify-center gap-1.5 pt-1 text-center text-[12px] text-gray-400">
                        <Lock className="h-3.5 w-3.5" />
                        We only contact your friend about a free water test. We never sell your info.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─────────────────────────── REWARD BREAKDOWN ─────────────────────────── */}
      <section className="border-y border-gray-100 bg-offwhite py-16 px-6 md:py-20">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-navy md:text-[2.6rem]" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Cash both ways. No catch.
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-gray-500 md:text-lg">
              Real rewards for you and your friend, starting the moment they book.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {rewards.map(({ icon: Icon, amount, who, copy, accent, featured }, i) => (
              <motion.div
                key={who}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-60px" }}
                className={`relative flex flex-col rounded-[22px] bg-white p-7 ring-1 ring-black/5 ${
                  featured
                    ? "shadow-[0_30px_70px_-28px_rgba(204,16,16,0.35)] md:-translate-y-3"
                    : "shadow-[0_14px_40px_-24px_rgba(6,9,15,0.3)]"
                }`}
              >
                {featured && (
                  <span className="absolute right-5 top-5 rounded-full bg-brand-red/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-brand-red">
                    Biggest reward
                  </span>
                )}
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${accent} ${featured ? "text-brand-red" : "text-brand-blue"}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <div className="font-heading text-4xl font-bold text-navy">{amount}</div>
                <div className="mt-1 text-sm font-semibold text-gray-500">{who}</div>
                <p className="mt-3 text-[15px] leading-relaxed text-gray-500">{copy}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────────────── HOW IT WORKS ─────────────────────────── */}
      <section className="bg-white py-20 px-6 md:py-28">
        <div className="mx-auto max-w-[1180px]">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-heading text-3xl font-bold text-navy md:text-[2.6rem]" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
              Three steps. One happy friend.
            </h2>
          </div>

          <div className="relative mt-16 grid gap-10 md:grid-cols-3 md:gap-8">
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
              <div className="absolute -bottom-5 -right-3 rounded-2xl bg-white px-5 py-4 shadow-[0_20px_50px_-18px_rgba(26,107,181,0.5)] ring-1 ring-black/5 sm:right-6">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-brand-blue" />
                  <span className="font-heading text-lg font-bold text-navy">33,000+</span>
                </div>
                <p className="mt-0.5 text-xs text-gray-500">families already on Puragain</p>
              </div>
            </motion.div>

            <div>
              <h2 className="font-heading text-3xl font-bold text-navy md:text-[2.4rem]" style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}>
                Your neighbors already trust you. This just pays you for it.
              </h2>
              <p className="mt-4 max-w-md text-[15px] leading-relaxed text-gray-500">
                The best water customers come from a friend&apos;s recommendation, not an ad. Share
                what&apos;s working for your family, and get rewarded every step of the way.
              </p>

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

      {/* ─────────────────────────── FAQ ─────────────────────────── */}
      <section className="bg-white py-20 px-6 md:py-24">
        <div className="mx-auto max-w-[860px]">
          <h2 className="font-heading text-center text-3xl font-bold text-navy md:text-[2.4rem]" style={{ letterSpacing: "-0.03em", lineHeight: 1.15 }}>
            Referral questions, answered
          </h2>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {faqs.map((f, i) => (
              <motion.div
                key={f.q}
                custom={i}
                variants={fade}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-40px" }}
                className="rounded-2xl border border-gray-100 bg-offwhite p-6"
              >
                <h3 className="font-heading text-lg font-bold text-navy">{f.q}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-gray-500">{f.a}</p>
              </motion.div>
            ))}
          </div>
          <p className="mx-auto mt-8 max-w-xl text-center text-[13px] leading-relaxed text-gray-400">
            Rewards are paid to the referring customer. Referred friend must be a homeowner and a new
            customer in our service area; renters are not eligible. The $200 install reward requires a
            verified installation. One reward per referred household. Puragain may update program terms
            at any time.
          </p>
        </div>
      </section>

      {/* ─────────────────────────── FINAL CTA BAND ─────────────────────────── */}
      <div className="bg-white">
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
          <Gift className="mx-auto h-10 w-10 text-white/80" />
          <h2 className="font-heading mt-5 text-3xl font-bold text-white md:text-5xl" style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}>
            One intro. Up to $225 for you.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-relaxed text-white/70 md:text-lg">
            Know someone tired of hard water or bad taste? Send their name our way and start earning.
          </p>
          <Link
            href="#refer-form"
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-brand-red px-9 py-4 text-[15px] font-semibold text-white shadow-lg shadow-black/20 transition-colors duration-200 hover:bg-[#b00e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#2f5e8f] active:scale-[0.98]"
          >
            Refer a Friend
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* ─────────────────────────── STICKY MOBILE CTA ─────────────────────────── */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gray-100 bg-white/95 px-4 py-3 backdrop-blur-md lg:hidden">
        <Link
          href="#refer-form"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-red py-3.5 text-[15px] font-semibold text-white transition-colors duration-200 hover:bg-[#b00e0e] active:scale-[0.98]"
        >
          Refer a Friend, Get $200
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
      <div aria-hidden="true" className="h-20 lg:hidden" />
    </div>
  );
}
