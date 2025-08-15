"use client";

import { useEffect, useRef, useState } from "react";

function Ring({ label, level }: { label: string; level: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          let t = 0; const target = level; const step = () => { t += 2; setProgress(Math.min(target, t)); if (t < target) requestAnimationFrame(step); };
          requestAnimationFrame(step);
          io.disconnect();
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [level]);

  const size = 96; const stroke = 8; const r = (size - stroke) / 2; const c = 2 * Math.PI * r; const dash = (progress / 100) * c;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <svg width={size} height={size} className="rotate-[-90deg]">
        <circle cx={size/2} cy={size/2} r={r} stroke="rgba(255,255,255,0.15)" strokeWidth={stroke} fill="none" />
        <circle cx={size/2} cy={size/2} r={r} stroke="#7dd3fc" strokeLinecap="round" strokeWidth={stroke} fill="none" strokeDasharray={`${dash} ${c}`} />
      </svg>
      <div className="mt-2 text-sm">{label}</div>
    </div>
  );
}

export function SkillRings() {
  const items: Array<{ label: string; level: number }> = [
    { label: "Python", level: 90 },
    { label: "Java", level: 80 },
    { label: "Django", level: 75 },
    { label: "C++", level: 70 },
    { label: "AWS", level: 65 },
    { label: "Docker", level: 70 },
    { label: "React", level: 80 },
    { label: "TypeScript", level: 75 },
  ];
  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
      {items.map((s) => (
        <Ring key={s.label} label={s.label} level={s.level} />
      ))}
    </div>
  );
} 