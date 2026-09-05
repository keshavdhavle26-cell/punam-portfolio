import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';
import { EDUCATION_DATA } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/4 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-tech text-surface-main">
            EDUCATION <span className="text-accent-cyan">QUALIFICATIONS</span>
          </h2>
          <div className="w-16 h-1 bg-accent-cyan/60 rounded-full mt-3" />
        </div>

        {/* Education Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {EDUCATION_DATA.map((edu, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-8 rounded-2xl relative border-t-4 border-t-accent-cyan flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    {edu.period}
                  </span>
                  <span className="text-xs font-mono text-accent-indigo font-semibold px-2.5 py-0.5 rounded bg-accent-indigo/10 border border-accent-indigo/30">
                    {edu.status}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-tech text-surface-main leading-snug">
                  {edu.degree}
                </h3>
                <p className="text-sm font-semibold text-accent-cyan mt-1">
                  {edu.institution}
                </p>
                <p className="text-xs font-mono text-surface-muted flex items-center gap-1 mt-1">
                  <MapPin className="w-3.5 h-3.5" />
                  {edu.location}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-surface-border/50 flex items-center justify-between">
                <span className="text-xs font-mono text-surface-muted">ACADEMIC SCORE</span>
                <span className="font-tech font-bold text-lg text-emerald-400 bg-emerald-400/10 px-3 py-1 rounded-md border border-emerald-400/30">
                  {edu.score}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
