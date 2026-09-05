import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Shield, ArrowUpRight, FolderGit2, Layers } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export const FeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const heroProject = PROJECTS.find((p) => p.isHero) || PROJECTS[0];
  const regularProjects = PROJECTS.filter((p) => !p.isHero);

  return (
    <section id="projects" className="py-24 bg-bg-secondary/40 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-accent-indigo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-tech text-surface-main">
            FEATURED <span className="text-accent-cyan">PROJECTS</span>
          </h2>
          <p className="text-surface-muted text-sm sm:text-base mt-2 max-w-xl font-mono">
            Projects where I turn ideas into working systems.
          </p>
          <div className="w-16 h-1 bg-accent-cyan/60 rounded-full mt-3" />
        </div>

        {/* HERO PROJECT: CyberGuardian AI */}
        <motion.div
          className="mb-12 relative group rounded-2xl bg-[#0B1020] border-2 border-accent-cyan/60 p-6 sm:p-8 md:p-10 shadow-2xl shadow-cyan-glow-sm overflow-hidden hover:border-accent-cyan transition-all duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Top Badge */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold text-[#050816] bg-accent-cyan px-3 py-1 rounded-md shadow-sm">
                PROJECT {heroProject.number}
              </span>
              <span className="font-tech text-xs font-semibold text-accent-cyan bg-accent-cyan/10 px-3 py-1 rounded-md border border-accent-cyan/30 flex items-center gap-1.5">
                <Shield className="w-3.5 h-3.5 text-accent-cyan" /> HERO PROJECT
              </span>
            </div>
            <div className="text-xs font-mono text-surface-muted">
              CYBERSECURITY OPERATIONS
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div>
                <h3 className="text-2xl sm:text-4xl font-bold font-tech text-surface-main group-hover:text-accent-cyan transition-colors">
                  {heroProject.title}
                </h3>
                <p className="text-accent-cyan font-mono text-sm sm:text-base mt-1">
                  {heroProject.subtitle}
                </p>
              </div>

              <p className="text-surface-muted text-sm sm:text-base leading-relaxed">
                {heroProject.description}
              </p>

              {/* Tech Pills */}
              <div className="flex flex-wrap gap-2 pt-2">
                {heroProject.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-md text-xs font-mono font-medium bg-bg-primary text-accent-cyan border border-accent-cyan/30"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => setSelectedProject(heroProject)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-[#050816] font-mono font-bold text-xs tracking-wider hover:bg-[#33ECFF] transition-all shadow-cyan-glow focus:outline-none"
                >
                  <span>VIEW DETAILS & ARCHITECTURE</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                {heroProject.githubUrl && (
                  <a
                    href={heroProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-bg-primary text-surface-main border border-surface-border hover:border-accent-cyan hover:text-accent-cyan font-mono font-semibold text-xs transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span>VIEW ON GITHUB</span>
                  </a>
                )}
              </div>
            </div>

            {/* Right Abstract Visual Architecture Teaser */}
            <div className="lg:col-span-5 bg-[#050816] p-6 rounded-xl border border-accent-cyan/30 space-y-4 text-left">
              <div className="flex items-center justify-between border-b border-surface-border/60 pb-3">
                <span className="text-xs font-mono font-bold text-accent-cyan flex items-center gap-1.5">
                  <Layers className="w-4 h-4" /> PIPELINE PREVIEW
                </span>
                <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded border border-emerald-400/30">
                  VERIFIED DEPLOYMENT
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-2.5 rounded bg-[#0B1020] border border-surface-border flex items-center justify-between text-surface-main">
                  <span>React.js Frontend</span>
                  <span className="text-accent-cyan">UI / Dashboard</span>
                </div>
                <div className="text-center text-accent-cyan text-xs">↓ REST API (JWT)</div>
                <div className="p-2.5 rounded bg-[#0B1020] border border-surface-border flex items-center justify-between text-surface-main">
                  <span>FastAPI Backend</span>
                  <span className="text-accent-indigo">Python Services</span>
                </div>
                <div className="text-center text-accent-cyan text-xs">↓ SQLModel ORM</div>
                <div className="p-2.5 rounded bg-[#0B1020] border border-surface-border flex items-center justify-between text-surface-main">
                  <span>Database Layer</span>
                  <span className="text-emerald-400">Security Logs</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* REGULAR PROJECTS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              className="glass-panel-interactive p-6 sm:p-8 rounded-2xl flex flex-col justify-between group"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-accent-cyan px-2.5 py-1 rounded bg-accent-cyan/10 border border-accent-cyan/30">
                    PROJECT {project.number}
                  </span>
                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-bg-primary text-surface-muted hover:text-accent-cyan transition-colors"
                        aria-label="GitHub Repository"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded bg-bg-primary text-accent-indigo hover:text-accent-cyan transition-colors"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h4 className="text-xl font-bold font-tech text-surface-main group-hover:text-accent-cyan transition-colors">
                  {project.title}
                </h4>
                <p className="text-xs font-mono text-accent-cyan/80 mt-1 mb-3">
                  {project.subtitle}
                </p>

                <p className="text-surface-muted text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-bg-primary text-surface-muted border border-surface-border/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center justify-between border-t border-surface-border/50 pt-4">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-accent-cyan hover:text-white flex items-center gap-1 group/btn focus:outline-none"
                  >
                    <span>View Details</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </button>

                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-accent-indigo/20 text-accent-indigo border border-accent-indigo/40 hover:bg-accent-indigo hover:text-white text-xs font-mono font-semibold transition-all"
                    >
                      <span>LIVE PROJECT</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-bg-primary text-surface-muted border border-surface-border hover:border-accent-cyan hover:text-accent-cyan text-xs font-mono font-medium transition-all"
                    >
                      <span>GITHUB</span>
                      <Github className="w-3 h-3" />
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
