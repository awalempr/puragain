"use client";

import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { Phone, Wrench, Clock, Star, Shield, Zap, Award } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  system: string;
  message: string;
  smsOptIn: boolean;
}

const reviews = [
  { name: "Shreyans P.", location: "Cerritos, CA", text: "Customer service and installation were absolutely amazing! The quality of the water is incredible." },
  { name: "Candizzle L.", location: "San Diego, CA", text: "The water is great and much cheaper than buying cases of water. Top notch service." },
  { name: "Angelina M.", location: "Oceanside, CA", text: "No more hard water on my shower doors or dishwasher. My skin and hair feel so much better!" },
  { name: "Rob C.", location: "Carlsbad, CA", text: "Very responsive and the system really helped clear out the scale in my pipes. Great investment." },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [reviewIndex, setReviewIndex] = useState(0);

  const nextReview = useCallback(() => {
    setReviewIndex((i) => (i + 1) % reviews.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextReview, 4000);
    return () => clearInterval(interval);
  }, [nextReview]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      system: "",
      message: "",
      smsOptIn: false,
    },
  });

  const onSubmit = (_data: ContactFormData) => {
    // TODO: Send to Zoho CRM or backend endpoint
    setSubmitted(true);
  };

  const inputClass =
    "border border-gray-200 rounded-xl px-4 py-3 w-full text-sm focus:border-[#3a8fd4] focus:ring-2 focus:ring-[#3a8fd4]/10 outline-none transition-colors duration-200";
  const labelClass =
    "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block";

  return (
    <section className="pt-28 pb-20 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left: Form */}
        <div>
          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-2"
            style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
          >
            Let&apos;s talk water.
          </h1>
          <p className="text-gray-500 text-[15px] mb-8 leading-relaxed">
            Whether you have questions or you&apos;re ready to get started, we&apos;re here.
          </p>

          {submitted ? (
            <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-100">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-heading text-2xl font-bold text-gray-900 mb-3">Message sent!</h3>
              <p className="text-gray-500 leading-relaxed">
                We&apos;ll get back to you within 24 hours. In the meantime, call us at{" "}
                <a href="tel:8554092837" className="text-[#3a8fd4] font-semibold hover:underline">855-40-WATER</a>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelClass}>First Name</label>
                  <input id="firstName" type="text" className={inputClass} placeholder="John"
                    {...register("firstName", { required: "First name is required" })} />
                  {errors.firstName && <p className="text-brand-red text-xs mt-1">{errors.firstName.message}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>Last Name</label>
                  <input id="lastName" type="text" className={inputClass} placeholder="Doe"
                    {...register("lastName", { required: "Last name is required" })} />
                  {errors.lastName && <p className="text-brand-red text-xs mt-1">{errors.lastName.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>Email</label>
                <input id="email" type="email" className={inputClass} placeholder="john@example.com"
                  {...register("email", { required: "Email is required", pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Please enter a valid email" } })} />
                {errors.email && <p className="text-brand-red text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>Phone</label>
                <input id="phone" type="tel" className={inputClass} placeholder="(555) 123-4567" {...register("phone")} />
              </div>

              <div>
                <label htmlFor="system" className={labelClass}>System of Interest</label>
                <select id="system" className={inputClass} {...register("system")}>
                  <option value="">Select a system...</option>
                  <option value="reverse-osmosis">5-Stage Reverse Osmosis</option>
                  <option value="alkaline">6-Stage Alkaline</option>
                  <option value="whole-house">Whole House System</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>Message</label>
                <textarea id="message" rows={3} className={inputClass} placeholder="Tell us about your water concerns..." {...register("message")} />
              </div>

              <div className="flex items-start gap-3">
                <input id="smsOptIn" type="checkbox" className="mt-1 rounded border-gray-300 text-brand-red focus:ring-brand-red/30" {...register("smsOptIn")} />
                <label htmlFor="smsOptIn" className="text-sm text-gray-400 leading-relaxed">
                  I agree to receive SMS messages. Msg &amp; data rates may apply.
                </label>
              </div>

              <button type="submit" className="bg-brand-red text-white w-full py-3.5 rounded-full font-semibold hover:bg-[#b00e0e] transition-colors">
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right: Trust panel */}
        <div className="space-y-6 lg:pt-[88px]">
          {/* Phone numbers — prominent */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <a href="tel:8554092837" className="rounded-2xl p-6 text-center border border-[#3a8fd4]/15 hover:border-[#3a8fd4]/30 transition-colors group"
              style={{ background: "linear-gradient(135deg, rgba(58,143,212,0.08) 0%, rgba(58,143,212,0.04) 100%)" }}>
              <Phone className="w-6 h-6 text-[#3a8fd4] mx-auto mb-3" />
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-1">Sales & Inquiries</p>
              <p className="text-gray-900 text-xl font-bold group-hover:text-[#3a8fd4] transition-colors">855-40-WATER</p>
            </a>
            <a href="tel:8554090084" className="rounded-2xl p-6 text-center border border-[#3a8fd4]/15 hover:border-[#3a8fd4]/30 transition-colors group"
              style={{ background: "linear-gradient(135deg, rgba(58,143,212,0.08) 0%, rgba(58,143,212,0.04) 100%)" }}>
              <Wrench className="w-6 h-6 text-[#3a8fd4] mx-auto mb-3" />
              <p className="text-[11px] text-gray-400 uppercase tracking-wider font-semibold mb-1">Service & Maintenance</p>
              <p className="text-gray-900 text-xl font-bold group-hover:text-[#3a8fd4] transition-colors">855-409-0084</p>
            </a>
          </div>
          <div className="rounded-xl px-5 py-3 bg-gray-50 border border-gray-100 flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#3a8fd4]" />
            <p className="text-gray-900 text-sm font-semibold">24/7 Live Support Available</p>
          </div>

          {/* Trust stats */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3">
            {[
              { icon: <Shield className="w-4 h-4" />, value: "7-Year", label: "Warranty" },
              { icon: <Zap className="w-4 h-4" />, value: "$0", label: "Money Down" },
              { icon: <Award className="w-4 h-4" />, value: "30+", label: "Years Exp." },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl p-5 text-center"
                style={{
                  background: "rgba(58,143,212,0.06)",
                  border: "1px solid rgba(58,143,212,0.1)",
                }}
              >
                <div className="w-8 h-8 rounded-lg bg-[#3a8fd4]/10 text-[#3a8fd4] flex items-center justify-center mx-auto mb-2">
                  {s.icon}
                </div>
                <p className="text-lg font-bold text-gray-900">{s.value}</p>
                <p className="text-[11px] text-gray-400 font-medium">{s.label}</p>
              </div>
            ))}
          </div>

          {/* Review carousel */}
          <div className="rounded-2xl p-6 bg-gray-50 border border-gray-100 relative overflow-hidden" style={{ minHeight: "180px" }}>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-xs text-gray-400 font-medium">4.7 on Yelp</span>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={reviewIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-600 text-[14px] leading-relaxed mb-4">
                  &ldquo;{reviews[reviewIndex].text}&rdquo;
                </p>
                <p className="text-gray-900 text-sm font-semibold">
                  {reviews[reviewIndex].name}
                  <span className="text-gray-400 font-normal text-xs ml-2">{reviews[reviewIndex].location}</span>
                </p>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="flex gap-1.5 mt-4">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setReviewIndex(i)}
                  className={`rounded-full transition-transform duration-300 ${
                    i === reviewIndex ? "w-6 h-1.5 bg-[#3a8fd4]" : "w-1.5 h-1.5 bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Bottom note */}
          <p className="text-gray-400 text-xs text-center leading-relaxed">
            33K+ families served. Free water testing. Zero money down on all systems.
          </p>
        </div>
      </div>
    </section>
  );
}
