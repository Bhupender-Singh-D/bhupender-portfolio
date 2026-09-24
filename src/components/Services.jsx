import React from 'react';
import { Layout, Code, Smartphone, Atom, Rocket, FileCode, Globe, Sparkles, ShieldCheck, ArrowRight, RefreshCw, Zap } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const servicesList = [
  {
    title: 'Website Design & UI/UX',
    desc: 'Crafting visually stunning, user-centered web designs with intuitive user flows tailored to elevate brand identities.',
    icon: Layout,
    color: 'from-blue-500 to-indigo-600',
    tags: ['Figma', 'UI/UX', 'Wireframing']
  },
  {
    title: 'Front-End Development',
    desc: 'Engineering responsive, scalable, and high-speed web interfaces using modern HTML5, CSS3, JavaScript ES6+, and React.',
    icon: Code,
    color: 'from-purple-500 to-indigo-600',
    tags: ['React.js', 'JavaScript', 'Tailwind']
  },
  {
    title: 'Responsive Website Dev',
    desc: 'Ensuring seamless performance and flawless pixel-perfect layouts across desktop, laptop, tablet, and mobile screens.',
    icon: Smartphone,
    color: 'from-cyan-500 to-blue-600',
    tags: ['Mobile-First', 'Flexbox', 'CSS Grid']
  },
  {
    title: 'React.js Development',
    desc: 'Building dynamic single-page applications with modular reusable component systems and robust state management.',
    icon: Atom,
    color: 'from-sky-400 to-blue-600',
    tags: ['React SPA', 'Hooks', 'Vite']
  },
  {
    title: 'PSD / Figma to HTML',
    desc: 'Converting graphic designs and interactive Figma prototypes into W3C-validated, semantic, pixel-exact web code.',
    icon: FileCode,
    color: 'from-emerald-500 to-teal-600',
    tags: ['Figma-to-Code', 'Pixel Perfect', 'W3C']
  },
  {
    title: 'WordPress & WooCommerce',
    desc: 'Customizing WordPress themes, Elementor layouts, custom CSS extensions, and WooCommerce storefronts.',
    icon: Globe,
    color: 'from-blue-600 to-purple-600',
    tags: ['WordPress', 'Elementor Pro', 'WooCommerce']
  },
  {
    title: 'Landing Page Design',
    desc: 'Designing high-converting sales & promotional landing pages optimized for maximum lead generation and engagement.',
    icon: Rocket,
    color: 'from-amber-500 to-rose-500',
    tags: ['Lead Conversion', 'Micro-Interactions', 'CTA']
  },
  {
    title: 'Website Redesign & Revamp',
    desc: 'Revamping outdated legacy websites into modern, sleek, fast-loading, mobile-friendly web platforms.',
    icon: RefreshCw,
    color: 'from-pink-500 to-purple-600',
    tags: ['UI Revamp', 'Modern Styling', 'UX Audit']
  },
  {
    title: 'Website Optimization & Speed',
    desc: 'Optimizing Google Core Web Vitals, page speed loading, image compression, script deferral, and ongoing site maintenance.',
    icon: Zap,
    color: 'from-teal-500 to-emerald-600',
    tags: ['Core Web Vitals', 'PageSpeed', 'Clean Code']
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/50">
      {/* Background Accent */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/20 shadow-sm">
              <Sparkles className="w-4 h-4" />
              <span>Services Offered</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Professional <span className="text-gradient-primary">Services</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Custom web design & development solutions built with precision, speed, and modern aesthetics.
            </p>

            <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 mx-auto rounded-full mt-2" />
          </div>
        </ScrollReveal>

        {/* Services Grid with 3D Tilt Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} direction="up" delay={idx * 60}>
                <TiltCard maxTilt={8} scale={1.03} glare={true} className="h-full">
                  <div
                    className="glass-card p-7 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-5 shadow-xl transition-all duration-300 group h-full bg-white/90 dark:bg-slate-900/70 relative overflow-hidden"
                  >
                    {/* Top Animated Accent Border */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} opacity-80 group-hover:opacity-100 transition-opacity`} />

                    <div className="space-y-4">
                      {/* Icon */}
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-tr ${service.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <Icon className="w-7 h-7" />
                      </div>

                      {/* Title & Description */}
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {service.desc}
                      </p>

                      {/* Tech Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-2">
                        {service.tags.map((tag, tIdx) => (
                          <span key={tIdx} className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Service CTA Button */}
                    <div className="pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold btn-3d btn-3d-outline focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none group/link"
                      >
                        <span>Inquire Service</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                      </a>
                    </div>

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
