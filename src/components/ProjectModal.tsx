import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink, Shield, Cpu, Database, CheckCircle2, Server, ArrowRight, Lightbulb, Code2 } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 bg-[#050816]/80 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Modal Window */}
        <motion.div
          className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0B1020] border border-accent-cyan/30 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-black/90 text-surface-main my-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-surface-border/60 pb-6 mb-6">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold text-accent-cyan px-2.5 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/30">
                  PROJECT {project.number}
                </span>
                {project.isHero && (
                  <span className="font-tech text-xs font-semibold text-accent-indigo px-2.5 py-1 rounded bg-accent-indigo/10 border border-accent-indigo/30 flex items-center gap-1">
                    <Shield className="w-3 h-3 text-accent-indigo" /> HERO PROJECT
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-tech text-surface-main mt-2">
                {project.title}
              </h3>
              <p className="text-accent-cyan font-mono text-sm mt-1">
                {project.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-bg-primary text-surface-muted hover:text-accent-cyan border border-surface-border hover:border-accent-cyan transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Overview */}
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-surface-muted uppercase mb-2">
                OVERVIEW
              </h4>
              <p className="text-surface-main text-base leading-relaxed bg-bg-primary/50 p-4 rounded-xl border border-surface-border/50">
                {project.overview || project.description}
              </p>
            </div>

            {/* Architecture Visual Diagram (For CyberGuardian AI & key projects) */}
            {project.architecture && (
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-accent-cyan uppercase mb-3 flex items-center gap-2">
                  <Server className="w-4 h-4 text-accent-cyan" />
                  SYSTEM ARCHITECTURE
                </h4>
                <div className="bg-[#050816] p-6 rounded-xl border border-accent-cyan/20 overflow-x-auto">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-4 min-w-[500px]">
                    {project.architecture.nodes.map((node, index) => (
                      <React.Fragment key={index}>
                        <div className="flex-1 w-full p-4 rounded-lg bg-[#0B1020] border border-surface-border text-center hover:border-accent-cyan transition-colors group shadow-md">
                          <div className="w-8 h-8 rounded-full bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan mx-auto flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                            {index === 0 && <Code2 className="w-4 h-4" />}
                            {index === 1 && <Cpu className="w-4 h-4" />}
                            {index === 2 && <Shield className="w-4 h-4" />}
                            {index === 3 && <Database className="w-4 h-4" />}
                          </div>
                          <span className="font-tech font-bold text-xs text-surface-main block">
                            {node}
                          </span>
                        </div>

                        {project.architecture && index < project.architecture.nodes.length - 1 && (
                          <div className="flex items-center text-accent-cyan my-1 md:my-0">
                            <ArrowRight className="w-5 h-5 hidden md:block" />
                            <span className="text-xs font-mono text-accent-cyan md:hidden">↓</span>
                          </div>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-mono font-bold tracking-widest text-surface-muted uppercase mb-3">
                TECH STACK
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-mono font-semibold bg-bg-primary text-accent-cyan border border-accent-cyan/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features */}
            {project.features && project.features.length > 0 && (
              <div>
                <h4 className="text-xs font-mono font-bold tracking-widest text-surface-muted uppercase mb-3">
                  KEY FEATURES
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 p-3 rounded-lg bg-bg-primary/40 border border-surface-border/40 text-xs sm:text-sm text-surface-main"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* What I Learned */}
            {project.whatILearned && (
              <div className="bg-accent-indigo/10 p-5 rounded-xl border border-accent-indigo/30">
                <h4 className="text-xs font-mono font-bold tracking-widest text-accent-indigo uppercase mb-2 flex items-center gap-2">
                  <Lightbulb className="w-4 h-4 text-accent-indigo" />
                  WHAT I LEARNED & KEY TAKEAWAYS
                </h4>
                <p className="text-sm text-surface-main leading-relaxed">
                  {project.whatILearned}
                </p>
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap gap-4 border-t border-surface-border/60">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-cyan text-[#050816] font-mono font-bold text-xs tracking-wider hover:bg-[#33ECFF] transition-all shadow-cyan-glow"
                >
                  <Github className="w-4 h-4" />
                  <span>VIEW ON GITHUB</span>
                </a>
              )}

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-accent-indigo text-white font-mono font-bold text-xs tracking-wider hover:bg-indigo-500 transition-all shadow-indigo-glow"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VIEW LIVE PROJECT</span>
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
