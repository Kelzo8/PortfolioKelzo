"use client";

import { Section } from "./Section";
import { SkillRings } from "./SkillRings";
import { SkillSphereComponent } from "./SkillSphere";
import { motion } from "framer-motion";
import { useState } from "react";

export function About() {
  const [show3D, setShow3D] = useState(false);

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
            currently on placement with Keeper Solutions. Experienced in Python, Java, Django, C++, AWS, and Docker. 
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
            <div className="relative">
              <div className="absolute -inset-2 rounded-3xl blur-2xl bg-gradient-to-tr from-sky-500/20 to-fuchsia-500/20" />
              <div className="relative rounded-3xl overflow-hidden glass border border-white/15 w-full aspect-[4/5] grid place-items-center">
                <div className="h-40 w-40 rounded-full bg-gradient-to-tr from-sky-500/40 to-fuchsia-500/40 border border-white/20 grid place-items-center text-3xl font-bold">
                  JK
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="glass rounded-xl p-4 border border-white/10 hover:border-sky-500/30 transition-colors">
                <div className="text-foreground/60 text-xs uppercase tracking-wide">Location</div>
                <div className="font-semibold">Ireland</div>
              </div>
              <div className="glass rounded-xl p-4 border border-white/10 hover:border-sky-500/30 transition-colors">
                <div className="text-foreground/60 text-xs uppercase tracking-wide">Specialties</div>
                <div className="font-semibold">AI, Web Dev</div>
              </div>
              <div className="glass rounded-xl p-4 border border-white/10 hover:border-sky-500/30 transition-colors">
                <div className="text-foreground/60 text-xs uppercase tracking-wide">Current Role</div>
                <div className="font-semibold">Keeper Solutions</div>
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
            <div className="text-center">
              <h3 className="text-2xl font-bold tracking-tight mb-4">Technical Skills</h3>
              <div className="flex justify-center gap-4 mb-6">
                <button
                  onClick={() => setShow3D(false)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    !show3D 
                      ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' 
                      : 'bg-white/10 text-foreground/70 hover:bg-white/20'
                  }`}
                >
                  2D View
                </button>
                <button
                  onClick={() => setShow3D(true)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    show3D 
                      ? 'bg-sky-500 text-white shadow-lg shadow-sky-500/25' 
                      : 'bg-white/10 text-foreground/70 hover:bg-white/20'
                  }`}
                >
                  3D Sphere
                </button>
              </div>
            </div>

            {show3D ? (
              <SkillSphereComponent />
            ) : (
              <div className="glass rounded-2xl p-6 border border-white/15">
                <SkillRings />
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </Section>
  );
} 