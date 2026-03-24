"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const pills = [
  { label: "Lead",          bg: "#4a5568", left: "12%", bottom: "52%", delay: 0.0,  r: -3, size: "lg" },
  { label: "PFAS",          bg: "#cc1010", left: "32%", bottom: "48%", delay: 0.06, r: 2,  size: "lg" },
  { label: "Chlorine",      bg: "#3a8fd4", left: "55%", bottom: "50%", delay: 0.1,  r: -4, size: "lg" },
  { label: "Bacteria",      bg: "#2d7a4f", left: "75%", bottom: "54%", delay: 0.14, r: 5,  size: "lg" },
  { label: "Arsenic",       bg: "#7a4a2a", left: "4%",  bottom: "36%", delay: 0.18, r: -2, size: "md" },
  { label: "Pesticides",    bg: "#2a7a70", left: "22%", bottom: "34%", delay: 0.22, r: 6,  size: "md" },
  { label: "Microplastics", bg: "#9a3a5a", left: "42%", bottom: "32%", delay: 0.2,  r: -4, size: "lg" },
  { label: "Mercury",       bg: "#3a5a6a", left: "64%", bottom: "36%", delay: 0.26, r: 3,  size: "md" },
  { label: "Fluoride",      bg: "#b07d2a", left: "82%", bottom: "30%", delay: 0.32, r: -7, size: "md" },
  { label: "Nitrates",      bg: "#5a3a8a", left: "16%", bottom: "18%", delay: 0.36, r: 8,  size: "sm" },
  { label: "Sediment",      bg: "#8a6a3a", left: "50%", bottom: "16%", delay: 0.4,  r: -5, size: "sm" },
  { label: "Rust",          bg: "#9a4a1a", left: "78%", bottom: "14%", delay: 0.38, r: 6,  size: "sm" },
];

const sizeMap = {
  lg: { fontSize: "18px", padding: "14px 34px", fontWeight: 700 },
  md: { fontSize: "14px", padding: "10px 26px", fontWeight: 600 },
  sm: { fontSize: "12px", padding: "8px 20px", fontWeight: 500 },
};

export function ContaminantPills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <>
      <section
        ref={ref}
        className="relative w-full overflow-hidden -mt-px"
        style={{
          background: "linear-gradient(to bottom, #2f5e8f 0%, #3672a3 30%, #4082b5 60%, #4a8dbe 100%)",
          height: "460px",
        }}
      >
        <div className="relative mx-auto max-w-[1100px] h-full px-6">
          {pills.map((p) => {
            const s = sizeMap[p.size as keyof typeof sizeMap];
            return (
              <motion.div
                key={p.label}
                className="absolute"
                style={{ left: p.left, bottom: p.bottom }}
                initial={{ y: -700, opacity: 0, rotate: p.r * 4, scale: 0.7 }}
                animate={
                  inView
                    ? { y: 0, opacity: 1, rotate: p.r, scale: 1 }
                    : undefined
                }
                transition={{
                  type: "spring",
                  damping: 18,
                  stiffness: 100,
                  mass: p.size === "lg" ? 1.2 : p.size === "md" ? 0.9 : 0.6,
                  delay: p.delay,
                  opacity: { duration: 0.25, delay: p.delay },
                  scale: { duration: 0.5, delay: p.delay, ease: [0.25, 1, 0.5, 1] },
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
