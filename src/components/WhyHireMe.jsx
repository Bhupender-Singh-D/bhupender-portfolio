import React from 'react';
import { Award, Code2, LayoutGrid, Zap, Smartphone, Search, Sparkles, HeartHandshake } from 'lucide-react';

const reasons = [
  {
    title: '2.5+ Years Experience',
    desc: 'Deep hands-on experience building professional websites for clients and business startups.',
    icon: Award,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    title: 'Clean Code',
    desc: 'Writing structured, modular, well-commented, and easily maintainable front-end code.',
    icon: Code2,
    color: 'from-purple-500 to-indigo-600'
  },
  {
    title: 'Pixel Perfect Design',
    desc: 'Converting Figma, Adobe XD, and PSD designs into precise, pixel-exact web pages.',
    icon: LayoutGrid,
    color: 'from-pink-500 to-rose-600'
  },
  {
    title: 'Fast Delivery',
    desc: 'Rapid execution and turnaround times without ever sacrificing quality or design standards.',
    icon: Zap,
    color: 'from-amber-500 to-orange-600'
  },
  {
    title: 'Responsive Design',
    desc: 'Ensuring 100% mobile-first responsiveness across iPhones, Androids, tablets, and desktops.',
    icon: Smartphone,
    color: 'from-cyan-500 to-blue-600'
  },
  {
    title: 'SEO Friendly',
    desc: 'Optimized HTML5 semantic tags, fast page load speeds, and structured schema implementation.',
    icon: Search,
    color: 'from-emerald-500 to-teal-600'
  },
  {
    title: 'Modern UI/UX',
    desc: 'Creating interactive user interfaces with dark mode support, micro-animations, and glassmorphism.',
    icon: Sparkles,
    color: 'from-purple-600 to-pink-500'
  },
  {
    title: 'Client Satisfaction',
    desc: 'Dedicated to achieving 100% client satisfaction with clear communication & post-launch support.',
    icon: HeartHandshake,
    color: 'from-rose-500 to-red-600'
  }
];

export default function WhyHireMe() {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
            <HeartHandshake className="w-4 h-4" />
            <span>Why Choose Me</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Why <span className="text-gradient-primary">Hire Me</span>?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Key advantages and engineering standards I bring to every web development project.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full" />
        </div>

        {/* Reasons Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="glass-card p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800 flex flex-col items-center text-center space-y-4 hover:-translate-y-2 transition-all duration-300 group shadow-lg"
              >
                <div className={`p-4 rounded-2xl bg-gradient-to-tr ${item.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-display font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
