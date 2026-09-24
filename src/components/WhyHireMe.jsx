import React from 'react';
import { Award, Code2, LayoutGrid, Zap, Smartphone, Search, Sparkles, HeartHandshake } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const reasons = [
  {
    title: '2.8+ Years Experience',
    desc: 'Hands-on industry experience engineering high-impact web portals for startups, clients, and software agencies.',
    icon: Award,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Clean Modular Code',
    desc: 'Writing structured, reusable, readable, and well-commented React & front-end code bases.',
    icon: Code2,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Pixel-Perfect Fidelity',
    desc: 'Converting Figma, Adobe XD, and PSD designs into exact pixel-perfect HTML/CSS layouts.',
    icon: LayoutGrid,
    color: 'from-pink-500 to-rose-600'
  },
  {
    title: 'Fast Execution Speed',
    desc: 'Rapid development turnaround times without ever sacrificing quality or design standards.',
    icon: Zap,
    color: 'from-amber-500 to-orange-600'
  },
  {
    title: '100% Mobile Responsive',
    desc: 'Ensuring seamless cross-device layouts across iPhones, Androids, iPads, laptops, and 4K desktops.',
    icon: Smartphone,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'SEO & Speed Optimization',
    desc: 'Optimized HTML5 semantic tags, fast page load speeds, and Google Core Web Vitals optimization.',
    icon: Search,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Modern UI/UX Micro-Interactions',
    desc: 'Building interactive user interfaces with dark mode support, 3D cards, micro-animations, and glassmorphism.',
    icon: Sparkles,
    color: 'from-purple-600 to-pink-500'
  },
  {
    title: '100% Client Satisfaction',
    desc: 'Dedicated to achieving client success through proactive communication, bug fixing, and post-launch support.',
    icon: HeartHandshake,
    color: 'from-rose-500 to-red-600'
  }
];

export default function WhyHireMe() {
  return (
    <section className="py-24 relative overflow-hidden bg-white/60 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/20 shadow-sm">
              <HeartHandshake className="w-4 h-4" />
              <span>Competitive Value</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why <span className="text-gradient-primary">Hire Me</span>?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Engineering standards and value-add capabilities I bring to every web project.
            </p>

            <div className="w-24 h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-blue-600 mx-auto rounded-full mt-2" />
          </div>
        </ScrollReveal>

        {/* 3D Reasons Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} direction="up" delay={idx * 60}>
                <TiltCard maxTilt={8} scale={1.03} glare={true} className="h-full">
                  <div
                    className="glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col items-center text-center space-y-4 shadow-xl transition-all duration-300 group h-full bg-white/90 dark:bg-slate-900/70"
                  >
                    <div className={`p-4 rounded-xl bg-gradient-to-tr ${item.color} text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
