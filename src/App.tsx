import React, { useState, useEffect } from 'react';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { QuickStats } from './components/QuickStats';
import { About } from './components/About';
import { FeaturedProjects } from './components/FeaturedProjects';
import { Experience } from './components/Experience';
import { TechnicalArsenal } from './components/TechnicalArsenal';
import { Cybersecurity } from './components/Cybersecurity';
import { Certifications } from './components/Certifications';
import { Education } from './components/Education';
import { ResumeSection } from './components/ResumeSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'projects',
        'experience',
        'skills',
        'cybersecurity',
        'certifications',
        'education',
        'contact',
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#050816] text-[#F8FAFC] relative selection:bg-[#00E5FF]/20 selection:text-[#00E5FF]">
      <CustomCursor />
      <Navbar activeSection={activeSection} onOpenResume={() => setIsResumeModalOpen(true)} />

      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <QuickStats />
        <About />
        <FeaturedProjects />
        <Experience />
        <TechnicalArsenal />
        <Cybersecurity />
        <Certifications />
        <Education />
        <ResumeSection onOpenResume={() => setIsResumeModalOpen(true)} />
        <Contact />
      </main>

      <Footer />

      {/* Resume Viewer Modal */}
      <ResumeModal isOpen={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </div>
  );
};

export default App;
