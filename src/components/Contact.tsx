import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle2, Copy } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'success'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    // Trigger Mailto client fallback
    const mailtoSubject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormStatus('success');
  };

  return (
    <section id="contact" className="py-24 bg-bg-primary relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent-cyan/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-cyan/10 border border-accent-cyan/30 text-accent-cyan font-mono text-xs font-semibold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>REACH OUT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-tech text-surface-main">
            GET IN <span className="text-accent-cyan">TOUCH</span>
          </h2>
          <p className="text-surface-muted text-sm sm:text-base mt-2 max-w-xl font-mono">
            Have a project, internship, or role in mind? Send me a message directly.
          </p>
          <div className="w-16 h-1 bg-accent-cyan/60 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT COLUMN: Contact Cards */}
          <motion.div
            className="lg:col-span-5 space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Email Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-center justify-between group hover:border-accent-cyan transition-colors">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono text-surface-muted block">EMAIL</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-tech font-bold text-sm sm:text-base text-surface-main group-hover:text-accent-cyan transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2 rounded-lg bg-bg-primary text-surface-muted hover:text-accent-cyan border border-surface-border transition-colors"
                title="Copy Email"
              >
                {copiedEmail ? <CheckCircle2 className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-4 group hover:border-accent-cyan transition-colors">
              <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 border border-accent-cyan/40 text-accent-cyan flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-surface-muted block">PHONE</span>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="font-tech font-bold text-sm sm:text-base text-surface-main group-hover:text-accent-cyan transition-colors"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>
            </div>

            {/* Location Card */}
            <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent-indigo/10 border border-accent-indigo/40 text-accent-indigo flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono text-surface-muted block">LOCATION</span>
                <span className="font-tech font-bold text-sm sm:text-base text-surface-main">
                  {PERSONAL_INFO.location}
                </span>
              </div>
            </div>

            {/* Social Links Bar */}
            <div className="pt-2 flex items-center gap-4">
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#0B1020] border border-surface-border hover:border-accent-cyan hover:text-accent-cyan text-surface-main font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Linkedin className="w-4 h-4 text-accent-indigo" />
                <span>LINKEDIN</span>
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-[#0B1020] border border-surface-border hover:border-accent-cyan hover:text-accent-cyan text-surface-main font-mono text-xs font-bold flex items-center justify-center gap-2 transition-all"
              >
                <Github className="w-4 h-4 text-accent-cyan" />
                <span>GITHUB</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Contact Form */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-mono font-bold text-surface-muted uppercase mb-2">
                    YOUR NAME
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-surface-border text-surface-main focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan focus:outline-none transition-colors text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-surface-muted uppercase mb-2">
                    YOUR EMAIL
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@example.com"
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-surface-border text-surface-main focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan focus:outline-none transition-colors text-sm font-sans"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono font-bold text-surface-muted uppercase mb-2">
                    MESSAGE
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or inquiry here..."
                    className="w-full px-4 py-3 rounded-lg bg-bg-primary border border-surface-border text-surface-main focus:border-accent-cyan focus:ring-1 focus:ring-accent-cyan focus:outline-none transition-colors text-sm font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-accent-cyan text-[#050816] font-mono font-bold text-sm tracking-wider hover:bg-[#33ECFF] transition-all shadow-cyan-glow flex items-center justify-center gap-2 focus:outline-none"
                >
                  <Send className="w-4 h-4" />
                  <span>SEND MESSAGE</span>
                </button>

                {formStatus === 'success' && (
                  <div className="p-3 rounded-lg bg-emerald-400/10 border border-emerald-400/30 text-emerald-400 text-xs font-mono text-center flex items-center justify-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Opening your default email client to send this message!</span>
                  </div>
                )}
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
