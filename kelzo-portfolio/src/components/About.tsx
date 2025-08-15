"use client";

import { Section } from "./Section";
import { SkillsDisplay } from "./SkillsDisplay";
import { ImageCarousel } from "./ImageCarousel";
import { motion } from "framer-motion";

export function About() {
  return (
    <Section id="about" className="py-24 relative">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(125,211,252,0.06),transparent)]" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-6xl px-4"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-foreground/70 max-w-3xl mx-auto text-lg leading-relaxed">
            James Kelly, a second-year Immersive Software Engineering student at the University of Limerick, 
            currently on placement with Avtrain. Experienced in Python, Java, Django, C++, AWS, and Docker. 
            Passionate about AI, web development, and sports (GAA & fitness).
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl blur-2xl bg-gradient-to-tr from-sky-500/20 to-fuchsia-500/20" />
              <div className="relative rounded-3xl overflow-hidden glass border border-white/15 w-full aspect-[4/5]">
                <ImageCarousel />
              </div>
            </div>


          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            <SkillsDisplay />
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
} 