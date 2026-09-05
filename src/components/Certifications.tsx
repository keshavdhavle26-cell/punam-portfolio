import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { CERTIFICATES } from '../data/portfolioData';
import { Certificate } from '../types/portfolio';
import { CertModal } from './CertModal';

export const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  return (
    <section id="certifications" className="py-24 bg-bg-secondary/40 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>VERIFIED ACCOMPLISHMENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-tech text-surface-main">
            PROFESSIONAL <span className="text-accent-cyan">CERTIFICATIONS</span>
          </h2>
          <p className="text-surface-muted text-sm sm:text-base mt-2 max-w-xl font-mono">
            Industry & platform-recognized certificates across cybersecurity, AI, and development.
          </p>
          <div className="w-16 h-1 bg-accent-cyan/60 rounded-full mt-3" />
        </div>

        {/* Certifications Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES.map((cert, idx) => (
            <motion.div
              key={cert.id}
              className="glass-panel-interactive p-6 rounded-2xl flex flex-col justify-between group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-mono font-semibold text-accent-cyan px-2.5 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30">
                    {cert.category}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan flex items-center justify-center">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                </div>

                {/* Title & Issuer */}
                <h3 className="font-tech font-bold text-lg text-surface-main group-hover:text-accent-cyan transition-colors leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs font-mono text-surface-muted mt-1 mb-3">
                  {cert.issuer}
                </p>

                <p className="text-surface-muted text-xs leading-relaxed line-clamp-3 mb-6">
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Date / Code Footer */}
                {cert.date && (
                  <div className="text-[11px] font-mono text-surface-subtle mb-4 flex items-center justify-between border-t border-surface-border/40 pt-3">
                    <span>Date: {cert.date}</span>
                    {cert.code && <span className="text-accent-cyan">ID: {cert.code}</span>}
                  </div>
                )}

                {/* Action Trigger */}
                <button
                  onClick={() => setSelectedCert(cert)}
                  className="w-full py-2.5 px-4 rounded-lg bg-bg-primary hover:bg-accent-cyan/10 text-surface-main hover:text-accent-cyan border border-surface-border hover:border-accent-cyan text-xs font-mono font-semibold transition-all flex items-center justify-center gap-1.5 group/btn"
                >
                  <span>VIEW CERTIFICATE</span>
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal View */}
      <CertModal cert={selectedCert} onClose={() => setSelectedCert(null)} />
    </section>
  );
};
