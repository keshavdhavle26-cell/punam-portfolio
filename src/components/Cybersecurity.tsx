import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, Terminal as TerminalIcon, CheckCircle2, CornerDownLeft } from 'lucide-react';
import { CYBERSECURITY_HIGHLIGHTS } from '../data/portfolioData';

export const Cybersecurity: React.FC = () => {
  const [inputCmd, setInputCmd] = useState('');
  const [customOutputs, setCustomOutputs] = useState<Array<{ cmd: string; out: string }>>([]);

  const presetCmds = CYBERSECURITY_HIGHLIGHTS.terminalCommands;

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputCmd.trim()) return;

    const trimmed = inputCmd.trim().toLowerCase();
    let response = `Command not recognized: '${inputCmd}'. Type 'help' or 'status'.`;

    if (trimmed === 'whoami') {
      response = 'punam@cyberguardian-soc (Punam Keshav Dhavle)';
    } else if (trimmed === 'focus') {
      response = 'Cybersecurity Operations, Full-Stack Engineering, AI/ML';
    } else if (trimmed === 'learning') {
      response = 'Hands-on TryHackMe labs: Linux, Networking, Web Security';
    } else if (trimmed === 'building') {
      response = 'CyberGuardian AI — Full-Stack SOC Operations Platform';
    } else if (trimmed === 'status') {
      response = 'READY FOR INTERNSHIPS, FREELANCE & DEV ROLES';
    } else if (trimmed === 'clear') {
      setCustomOutputs([]);
      setInputCmd('');
      return;
    } else if (trimmed === 'help') {
      response = 'Available commands: whoami, focus, learning, building, status, clear';
    }

    setCustomOutputs((prev) => [...prev, { cmd: inputCmd, out: response }]);
    setInputCmd('');
  };

  return (
    <section id="cybersecurity" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Background Subtle Cyber Glow */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent-cyan/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Shield className="w-3.5 h-3.5" />
            <span>SECURITY DOMAIN</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-tech text-surface-main">
            CYBER<span className="text-accent-cyan">SECURITY</span>
          </h2>
          <p className="text-surface-muted text-sm sm:text-base mt-2 max-w-xl font-mono">
            {CYBERSECURITY_HIGHLIGHTS.subheading}
          </p>
          <div className="w-16 h-1 bg-accent-cyan/60 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT COLUMN: Overview & TryHackMe Highlights */}
          <motion.div
            className="lg:col-span-6 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-panel p-8 rounded-2xl relative">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan flex items-center justify-center">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-tech font-bold text-xl text-surface-main">
                    Practical Security & Defense
                  </h3>
                  <span className="text-xs font-mono text-accent-cyan">
                    Hands-on Lab Knowledge
                  </span>
                </div>
              </div>

              <p className="text-surface-muted text-sm sm:text-base leading-relaxed mb-6">
                {CYBERSECURITY_HIGHLIGHTS.description}
              </p>

              <h4 className="text-xs font-mono font-bold tracking-widest text-surface-muted uppercase mb-3">
                KEY LAB MODULES & COMPETENCIES
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {CYBERSECURITY_HIGHLIGHTS.skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 p-3 rounded-lg bg-bg-secondary/70 border border-surface-border text-xs sm:text-sm text-surface-main"
                  >
                    <CheckCircle2 className="w-4 h-4 text-accent-cyan shrink-0" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Terminal-inspired Interactive Visual */}
          <motion.div
            className="lg:col-span-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="rounded-2xl bg-[#0B1020] border border-accent-cyan/40 shadow-2xl shadow-cyan-glow-sm overflow-hidden">
              
              {/* Terminal Window Header */}
              <div className="bg-[#050816] px-4 py-3 border-b border-surface-border/60 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-surface-muted ml-2 flex items-center gap-1">
                    <TerminalIcon className="w-3.5 h-3.5 text-accent-cyan" />
                    bash — punam@cyberguardian:~
                  </span>
                </div>
                <span className="text-[10px] font-mono text-accent-cyan bg-accent-cyan/10 px-2 py-0.5 rounded border border-accent-cyan/30">
                  INTERACTIVE
                </span>
              </div>

              {/* Terminal Body */}
              <div className="p-6 font-mono text-xs sm:text-sm space-y-4 text-left min-h-[320px] max-h-[400px] overflow-y-auto bg-[#050816]/90">
                {/* Pre-populated Presets */}
                {presetCmds.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center text-surface-muted">
                      <span className="text-accent-cyan font-bold mr-2">$</span>
                      <span className="text-accent-cyan">{item.command}</span>
                    </div>
                    <div className="text-emerald-400 pl-4 border-l border-surface-border/40">
                      {item.output}
                    </div>
                  </div>
                ))}

                {/* Custom User Commands */}
                {customOutputs.map((item, idx) => (
                  <div key={idx} className="space-y-1">
                    <div className="flex items-center text-surface-muted">
                      <span className="text-accent-cyan font-bold mr-2">$</span>
                      <span className="text-accent-cyan">{item.cmd}</span>
                    </div>
                    <div className="text-emerald-400 pl-4 border-l border-surface-border/40">
                      {item.out}
                    </div>
                  </div>
                ))}

                {/* Interactive Command Input Form */}
                <form onSubmit={handleCommandSubmit} className="pt-2 flex items-center gap-2">
                  <span className="text-accent-cyan font-bold">$</span>
                  <input
                    type="text"
                    value={inputCmd}
                    onChange={(e) => setInputCmd(e.target.value)}
                    placeholder="type 'help', 'whoami', 'focus', 'building', or 'clear'..."
                    className="flex-1 bg-transparent text-surface-main font-mono text-xs sm:text-sm focus:outline-none placeholder-surface-subtle"
                  />
                  <button type="submit" className="text-surface-muted hover:text-accent-cyan">
                    <CornerDownLeft className="w-4 h-4" />
                  </button>
                </form>
              </div>

              {/* Preset Command Quick Chips */}
              <div className="bg-[#050816] px-4 py-3 border-t border-surface-border/60 flex flex-wrap items-center gap-2">
                <span className="text-[11px] font-mono text-surface-muted mr-1">Quick Run:</span>
                {['whoami', 'focus', 'learning', 'building', 'status', 'help'].map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => {
                      setInputCmd(cmd);
                    }}
                    className="px-2.5 py-1 rounded bg-[#0B1020] text-accent-cyan hover:bg-accent-cyan/10 border border-surface-border hover:border-accent-cyan text-[11px] font-mono transition-colors"
                  >
                    ${cmd}
                  </button>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
