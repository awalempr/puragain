"use client";

import { useEffect } from "react";
import { captureTracking } from "@/lib/tracking";

/** Captures first-touch source attribution on load (renders nothing). */
export function TrackingInit() {
  useEffect(() => {
    captureTracking();
  }, []);
  return null;
}
