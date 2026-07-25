import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, Code2, Sparkles } from 'lucide-react';

const responsibilities = [
  "Developed responsive websites ensuring cross-device & cross-browser compatibility.",
  "Built modular, reusable UI components using React.js, Tailwind CSS, and HTML5/CSS3.",
  "Converted complex Figma and PSD design prototypes into pixel-perfect, clean web interfaces.",
  "Created scalable React.js web applications with modern state management.",
  "Customized WordPress & Elementor sites with custom CSS and WooCommerce integrations.",
  "Optimized website performance, lazy loading, script loading, and Google Core Web Vitals.",
  "Improved overall website responsiveness, accessibility (a11y), and user experience.",
  "Collaborated directly with clients, UI designers, and backend engineering teams."
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Briefcase className="w-4 h-4" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white">
            Work <span className="text-gradient-primary">Experience</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </div>

        {/* Experience Timeline Card */}
        <div className="max-w-4xl mx-auto">
          <div className="glass-card p-6 sm:p-10 rounded-3xl border border-slate-200/80 dark:border-slate-800 shadow-xl relative overflow-hidden">
            
            {/* Top Accent Ribbon */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400" />

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-6 mb-6">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold">
                  <span>2.5+ Years Experience</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900 dark:text-white">
                  Web Designer & Front-End Developer
                </h3>
                <p className="text-base text-slate-600 dark:text-slate-300 font-medium flex items-center gap-2">
                  <span>IT Solutions & Web Agencies</span>
                  <span>•</span>
                  <span className="flex items-center gap-1 text-slate-500 text-sm">
                    <MapPin className="w-3.5 h-3.5" /> Mohali, Punjab, India
                  </span>
                </p>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-sm font-semibold text-slate-700 dark:text-slate-200 self-start md:self-auto">
                <Calendar className="w-4 h-4 text-blue-600 dark:text-cyan-400" />
                <span>2023 - Present</span>
              </div>
            </div>

            {/* Core Responsibilities Grid */}
            <div className="space-y-4">
              <h4 className="text-lg font-display font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-500" />
                <span>Key Responsibilities & Accomplishments</span>
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
                {responsibilities.map((resp, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-slate-50/50 dark:bg-slate-900/50 border border-slate-200/50 dark:border-slate-800/50">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Daily Tech Stack Tags */}
            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mr-2 flex items-center gap-1">
                <Code2 className="w-4 h-4" /> Tech Stack:
              </span>
              {['React.js', 'JavaScript ES6+', 'HTML5/CSS3', 'Tailwind CSS', 'Bootstrap 5', 'Figma', 'WordPress', 'Elementor', 'Responsive UI', 'Git'].map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
