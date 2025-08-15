"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ReactNode, useRef } from "react";

export function Section({ id, children, className, parallax = true }: { id: string; children: ReactNode; className?: string; parallax?: boolean }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [10, -10]);

  return (
    <section ref={ref} id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        style={parallax ? { y } : undefined}
      >
        {children}
      </motion.div>
    </section>
  );
} 