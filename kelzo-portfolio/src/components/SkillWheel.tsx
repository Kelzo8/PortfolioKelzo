"use client";

import { motion, useMotionValue, useTransform, useAnimationControls } from "framer-motion";
import { useEffect } from "react";

const skills = ["Python","Java","Django","C++","AWS","Docker","React","TypeScript"];

export function SkillWheel() {
  const controls = useAnimationControls();
  useEffect(() => { controls.start({ rotate: 360 }, { type: "tween", ease: "linear", duration: 40, repeat: Infinity }); }, [controls]);
  return (
    <div className="relative h-64 w-64 mx-auto">
      <motion.div animate={controls} className="absolute inset-0 rounded-full border border-white/15 glass" />
      {skills.map((s, i) => {
        const angle = (i / skills.length) * 2 * Math.PI;
        const r = 110;
        const x = Math.cos(angle) * r; const y = Math.sin(angle) * r;
        return (
          <div key={s} className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}>
            <span className="text-xs px-2 py-1 rounded-full glass border border-white/15">{s}</span>
          </div>
        );
      })}
      <div className="absolute inset-8 rounded-full border border-white/10" />
    </div>
  );
} 