"use client";

import { useState, useEffect, useCallback } from "react";
import { QuizModal } from "@/components/quiz-modal";

export function ExitIntent() {
  const [show, setShow] = useState(false);
  const [triggered, setTriggered] = useState(false);

  const handleMouseLeave = useCallback(
    (e: MouseEvent) => {
      // Only trigger when mouse leaves through the top of the viewport
      if (e.clientY <= 5 && !triggered) {
        // Check sessionStorage so it only fires once per session
        if (typeof window !== "undefined" && !sessionStorage.getItem("exit-intent-shown")) {
          setTriggered(true);
          setShow(true);
          sessionStorage.setItem("exit-intent-shown", "true");
        }
      }
    },
    [triggered]
  );

  useEffect(() => {
    // Delay before enabling exit intent (don't fire immediately on page load)
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [handleMouseLeave]);

  return <QuizModal isOpen={show} onClose={() => setShow(false)} />;
}
