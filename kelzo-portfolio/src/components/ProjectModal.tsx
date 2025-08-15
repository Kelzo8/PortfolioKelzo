"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { Project } from "@/lib/types";
import Image from "next/image";

export function ProjectModal({ project, open, onClose }: { project: Project | null; open: boolean; onClose: () => void }) {
  return (
    <AnimatePresence>
      {open && project && (
        <motion.div className="fixed inset-0 z-50 grid place-items-center bg-black/60" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }} transition={{ type: "spring", stiffness: 260, damping: 24 }} className="w-[min(92vw,900px)] rounded-2xl glass border border-white/15 overflow-hidden">
            <div className="aspect-video relative">
              <Image src={project.imageUrl} alt={project.title} fill className="object-cover" sizes="90vw" />
            </div>
            <div className="p-6">
              <div className="text-lg font-semibold">{project.title}</div>
              <p className="mt-2 text-sm text-foreground/70">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="text-[11px] rounded-full bg-white/10 px-2 py-1 border border-white/15">{t}</span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" className="neon-btn rounded-full px-4 py-2 text-sm">Live Demo</a>}
                {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" className="neon-btn rounded-full px-4 py-2 text-sm">Source</a>}
                <button onClick={onClose} className="btn-icon text-foreground/80">Close</button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
} 