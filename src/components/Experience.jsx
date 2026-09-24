import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Code2, Sparkles, Building2, ChevronRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const experienceEntries = [
  {
    company: 'KindleBit Solutions Pvt. Ltd.',
    role: 'Web Designer & Front-End Developer',
    location: 'Mohali, Punjab, India',
    period: '09/2024 – Present',
    status: 'Current Role',
    description: 'Engineering responsive, mobile-first web platforms and React applications for international clients and digital agencies.',
    responsibilities: [
      'Architect modular React.js UI components using Tailwind CSS and ES6+ JavaScript.',
      'Convert complex Figma & PSD design prototypes into pixel-exact, cross-browser responsive web pages.',
      'Customize WordPress themes, Elementor Pro layouts, and WooCommerce e-commerce storefronts.',
      'Optimize Google Core Web Vitals, lazy loading, script execution, and page load speed index.',
      'Collaborate directly with product managers, UI designers, and backend engineering teams.'
    ],
    techStack: ['React.js', 'Tailwind CSS', 'JavaScript ES6+', 'HTML5/CSS3', 'WordPress', 'Elementor', 'Figma', 'WooCommerce']
  },
  {
    company: 'FinsinTech Pvt. Ltd.',
    role: 'Web Designer',
    location: 'Mohali, Punjab, India',
    period: '10/2023 – 06/2024',
    status: 'Completed',
    description: 'Developed mobile-friendly corporate websites and UI layouts with focus on cross-browser support and clean code standards.',
    responsibilities: [
      'Designed and coded responsive HTML5/CSS3 web templates using Bootstrap 5 and jQuery.',
      'Translated wireframes and graphic assets into clean, accessible web interfaces.',
      'Performed continuous site maintenance, performance updates, and client bug fixes.',
      'Assisted in SEO meta schema setup and mobile layout QA across device breakpoints.'
    ],
    techStack: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript', 'jQuery', 'WordPress', 'UI Design']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/50">
      {/* Background Accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20 shadow-sm">
              <Briefcase className="w-4 h-4" />
              <span>Career Journey</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Work <span className="text-gradient-primary">Experience</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              2.8+ years of hands-on industry experience building modern web applications and client portals.
            </p>

            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 mx-auto rounded-full mt-2" />
          </div>
        </ScrollReveal>

        {/* Professional Timeline Layout */}
        <div className="max-w-4xl mx-auto space-y-8 relative">

          {/* Vertical Connecting Line */}
          {/* <div className="hidden sm:block absolute top-8 bottom-8 left-8 w-0.5 bg-gradient-to-b from-blue-600 via-purple-600 to-cyan-400 opacity-30" /> */}

          {experienceEntries.map((exp, idx) => (
            <ScrollReveal key={exp.company} direction="up" delay={idx * 120}>
              <TiltCard maxTilt={5} scale={1.01} glare={true}>
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200/90 dark:border-slate-800 shadow-xl relative overflow-hidden bg-white/90 dark:bg-slate-900/70">

                  {/* Top Accent Ribbon */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400" />

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200/80 dark:border-slate-800/80 pb-5 mb-5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-blue-600 dark:text-cyan-400" />
                        <h3 className="text-2xl font-display font-bold text-slate-900 dark:text-white">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-base font-semibold text-blue-600 dark:text-cyan-400">
                        {exp.role}
                      </p>
                      <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 font-medium">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5" /> {exp.location}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col items-start sm:items-end gap-2">
                      <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-mono font-bold text-slate-800 dark:text-slate-200">
                        <Calendar className="w-3.5 h-3.5 text-blue-600 dark:text-cyan-400" />
                        <span>{exp.period}</span>
                      </div>

                      <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold ${exp.status === 'Current Role'
                        ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
                        : 'bg-slate-500/10 text-slate-500 dark:text-slate-400 border border-slate-500/20'
                        }`}>
                        {exp.status}
                      </span>
                    </div>
                  </div>

                  {/* Role Overview */}
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  {/* Key Contributions */}
                  <div className="space-y-2.5">
                    <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                      Key Responsibilities & Accomplishments
                    </h4>

                    <div className="grid grid-cols-1 gap-2">
                      {exp.responsibilities.map((resp, rIdx) => (
                        <div key={rIdx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-800/50">
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                            {resp}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-6 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center gap-2">
                    <span className="text-xs font-mono font-bold text-slate-500 uppercase mr-1">
                      Tech Stack:
                    </span>
                    {exp.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </TiltCard>
            </ScrollReveal>
          ))}

        </div>

      </div>
    </section>
  );
}
