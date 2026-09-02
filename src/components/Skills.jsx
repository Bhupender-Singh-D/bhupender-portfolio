import React, { useState } from 'react';
import { Cpu, Code, Palette, Layout, Wrench } from 'lucide-react';
import ScrollReveal from './ScrollReveal';

const skillCategories = [
  {
    id: 'frontend',
    title: 'Front-End',
    icon: Code,
    skills: [
      { name: 'HTML5', level: 95, color: 'from-amber-500 to-orange-600' },
      { name: 'CSS3', level: 92, color: 'from-blue-500 to-indigo-600' },
      { name: 'JavaScript (ES6+)', level: 88, color: 'from-yellow-400 to-amber-500' },
      { name: 'React.js', level: 85, color: 'from-cyan-400 to-blue-600' },
      { name: 'Tailwind CSS', level: 92, color: 'from-teal-400 to-cyan-600' },
      { name: 'Bootstrap 5', level: 90, color: 'from-purple-500 to-indigo-600' },
      { name: 'jQuery', level: 85, color: 'from-blue-600 to-slate-700' },
    ]
  },
  {
    id: 'design',
    title: 'Design',
    icon: Palette,
    skills: [
      { name: 'Figma', level: 90, color: 'from-purple-400 to-pink-600' },
      { name: 'Adobe Photoshop', level: 85, color: 'from-blue-600 to-indigo-800' },
      { name: 'Adobe Illustrator', level: 80, color: 'from-amber-600 to-orange-700' },
      { name: 'Canva', level: 90, color: 'from-teal-400 to-cyan-500' },
    ]
  },
  {
    id: 'cms',
    title: 'CMS & E-Commerce',
    icon: Layout,
    skills: [
      { name: 'WordPress', level: 90, color: 'from-blue-600 to-slate-800' },
      { name: 'Elementor Pro', level: 92, color: 'from-pink-500 to-rose-600' },
      { name: 'WooCommerce', level: 85, color: 'from-purple-600 to-indigo-700' },
      { name: 'Shopify (Basic)', level: 75, color: 'from-emerald-500 to-teal-600' },
    ]
  },
  {
    id: 'other',
    title: 'Other & Methodology',
    icon: Wrench,
    skills: [
      { name: 'Responsive Web Design', level: 95, color: 'from-blue-500 to-cyan-400' },
      { name: 'UI/UX Best Practices', level: 88, color: 'from-purple-500 to-pink-500' },
      { name: 'PSD / Figma to HTML', level: 95, color: 'from-indigo-500 to-blue-600' },
      { name: 'Git & GitHub', level: 85, color: 'from-slate-700 to-slate-900' },
      { name: 'SEO Basics & Speed', level: 80, color: 'from-emerald-400 to-green-600' },
    ]
  }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Technical Expertise</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white">
              My <span className="text-gradient-primary">Skills</span> & Tools
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
          </div>
        </ScrollReveal>

        {/* Category Filter Tabs - 5px Border Radius */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-5 py-2.5 rounded-[5px] font-medium text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
              activeTab === 'all'
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                : 'glass-card text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            All Skills
          </button>
          {skillCategories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-[5px] font-medium text-sm transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                  isActive
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                    : 'glass-card text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Skills Grid - 8px Border Radius Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.map((category, idx) => {
            const CatIcon = category.icon;
            return (
              <ScrollReveal key={category.id} direction="up" delay={idx * 100}>
                <div 
                  className="glass-card p-6 sm:p-8 rounded-[8px] border border-slate-200/60 dark:border-slate-800 space-y-6"
                >
                  <div className="flex items-center gap-3 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div className="p-2.5 rounded-[5px] bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                      <CatIcon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1.5">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {skill.name}
                          </span>
                          <span className="text-xs font-mono font-bold text-blue-600 dark:text-cyan-400">
                            {skill.level}%
                          </span>
                        </div>
                        {/* Animated Progress Bar */}
                        <div className="h-2.5 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden p-0.5">
                          <div
                            className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    ))}
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
