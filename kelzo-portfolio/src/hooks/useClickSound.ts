"use client";

import { useRef } from "react";

type AudioContextConstructor = typeof AudioContext;

declare global {
  interface Window {
    webkitAudioContext?: AudioContextConstructor;
  }
}

export function useClickSound() {
  const ctxRef = useRef<AudioContext | null>(null);

  const ensure = () => {
    if (!ctxRef.current) {
      let Ctor: AudioContextConstructor | undefined;
      if (typeof window !== "undefined") {
        Ctor = window.AudioContext ?? window.webkitAudioContext;
      }
      if (Ctor) {
        ctxRef.current = new Ctor();
      }
    }
    return ctxRef.current;
  };

  const play = (freq = 660, durationMs = 90, type: OscillatorType = "sine") => {
    const ctx = ensure();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.08, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + durationMs / 1000);
    osc.connect(gain).connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + durationMs / 1000);
  };

  return { play };
} 