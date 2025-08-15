"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { ReactNode, type CSSProperties } from "react";

export function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [0, 1], [8, -8]);
  const rotateY = useTransform(x, [0, 1], [-8, 8]);

  return (
    <motion.div
      onPointerMove={(e) => {
        const rect = (e.currentTarget as HTMLDivElement).getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width;
        const py = (e.clientY - rect.top) / rect.height;
        x.set(px);
        y.set(py);
      }}
      onPointerLeave={() => {
        x.set(0.5);
        y.set(0.5);
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" as CSSProperties["transformStyle"] }}
      className={`group rounded-2xl border border-white/15 bg-white/5 dark:bg-white/5 backdrop-blur-2xl shadow-[0_8px_50px_rgba(0,0,0,0.08)] ${className ?? ""}`}
    >
      {children}
    </motion.div>
  );
} 