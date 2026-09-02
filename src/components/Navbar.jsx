import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, Code2, Download } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Experience', href: '#experience' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar({ isDark, setIsDark, onOpenResume }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Scrolled background state
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Scroll progress
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }

      // Active section highlight
      const sections = navLinks.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      {/* Scroll Progress Bar */}
      <div 
        className="h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-500 transition-all duration-150" 
        style={{ width: `${scrollProgress}%` }}
      />

      <nav className={`w-full transition-all duration-300 ${
        isScrolled 
          ? 'glass-panel shadow-lg py-3 border-b border-slate-200/50 dark:border-slate-800/80' 
          : 'bg-transparent py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group rounded-[5px] focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none">
            <div className="w-10 h-10 rounded-[5px] bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px] transition-transform duration-300 group-hover:scale-105">
              <div className="w-full h-full bg-slate-900 rounded-[3px] flex items-center justify-center text-white font-bold">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-lg leading-tight tracking-tight text-slate-900 dark:text-white">
                Bhupender<span className="text-blue-600 dark:text-cyan-400">.dev</span>
              </span>
              <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-widest font-semibold">
                Front-End Dev
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-[5px] text-sm font-medium transition-all duration-200 relative focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                    isActive
                      ? 'text-blue-600 dark:text-cyan-400 font-semibold'
                      : 'text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-cyan-400 hover:bg-slate-100/50 dark:hover:bg-slate-800/40'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full" />
                  )}
                </a>
              );
            })}
          </div>

          {/* Right Action Tools */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2.5 rounded-[5px] bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-amber-300 hover:scale-105 active:scale-95 transition-all duration-200 border border-slate-300/50 dark:border-slate-700/50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label="Toggle dark mode"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5 text-slate-700" />}
            </button>

            {/* Hire Me CTA Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-blue-600 dark:text-cyan-400 border border-blue-600/30 dark:border-cyan-400/30 hover:bg-blue-600/10 dark:hover:bg-cyan-400/10 rounded-[5px] transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              Hire Me
            </a>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-[5px] shadow-md hover:shadow-blue-500/25 hover:scale-[1.02] active:scale-95 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
            >
              <Download className="w-4 h-4" />
              <span>Resume</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2.5 rounded-[5px] bg-slate-200/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-200 border border-slate-300/50 dark:border-slate-700/50 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-panel border-b border-slate-200 dark:border-slate-800 px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top duration-300 rounded-[8px]">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-4 py-3 rounded-[5px] text-base font-medium transition-colors ${
                activeSection === link.href.substring(1)
                  ? 'bg-blue-600/10 text-blue-600 dark:text-cyan-400 font-semibold'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-[5px] font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
