import React from 'react';
import { Shield, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050816] border-t border-surface-border py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2 mb-1">
              <Shield className="w-5 h-5 text-accent-cyan" />
              <span className="font-tech font-bold text-lg tracking-wider text-surface-main">
                PUNAM KESHAV DHAVLE
              </span>
            </div>
            <p className="text-xs font-mono text-surface-muted">
              B.Tech. AIML Student • Cybersecurity Enthusiast • Full-Stack Developer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-muted hover:text-accent-cyan transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-surface-muted hover:text-accent-cyan transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-surface-muted hover:text-accent-cyan transition-colors"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-xl bg-[#0B1020] border border-surface-border text-surface-muted hover:text-accent-cyan hover:border-accent-cyan transition-all"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-surface-border/40 text-center text-xs font-mono text-surface-subtle">
          © 2026 Punam Keshav Dhavle. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
