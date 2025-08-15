"use client";

import dynamic from "next/dynamic";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { ParticleNetwork } from "@/components/ParticleNetwork";
import { MatrixRain } from "@/components/MatrixRain";
import { MatrixToggle } from "@/components/MatrixToggle";
import { useState, useCallback } from "react";

const Projects = dynamic(() => import("@/components/Projects").then(m => m.Projects), { ssr: true, loading: () => <div className="mx-auto max-w-6xl px-4 py-24 text-center text-sm text-foreground/60">Loading projects…</div> });
const Achievements = dynamic(() => import("@/components/Achievements").then(m => m.Achievements), { ssr: true });
const Contact = dynamic(() => import("@/components/Contact").then(m => m.Contact), { ssr: true });

export function HomeContent() {
  const [matrix, setMatrix] = useState(false);
  const onChange = useCallback((v: boolean) => setMatrix(v), []);
  return (
    <div className="font-sans">
      <ParticleNetwork />
      <MatrixRain enabled={matrix} />
      <NavBar matrixMode={matrix} onMatrixToggle={onChange} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <footer className="py-10 text-center text-xs text-foreground/60">© {new Date().getFullYear()} James Kelly. Built with Next.js, Tailwind, Framer Motion & Three.js.</footer>
    </div>
  );
} 