import React, { useState } from 'react';
import { User, Award, CheckCircle, Smile, MapPin, Mail, Phone, Code2, Sparkles, Copy, Check, ShieldCheck, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const stats = [
  { label: 'Years Experience', count: '2.8+', subtext: 'Front-End Development', icon: Award, color: 'from-blue-600 to-indigo-600', iconBg: 'bg-blue-500/10 text-blue-600 dark:text-cyan-400' },
  { label: 'Projects Completed', count: '50+', subtext: 'Web & Startup Platforms', icon: Code2, color: 'from-purple-600 to-pink-600', iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400' },
  { label: 'Client Satisfaction', count: '100%', subtext: 'Quality & Timely Delivery', icon: CheckCircle, color: 'from-emerald-600 to-teal-600', iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400' },
  { label: 'Happy Clients', count: '30+', subtext: 'Worldwide Businesses', icon: Smile, color: 'from-cyan-500 to-blue-600', iconBg: 'bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' },
];

export default function About() {
  const [copiedField, setCopiedField] = useState('');

  const handleCopy = (text, fieldName) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(''), 2000);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/50">
      {/* Ambient Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20 shadow-sm">
              <User className="w-4 h-4" />
              <span>Discover My Story</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              About <span className="text-gradient-primary">Bhupender Singh</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Passionate Web Designer and Front-End Developer dedicated to engineering fast, accessible, and visual-first web experiences.
            </p>

            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 mx-auto rounded-full mt-2" />
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Detailed Bio & Quick Contact Cards */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="right" delay={100}>
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white leading-tight">
                  Crafting Modern Interfaces with Technical Precision & Creative Flair
                </h3>
                
                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  I am a results-driven <strong className="text-slate-900 dark:text-white font-bold">Web Designer & Front-End Developer</strong> based in Sahibzada Ajit Singh Nagar (Mohali), Punjab with <strong className="text-blue-600 dark:text-cyan-400 font-bold">2.8+ years of experience</strong> working alongside digital agencies, software startups, and commercial clients.
                </p>

                <p className="text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                  My core technical expertise lies in building custom single-page applications with <strong className="text-slate-900 dark:text-white font-bold">React.js and Tailwind CSS</strong>, converting complex <strong className="text-slate-900 dark:text-white font-bold">Figma and PSD designs into responsive pixel-perfect HTML/CSS</strong>, and customizing high-converting <strong className="text-slate-900 dark:text-white font-bold">WordPress and WooCommerce platforms</strong>.
                </p>
              </div>

              {/* Core Quality Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-md flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 flex items-center justify-center font-bold shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Pixel-Exact Fidelity</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Exact match to Figma & XD prototypes</p>
                  </div>
                </div>

                <div className="p-4 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-md flex items-center gap-3.5">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center font-bold shrink-0">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Core Web Vitals</h4>
                    <p className="text-xs text-slate-500 dark:text-slate-400">Optimized speed & low interaction latency</p>
                  </div>
                </div>
              </div>

              {/* Quick Info Contact Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                {/* Location */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-md">
                  <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono font-bold tracking-wider">Location</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Mohali & Chandigarh, India</p>
                  </div>
                </div>

                {/* Role */}
                <div className="flex items-center gap-3.5 p-4 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-md">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono font-bold tracking-wider">Specialization</span>
                    <p className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">Web Design & React Front-End</p>
                  </div>
                </div>

                {/* Email with instant copy */}
                <div className="flex items-center justify-between p-4 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-md">
                  <div className="flex items-center gap-3.5 overflow-hidden">
                    <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="truncate">
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono font-bold tracking-wider">Email</span>
                      <a href="mailto:bhupendernadal@gmail.com" className="block text-xs font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 truncate">
                        bhupendernadal@gmail.com
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('bhupendernadal@gmail.com', 'aboutEmail')}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform shrink-0"
                    title="Copy Email"
                  >
                    {copiedField === 'aboutEmail' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                {/* Phone with instant copy */}
                <div className="flex items-center justify-between p-4 rounded-xl glass-card border border-slate-200/80 dark:border-slate-800 bg-white/90 dark:bg-slate-900/60 shadow-md">
                  <div className="flex items-center gap-3.5">
                    <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono font-bold tracking-wider">Phone</span>
                      <a href="tel:+919015381011" className="block text-xs font-bold text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400">
                        +91 9015381011
                      </a>
                    </div>
                  </div>
                  <button
                    onClick={() => handleCopy('+919015381011', 'aboutPhone')}
                    className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:scale-105 transition-transform shrink-0"
                    title="Copy Phone"
                  >
                    {copiedField === 'aboutPhone' ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 4 3D Elevated Key Stats Cards */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <ScrollReveal key={idx} direction="left" delay={150 + idx * 100}>
                  <TiltCard maxTilt={10} scale={1.03} glare={true} className="h-full">
                    <div 
                      className="glass-card p-6 sm:p-7 rounded-2xl border border-slate-200/90 dark:border-slate-800 flex flex-col items-center text-center space-y-3.5 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white/95 dark:bg-slate-900/80 backdrop-blur-xl h-full justify-between group"
                    >
                      <div className={`p-4 rounded-2xl bg-gradient-to-tr ${stat.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>
                      
                      <div>
                        <span className="text-4xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight block">
                          {stat.count}
                        </span>
                        <span className="text-sm font-bold text-slate-800 dark:text-slate-200 block mt-1">
                          {stat.label}
                        </span>
                        <span className="text-[11px] font-mono font-medium text-slate-500 dark:text-slate-400 block mt-0.5">
                          {stat.subtext}
                        </span>
                      </div>
                    </div>
                  </TiltCard>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
