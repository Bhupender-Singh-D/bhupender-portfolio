import React, { useState, useEffect } from 'react';
import { ArrowRight, Download, Send, Sparkles, CheckCircle2, Code2, Layers, Cpu, Globe, Palette, Terminal } from 'lucide-react';
import ProfileImage from '../assets/images/profile.webp';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const roles = [
  "Web Designer & Front-End Developer",
  "React.js & Frontend Specialist",
  "UI/UX & Figma-to-Code Expert",
  "WordPress & WooCommerce Developer"
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[roleIndex];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText(prev => prev.slice(0, -1));
      }, 35);
    } else {
      timer = setTimeout(() => {
        setCurrentText(prev => fullText.slice(0, prev.length + 1));
      }, 65);
    }

    if (!isDeleting && currentText === fullText) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex]);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden flex items-center min-h-[92vh] bg-grid-pattern">
      {/* Background Glow Orbs - Adaptive Light & Dark */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-400/10 dark:bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Floating 3D Background Tech Elements */}
      <div className="hidden lg:block pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Floating HTML/CSS Badge */}
        <div className="absolute top-28 left-12 animate-float-slow glass-card p-3 rounded-xl border border-orange-500/30 shadow-xl flex items-center gap-2 text-xs font-mono text-orange-600 dark:text-orange-400 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md">
          <Code2 className="w-5 h-5 text-orange-500 animate-pulse" />
          <span>&lt;HTML5 / CSS3&gt;</span>
        </div>

        {/* Floating React Badge */}
        <div className="absolute top-36 right-16 animate-float-reverse glass-card p-3 rounded-xl border border-cyan-400/30 shadow-xl flex items-center gap-2 text-xs font-mono text-cyan-600 dark:text-cyan-400 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md">
          <Cpu className="w-5 h-5 text-cyan-500 dark:text-cyan-400 animate-spin-slow" />
          <span>React.js Engine</span>
        </div>

        {/* Floating WordPress Badge */}
        <div className="absolute bottom-28 left-20 animate-float-reverse glass-card p-3 rounded-xl border border-blue-500/30 shadow-xl flex items-center gap-2 text-xs font-mono text-blue-600 dark:text-blue-400 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md">
          <Globe className="w-5 h-5 text-blue-500 dark:text-blue-400" />
          <span>WordPress & Elementor</span>
        </div>

        {/* Floating Figma Badge */}
        <div className="absolute bottom-36 right-24 animate-float-slow glass-card p-3 rounded-xl border border-purple-400/30 shadow-xl flex items-center gap-2 text-xs font-mono text-purple-600 dark:text-purple-400 bg-white/80 dark:bg-slate-900/70 backdrop-blur-md">
          <Palette className="w-5 h-5 text-purple-500 dark:text-purple-400" />
          <span>Figma to Pixel-Perfect</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column - Positioning & Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <ScrollReveal direction="up" delay={100}>

              {/* Status Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-card border border-blue-500/30 text-blue-600 dark:text-cyan-400 text-xs font-semibold tracking-wider uppercase shadow-lg shadow-blue-500/10">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span>Available for Freelance & Full-Time Roles</span>
              </div>

              {/* Main Positioning Heading */}
              <div className="space-y-3 mt-4">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  Crafting Digital Products & High-Performance Web Apps
                </p>

                <h1 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
                  WEB DESIGNER & <br className="hidden sm:inline" />
                  <span className="text-gradient-primary">FRONT-END DEVELOPER</span>
                </h1>

                {/* Dynamic Typing Subtitle */}
                <div className="h-12 flex items-center justify-center lg:justify-start pt-1">
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-semibold text-blue-600 dark:text-cyan-400 font-display flex items-center gap-2">
                    <span className="text-slate-400 dark:text-slate-500 font-mono text-base sm:text-lg">&gt;</span>
                    <span>{currentText}</span>
                    <span className="animate-pulse border-r-2 border-blue-600 dark:border-cyan-400 ml-0.5 inline-block h-6 sm:h-7 align-middle"></span>
                  </h2>
                </div>
              </div>

              {/* Concise Introduction */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0 mt-3">
                Hi, I'm <strong className="text-slate-900 dark:text-white font-bold">Bhupender Singh</strong> — a results-driven Web Designer & Front-End Developer with <strong className="text-blue-600 dark:text-cyan-400 font-bold">2.8+ years of experience</strong> engineering responsive React web applications, pixel-perfect Figma layouts, and scalable WordPress solutions for startups, agencies, and enterprise clients.
              </p>

              {/* Feature Highlights Pills */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 glass-card px-3.5 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Pixel-Perfect Design</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 glass-card px-3.5 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Core Web Vitals Fast</span>
                </div>
                <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800 dark:text-slate-200 glass-card px-3.5 py-1.5 rounded-lg border border-slate-200/80 dark:border-slate-800 shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                  <span>Clean React & Tailwind</span>
                </div>
              </div>

              {/* Interactive 3D Action CTA Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-6">
                <a
                  href="#portfolio"
                  className="btn-3d btn-3d-primary inline-flex items-center gap-2.5 px-7 py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none group"
                >
                  <span>View Portfolio Work</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#contact"
                  className="btn-3d btn-3d-secondary inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm tracking-wide focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <Send className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                  <span>Hire Me Now</span>
                </a>

                <a
                  href="/Bhupender_Singh_Front_End_Developer.pdf"
                  download="Bhupender_Singh_Front_End_Developer.pdf"
                  className="btn-3d btn-3d-secondary inline-flex items-center gap-2 px-6 py-4 rounded-xl font-bold text-sm tracking-wide focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <Download className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  <span>Resume PDF</span>
                </a>
              </div>

            </ScrollReveal>
          </div>

          {/* Right Column - 3D Visual Container */}
          <div className="lg:col-span-5 flex justify-center relative">
            <ScrollReveal direction="left" delay={200} className="w-full max-w-md">
              <TiltCard maxTilt={10} scale={1.02} glare={true} className="w-full">
                
                {/* Main 3D Card Container */}
                <div className="glass-card rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 relative overflow-hidden group bg-white/90 dark:bg-slate-900/80 backdrop-blur-xl">

                  {/* Top Window Bar */}
                  <div className="flex items-center justify-between px-3.5 py-2.5 bg-slate-900 text-white rounded-xl border border-slate-800 shadow-inner">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full bg-rose-500 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-amber-500 inline-block"></span>
                      <span className="w-3 h-3 rounded-full bg-emerald-500 inline-block"></span>
                    </div>
                    <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                      BhupenderPortfolio.jsx
                    </span>
                    <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
                  </div>

                  {/* Profile & Graphic Showcase Body */}
                  <div className="relative p-6 rounded-xl bg-gradient-to-b from-blue-50/80 via-white to-purple-50/80 dark:from-blue-950/40 dark:via-slate-900/60 dark:to-purple-950/40 border border-slate-200/80 dark:border-slate-800 text-center flex flex-col items-center justify-center space-y-4 shadow-sm">
                    
                    {/* Glowing Avatar Frame */}
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full p-1 bg-gradient-to-tr from-blue-600 via-purple-600 to-cyan-400 shadow-2xl group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={ProfileImage}
                        alt="Bhupender Singh — Web Designer & Front-End Developer"
                        width={160}
                        height={160}
                        loading="eager"
                        fetchpriority="high"
                        className="w-full h-full rounded-full object-cover border-2 border-white dark:border-slate-900"
                      />
                      {/* Active Status Ring */}
                      <div className="absolute bottom-1 right-1 w-7 h-7 rounded-full bg-emerald-500 border-2 border-white dark:border-slate-900 flex items-center justify-center shadow-lg">
                        <span className="w-2.5 h-2.5 rounded-full bg-white animate-ping"></span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-display font-extrabold text-2xl text-slate-900 dark:text-white tracking-tight">
                        Bhupender Singh
                      </h3>
                      <p className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400 mt-1">
                        Web Designer & Front-End Specialist
                      </p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 font-medium">
                        Mohali & Chandigarh, India
                      </p>
                    </div>

                    {/* Code Snippet Preview Card */}
                    <div className="w-full p-3.5 rounded-xl bg-slate-950 text-left font-mono text-[11px] text-slate-200 border border-slate-800 space-y-1 shadow-md">
                      <div className="text-slate-500">// Developer Specs</div>
                      <div><span className="text-purple-400">const</span> <span className="text-cyan-300">developer</span> = &#123;</div>
                      <div className="pl-4"><span className="text-blue-300">experience</span>: <span className="text-amber-300">'2.8+ Years'</span>,</div>
                      <div className="pl-4"><span className="text-blue-300">specialty</span>: [<span className="text-emerald-300">'React'</span>, <span className="text-emerald-300">'Tailwind'</span>, <span className="text-emerald-300">'Figma'</span>],</div>
                      <div className="pl-4"><span className="text-blue-300">focus</span>: <span className="text-amber-300">'Pixel-Perfect & Fast UI'</span></div>
                      <div>&#125;;</div>
                    </div>

                    {/* Tech Badges Row */}
                    <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-blue-300 border border-blue-500/20">
                        React.js
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-cyan-500/10 text-cyan-600 dark:text-cyan-300 border border-cyan-500/20">
                        Tailwind CSS
                      </span>
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-purple-500/10 text-purple-600 dark:text-purple-300 border border-purple-500/20">
                        WordPress
                      </span>
                    </div>

                  </div>

                  {/* Floating Elevated Badges */}
                  <div className="absolute -top-3 -right-3 px-4 py-2 rounded-xl glass-card border border-purple-500/30 text-xs font-bold flex items-center gap-2 shadow-xl animate-float-slow bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white">
                    <Code2 className="w-4 h-4 text-purple-500" />
                    <span>2.8+ Yrs Experience</span>
                  </div>

                  <div className="absolute -bottom-3 -left-3 px-4 py-2 rounded-xl glass-card border border-cyan-500/30 text-xs font-bold flex items-center gap-2 shadow-xl animate-float-reverse bg-white/95 dark:bg-slate-900/95 text-slate-900 dark:text-white">
                    <Layers className="w-4 h-4 text-cyan-500" />
                    <span>50+ Web Projects</span>
                  </div>

                </div>

              </TiltCard>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
