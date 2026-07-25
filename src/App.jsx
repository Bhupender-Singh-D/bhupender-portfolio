import React, { useState, useEffect } from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import WhyHireMe from './components/WhyHireMe';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import ResumeModal from './components/ResumeModal';
import Footer from './components/Footer';

export default function App() {
  const [isDark, setIsDark] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Sync dark class on html root element
  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="relative min-h-screen font-sans selection:bg-blue-600 selection:text-white transition-colors duration-300">
      {/* Particle Canvas Background */}
      <ParticleBackground isDark={isDark} />

      {/* Main Header / Navigation */}
      <Navbar
        isDark={isDark}
        setIsDark={setIsDark}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-4">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Portfolio />
        <WhyHireMe />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Resume Viewer & Download Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
