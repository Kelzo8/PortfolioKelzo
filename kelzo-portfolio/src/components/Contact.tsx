"use client";

import { Section } from "./Section";
import { Github, Linkedin, Mail, FileDown, Send, MessageCircle } from "lucide-react";
import { useClickSound } from "@/hooks/useClickSound";
import { useState } from "react";
import { socialLinks } from "@/lib/portfolioData";
import { motion } from "framer-motion";

export function Contact() {
  const { play } = useClickSound();
  const [sent, setSent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    play(600, 100, "sine");
    
    // Simulate form submission
    setTimeout(() => {
      setSent(true);
      setIsSubmitting(false);
    }, 1500);
  };

  const handle = () => play(520, 70, "triangle");

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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <Section id="contact" className="py-24">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-6xl px-4"
      >
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 lg:p-12 glass-strong border border-white/20 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.15),transparent)] overflow-hidden"
        >
          {/* Animated background elements */}
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "linear" 
            }}
            className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-sky-500/10 to-purple-500/10 rounded-full blur-3xl"
          />

          <div className="grid lg:grid-cols-2 gap-12 items-start relative z-10">
            <motion.div variants={itemVariants}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3 mb-6"
              >
                <div className="p-3 rounded-full bg-gradient-to-r from-sky-500 to-purple-500">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Let&apos;s work together</h2>
              </motion.div>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg text-foreground/70 mb-8 leading-relaxed"
              >
                Open to internships, freelance opportunities, and exciting collaborations. 
                Let&apos;s build something amazing together!
              </motion.p>
              
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap items-center gap-4"
              >
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handle} 
                  className="btn-icon group" 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Github className="icon group-hover:scale-110 transition-transform" /> 
                  GitHub
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handle} 
                  className="btn-icon group" 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                >
                  <Linkedin className="icon group-hover:scale-110 transition-transform" /> 
                  LinkedIn
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handle} 
                  className="btn-icon group" 
                  href={`mailto:${socialLinks.email}`}
                >
                  <Mail className="icon group-hover:scale-110 transition-transform" /> 
                  Email
                </motion.a>
                
                <motion.a 
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handle} 
                  className="btn-icon text-sky-500 border-sky-500/30 hover:bg-sky-500/10 group" 
                  href="/James_Kelly_CV.pdf" 
                  download
                >
                  <FileDown className="icon group-hover:scale-110 transition-transform" /> 
                  Download CV
                </motion.a>
              </motion.div>
            </motion.div>
            
            <motion.form 
              variants={itemVariants}
              onSubmit={handleSubmit} 
              className="space-y-4"
            >
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <input 
                  required 
                  name="name" 
                  placeholder="Your name" 
                  className="w-full rounded-xl glass border border-white/20 px-4 py-3 focus:border-sky-500/50 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all duration-300" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <input 
                  required 
                  type="email" 
                  name="email" 
                  placeholder="Email" 
                  className="w-full rounded-xl glass border border-white/20 px-4 py-3 focus:border-sky-500/50 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all duration-300" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <textarea 
                  required 
                  name="message" 
                  placeholder="Tell me about your project..." 
                  rows={4} 
                  className="w-full rounded-xl glass border border-white/20 px-4 py-3 focus:border-sky-500/50 focus:outline-none focus:ring-2 focus:ring-sky-500/20 transition-all duration-300 resize-none" 
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full neon-btn rounded-xl px-6 py-3 text-sm font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" 
                  disabled={sent || isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : sent ? (
                    <>
                      <Send className="w-4 h-4" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </motion.div>
            </motion.form>
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
} 