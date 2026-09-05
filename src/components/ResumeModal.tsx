import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, FileText, Download, GraduationCap, Briefcase, Award, Code, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, EXPERIENCE_DATA, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-[#050816]/85 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative z-10 w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-[#0B1020] border border-accent-cyan/40 rounded-2xl p-6 sm:p-10 shadow-2xl shadow-cyan-glow-sm text-surface-main my-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between border-b border-surface-border/60 pb-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan flex items-center justify-center">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-tech font-bold text-xl sm:text-2xl text-surface-main">
                  PUNAM KESHAV DHAVLE
                </h3>
                <span className="text-xs font-mono text-accent-cyan">
                  Curriculum Vitae / Resume View
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <a
                href="/resume/Punam_Keshav_Dhavle_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-accent-cyan text-[#050816] font-mono font-bold text-xs hover:bg-[#33ECFF] transition-all shadow-cyan-glow"
              >
                <Download className="w-4 h-4" />
                <span className="hidden sm:inline">DOWNLOAD PDF</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-lg bg-bg-primary text-surface-muted hover:text-accent-cyan border border-surface-border hover:border-accent-cyan transition-colors"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Printable Styled Resume Sheet Content */}
          <div className="bg-[#050816] border border-surface-border rounded-xl p-6 sm:p-8 space-y-8 font-sans">
            
            {/* Resume Title Header */}
            <div className="text-center border-b border-surface-border/60 pb-6">
              <h1 className="font-tech text-3xl sm:text-4xl font-bold tracking-tight text-surface-main uppercase">
                Punam Keshav Dhavle
              </h1>
              <p className="text-accent-cyan font-mono text-sm mt-1">
                Pune, Maharashtra • {PERSONAL_INFO.phone} • {PERSONAL_INFO.email}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-surface-muted mt-3">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan">
                  LinkedIn
                </a>
                <span>•</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent-cyan">
                  GitHub
                </a>
                <span>•</span>
                <a href="#home" onClick={onClose} className="hover:text-accent-cyan">
                  Portfolio Website
                </a>
              </div>
            </div>

            {/* Summary */}
            <div className="space-y-2">
              <h2 className="font-tech text-sm font-bold tracking-wider text-accent-cyan uppercase flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent-cyan" /> SUMMARY
              </h2>
              <p className="text-surface-muted text-sm leading-relaxed">
                Third-year B.Tech. AI & ML student with hands-on experience in cybersecurity and full-stack development. Skilled in React.js, FastAPI, Python, and JWT authentication, with practical experience building security-focused applications.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-4 border-t border-surface-border/40 pt-6">
              <h2 className="font-tech text-sm font-bold tracking-wider text-accent-cyan uppercase flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-accent-cyan" /> EDUCATION
              </h2>

              <div className="space-y-3">
                {EDUCATION_DATA.map((edu, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-sm">
                    <div>
                      <span className="font-bold text-surface-main">{edu.degree}</span>
                      <p className="text-xs text-surface-muted">{edu.institution}, {edu.location}</p>
                    </div>
                    <div className="text-right sm:text-right text-xs font-mono text-accent-indigo">
                      <span>{edu.period}</span>
                      <p className="text-emerald-400 font-semibold">{edu.score}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="space-y-4 border-t border-surface-border/40 pt-6">
              <h2 className="font-tech text-sm font-bold tracking-wider text-accent-cyan uppercase flex items-center gap-2">
                <Code className="w-4 h-4 text-accent-cyan" /> KEY PROJECTS
              </h2>

              <div className="space-y-4">
                {PROJECTS.slice(0, 2).map((proj) => (
                  <div key={proj.id} className="space-y-1 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-surface-main">{proj.title} – {proj.subtitle}</span>
                      <span className="text-xs font-mono text-accent-cyan">{proj.tech.join(' | ')}</span>
                    </div>
                    <p className="text-xs text-surface-muted leading-relaxed">{proj.description}</p>
                    {proj.features && (
                      <ul className="list-disc list-inside text-xs text-surface-muted space-y-1 pl-2 pt-1">
                        {proj.features.slice(0, 3).map((f, fIdx) => (
                          <li key={fIdx}>{f}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="space-y-4 border-t border-surface-border/40 pt-6">
              <h2 className="font-tech text-sm font-bold tracking-wider text-accent-cyan uppercase flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-accent-cyan" /> EXPERIENCE
              </h2>

              {EXPERIENCE_DATA.map((exp, idx) => (
                <div key={idx} className="space-y-2 text-sm">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between">
                    <div>
                      <span className="font-bold text-surface-main">{exp.company}</span> – <span className="text-accent-indigo font-semibold">{exp.position}</span>
                    </div>
                    <span className="text-xs font-mono text-surface-muted">{exp.duration} ({exp.dates})</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-surface-muted space-y-1 pl-2">
                    {exp.responsibilities.map((r, rIdx) => (
                      <li key={rIdx}>{r}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Technical Skills */}
            <div className="space-y-3 border-t border-surface-border/40 pt-6">
              <h2 className="font-tech text-sm font-bold tracking-wider text-accent-cyan uppercase flex items-center gap-2">
                <Award className="w-4 h-4 text-accent-cyan" /> TECHNICAL SKILLS
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                <div><span className="text-surface-muted">Languages:</span> <span className="text-surface-main">Python, C, C++, JavaScript</span></div>
                <div><span className="text-surface-muted">Web & Backend:</span> <span className="text-surface-main">HTML, CSS, React.js, FastAPI, REST APIs, Node.js</span></div>
                <div><span className="text-surface-muted">Cybersecurity:</span> <span className="text-surface-main">Linux, Networking, Web Security, JWT Auth, TryHackMe</span></div>
                <div><span className="text-surface-muted">Tools:</span> <span className="text-surface-main">Git, GitHub, VS Code, PlateScan OCR Curator</span></div>
              </div>
            </div>

          </div>

          {/* Bottom Actions */}
          <div className="mt-6 pt-4 border-t border-surface-border/60 flex items-center justify-between">
            <span className="text-xs font-mono text-surface-muted">
              PDF File: /resume/Punam_Keshav_Dhavle_Resume.pdf
            </span>
            <a
              href="/resume/Punam_Keshav_Dhavle_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-accent-cyan text-[#050816] font-mono font-bold text-xs hover:bg-[#33ECFF] transition-all shadow-cyan-glow"
            >
              <Download className="w-4 h-4" />
              <span>OPEN FULL PDF</span>
            </a>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
