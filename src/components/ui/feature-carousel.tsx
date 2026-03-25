"use client";

import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Droplets, DollarSign, Wrench, ShowerHead } from "lucide-react";
import { cn } from "@/lib/utils";

const FEATURES = [
  {
    id: "exposure",
    label: "Ongoing Exposure",
    icon: Droplets,
    image: "/images/dirty-water-glass.jpeg",
    description: "Chlorine, lead, PFAS, and heavy metals accumulate in your body with every glass of tap water.",
  },
  {
    id: "cost",
    label: "Money Wasted",
    icon: DollarSign,
    image: "/images/money-wasted.jpeg",
    description: "The average family spends $600+ per year on plastic bottles that still aren't pure.",
  },
  {
    id: "damage",
    label: "Appliance Damage",
    icon: Wrench,
    image: "/images/dirty-sink.jpeg",
    description: "Hard water scale silently destroys your water heater, dishwasher, and plumbing from the inside.",
  },
  {
    id: "skin",
    label: "Skin & Hair Damage",
    icon: ShowerHead,
    image: "/images/hair-skin.jpeg",
    description: "Chlorinated shower water strips natural oils daily, causing dryness and irritation.",
  },
];

const AUTO_PLAY_INTERVAL = 4000;
const ITEM_HEIGHT = 65;

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export function FeatureCarousel() {
  const [step, setStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const currentIndex =
    ((step % FEATURES.length) + FEATURES.length) % FEATURES.length;

  const nextStep = useCallback(() => {
    setStep((prev) => prev + 1);
  }, []);

  const handleChipClick = (index: number) => {
    const diff = (index - currentIndex + FEATURES.length) % FEATURES.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextStep, AUTO_PLAY_INTERVAL);
    return () => clearInterval(interval);
  }, [nextStep, isPaused]);

  const getCardStatus = (index: number) => {
    const diff = index - currentIndex;
    const len = FEATURES.length;
    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;
    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  return (
    <div className="w-full max-w-[1100px] mx-auto">
      <div className="relative overflow-hidden rounded-[2.5rem] lg:rounded-[3rem] flex flex-col lg:flex-row min-h-[500px] lg:aspect-[2/1] border border-[#3a8fd4]/10 shadow-[0_4px_30px_rgba(58,143,212,0.08)]">
        {/* Left: scrolling labels */}
        <div className="w-full lg:w-[38%] min-h-[280px] lg:h-full relative z-30 flex flex-col items-start justify-center overflow-hidden px-8 lg:pl-12 bg-[#3a8fd4]">
          <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#3a8fd4] via-[#3a8fd4]/80 to-transparent z-40" />
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#3a8fd4] via-[#3a8fd4]/80 to-transparent z-40" />
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {FEATURES.map((feature, index) => {
              const isActive = index === currentIndex;
              const distance = index - currentIndex;
              const wrappedDistance = wrap(
                -(FEATURES.length / 2),
                FEATURES.length / 2,
                distance
              );

              return (
                <motion.div
                  key={feature.id}
                  style={{ height: ITEM_HEIGHT, width: "fit-content" }}
                  animate={{
                    y: wrappedDistance * ITEM_HEIGHT,
                    opacity: 1 - Math.abs(wrappedDistance) * 0.3,
                  }}
                  transition={{ type: "spring", stiffness: 90, damping: 22, mass: 1 }}
                  className="absolute flex items-center justify-start"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    className={cn(
                      "relative flex items-center gap-3 px-6 py-3 rounded-full transition-colors duration-500 text-left group border",
                      isActive
                        ? "bg-white text-[#3a8fd4] border-white z-10"
                        : "bg-transparent text-white/50 border-white/15 hover:border-white/30 hover:text-white/80"
                    )}
                  >
                    <feature.icon
                      className={cn(
                        "w-5 h-5 transition-colors duration-500",
                        isActive ? "text-[#3a8fd4]" : "text-white/40"
                      )}
                    />
                    <span className="font-semibold text-[15px] md:text-[17px] tracking-tight whitespace-nowrap">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Right: image cards */}
        <div className="flex-1 min-h-[400px] lg:h-full relative bg-gray-50 flex items-center justify-center py-12 px-6 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-[#3a8fd4]/10">
          <div className="relative w-full max-w-[360px] aspect-[4/5] flex items-center justify-center">
            {FEATURES.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -80 : isNext ? 80 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.88 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.35 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                  }}
                  transition={{ type: "spring", stiffness: 260, damping: 25, mass: 0.8 }}
                  className="absolute inset-0 rounded-[2rem] overflow-hidden border-4 border-white bg-white origin-center"
                  style={{ pointerEvents: isActive ? "auto" : "none" }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={feature.image}
                    alt={feature.label}
                    className={cn(
                      "w-full h-full object-cover transition-colors duration-700",
                      isActive ? "grayscale-0 blur-0" : "grayscale blur-[2px] brightness-75"
                    )}
                  />

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end pointer-events-none"
                      >
                        <p className="text-white font-medium text-lg leading-snug drop-shadow-md tracking-tight">
                          {feature.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeatureCarousel;
