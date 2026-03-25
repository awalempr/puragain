"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { end: 77, suffix: "M+", line1: "Americans exposed", line2: "to contaminated water" },
  { end: 600, prefix: "$", suffix: "+", line1: "Spent on bottled water", line2: "per family, per year" },
  { end: 99, suffix: "%", line1: "Of contaminants removed", line2: "by our systems" },
];

function CountUp({ end, prefix = "", suffix = "", trigger }: { end: number; prefix?: string; suffix?: string; trigger: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let frame: number;
    const duration = 1800;
    const start = performance.now();

    const animate = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(end * eased));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [trigger, end]);

  return <>{prefix}{count}{suffix}</>;
}

export function AnimatedStats() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div
      ref={ref}
      className="mt-20 rounded-[28px] py-10 px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0"
      style={{
        background: "linear-gradient(135deg, rgba(58,143,212,0.12) 0%, rgba(58,143,212,0.06) 50%, rgba(58,143,212,0.1) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(58,143,212,0.15)",
        boxShadow: "0 8px 40px rgba(58,143,212,0.1), inset 0 1px 0 rgba(255,255,255,0.6), inset 0 -1px 0 rgba(58,143,212,0.08)",
      }}
    >
      {stats.map((item, i) => (
        <motion.div
          key={item.line1}
          className="text-center relative"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ duration: 0.6, delay: i * 0.15, ease: [0.25, 1, 0.5, 1] }}
        >
          {/* Divider between stats */}
          {i > 0 && (
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-12 bg-[#3a8fd4]/15 hidden md:block" />
          )}
          <div className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-[#3a8fd4] tracking-tight mb-2 md:mb-3">
            <CountUp end={item.end} prefix={item.prefix} suffix={item.suffix} trigger={inView} />
          </div>
          <p className="text-gray-500 text-[13px] leading-snug">{item.line1}</p>
          <p className="text-gray-400 text-[13px] leading-snug">{item.line2}</p>
        </motion.div>
      ))}
    </div>
  );
}
