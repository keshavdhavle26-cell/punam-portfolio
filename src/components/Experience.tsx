import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, CheckCircle2, Building2, Wrench } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Subtle Accent */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>INDUSTRY EXPERIENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-tech text-surface-main">
            WORK <span className="text-accent-cyan">EXPERIENCE</span>
          </h2>
          <div className="w-16 h-1 bg-accent-cyan/60 rounded-full mt-3" />
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-6 sm:p-10 rounded-2xl relative border-l-4 border-l-accent-cyan shadow-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Company & Role Header */}
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-surface-border/60 pb-6 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-accent-cyan font-mono text-xs font-bold uppercase tracking-wider mb-1">
                    <Building2 className="w-4 h-4" />
                    <span>{exp.company}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold font-tech text-surface-main">
                    {exp.position}
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-surface-muted mt-2">
                    <span className="text-accent-indigo font-semibold">{exp.department}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-surface-subtle" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Duration Pill */}
                <div className="flex flex-col items-end">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-bold">
                    <Calendar className="w-3.5 h-3.5" />
                    {exp.duration} ({exp.dates})
                  </span>
                </div>
              </div>

              {/* Responsibilities List */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono font-bold tracking-widest text-surface-muted uppercase flex items-center gap-2">
                  <span>KEY RESPONSIBILITIES & CONTRIBUTIONS</span>
                </h4>

                <div className="space-y-3">
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-1" />
                      <p className="text-sm sm:text-base text-surface-main leading-relaxed">
                        {resp}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tools & Workflow Pills */}
              <div className="mt-8 pt-6 border-t border-surface-border/50 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-surface-muted mr-2 flex items-center gap-1">
                  <Wrench className="w-3.5 h-3.5 text-accent-cyan" /> TOOLS USED:
                </span>
                {['VS Code', 'Node.js', 'npm', 'OCR Workflows', 'ANPR', 'PlateScan OCR Curator'].map((tool, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded text-xs font-mono bg-bg-primary text-surface-muted border border-surface-border/60"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
