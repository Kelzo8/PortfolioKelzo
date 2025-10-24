"use client";

import { motion } from "framer-motion";

export function Placements() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="space-y-8"
    >
      <div className="text-center mb-12">
        <h3 className="text-2xl font-bold tracking-tight mb-4">Placement Experience</h3>
        <p className="text-foreground/70 max-w-2xl mx-auto">
          Gaining valuable industry experience through placements with leading companies
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* KEEPER Solutions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="group relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-red-500/20 to-red-600/20 blur opacity-75 group-hover:opacity-100 transition duration-300" />
          <div className="relative glass border border-white/15 rounded-2xl p-8 h-full">
            <div className="flex items-center mb-6">
              {/* KEEPER Solutions Logo */}
              <div className="relative w-20 h-20 mr-6 group/logo">
                <div className="absolute inset-0 rounded-xl bg-white shadow-lg group-hover/logo:shadow-xl transition-all duration-300"></div>
                <div className="relative w-full h-full rounded-xl bg-red-500 flex items-center justify-center overflow-hidden">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center relative">
                    <div className="w-10 h-10 bg-red-500 rounded-sm relative">
                      <div className="absolute inset-0 bg-white rounded-sm flex items-center justify-center">
                        <div className="w-4 h-4 bg-red-500 rounded-sm"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-red-500/20 to-red-600/20 blur opacity-0 group-hover/logo:opacity-100 transition duration-300"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-red-500">KEEPER</h4>
                <p className="text-foreground/70 text-sm">solutions</p>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Working with KEEPER solutions to develop innovative software solutions 
              and gain hands-on experience in enterprise-level development practices.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm">
                Software Development
              </span>
              <span className="px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm">
                Enterprise Solutions
              </span>
            </div>
          </div>
        </motion.div>

        {/* Avtrain */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="group relative"
        >
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 blur opacity-75 group-hover:opacity-100 transition duration-300" />
          <div className="relative glass border border-white/15 rounded-2xl p-8 h-full">
            <div className="flex items-center mb-6">
              {/* Avtrain Logo */}
              <div className="relative w-20 h-20 mr-6 group/logo">
                <div className="absolute inset-0 rounded-xl bg-white shadow-lg group-hover/logo:shadow-xl transition-all duration-300"></div>
                <div className="relative w-full h-full rounded-xl bg-blue-500 flex items-center justify-center overflow-hidden">
                  <div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center relative">
                    <div className="w-10 h-10 bg-blue-500 rounded-sm transform rotate-45 relative">
                      <div className="absolute inset-0 bg-white rounded-sm flex items-center justify-center">
                        <div className="w-4 h-4 bg-blue-500 rounded-sm transform -rotate-45"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-500/20 to-blue-600/20 blur opacity-0 group-hover/logo:opacity-100 transition duration-300"></div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-blue-500">Avtrain</h4>
                <p className="text-foreground/70 text-sm">Aviation Training</p>
              </div>
            </div>
            <p className="text-foreground/80 leading-relaxed">
              Currently on placement with Avtrain, focusing on aviation training solutions 
              and software development in the aerospace industry.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">
                Aviation Technology
              </span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-500 rounded-full text-sm">
                Training Solutions
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}