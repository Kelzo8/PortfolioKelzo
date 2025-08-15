"use client";

import { Section } from "./Section";
import { certificates } from "@/lib/portfolioData";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";

export function Achievements() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = 320 + 24; // card width + gap
      const newScrollLeft = containerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
      containerRef.current.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    }
  };

  return (
    <Section id="achievements" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Achievements & Certificates
          </h2>
          <p className="text-foreground/70 max-w-2xl mx-auto">
            Professional certifications and recognition for excellence in technology and community service
          </p>
        </motion.div>

        <div className="relative group">
          {/* Scroll buttons */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm rounded-full p-3 hover:bg-black/40 transition-all duration-300 ${
              canScrollLeft ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm rounded-full p-3 hover:bg-black/40 transition-all duration-300 ${
              canScrollRight ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          <div
            ref={containerRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificates.map((certificate, index) => (
              <motion.div
                key={certificate.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="flex-shrink-0 w-80 h-56 rounded-2xl glass border border-white/15 overflow-hidden relative group/card"
              >
                <Image 
                  src={certificate.image} 
                  alt={certificate.title} 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover/card:scale-110" 
                  sizes="320px" 
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <div className="flex items-start gap-3">
                    <Award className="w-6 h-6 text-sky-400 flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-white mb-1">
                        {certificate.title}
                      </h3>
                      <p className="text-sm text-sky-300 mb-2">
                        {certificate.organization}
                      </p>
                      <p className="text-xs text-white/70 leading-relaxed">
                        {certificate.description}
                      </p>
                    </div>
                  </div>
                  
                  {/* Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-sky-500/20 text-sky-300 border border-sky-500/30">
                      Certified
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
} 