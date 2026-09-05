import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Shield } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
  onOpenResume?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onOpenResume }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Cybersecurity', href: '#cybersecurity' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050816]/80 backdrop-blur-md border-b border-surface-border py-3 shadow-lg shadow-black/30'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-accent-cyan rounded-md"
          >
            <div className="w-9 h-9 rounded-lg bg-[#0B1020] border border-accent-cyan/40 flex items-center justify-center text-accent-cyan font-mono font-bold text-lg group-hover:border-accent-cyan group-hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all">
              <Shield className="w-5 h-5 text-accent-cyan" />
            </div>
            <div className="flex flex-col">
              <span className="font-tech font-bold text-lg tracking-wider text-surface-main group-hover:text-accent-cyan transition-colors">
                PUNAM<span className="text-accent-cyan">.DEV</span>
              </span>
              <span className="text-[10px] text-surface-muted -mt-1 font-mono tracking-widest uppercase">
                AI & Cyber
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-all duration-200 ${
                    isActive
                      ? 'text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30 shadow-[0_0_10px_rgba(0,229,255,0.15)]'
                      : 'text-surface-muted hover:text-surface-main hover:bg-surface-border/20'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={onOpenResume}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-mono font-semibold tracking-wider text-[#050816] bg-accent-cyan hover:bg-[#33ECFF] rounded-md transition-all shadow-[0_0_15px_rgba(0,229,255,0.3)] hover:shadow-[0_0_20px_rgba(0,229,255,0.5)] focus:outline-none focus:ring-2 focus:ring-accent-cyan"
            >
              <FileText className="w-4 h-4" />
              <span>RESUME</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenResume}
              className="px-3 py-1.5 text-xs font-mono font-semibold text-[#050816] bg-accent-cyan rounded-md"
            >
              RESUME
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-surface-muted hover:text-surface-main bg-[#0B1020] border border-surface-border focus:outline-none focus:ring-2 focus:ring-accent-cyan"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-accent-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#050816]/95 backdrop-blur-xl border-b border-surface-border px-4 pt-3 pb-6 space-y-2 transition-all">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'text-accent-cyan bg-accent-cyan/10 border border-accent-cyan/30'
                    : 'text-surface-muted hover:text-surface-main hover:bg-surface-border/30'
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
};
