import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Github, Linkedin, Send, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface ResumeSectionProps {
  onOpenResume?: () => void;
}

export const ResumeSection: React.FC<ResumeSectionProps> = ({ onOpenResume }) => {
  return (
    <section className="py-20 bg-[#0B1020]/90 border-y border-surface-border relative overflow-hidden">
      {/* Background Glowing Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-semibold uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            <span>CAREER OPPORTUNITIES & COLLABORATION</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-bold font-tech text-surface-main">
            LET'S <span className="cyan-text-gradient">CONNECT</span>
          </h2>

          <p className="text-surface-muted text-base sm:text-lg max-w-2xl mx-auto font-sans leading-relaxed">
            Interested in my work, projects, or potential opportunities? I am open to internships, entry-level developer roles, and cybersecurity positions.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            {/* View / Download Resume Button */}
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-accent-cyan text-[#050816] font-mono font-bold text-sm tracking-wider hover:bg-[#33ECFF] transition-all shadow-cyan-glow focus:outline-none focus:ring-2 focus:ring-accent-cyan"
            >
              <FileText className="w-5 h-5" />
              <span>VIEW / DOWNLOAD RESUME</span>
            </button>

            {/* Direct Download Button */}
            <a
              href="/resume/Punam_Keshav_Dhavle_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-[#050816] text-accent-cyan border border-accent-cyan/40 hover:bg-accent-cyan/10 font-mono font-semibold text-sm transition-all"
            >
              <Download className="w-4 h-4" />
              <span>DIRECT PDF</span>
            </a>

            {/* View GitHub */}
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#050816] text-surface-main border border-surface-border hover:border-accent-cyan hover:text-accent-cyan font-mono font-semibold text-sm transition-all"
            >
              <Github className="w-5 h-5 text-accent-cyan" />
              <span>VIEW GITHUB</span>
            </a>

            {/* Connect on LinkedIn */}
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent-indigo/20 text-surface-main border border-accent-indigo/40 hover:bg-accent-indigo hover:text-white font-mono font-semibold text-sm transition-all"
            >
              <Linkedin className="w-5 h-5 text-accent-indigo" />
              <span>CONNECT ON LINKEDIN</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
