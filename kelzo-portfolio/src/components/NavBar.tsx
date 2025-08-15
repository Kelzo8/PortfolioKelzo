"use client";

import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { MatrixToggle } from "./MatrixToggle";
import { socialLinks } from "@/lib/portfolioData";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
];

export function NavBar({ matrixMode, onMatrixToggle }: { matrixMode: boolean; onMatrixToggle: (enabled: boolean) => void }) {
  return (
    <div className="fixed top-0 inset-x-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-black/5 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="#home" className="font-semibold tracking-tight">James Kelly</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-sky-500 transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a href={socialLinks.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="btn-icon"><Github className="icon" /></a>
          <a href={socialLinks.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="btn-icon"><Linkedin className="icon" /></a>
          <MatrixToggle onChange={onMatrixToggle} />
        </div>
      </div>
    </div>
  );
} 