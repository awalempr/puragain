"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, Menu as MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, MenuItem, ProductItem, HoveredLink } from "@/components/ui/navbar-menu";
import { QuizModal } from "@/components/quiz-modal";

export default function Navbar() {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [quizOpen, setQuizOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!isHome) {
      setVisible(true);
      return;
    }
    const onReady = () => setVisible(true);
    window.addEventListener("hero-content-ready", onReady);
    return () => window.removeEventListener("hero-content-ready", onReady);
  }, [isHome]);

  return (
    <>
      <motion.header
        initial={isHome ? { y: -80, opacity: 0 } : { y: 0, opacity: 1 }}
        animate={visible ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <div className="mx-auto flex h-16 max-w-[1300px] items-center px-4 sm:px-6">
          {/* Left — Logo in white pill */}
          <Link href="/" className="relative shrink-0 mr-auto bg-white/90 backdrop-blur-xl rounded-full px-5 py-2.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-white/50">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/brand/logo.png"
              alt="Puragain Water"
              className="h-5 w-auto object-contain"
            />
          </Link>

          {/* Center — Glassmorphism pill nav (desktop) */}
          <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 text-gray-600">
            <Menu setActive={setActive}>
              <MenuItem setActive={setActive} active={active} item="Water Filtration Systems">
                <div className="text-sm grid grid-cols-3 gap-6 p-4">
                  <ProductItem
                    title="Reverse Osmosis"
                    description="5-stage system · $26/mo"
                    href="/products/reverse-osmosis"
                    src="/images/products/ro-lifestyle.jpeg"
                  />
                  <ProductItem
                    title="Alkaline System"
                    description="6-stage with minerals · $42/mo"
                    href="/products/alkaline"
                    src="/images/hero-lifestyle.jpeg"
                  />
                  <ProductItem
                    title="Whole House"
                    description="Complete home · $74/mo"
                    href="/products/whole-house"
                    src="/images/products/whole-house-lifestyle.jpeg"
                  />
                </div>
              </MenuItem>
              <div className="relative py-2">
                <Link href="/reviews" className="cursor-pointer text-[13px] font-medium text-inherit hover:opacity-[0.9]">
                  Reviews
                </Link>
              </div>
              <MenuItem setActive={setActive} active={active} item="Contact">
                <div className="flex flex-col space-y-3 text-sm min-w-[180px]">
                  <HoveredLink href="/contact">Send a Message</HoveredLink>
                  <a href="tel:8554092837" className="text-neutral-700 hover:text-black">
                    Sales: 855-409-2837
                  </a>
                  <a href="tel:8554090084" className="text-neutral-700 hover:text-black">
                    Service: 855-409-0084
                  </a>
                </div>
              </MenuItem>
              <div className="relative py-2">
                <p className="cursor-pointer text-[13px] font-medium text-inherit hover:opacity-[0.9]">
                  <a href="/#faq">FAQ</a>
                </p>
              </div>
            </Menu>
          </div>

          {/* Right — Phone + CTA in matching pill */}
          <div className="hidden lg:flex items-center gap-3 ml-auto bg-white/90 backdrop-blur-xl rounded-full px-2 py-1.5 shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-white/50">
            <a
              href="tel:8554092837"
              className="flex items-center gap-1.5 text-[13px] text-gray-500 hover:text-gray-900 transition-colors px-3"
            >
              <Phone size={13} />
              855-409-2837
            </a>
            <button
              onClick={() => setQuizOpen(true)}
              className="inline-flex items-center rounded-full bg-brand-red px-5 py-2 text-[13px] font-semibold text-white transition-colors hover:bg-[#b00e0e]"
            >
              Free Water Test
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded p-2 text-gray-600 hover:text-gray-900 transition-colors lg:hidden ml-auto"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={22} /> : <MenuIcon size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-white pt-20 px-6 pb-8 overflow-y-auto lg:hidden"
          >
            <div className="space-y-1">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 mt-4">Systems</p>
              {[
                { name: "5-Stage Reverse Osmosis", href: "/products/reverse-osmosis" },
                { name: "6-Stage Alkaline System", href: "/products/alkaline" },
                { name: "Whole House Filtersorb", href: "/products/whole-house" },
              ].map((p) => (
                <Link
                  key={p.href}
                  href={p.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-lg font-medium text-navy border-b border-gray-100"
                >
                  {p.name}
                </Link>
              ))}

              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 mt-8">Company</p>
              {[
                { name: "Reviews", href: "/reviews" },
                { name: "Contact", href: "/contact" },
                { name: "FAQ", href: "/#faq" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="block py-3 text-lg font-medium text-navy border-b border-gray-100"
                >
                  {l.name}
                </Link>
              ))}
            </div>

            <div className="mt-10 space-y-3">
              <a href="tel:8554092837" className="flex items-center gap-2 text-gray-500 text-sm">
                <Phone size={14} /> Sales: 855-409-2837
              </a>
              <a href="tel:8554090084" className="flex items-center gap-2 text-gray-500 text-sm">
                <Phone size={14} /> Service: 855-409-0084
              </a>
            </div>

            <button
              onClick={() => { setMobileOpen(false); setTimeout(() => setQuizOpen(true), 300); }}
              className="mt-6 block w-full rounded-full bg-brand-red px-5 py-3.5 text-center text-[15px] font-semibold text-white hover:bg-[#b00e0e]"
            >
              Free Water Test
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <QuizModal isOpen={quizOpen} onClose={() => setQuizOpen(false)} />
    </>
  );
}
