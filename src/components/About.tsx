import React from 'react';
import { motion } from 'framer-motion';
import { User, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { ABOUT_TEXT, TIMELINE_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Subtle Accents */}
      <div className="absolute top-1/2 -right-32 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <User className="w-3.5 h-3.5" />
            <span>BACKGROUND & IDENTITY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-tech text-surface-main">
            ABOUT <span className="text-accent-cyan">ME</span>
          </h2>
          <div className="w-16 h-1 bg-accent-cyan/60 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Narrative & Details */}
          <motion.div
            className="lg:col-span-7 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-8 rounded-2xl relative">
              <div className="absolute top-0 left-0 w-2 h-full bg-accent-cyan rounded-l-2xl" />
              <p className="text-surface-muted text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {ABOUT_TEXT}
              </p>
            </div>

            {/* Quick Metadata Pill Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-bg-secondary/80 border border-surface-border">
                <div className="p-2.5 rounded-lg bg-accent-cyan/10 text-accent-cyan">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-surface-muted block">LOCATION</span>
                  <span className="text-sm font-semibold text-surface-main">{PERSONAL_INFO.location}</span>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-bg-secondary/80 border border-surface-border">
                <div className="p-2.5 rounded-lg bg-accent-indigo/10 text-accent-indigo">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono text-surface-muted block">DEGREE</span>
                  <span className="text-sm font-semibold text-surface-main">B.Tech. AIML (3rd Year)</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Visual Timeline */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl">
              <h3 className="font-tech text-xl font-bold text-surface-main mb-6 flex items-center gap-2 border-b border-surface-border pb-3">
                <Calendar className="w-5 h-5 text-accent-cyan" />
                <span>ACADEMIC & DEV TIMELINE</span>
              </h3>

              <div className="relative pl-6 space-y-8 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-surface-border">
                {TIMELINE_ITEMS.map((item, idx) => {
                  const isCurrent = item.year === 'CURRENT';
                  return (
                    <div key={idx} className="relative group">
                      {/* Node Circle */}
                      <div
                        className={`absolute -left-[31px] top-1 w-4 h-4 rounded-full border-2 transition-all ${
                          isCurrent
                            ? 'bg-accent-cyan border-accent-cyan shadow-[0_0_10px_#00E5FF]'
                            : 'bg-bg-primary border-surface-subtle group-hover:border-accent-cyan'
                        }`}
                      />

                      <div>
                        <span
                          className={`inline-block px-2.5 py-0.5 rounded text-xs font-mono font-bold mb-1 ${
                            isCurrent
                              ? 'bg-accent-cyan text-[#050816]'
                              : 'bg-accent-cyan/10 text-accent-cyan border border-accent-cyan/30'
                          }`}
                        >
                          {item.year}
                        </span>
                        <h4 className="font-tech font-bold text-surface-main text-base group-hover:text-accent-cyan transition-colors">
                          {item.title}
                        </h4>
                        <p className="text-xs text-surface-muted font-sans mt-0.5">
                          {item.subtitle}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
