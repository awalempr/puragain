"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pills = [
  // These start near the TOP of the section (which overlaps the hero water).
  // "top" is where they START (floating in water). They fall to "endTop" (settled at bottom).
  { label: "Lead",          bg: "#4a5568", left: "10%", top: "5%",  endTop: "72%", delay: 0.0,  r: -3, size: "lg" },
  { label: "PFAS",          bg: "#cc1010", left: "28%", top: "8%",  endTop: "68%", delay: 0.06, r: 2,  size: "lg" },
  { label: "Chlorine",      bg: "#3a8fd4", left: "50%", top: "3%",  endTop: "74%", delay: 0.1,  r: -5, size: "lg" },
  { label: "Bacteria",      bg: "#2d7a4f", left: "72%", top: "10%", endTop: "70%", delay: 0.14, r: 4,  size: "lg" },
  { label: "Arsenic",       bg: "#7a4a2a", left: "5%",  top: "15%", endTop: "82%", delay: 0.2,  r: 6,  size: "md" },
  { label: "Pesticides",    bg: "#2a7a70", left: "20%", top: "18%", endTop: "80%", delay: 0.24, r: -3, size: "md" },
  { label: "Microplastics", bg: "#9a3a5a", left: "40%", top: "12%", endTop: "78%", delay: 0.18, r: 5,  size: "lg" },
  { label: "Mercury",       bg: "#3a5a6a", left: "62%", top: "16%", endTop: "84%", delay: 0.28, r: -4, size: "md" },
  { label: "Fluoride",      bg: "#b07d2a", left: "80%", top: "20%", endTop: "76%", delay: 0.32, r: 7,  size: "md" },
  { label: "Nitrates",      bg: "#5a3a8a", left: "15%", top: "22%", endTop: "88%", delay: 0.36, r: -8, size: "sm" },
  { label: "Sediment",      bg: "#8a6a3a", left: "48%", top: "25%", endTop: "86%", delay: 0.4,  r: 5,  size: "sm" },
  { label: "Rust",          bg: "#9a4a1a", left: "70%", top: "24%", endTop: "90%", delay: 0.38, r: -6, size: "sm" },
];

const sizeMap = {
  lg: { fontSize: "18px", padding: "14px 34px", fontWeight: 700 },
  md: { fontSize: "14px", padding: "10px 26px", fontWeight: 600 },
  sm: { fontSize: "12px", padding: "8px 20px", fontWeight: 500 },
};

export function ContaminantPills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <>
      {/*
        This section overlaps the hero by 200px (negative margin).
        The top 200px visually sits inside the hero's water zone.
        Pills start there (floating in water), then fall to the bottom on scroll.
        Background is transparent at top (hero water shows through) → solid blue at bottom.
      */}
      <section
        ref={ref}
        className="relative w-full overflow-hidden"
        style={{
          marginTop: "-200px",
          paddingTop: "0",
          height: "650px",
          background: "linear-gradient(to bottom, transparent 0%, rgba(47,94,143,0.3) 20%, #3672a3 45%, #4082b5 70%, #4a8dbe 100%)",
          zIndex: 5,
        }}
      >
        <div className="relative mx-auto max-w-[1100px] h-full px-6">
          {pills.map((p) => {
            const s = sizeMap[p.size as keyof typeof sizeMap];
            return (
              <motion.div
                key={p.label}
                className="absolute"
                style={{ left: p.left }}
                initial={{ top: p.top, opacity: 0.4, scale: 0.6 }}
                animate={
                  inView
                    ? { top: p.endTop, opacity: 1, scale: 1, rotate: p.r }
                    : { top: p.top, opacity: 0.4, scale: 0.6, rotate: p.r * 3 }
                }
                transition={{
                  type: "spring",
                  damping: 15,
                  stiffness: 60,
                  mass: p.size === "lg" ? 1.4 : p.size === "md" ? 1.0 : 0.7,
                  delay: p.delay,
                  opacity: { duration: 0.4, delay: p.delay },
                  scale: { duration: 0.6, delay: p.delay, ease: [0.25, 1, 0.5, 1] },
                }}
              >
                <div
                  style={{
                    backgroundColor: p.bg,
                    color: "#fff",
                    fontSize: s.fontSize,
                    fontWeight: s.fontWeight,
                    letterSpacing: "0.03em",
                    padding: s.padding,
                    borderRadius: "999px",
                    whiteSpace: "nowrap",
                    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                  }}
                >
                  {p.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>
      <div className="w-full h-1 bg-white" />
    </>
  );
}
