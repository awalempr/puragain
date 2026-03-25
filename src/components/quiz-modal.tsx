"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

const questions = [
  {
    question: "What's your biggest water concern?",
    options: [
      "My drinking water tastes or smells off",
      "Hard water is damaging my home and appliances",
      "My skin and hair feel dry and damaged after showering",
      "I'm not sure, I'd like my water tested first",
    ],
  },
  {
    question: "Which areas of your home matter most?",
    options: [
      "Kitchen only (drinking and cooking water)",
      "Bathrooms and showers",
      "The whole house, every single tap",
      "All of the above",
    ],
  },
  {
    question: "Have you noticed any of these at home?",
    options: [
      "White mineral buildup on faucets, dishes, or glassware",
      "A chlorine taste or smell from your tap or shower",
      "Both of the above",
      "None that I've noticed yet",
    ],
  },
  {
    question: "What's most important to you in your water?",
    options: [
      "I want the purest, most contaminant-free water possible",
      "I want alkaline, mineral-rich water for better daily hydration",
      "I want clean, safe water from every faucet in my home",
      "I'm not sure yet, I just know something needs to change",
    ],
  },
  {
    question: "How many people are in your household?",
    options: ["Just me (1 person)", "2-3 people", "4-5 people", "6 or more"],
  },
  {
    question: "Do you own your home?",
    options: [
      "Yes, I own my home",
      "I rent but my landlord allows modifications",
      "I rent and need a lower-commitment solution",
      "Not sure",
    ],
  },
  {
    question: "What's your monthly budget preference?",
    options: [
      "Most affordable option ($26/mo)",
      "Best value mid-range ($42/mo)",
      "Best system available, price is secondary ($74/mo)",
      "Not sure, show me all options",
    ],
  },
];

const products = [
  {
    name: "5-Stage Reverse Osmosis",
    price: "$26",
    period: "/mo*",
    href: "/products/reverse-osmosis",
    tag: "Most Popular",
  },
  {
    name: "6-Stage Alkaline",
    price: "$42",
    period: "/mo*",
    href: "/products/alkaline",
    tag: "Premium",
  },
  {
    name: "Whole House System",
    price: "$74",
    oldPrice: "$101",
    period: "/mo*",
    href: "/products/whole-house",
    tag: "Complete",
  },
];

export function QuizModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [direction, setDirection] = useState(1);
  const [contactInfo, setContactInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
  });
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const totalSteps = questions.length;
  const isContactStep = step >= totalSteps && !contactSubmitted;
  const isResults = step >= totalSteps && contactSubmitted;

  const handleSelect = useCallback(
    (option: string) => {
      const newAnswers = [...answers];
      newAnswers[step] = option;
      setAnswers(newAnswers);
      setDirection(1);
      setTimeout(() => setStep((s) => s + 1), 250);
    },
    [step, answers]
  );

  const goBack = () => {
    if (isContactStep) {
      setDirection(-1);
      setStep(totalSteps - 1);
    } else if (step > 0) {
      setDirection(-1);
      setStep((s) => s - 1);
    }
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setStep(0);
      setAnswers([]);
      setContactInfo({ firstName: "", lastName: "", email: "", phone: "", address: "" });
      setContactSubmitted(false);
    }, 300);
  };

  const currentLabel = isResults
    ? "Your Results"
    : isContactStep
    ? "Your Information"
    : `Question ${step + 1} of ${totalSteps}`;

  const progressWidth = isContactStep || isResults
    ? 100
    : ((step + 1) / (totalSteps + 1)) * 100;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={handleClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          <motion.div
            className="relative z-10 bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto shadow-2xl"
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-100 px-6 py-4 flex items-center justify-between z-10">
              <div className="flex items-center gap-3">
                {(step > 0 || isContactStep) && !isResults && (
                  <button
                    onClick={goBack}
                    className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:border-gray-300 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>
                )}
                <span className="text-sm text-gray-400 font-medium">
                  {currentLabel}
                </span>
              </div>
              <button
                onClick={handleClose}
                className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Progress bar */}
            {!isResults && (
              <div className="h-1 bg-gray-100">
                <motion.div
                  className="h-full bg-brand-red rounded-full"
                  animate={{ width: `${progressWidth}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            )}

            {/* Content */}
            <div className="px-6 py-8">
              <AnimatePresence mode="wait" custom={direction}>
                {!isContactStep && !isResults ? (
                  /* Quiz questions */
                  <motion.div
                    key={step}
                    custom={direction}
                    initial={{ x: direction * 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -direction * 40, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <h2 className="font-heading text-2xl font-bold text-navy mb-6" style={{ letterSpacing: "-0.02em" }}>
                      {questions[step].question}
                    </h2>
                    <div className="space-y-3">
                      {questions[step].options.map((option) => (
                        <button
                          key={option}
                          onClick={() => handleSelect(option)}
                          className={`w-full text-left p-4 rounded-xl border-2 transition-colors duration-200 text-sm
                            ${answers[step] === option
                              ? "border-brand-red bg-red-50 text-navy"
                              : "border-gray-150 bg-offwhite hover:border-[#3a8fd4]/30 hover:bg-blue-50/30 text-gray-700"
                            }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : isContactStep ? (
                  /* Contact info form */
                  <motion.div
                    key="contact"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -40, opacity: 0 }}
                    transition={{ duration: 0.25, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <h2 className="font-heading text-2xl font-bold text-navy mb-2" style={{ letterSpacing: "-0.02em" }}>
                      Almost there.
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">
                      Enter your details so we can match you with the right system.
                    </p>

                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="text-xs font-medium text-gray-500 mb-1.5 block">First Name</label>
                          <input
                            type="text"
                            required
                            value={contactInfo.firstName}
                            onChange={(e) => setContactInfo({ ...contactInfo, firstName: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3a8fd4] focus:ring-2 focus:ring-[#3a8fd4]/10 transition-colors"
                            placeholder="John"
                          />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-500 mb-1.5 block">Last Name</label>
                          <input
                            type="text"
                            required
                            value={contactInfo.lastName}
                            onChange={(e) => setContactInfo({ ...contactInfo, lastName: e.target.value })}
                            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3a8fd4] focus:ring-2 focus:ring-[#3a8fd4]/10 transition-colors"
                            placeholder="Smith"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-medium text-gray-500 mb-1.5 block">Email</label>
                        <input
                          type="email"
                          required
                          value={contactInfo.email}
                          onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3a8fd4] focus:ring-2 focus:ring-[#3a8fd4]/10 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-gray-500 mb-1.5 block">Phone Number</label>
                        <input
                          type="tel"
                          required
                          value={contactInfo.phone}
                          onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3a8fd4] focus:ring-2 focus:ring-[#3a8fd4]/10 transition-colors"
                          placeholder="(555) 123-4567"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-medium text-gray-500 mb-1.5 block">Installation Address</label>
                        <input
                          type="text"
                          required
                          value={contactInfo.address}
                          onChange={(e) => setContactInfo({ ...contactInfo, address: e.target.value })}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#3a8fd4] focus:ring-2 focus:ring-[#3a8fd4]/10 transition-colors"
                          placeholder="123 Main St, City, State, ZIP"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-brand-red text-white rounded-xl py-3.5 text-[15px] font-semibold hover:bg-[#b00e0e] transition-colors mt-2"
                      >
                        See My Results
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  /* Results */
                  <motion.div
                    key="results"
                    initial={{ x: 40, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                  >
                    <h2 className="font-heading text-2xl font-bold text-navy mb-2" style={{ letterSpacing: "-0.02em" }}>
                      Here are your options.
                    </h2>
                    <p className="text-gray-500 text-sm mb-6">
                      Based on your answers, here&apos;s what we recommend.
                    </p>

                    <div className="space-y-3 mb-6">
                      {products.map((p) => (
                        <Link
                          key={p.name}
                          href={p.href}
                          onClick={handleClose}
                          className="flex items-center justify-between p-4 rounded-xl border border-gray-150 bg-offwhite hover:border-[#3a8fd4]/30 hover:bg-blue-50/30 transition-colors duration-200 group"
                        >
                          <div>
                            <span className="text-brand-red text-[10px] font-bold uppercase tracking-widest">
                              {p.tag}
                            </span>
                            <p className="text-navy font-semibold text-sm mt-0.5">
                              {p.name}
                            </p>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="text-right">
                              {p.oldPrice && (
                                <span className="text-gray-400 text-xs line-through mr-1">
                                  {p.oldPrice}
                                </span>
                              )}
                              <span className="text-brand-red font-bold text-lg">
                                {p.price}
                              </span>
                              <span className="text-gray-400 text-xs">
                                {p.period}
                              </span>
                            </div>
                            <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#3a8fd4] group-hover:translate-x-0.5 transition-transform" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    <div className="bg-[#3a8fd4] rounded-xl p-5 text-center">
                      <p className="text-white text-sm font-medium mb-3">
                        Not sure? Our water experts are standing by.
                      </p>
                      <a
                        href="tel:8554092837"
                        className="inline-flex items-center gap-2 bg-brand-red text-white rounded-full px-6 py-2.5 text-sm font-semibold hover:bg-[#b00e0e] transition-colors"
                      >
                        <Phone className="w-4 h-4" /> Call 855-40-WATER
                      </a>
                      <p className="text-white/50 text-xs mt-2">
                        24/7 Live Support Available
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
