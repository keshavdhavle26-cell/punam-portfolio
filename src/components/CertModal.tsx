import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Award, ExternalLink, CheckCircle2, ShieldCheck, FileText } from 'lucide-react';
import { Certificate } from '../types/portfolio';

interface CertModalProps {
  cert: Certificate | null;
  onClose: () => void;
}

export const CertModal: React.FC<CertModalProps> = ({ cert, onClose }) => {
  if (!cert) return null;

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

        {/* Modal Content */}
        <motion.div
          className="relative z-10 w-full max-w-2xl bg-[#0B1020] border border-accent-cyan/40 rounded-2xl p-6 sm:p-8 shadow-2xl shadow-cyan-glow-sm text-surface-main my-auto"
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.3 }}
        >
          {/* Header */}
          <div className="flex items-start justify-between border-b border-surface-border/60 pb-5 mb-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan flex items-center justify-center shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-accent-cyan px-2.5 py-0.5 rounded bg-accent-cyan/10 border border-accent-cyan/30">
                  {cert.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold font-tech text-surface-main mt-1">
                  {cert.title}
                </h3>
                <p className="text-surface-muted text-xs sm:text-sm font-mono">
                  {cert.issuer} {cert.date ? `• Completed ${cert.date}` : ''}
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-bg-primary text-surface-muted hover:text-accent-cyan border border-surface-border hover:border-accent-cyan transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-6">
            {/* Description */}
            <p className="text-surface-muted text-sm sm:text-base leading-relaxed bg-bg-primary/50 p-4 rounded-xl border border-surface-border/50">
              {cert.description}
            </p>

            {/* Credential Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono">
              {cert.code && (
                <div className="p-3 rounded-lg bg-bg-primary border border-surface-border">
                  <span className="text-surface-muted block">CREDENTIAL CODE</span>
                  <span className="text-accent-cyan font-bold text-sm">{cert.code}</span>
                </div>
              )}

              {cert.date && (
                <div className="p-3 rounded-lg bg-bg-primary border border-surface-border">
                  <span className="text-surface-muted block">ISSUE DATE</span>
                  <span className="text-surface-main font-semibold text-sm">{cert.date}</span>
                </div>
              )}
            </div>

            {/* Certificate Preview Card Component */}
            <div className="relative aspect-[4/3] w-full rounded-xl bg-[#050816] border border-accent-cyan/30 overflow-hidden flex flex-col items-center justify-center p-6 text-center shadow-inner">
              <div className="w-16 h-16 rounded-full bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan flex items-center justify-center mb-3">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h4 className="font-tech font-bold text-lg text-surface-main max-w-md">
                {cert.title}
              </h4>
              <p className="text-xs font-mono text-accent-cyan mt-1">
                Issued by {cert.issuer}
              </p>
              
              <div className="mt-4 px-3 py-1.5 rounded-full bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 font-mono text-xs flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Verified Credential Record</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-surface-border/60">
              <a
                href={cert.filePath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent-cyan text-[#050816] font-mono font-bold text-xs tracking-wider hover:bg-[#33ECFF] transition-all shadow-cyan-glow"
              >
                <FileText className="w-4 h-4" />
                <span>VIEW CERTIFICATE PDF</span>
              </a>

              {cert.verifyUrl && (
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-3 rounded-lg bg-accent-indigo/20 text-accent-indigo border border-accent-indigo/40 hover:bg-accent-indigo hover:text-white font-mono font-bold text-xs transition-all"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>VERIFY ONLINE</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
