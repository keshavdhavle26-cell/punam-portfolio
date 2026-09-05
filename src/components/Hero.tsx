import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowRight, Github, FileText, Lock, Cpu, Database } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-16 flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      {/* Background Animated Cyber Grid & Ambient Glows */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-indigo/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Copy & Call-to-Actions */}
          <motion.div
            className="lg:col-span-7 flex flex-col space-y-6 text-left"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Small Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-semibold tracking-wider w-fit">
              <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
              {PERSONAL_INFO.heroTagline}
            </div>

            {/* Main Heading */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight font-tech leading-[1.1] text-surface-main">
                Building Intelligent. <br />
                <span className="cyan-text-gradient">Building Secure.</span>
              </h1>
              
              {/* Highlight Badge */}
              <div className="pt-2">
                <span className="inline-block px-4 py-1.5 rounded-md bg-[#0B1020] border border-accent-indigo/40 text-accent-indigo font-tech font-semibold text-lg sm:text-xl tracking-wide shadow-indigo-glow">
                  ⚡ {PERSONAL_INFO.heroHighlight}
                </span>
              </div>
            </div>

            {/* Supporting Text */}
            <p className="text-surface-muted text-base sm:text-lg leading-relaxed max-w-2xl">
              {PERSONAL_INFO.heroSubtitle}
            </p>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-accent-cyan text-[#050816] font-mono font-bold text-sm tracking-wider hover:bg-[#33ECFF] transition-all shadow-cyan-glow focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              >
                <span>VIEW MY WORK</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-lg bg-[#0B1020] text-surface-main border border-surface-border font-mono font-semibold text-sm tracking-wider hover:border-accent-cyan hover:text-accent-cyan transition-all hover:shadow-[0_0_15px_rgba(0,229,255,0.15)] focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              >
                <FileText className="w-4 h-4 text-accent-cyan" />
                <span>VIEW / DOWNLOAD RESUME</span>
              </button>

              {/* Secondary Link */}
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-surface-muted hover:text-accent-cyan text-sm font-mono transition-colors group px-2 py-1"
              >
                <Github className="w-4 h-4 text-surface-muted group-hover:text-accent-cyan transition-colors" />
                <span className="underline underline-offset-4 decoration-surface-border group-hover:decoration-accent-cyan">
                  EXPLORE GITHUB
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE: Abstract SOC / AI Visual */}
          <motion.div
            className="lg:col-span-5 relative flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Outer Hexagon Shield Graphic Base */}
            <div className="relative w-full max-w-md aspect-square rounded-2xl bg-bg-card border border-surface-border backdrop-blur-xl p-6 flex flex-col justify-between overflow-hidden shadow-2xl shadow-black/80">
              
              {/* Top Bar Terminal Header */}
              <div className="flex items-center justify-between border-b border-surface-border/60 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-surface-muted ml-2">cyberguardian_soc.v1</span>
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-ping mr-1" />
                  ACTIVE MONITORING
                </div>
              </div>

              {/* Center Abstract AI / SOC Core Visual */}
              <div className="relative my-auto flex flex-col items-center justify-center py-6">
                {/* Rotating Tech Circuit Ring */}
                <div className="absolute w-56 h-56 rounded-full border border-accent-cyan/20 border-dashed animate-[spin_25s_linear_infinite]" />
                <div className="absolute w-44 h-44 rounded-full border border-accent-indigo/30 animate-[spin_15s_linear_infinite_reverse]" />
                
                {/* Central Shield Icon Node */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#0B1020] border-2 border-accent-cyan flex items-center justify-center shadow-cyan-glow">
                  <Shield className="w-12 h-12 text-accent-cyan" />
                  
                  {/* Glowing Node Pulse Dot */}
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-cyan rounded-full animate-ping opacity-75" />
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent-cyan rounded-full flex items-center justify-center text-[8px] text-[#050816] font-bold">✓</div>
                </div>

                {/* Sub Nodes Floating around Core */}
                <div className="absolute -top-2 left-6 px-2.5 py-1 rounded bg-[#0B1020]/90 border border-surface-border text-[11px] font-mono text-surface-main flex items-center gap-1.5 shadow-md">
                  <Cpu className="w-3.5 h-3.5 text-accent-indigo" />
                  <span>AI Engine</span>
                </div>

                <div className="absolute -bottom-2 right-6 px-2.5 py-1 rounded bg-[#0B1020]/90 border border-surface-border text-[11px] font-mono text-surface-main flex items-center gap-1.5 shadow-md">
                  <Database className="w-3.5 h-3.5 text-accent-cyan" />
                  <span>FastAPI + SQL</span>
                </div>

                <div className="absolute top-1/2 -left-4 -translate-y-1/2 px-2.5 py-1 rounded bg-[#0B1020]/90 border border-surface-border text-[11px] font-mono text-surface-main flex items-center gap-1.5 shadow-md">
                  <Lock className="w-3.5 h-3.5 text-emerald-400" />
                  <span>JWT Auth</span>
                </div>
              </div>

              {/* Bottom Code Terminal Line Stream */}
              <div className="bg-[#050816]/90 rounded-lg p-3 border border-surface-border/50 text-xs font-mono space-y-1 text-left">
                <div className="flex items-center text-surface-muted">
                  <span className="text-accent-cyan mr-2">&gt;</span>
                  <span>System check: Security Operations Active</span>
                </div>
                <div className="flex items-center text-emerald-400">
                  <span className="text-accent-cyan mr-2">&gt;</span>
                  <span>Threat Intelligence Feed: Connected</span>
                </div>
              </div>
            </div>

            {/* Floating Card Overlay: CURRENTLY BUILDING */}
            <motion.div
              className="absolute -bottom-6 -left-4 sm:-left-6 bg-[#0B1020]/95 backdrop-blur-xl border border-accent-cyan/40 rounded-xl p-4 shadow-2xl max-w-xs shadow-cyan-glow-sm"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse" />
                <span className="text-[10px] font-mono font-bold tracking-widest text-accent-cyan uppercase">
                  CURRENTLY BUILDING
                </span>
              </div>
              <h4 className="font-tech font-bold text-surface-main text-sm">
                CyberGuardian AI
              </h4>
              <p className="text-surface-muted text-xs mt-0.5 font-sans leading-snug">
                AI-Powered Cybersecurity Operations Platform
              </p>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
