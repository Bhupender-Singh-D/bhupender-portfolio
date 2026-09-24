import React from 'react';
import { Download, ArrowRight, Send, Sparkles } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

export default function ResumeCTA() {
  return (
    <section className="py-20 relative overflow-hidden bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <ScrollReveal direction="up">
          <TiltCard maxTilt={4} scale={1.01} glare={true}>
            <div className="glass-card rounded-3xl p-8 sm:p-14 border border-blue-500/30 dark:border-blue-500/40 shadow-2xl relative overflow-hidden text-center space-y-8 bg-white/90 dark:bg-slate-900/90 backdrop-blur-2xl">
              
              {/* Background Glows */}
              <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
              <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/20 rounded-full blur-[120px] pointer-events-none" />

              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-blue-500/30 shadow-sm">
                <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400 animate-pulse" />
                <span>Ready for Next Big Challenge</span>
              </div>

              {/* Big Impact Heading */}
              <div className="space-y-3 max-w-3xl mx-auto">
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-display font-extrabold text-slate-900 dark:text-white leading-tight tracking-tight">
                  Let's Build Something <span className="text-gradient-primary">Great Together.</span>
                </h2>
                
                <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  Looking for a skilled <strong className="text-slate-900 dark:text-white font-bold">Web Designer & Front-End Developer</strong> to elevate your website, convert Figma designs to React, or build scalable web applications? Let's talk!
                </p>
              </div>

              {/* Action Buttons Row */}
              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                
                {/* Download Resume */}
                <a
                  href="/Bhupender_Singh_Front_End_Developer.pdf"
                  download="Bhupender_Singh_Front_End_Developer.pdf"
                  className="btn-3d btn-3d-primary inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm tracking-wide shadow-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <Download className="w-4 h-4 text-cyan-300" />
                  <span>Download Resume PDF</span>
                </a>

                {/* View Projects */}
                <a
                  href="#portfolio"
                  className="btn-3d btn-3d-secondary inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm tracking-wide focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <span>View Projects</span>
                  <ArrowRight className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                </a>

                {/* Contact Me */}
                <a
                  href="#contact"
                  className="btn-3d btn-3d-outline inline-flex items-center gap-2 px-7 py-4 rounded-xl font-bold text-sm tracking-wide focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                >
                  <Send className="w-4 h-4" />
                  <span>Contact Me</span>
                </a>

              </div>

            </div>
          </TiltCard>
        </ScrollReveal>

      </div>
    </section>
  );
}
