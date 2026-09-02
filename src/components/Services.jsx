import React from 'react';
import { Layout, Code, Smartphone, Atom, Rocket, FileCode, Globe, Sparkles, RefreshCw, ShieldCheck, ArrowRight } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const servicesList = [
  {
    title: 'Website Design',
    desc: 'Crafting visually stunning, user-centered web designs tailored to elevate brand identities.',
    icon: Layout,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Front-End Development',
    desc: 'Building responsive, scalable, and high-speed web interfaces with modern JavaScript & React.',
    icon: Code,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Responsive Website Dev',
    desc: 'Ensuring seamless performance and flawless layouts across desktop, tablet, and mobile devices.',
    icon: Smartphone,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'React.js Development',
    desc: 'Creating dynamic single-page web applications with modular components and robust state management.',
    icon: Atom,
    color: 'from-sky-400 to-blue-600'
  },
  {
    title: 'Landing Page Design',
    desc: 'Designing high-converting sales & promotional landing pages optimized for maximum engagement.',
    icon: Rocket,
    color: 'from-amber-500 to-rose-500'
  },
  {
    title: 'PSD / Figma to HTML',
    desc: 'Converting graphic designs and Figma prototypes into clean, w3c-validated, pixel-perfect code.',
    icon: FileCode,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'WordPress Website',
    desc: 'Customizing WordPress themes, Elementor layouts, and WooCommerce online stores with ease.',
    icon: Globe,
    color: 'from-blue-600 to-purple-600'
  },
  {
    title: 'UI/UX Design',
    desc: 'Structuring intuitive user flows, interactive wireframes, and aesthetically pleasing interface design.',
    icon: Sparkles,
    color: 'from-pink-500 to-purple-600'
  },
  {
    title: 'Website Redesign',
    desc: 'Revamping outdated websites into modern, sleek, fast-loading, and mobile-ready web platforms.',
    icon: RefreshCw,
    color: 'from-indigo-500 to-blue-600'
  },
  {
    title: 'Website Maintenance',
    desc: 'Regular updates, security checks, bug fixing, and continuous performance tuning for your website.',
    icon: ShieldCheck,
    color: 'from-teal-500 to-emerald-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="py-20 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              <span>What I Offer</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white">
              Professional <span className="text-gradient-primary">Services</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Tailored digital solutions built with precision, creativity, and performance to bring your ideas to life.
            </p>
            <div className="w-20 h-1.5 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Services Grid - 8px Card Radius */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesList.map((service, idx) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={idx} direction="up" delay={idx * 80}>
                <div
                  className="glass-card p-6 rounded-[8px] border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between group hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden h-full"
                >
                  <div className="space-y-4">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-[5px] bg-gradient-to-tr ${service.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Inquiry Link - 5px Radius Button Style */}
                  <div className="pt-6 mt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                    <a
                      href="#contact"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[5px] text-xs font-bold text-blue-600 dark:text-cyan-400 hover:bg-blue-500/10 transition-all focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                    >
                      <span>Get Started</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
