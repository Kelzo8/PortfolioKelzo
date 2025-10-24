"use client";

import { useEffect } from "react";

export function SWRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    const isProduction = process.env.NODE_ENV === "production";

    if (isProduction) {
      navigator.serviceWorker.register("/sw.js").catch(() => {});
    } else {
      // In development, ensure no stale SW remains that could cache pages
      navigator.serviceWorker.getRegistrations?.().then((regs) => {
        regs.forEach((r) => r.unregister().catch(() => {}));
      }).catch(() => {});
      // Best-effort cache cleanup
      if (window.caches && typeof window.caches.keys === 'function') {
        caches.keys().then((keys) => keys.forEach((k) => caches.delete(k))).catch(() => {});
      }
    }
  }, []);
  return null;
} 