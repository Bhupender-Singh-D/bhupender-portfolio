import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Send, Sparkles, CheckCircle2, Code, Layers } from 'lucide-react';
import ProfileImage from '../assets/images/profile.webp';
import ScrollReveal from './ScrollReveal';

const roles = [
  "Web Designer & Front-End Developer",
  "React.js & Frontend Specialist",
  "UI/UX & Figma-to-Code Expert",
  "WordPress & WooCommerce Developer"
];

export default function Hero({ onOpenResume }) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, 40);
    } else {
      timer = setTimeout(() => {
        setCurrentText(prev => fullText.slice(0, prev.length + 1));
      }, 70);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden flex items-center min-h-[90vh]">
      {/* Glow Orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Left Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <ScrollReveal direction="up" delay={100}>
              
              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-[8px] glass-card border border-blue-500/30 text-blue-600 dark:text-cyan-400 text-xs font-semibold tracking-wide uppercase">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Available for Freelance Projects & Full-Time Roles</span>
              </div>

              {/* Main Heading */}
              <div className="space-y-2 mt-4">
                <p className="text-lg sm:text-xl font-medium text-slate-600 dark:text-slate-300">
                  Welcome to my portfolio
                </p>
                <h1 className="text-4xl sm:text-6xl lg:text-6xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
                  Hi, I'm <span className="text-gradient-primary">Bhupender Singh</span>
                </h1>
                
                {/* Dynamic Typing Title */}
                <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start">
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-cyan-400 font-display">
                    <span>{currentText}</span>
                    <span className="animate-pulse border-r-2 border-blue-600 dark:border-cyan-400 ml-1 inline-block h-6 sm:h-8 align-middle"></span>
                  </h2>
                </div>
              </div>

              {/* Description */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 mt-4">
                Professional <strong className="text-slate-900 dark:text-white font-semibold">Web Designer & Front-End Developer</strong> based in Punjab, India with <strong className="text-blue-600 dark:text-cyan-400 font-semibold">2.8+ years of experience</strong>. I specialize in building high-performing React.js web apps, pixel-perfect Figma conversions, and customized WordPress websites optimized for speed, SEO, and conversions.
              </p>

              {/* Feature badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Pixel-Perfect Layouts</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>Core Web Vitals Fast</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                  <span>SEO & Accessibility Ready</span>
                </div>
              </div>

              {/* CTA Buttons - 5px Border Radius */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6">
                {/* View Portfolio */}
                <a
                  href="#portfolio"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] font-semibold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:opacity-95 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <span>View My Work</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                {/* Hire Me / Contact */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] font-semibold text-blue-600 dark:text-cyan-400 border border-blue-600/30 dark:border-cyan-400/30 hover:bg-blue-600/10 dark:hover:bg-cyan-400/10 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <Send className="w-4 h-4" />
                  <span>Hire Me</span>
                </a>

                {/* Download Resume */}
                <a
                  href="/Bhupender_Singh_Front_End_Developer.pdf"
                  download="Bhupender_Singh_Front_End_Developer.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-[5px] font-semibold text-slate-800 dark:text-white glass-card hover:bg-slate-100 dark:hover:bg-slate-800 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <Download className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  <span>Download Resume</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Visual / Avatar Frame */}
          <div className="lg:col-span-5 flex justify-center relative">
            <ScrollReveal direction="left" delay={200}>
              {/* Outer Glow Ring */}
              <div className="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-96 lg:h-96">
                
                <div className="absolute inset-0 rounded-[8px] bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 opacity-30 blur-2xl animate-pulse-glow" />

                {/* Profile Card Container - 8px Border Radius */}
                <div className="relative w-full h-full glass-card rounded-[8px] p-4 border border-white/20 dark:border-white/10 shadow-2xl flex flex-col justify-between overflow-hidden group">
                  
                  {/* Header Mock Code Toolbar */}
                  <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 dark:border-slate-800/80 bg-slate-100/50 dark:bg-slate-900/50 rounded-[8px]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">DeveloperProfile.jsx</span>
                    <Sparkles className="w-4 h-4 text-amber-400" />
                  </div>

                  {/* Avatar / Developer Graphic Illustration */}
                  <div className="relative my-4 flex-1 flex flex-col items-center justify-center bg-gradient-to-b from-blue-500/10 to-purple-500/10 rounded-[8px] p-6 border border-slate-200/50 dark:border-slate-800/50">
                    <div className="relative w-28 h-28 sm:w-40 sm:h-40 rounded-full bg-gradient-to-tr from-blue-600 to-purple-600 p-1 shadow-xl mb-4 group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={ProfileImage}
                        alt="Bhupender Singh — Web Designer & Front-End Developer in Mohali and Chandigarh"
                        width={160}
                        height={160}
                        loading="eager"
                        fetchpriority="high"
                        className="w-full h-full rounded-full object-cover"
                      />
                      {/* Active Status Badge */}
                      <div className="absolute bottom-1 right-1 w-6 h-6 rounded-full bg-emerald-500 border-2 border-slate-900 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-white animate-ping"></span>
                      </div>
                    </div>

                    <h3 className="font-display font-bold text-xl text-slate-900 dark:text-white">
                      Bhupender Singh
                    </h3>
                    <p className="text-xs text-blue-600 dark:text-cyan-400 font-semibold tracking-wide mt-0.5">
                      Mohali & Chandigarh, India
                    </p>

                    <div className="mt-4 flex items-center gap-2">
                      <span className="px-2.5 py-1 rounded-[5px] text-[11px] font-mono bg-blue-500/10 text-blue-600 dark:text-blue-400 font-semibold">
                        React.js
                      </span>
                      <span className="px-2.5 py-1 rounded-[5px] text-[11px] font-mono bg-purple-500/10 text-purple-600 dark:text-purple-400 font-semibold">
                        Tailwind
                      </span>
                      <span className="px-2.5 py-1 rounded-[5px] text-[11px] font-mono bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 font-semibold">
                        WordPress
                      </span>
                    </div>
                  </div>

                  {/* Floating Badges - 8px Border Radius */}
                  <div className="absolute -top-2 -right-3 px-3.5 py-2 rounded-[8px] glass-card border border-purple-500/30 text-xs font-semibold flex items-center gap-2 shadow-lg animate-float">
                    <Code className="w-4 h-4 text-purple-500" />
                    <span className="text-slate-800 dark:text-slate-200">2.8+ Yrs Exp</span>
                  </div>

                  <div className="absolute -bottom-2 -left-2 px-3.5 py-2 rounded-[8px] glass-card border border-blue-500/30 text-xs font-semibold flex items-center gap-2 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                    <Layers className="w-4 h-4 text-blue-500" />
                    <span className="text-slate-800 dark:text-slate-200">50+ Web Projects</span>
                  </div>

                </div>

              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
