import React, { useState } from 'react';
import { Cpu, Code, Palette, Layout, Wrench, Sparkles, CheckCircle, Zap, Globe, Layers, Terminal } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const skillCategories = [
  { id: 'all', title: 'All Skills', icon: Sparkles },
  { id: 'frontend', title: 'Front-End', icon: Code },
  { id: 'design', title: 'UI & Design', icon: Palette },
  { id: 'cms', title: 'CMS & E-Commerce', icon: Layout },
  { id: 'tools', title: 'Tools & Speed', icon: Wrench },
];

const skillsData = [
  {
    name: 'React.js',
    category: 'frontend',
    badge: 'Expert',
    desc: 'Modular component system, hooks, state management, SPA architecture & API integration.',
    icon: Cpu,
    color: 'from-cyan-500 to-blue-600',
    glowColor: 'group-hover:shadow-cyan-500/20'
  },
  {
    name: 'JavaScript (ES6+)',
    category: 'frontend',
    badge: 'Expert',
    desc: 'Async/await, ES modules, DOM manipulation, custom event handling & dynamic logic.',
    icon: Code,
    color: 'from-amber-400 to-yellow-600',
    glowColor: 'group-hover:shadow-amber-500/20'
  },
  {
    name: 'Tailwind CSS',
    category: 'frontend',
    badge: 'Expert',
    desc: 'Custom design tokens, glassmorphism, responsive grid layouts & micro-interactions.',
    icon: Zap,
    color: 'from-teal-400 to-cyan-600',
    glowColor: 'group-hover:shadow-teal-500/20'
  },
  {
    name: 'HTML5 & Semantic Web',
    category: 'frontend',
    badge: 'Expert',
    desc: 'Semantic tags, WCAG accessibility standards, SEO structure & clean markup.',
    icon: Terminal,
    color: 'from-orange-500 to-red-600',
    glowColor: 'group-hover:shadow-orange-500/20'
  },
  {
    name: 'CSS3 & Animations',
    category: 'frontend',
    badge: 'Expert',
    desc: 'Flexbox, Grid, keyframe animations, 3D perspective transforms & media queries.',
    icon: Layers,
    color: 'from-blue-500 to-indigo-600',
    glowColor: 'group-hover:shadow-blue-500/20'
  },
  {
    name: 'Bootstrap 5',
    category: 'frontend',
    badge: 'Advanced',
    desc: '12-column grid system, utility classes, customized SCSS variables & UI elements.',
    icon: Layout,
    color: 'from-purple-500 to-indigo-600',
    glowColor: 'group-hover:shadow-purple-500/20'
  },
  {
    name: 'jQuery',
    category: 'frontend',
    badge: 'Advanced',
    desc: 'DOM traversal, legacy browser support, plugin integration & AJAX requests.',
    icon: Code,
    color: 'from-blue-600 to-slate-700',
    glowColor: 'group-hover:shadow-blue-600/20'
  },
  {
    name: 'Figma to Code',
    category: 'design',
    badge: 'Expert',
    desc: 'Converting Figma component systems & autolayouts into pixel-perfect web code.',
    icon: Palette,
    color: 'from-purple-400 to-pink-600',
    glowColor: 'group-hover:shadow-purple-400/20'
  },
  {
    name: 'Adobe Photoshop',
    category: 'design',
    badge: 'Advanced',
    desc: 'Graphic asset extraction, WebP image compression, banner design & retouching.',
    icon: Palette,
    color: 'from-blue-600 to-indigo-800',
    glowColor: 'group-hover:shadow-blue-600/20'
  },
  {
    name: 'WordPress & Elementor',
    category: 'cms',
    badge: 'Expert',
    desc: 'Custom Elementor widgets, theme customization, PHP templates & plugin setup.',
    icon: Globe,
    color: 'from-blue-600 to-slate-800',
    glowColor: 'group-hover:shadow-blue-600/20'
  },
  {
    name: 'WooCommerce',
    category: 'cms',
    badge: 'Advanced',
    desc: 'E-commerce store setup, custom product templates, checkout flows & payment gateways.',
    icon: Layout,
    color: 'from-purple-600 to-indigo-700',
    glowColor: 'group-hover:shadow-purple-600/20'
  },
  {
    name: 'Git & GitHub',
    category: 'tools',
    badge: 'Advanced',
    desc: 'Branching workflows, pull requests, version control & team code collaboration.',
    icon: Wrench,
    color: 'from-slate-700 to-slate-900',
    glowColor: 'group-hover:shadow-slate-500/20'
  },
  {
    name: 'Responsive Web Design',
    category: 'tools',
    badge: 'Expert',
    desc: '100% mobile-first layouts, cross-device QA testing & fluid typography scaling.',
    icon: Sparkles,
    color: 'from-emerald-500 to-teal-600',
    glowColor: 'group-hover:shadow-emerald-500/20'
  },
  {
    name: 'SEO & Core Web Vitals',
    category: 'tools',
    badge: 'Advanced',
    desc: 'Lighthouse speed optimization, image lazy loading, script deferral & meta schema.',
    icon: Zap,
    color: 'from-amber-500 to-rose-500',
    glowColor: 'group-hover:shadow-amber-500/20'
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredSkills = activeTab === 'all'
    ? skillsData
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 relative overflow-hidden bg-white/60 dark:bg-slate-950/60">
      {/* Background Orbs */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-500/10 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-500/20 shadow-sm">
              <Cpu className="w-4 h-4" />
              <span>Technical Stack</span>
            </div>
            
            <h2 id="skills-heading" className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Skills & <span className="text-gradient-primary">Technologies</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Modern tools and frameworks I use to design, build, and deploy high-performing websites.
            </p>

            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 mx-auto rounded-full mt-2" />
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12" role="tablist" aria-label="Skills Filter Tabs">
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                role="tab"
                aria-selected={isActive}
                aria-controls={`skills-panel-${cat.id}`}
                id={`skills-tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold btn-3d transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                  isActive
                    ? 'btn-3d-primary shadow-lg'
                    : 'btn-3d-secondary'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Interactive 3D Technology Cards Grid */}
        <div 
          id={`skills-panel-${activeTab}`} 
          role="tabpanel" 
          aria-labelledby={`skills-tab-${activeTab}`}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredSkills.map((skill, idx) => {
            const Icon = skill.icon;
            return (
              <ScrollReveal key={skill.name} direction="up" delay={idx * 50}>
                <TiltCard maxTilt={8} scale={1.03} glare={true} className="h-full">
                  <article 
                    className={`glass-card p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-4 shadow-xl transition-all duration-300 group h-full bg-white/90 dark:bg-slate-900/70 ${skill.glowColor}`}
                  >
                    <div className="space-y-3">
                      {/* Top Header Row */}
                      <div className="flex items-center justify-between">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${skill.color} text-white flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                          <Icon className="w-6 h-6" aria-hidden="true" />
                        </div>

                        <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                          {skill.badge}
                        </span>
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {skill.name}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {skill.desc}
                      </p>
                    </div>

                    {/* Footer Accent */}
                    <div className="pt-3 border-t border-slate-200/60 dark:border-slate-800/80 flex items-center gap-1.5 text-xs font-semibold text-slate-500 dark:text-slate-400">
                      <CheckCircle className="w-4 h-4 text-emerald-500" aria-hidden="true" />
                      <span>Production Ready</span>
                    </div>

                  </article>
                </TiltCard>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
