"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { getTracking } from "@/lib/tracking";
import { getRecaptchaToken } from "@/lib/recaptcha";
import { CheckCircle2 } from "lucide-react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company_website?: string; // honeypot
}

export function CityLeadForm({ city }: { city: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ defaultValues: { firstName: "", lastName: "", email: "", phone: "" } });

  const onSubmit = async (data: FormData) => {
    setError(false);
    try {
      const recaptchaToken = await getRecaptchaToken("city_lead");
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          city,
          system: "not-sure",
          message: `Free in-home water test request from the ${city}, CA page.`,
          source: "city",
          ...getTracking(),
          recaptchaToken,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setSubmitted(true);
    } catch {
      setError(true);
    }
  };

  const input =
    "border border-gray-200 rounded-xl px-4 py-3 w-full text-sm focus:border-[#3a8fd4] focus:ring-2 focus:ring-[#3a8fd4]/10 outline-none transition-colors duration-200";

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-8 text-center">
        <CheckCircle2 className="w-12 h-12 text-green-600 mx-auto mb-4" />
        <h3 className="font-heading text-2xl font-bold text-navy mb-2">Request received!</h3>
        <p className="text-gray-500 leading-relaxed">
          A {city} water specialist will reach out within 24 hours to schedule your free in-home
          water test.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-gray-100 shadow-[0_8px_40px_rgba(0,0,0,0.06)] p-7">
      <h3 className="font-heading text-2xl font-bold text-navy mb-1">Get your free water test</h3>
      <p className="text-sm text-gray-500 mb-5">
        Free, in-home, no obligation &middot; serving {city}
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <input className={input} placeholder="First name" aria-label="First name"
            {...register("firstName", { required: true })} />
          <input className={input} placeholder="Last name" aria-label="Last name"
            {...register("lastName", { required: true })} />
        </div>
        <input className={input} type="email" placeholder="Email" aria-label="Email"
          {...register("email", { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />
        <input className={input} type="tel" placeholder="Phone" aria-label="Phone"
          {...register("phone", { required: true })} />
        {(errors.firstName || errors.lastName || errors.email || errors.phone) && (
          <p className="text-brand-red text-xs">Please fill in your name, email, and phone.</p>
        )}
        {/* honeypot */}
        <input type="text" tabIndex={-1} autoComplete="off" aria-hidden="true"
          className="absolute left-[-9999px] h-px w-px opacity-0" {...register("company_website")} />
        <button type="submit" disabled={isSubmitting}
          className="w-full rounded-full bg-brand-red px-6 py-3.5 text-[15px] font-semibold text-white transition-colors hover:bg-[#b00e0e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/50 active:scale-[0.98] disabled:opacity-60">
          {isSubmitting ? "Sending..." : "Book My Free Water Test"}
        </button>
        {error && (
          <p className="text-brand-red text-sm text-center">
            Something went wrong &mdash; please try again or email support@puragain.com.
          </p>
        )}
        <p className="text-[11px] text-gray-400 text-center leading-relaxed">
          By submitting, you agree we may contact you about your request. No obligation.
        </p>
      </form>
    </div>
  );
}
