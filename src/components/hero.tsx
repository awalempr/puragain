"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { QuizModal } from "@/components/quiz-modal";
import { ChevronDown } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, staggerChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] },
  },
};

export function Hero() {
  const [quizOpen, setQuizOpen] = useState(false);
  const [phase, setPhase] = useState<"filling" | "settled" | "content">("filling");
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const targetMouseRef = useRef({ x: 0, y: 0 });
  const fillStartRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const SETTLED_LINE = 0.6;
    const FILL_DURATION = 2200;
    const mouseInfluence = 50;
    const influenceRadius = 400;
    const smoothing = 0.08;

    fillStartRef.current = performance.now();

    setTimeout(() => setPhase("settled"), FILL_DURATION + 200);
    setTimeout(() => {
      setPhase("content");
      window.dispatchEvent(new CustomEvent("hero-content-ready"));
    }, FILL_DURATION + 600);

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const recenterMouse = () => {
      const center = { x: window.innerWidth / 2, y: window.innerHeight * SETTLED_LINE };
      mouseRef.current = { ...center };
      targetMouseRef.current = { ...center };
    };

    const handleResize = () => { resizeCanvas(); recenterMouse(); };
    const handleMouseMove = (e: MouseEvent) => { targetMouseRef.current = { x: e.clientX, y: e.clientY }; };
    const handleMouseLeave = () => recenterMouse();

    resizeCanvas();
    recenterMouse();

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    const animate = () => {
      time += 1;
      const now = performance.now();
      const elapsed = now - fillStartRef.current;

      mouseRef.current.x += (targetMouseRef.current.x - mouseRef.current.x) * smoothing;
      mouseRef.current.y += (targetMouseRef.current.y - mouseRef.current.y) * smoothing;

      const dpr = window.devicePixelRatio || 1;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const width = w();
      const height = h();

      const fillProgress = Math.min(elapsed / FILL_DURATION, 1);
      const eased = 1 - Math.pow(1 - fillProgress, 3);
      const targetLevel = 1.05 - (1.05 - SETTLED_LINE) * eased;

      let bounce = 0;
      if (fillProgress >= 1) {
        const bounceElapsed = elapsed - FILL_DURATION;
        const bounceDamp = Math.exp(-bounceElapsed * 0.003);
        bounce = Math.sin(bounceElapsed * 0.008) * 15 * bounceDamp;
      }

      const waterY = height * targetLevel + bounce;
      const waveIntensity = eased;
      const turbulence = fillProgress < 1 ? (1 - fillProgress) * 20 : 0;

      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);

      const wavePoints: number[] = [];
      for (let x = 0; x <= width; x += 3) {
        const dx = x - mouseRef.current.x;
        const dy = waterY - mouseRef.current.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - distance / influenceRadius);
        const mouseEffect = influence * mouseInfluence * Math.sin(time * 0.0015 + x * 0.008) * waveIntensity;
        const y =
          waterY +
          Math.sin(x * 0.004 + time * 0.002) * 18 * waveIntensity +
          Math.sin(x * 0.007 + time * 0.003) * 10 * waveIntensity +
          Math.sin(x * 0.002 + time * 0.001) * 25 * waveIntensity +
          Math.sin(x * 0.012 + time * 0.005) * turbulence +
          mouseEffect;
        wavePoints.push(y);
      }

      const waterGradient = ctx.createLinearGradient(0, waterY - 30, 0, height);
      waterGradient.addColorStop(0, "rgba(26, 107, 181, 0.15)");
      waterGradient.addColorStop(0.15, "rgba(26, 107, 181, 0.3)");
      waterGradient.addColorStop(0.4, "rgba(26, 107, 181, 0.5)");
      waterGradient.addColorStop(0.65, "rgba(20, 80, 140, 0.7)");
      waterGradient.addColorStop(0.85, "rgba(20, 80, 140, 0.85)");
      waterGradient.addColorStop(1, "#2f5e8f");

      ctx.beginPath();
      ctx.moveTo(0, wavePoints[0]);
      for (let i = 1; i < wavePoints.length; i++) ctx.lineTo(i * 3, wavePoints[i]);
      ctx.lineTo(width, height);
      ctx.lineTo(0, height);
      ctx.closePath();
      ctx.fillStyle = waterGradient;
      ctx.fill();

      ctx.beginPath();
      ctx.moveTo(0, wavePoints[0]);
      for (let i = 1; i < wavePoints.length; i++) ctx.lineTo(i * 3, wavePoints[i]);
      ctx.lineWidth = 2;
      ctx.strokeStyle = `rgba(26, 107, 181, ${0.5 * waveIntensity})`;
      ctx.shadowBlur = 20;
      ctx.shadowColor = `rgba(26, 107, 181, ${0.3 * waveIntensity})`;
      ctx.stroke();
      ctx.shadowBlur = 0;

      if (waveIntensity > 0.3) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 3) {
          const i = Math.floor(x / 3);
          const offsetY = (wavePoints[i] ?? waterY) + 14 + Math.sin(x * 0.005 + time * 0.0025) * 6 * waveIntensity;
          if (x === 0) ctx.moveTo(x, offsetY);
          else ctx.lineTo(x, offsetY);
        }
        ctx.lineWidth = 1;
        ctx.strokeStyle = `rgba(26, 107, 181, ${0.15 * waveIntensity})`;
        ctx.stroke();
      }

      if (waveIntensity > 0.5) {
        ctx.globalAlpha = 0.035 * waveIntensity;
        for (let i = 0; i < 5; i++) {
          const cx = (Math.sin(time * 0.001 + i * 1.8) * 0.5 + 0.5) * width;
          const cy = waterY + 60 + (Math.cos(time * 0.0015 + i * 2.2) * 0.5 + 0.5) * (height - waterY - 80);
          const cr = 80 + Math.sin(time * 0.002 + i) * 30;
          const caustic = ctx.createRadialGradient(cx, cy, 0, cx, cy, cr);
          caustic.addColorStop(0, "rgba(150, 210, 255, 1)");
          caustic.addColorStop(1, "rgba(150, 210, 255, 0)");
          ctx.fillStyle = caustic;
          ctx.fillRect(cx - cr, cy - cr, cr * 2, cr * 2);
        }
        ctx.globalAlpha = 1;
      }

      animationId = window.requestAnimationFrame(animate);
    };

    animationId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      <section className="relative isolate flex min-h-screen w-full items-center justify-center bg-white">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center px-6 pb-20 md:pb-32 pt-16 text-center" style={{ marginTop: "-6vh" }}>
          {phase === "content" && (
            <motion.div variants={containerVariants} initial="hidden" animate="visible" className="w-full">
              <motion.div
                variants={itemVariants}
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200/60 bg-white/80 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.15em] text-gray-500 backdrop-blur-sm"
              >
                Family owned · 30+ years · 5,000+ families served
              </motion.div>

              <motion.h1
                variants={itemVariants}
                className="font-heading mb-6 text-4xl font-bold text-navy md:text-5xl lg:text-6xl"
                style={{ letterSpacing: "-0.03em", lineHeight: 1.1 }}
              >
                Your family deserves<br />
                <span className="text-brand-blue">water you can trust.</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className="mx-auto mb-10 max-w-xl text-lg text-gray-600 md:text-xl font-medium"
                style={{ lineHeight: 1.6 }}
              >
                We install home filtration systems that remove 99% of contaminants. Providing you clean, safe and better tasting water with lifetime service included.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <button
                  onClick={() => setQuizOpen(true)}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-red px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-red-500/20
                             hover:bg-[#b00e0e] active:scale-[0.97] transition-colors duration-200"
                >
                  What&apos;s In My Water?
                </button>
                <Link
                  href="/#systems"
                  className="inline-flex items-center gap-2 rounded-full border-2 border-gray-200 px-8 py-4 text-[15px] font-semibold text-navy
                             hover:border-brand-blue hover:text-brand-blue active:scale-[0.97] transition-colors duration-200"
                >
                  Pick My Filtration
                </Link>
              </motion.div>
            </motion.div>
          )}
        </div>

        {phase === "content" && (
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.6 }}
          >
            <div className="animate-bounce">
              <ChevronDown className="w-5 h-5 text-white/60" />
            </div>
          </motion.div>
        )}
      </section>

      <QuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
