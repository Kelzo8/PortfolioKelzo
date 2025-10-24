"use client";

import { motion, useAnimationControls, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { QuoteOfDay } from "./QuoteOfDay";
import { ArrowDown, Download, Eye } from "lucide-react";

const phrases = [
  "Software Engineer",
  "AI Enthusiast", 
  "Problem Solver",
  "Web Developer",
  "Tech Innovator",
];

function useTypewriter(words: string[], speedMs = 70, pauseMs = 900) {
  const [text, setText] = useState("");
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState<"type"|"erase">("type");
  useEffect(() => {
    const current = words[idx % words.length];
    const delay = dir === "type" ? speedMs : Math.max(30, speedMs - 40);
    const t = setTimeout(() => {
      if (dir === "type") {
        const next = current.slice(0, text.length + 1);
        setText(next);
        if (next === current) { setDir("erase"); clearTimeout(t); setTimeout(() => {}, pauseMs); }
      } else {
        const next = text.slice(0, -1);
        setText(next);
        if (next.length === 0) { setDir("type"); setIdx((i)=>i+1); }
      }
    }, dir === "type" && text === current ? pauseMs : delay);
    return () => clearTimeout(t);
  }, [text, idx, dir, words, speedMs, pauseMs]);
  return text;
}

export function Hero() {
  const controls = useAnimationControls();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const typed = useTypewriter(phrases);

  useEffect(() => { controls.start({ opacity: 1, y: 0 }); }, [controls]);

  return (
    <div ref={ref} className="relative min-h-[100svh] flex items-center justify-center" id="home">
      <div className="mx-auto max-w-6xl px-4 pt-24 w-full text-center">
        {/* Animated background elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-sky-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        
        <motion.div 
          animate={{ 
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 25, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          className="absolute bottom-1/4 right-1/4 w-40 h-40 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl"
        />

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative z-10"
        >


          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight font-[var(--font-heading)] text-black dark:text-white"
          >
            Hi, I&apos;m James Kelly
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-6"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl text-foreground/85 font-medium">
              I&apos;m a{" "}
              <span className="inline-block min-w-[200px] text-sky-400 font-bold">
                {typed}
              </span>
              <span className="animate-pulse">|</span>
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-4 text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto"
          >
            Building intelligent and impactful software solutions with cutting-edge technology.
          </motion.p>



          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="mt-16"
          >
            <QuoteOfDay />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-foreground/60"
          >
            <span className="text-sm">Scroll to explore</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>

      {/* Parallax background elements */}
      <motion.div style={{ y: y1, opacity }} className="pointer-events-none absolute -top-24 -left-24 h-[40vh] w-[40vh] rounded-full bg-sky-400/15 blur-3xl" />
      <motion.div style={{ y: y2, opacity }} className="pointer-events-none absolute -bottom-24 -right-24 h-[40vh] w-[40vh] rounded-full bg-fuchsia-400/15 blur-3xl" />
    </div>
  );
} 