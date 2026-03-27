"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      // Delay so it doesn't compete with hero animation
      const timer = setTimeout(() => setShow(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShow(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
          className="fixed bottom-6 left-6 right-6 z-[100] flex justify-center"
        >
          <div
            className="w-full max-w-[900px] rounded-2xl md:rounded-full px-5 md:px-8 py-4 md:py-3.5 flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-6"
            style={{
              background: "rgba(255,255,255,0.95)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(0,0,0,0.06)",
              boxShadow: "0 8px 40px rgba(0,0,0,0.12), 0 1px 3px rgba(0,0,0,0.04)",
            }}
          >
            <div className="flex-1 min-w-0">
              <p className="text-gray-600 text-[13px] leading-relaxed">
                <span className="font-semibold text-gray-900">We use cookies</span> to improve your experience, analyze traffic, and personalize ads.
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={decline}
                className="px-4 py-2 text-xs font-semibold text-gray-500 hover:text-gray-900 rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="px-5 py-2 text-xs font-semibold text-white bg-[#3a8fd4] hover:bg-[#2d7dbf] rounded-full transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
