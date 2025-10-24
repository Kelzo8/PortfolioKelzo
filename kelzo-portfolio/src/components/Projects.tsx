"use client";

import { Section } from "./Section";
import type { Project } from "@/lib/types";
import { projects } from "@/lib/portfolioData";
import { motion } from "framer-motion";
import { TiltCard } from "./ui/TiltCard";
import { useState } from "react";
import { ProjectModal } from "./ProjectModal";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export function Projects() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(true);

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <Section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold tracking-tight text-center mb-2"
        >
          Featured Projects
        </motion.h2>
        <p className="text-center text-xs text-foreground/50 mb-10">{projects.length} projects</p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto"
        >
          A collection of my latest work showcasing AI, web development, and innovative solutions
        </motion.p>
        
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          id="projects-grid"
          key={`projects-grid-${showAll ? 'all' : 'less'}`}
        >
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
            >
              <TiltCard>
                <div className="group relative overflow-hidden rounded-2xl w-full text-left bg-gradient-to-br from-white/5 to-white/10 border border-white/10 hover:border-sky-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-sky-500/20">
                  <div className="aspect-video relative w-full overflow-hidden">
                    <Image 
                      src={project.imageUrl} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 group-hover:scale-110" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Hover overlay with action buttons */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex gap-3">
                        <button
                          onClick={() => { setActive(project); setOpen(true); }}
                          className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                        >
                          <ExternalLink className="w-5 h-5 text-white" />
                        </button>
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/20 backdrop-blur-sm rounded-full p-3 hover:bg-white/30 transition-colors"
                          >
                            <Github className="w-5 h-5 text-white" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-bold text-xl group-hover:text-sky-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <p className="text-sm text-foreground/70 min-h-12 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech} 
                          className="text-xs rounded-full bg-sky-500/20 text-sky-300 px-3 py-1 border border-sky-500/30 backdrop-blur-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-10 flex justify-center">
          <button
            onClick={() => setShowAll((s) => !s)}
            className="neon-btn rounded-full px-6 py-3 text-sm"
            aria-expanded={showAll}
            aria-controls="projects-grid"
          >
            {showAll ? 'Show Less' : 'Show More Projects'}
          </button>
        </div>
      </div>
      <ProjectModal project={active} open={open} onClose={() => setOpen(false)} />
    </Section>
  );
} 