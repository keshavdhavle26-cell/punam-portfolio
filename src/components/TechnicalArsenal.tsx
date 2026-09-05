import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Code, Globe, Server, Shield, Database, Eye, Terminal, Wrench } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

const categoryIcons: Record<string, React.ReactNode> = {
  PROGRAMMING: <Code className="w-4 h-4 text-accent-cyan" />,
  'WEB DEVELOPMENT': <Globe className="w-4 h-4 text-accent-indigo" />,
  'BACKEND & APIs': <Server className="w-4 h-4 text-accent-cyan" />,
  CYBERSECURITY: <Shield className="w-4 h-4 text-emerald-400" />,
  DATABASE: <Database className="w-4 h-4 text-accent-indigo" />,
  'AI / COMPUTER VISION': <Eye className="w-4 h-4 text-accent-cyan" />,
  TOOLS: <Wrench className="w-4 h-4 text-accent-cyan" />,
};

export const TechnicalArsenal: React.FC = () => {
  return (
    <section id="skills" className="py-24 bg-bg-secondary/40 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>SKILLS & CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-tech text-surface-main">
            TECHNICAL <span className="text-accent-cyan">ARSENAL</span>
          </h2>
          <p className="text-surface-muted text-sm sm:text-base mt-2 max-w-xl font-mono">
            Categorized technical stack focused on clean code, security, and AI execution.
          </p>
          <div className="w-16 h-1 bg-accent-cyan/60 rounded-full mt-3" />
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILL_CATEGORIES.map((cat, idx) => (
            <motion.div
              key={cat.title}
              className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
            >
              <div>
                <div className="flex items-center gap-2 mb-4 border-b border-surface-border/50 pb-3">
                  <div className="p-2 rounded-lg bg-bg-primary border border-surface-border">
                    {categoryIcons[cat.title] || <Terminal className="w-4 h-4 text-accent-cyan" />}
                  </div>
                  <h3 className="font-tech font-bold text-sm text-surface-main tracking-wider uppercase">
                    {cat.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-bg-primary/80 text-surface-main border border-surface-border hover:border-accent-cyan hover:text-accent-cyan transition-all"
                    >
                      {skill.name}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
