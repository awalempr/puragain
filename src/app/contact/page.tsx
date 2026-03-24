"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { Phone, Wrench, Clock } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  system: string;
  message: string;
  smsOptIn: boolean;
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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

  const onSubmit = (data: ContactFormData) => {
    console.log(data);
    setSubmitted(true);
  };

  const inputClass =
    "border border-gray-200 rounded-xl px-4 py-3 w-full text-sm focus:border-[#3a8fd4] focus:ring-2 focus:ring-[#3a8fd4]/10 outline-none transition-colors duration-200";
  const labelClass =
    "text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 block";

  return (
    <section className="py-20 px-6">
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left: Form */}
        <div>
          {submitted ? (
            <div className="bg-offwhite rounded-2xl p-12 text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3
                className="font-heading text-2xl font-bold text-navy mb-3"
                style={{ letterSpacing: "-0.03em" }}
              >
                Message sent!
              </h3>
              <p className="text-gray-500" style={{ lineHeight: 1.7 }}>
                We&apos;ll get back to you within 24 hours. In the meantime,
                feel free to call us at{" "}
                <a
                  href="tel:8554092837"
                  className="text-brand-blue font-semibold hover:underline"
                >
                  855-409-2837
                </a>
                .
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className={labelClass}>
                    First Name
                  </label>
                  <input
                    id="firstName"
                    type="text"
                    className={inputClass}
                    placeholder="John"
                    {...register("firstName", {
                      required: "First name is required",
                    })}
                  />
                  {errors.firstName && (
                    <p className="text-brand-red text-xs mt-1">
                      {errors.firstName.message}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="lastName" className={labelClass}>
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    type="text"
                    className={inputClass}
                    placeholder="Doe"
                    {...register("lastName", {
                      required: "Last name is required",
                    })}
                  />
                  {errors.lastName && (
                    <p className="text-brand-red text-xs mt-1">
                      {errors.lastName.message}
                    </p>
                  )}
                </div>
              </div>

              <div>
                <label htmlFor="email" className={labelClass}>
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={inputClass}
                  placeholder="john@example.com"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Please enter a valid email",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-brand-red text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={inputClass}
                  placeholder="(555) 123-4567"
                  {...register("phone")}
                />
              </div>

              <div>
                <label htmlFor="system" className={labelClass}>
                  System of Interest
                </label>
                <select
                  id="system"
                  className={inputClass}
                  {...register("system")}
                >
                  <option value="">Select a system...</option>
                  <option value="reverse-osmosis">
                    5-Stage Reverse Osmosis
                  </option>
                  <option value="alkaline">6-Stage Alkaline</option>
                  <option value="whole-house">Whole House Filtersorb</option>
                  <option value="not-sure">Not Sure Yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={inputClass}
                  placeholder="Tell us about your water concerns..."
                  {...register("message")}
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="smsOptIn"
                  type="checkbox"
                  className="mt-1 rounded border-gray-300 text-brand-red focus:ring-brand-red/30"
                  {...register("smsOptIn")}
                />
                <label
                  htmlFor="smsOptIn"
                  className="text-sm text-gray-500"
                  style={{ lineHeight: 1.6 }}
                >
                  I agree to receive SMS messages. Msg &amp; data rates may
                  apply.
                </label>
              </div>

              <button
                type="submit"
                className="bg-brand-red text-white w-full py-3.5 rounded-full font-semibold hover:bg-[#b00e0e] active:bg-[#a00c0c] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-red/30"
              >
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Right: Contact info */}
        <div>
          <h2
            className="font-heading text-3xl lg:text-4xl font-bold text-navy mb-4"
            style={{ letterSpacing: "-0.03em" }}
          >
            Let&apos;s talk water.
          </h2>
          <p className="text-gray-500 mb-8" style={{ lineHeight: 1.7 }}>
            Whether you have questions or you&apos;re ready to get started,
            we&apos;re here.
          </p>

          <div className="space-y-4 mb-8">
            <div className="bg-offwhite rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 border border-gray-200">
                <Phone className="w-5 h-5 text-brand-red" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Sales
                </p>
                <a
                  href="tel:8554092837"
                  className="text-navy font-semibold hover:text-brand-red transition-colors duration-200"
                >
                  855-409-2837
                </a>
              </div>
            </div>

            <div className="bg-offwhite rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 border border-gray-200">
                <Wrench className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Service
                </p>
                <a
                  href="tel:8554090084"
                  className="text-navy font-semibold hover:text-brand-blue transition-colors duration-200"
                >
                  855-409-0084
                </a>
              </div>
            </div>

            <div className="bg-offwhite rounded-xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shrink-0 border border-gray-200">
                <Clock className="w-5 h-5 text-navy" />
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                  Availability
                </p>
                <p className="text-navy font-semibold">24/7 Live Support</p>
              </div>
            </div>
          </div>

          <Link
            href="/#faq"
            className="text-brand-blue text-sm font-semibold hover:underline transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/30 rounded"
          >
            Or take the quiz to find your system first &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
