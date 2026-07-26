import React from 'react';
import { User, Award, CheckCircle, Smile, MapPin, Mail, Phone, Code2 } from 'lucide-react';

const stats = [
  { label: 'Years Experience', count: '2.5+', icon: Award, color: 'from-blue-500 to-indigo-500' },
  { label: 'Projects Completed', count: '50+', icon: Code2, color: 'from-purple-500 to-pink-500' },
  { label: 'Client Satisfaction', count: '100%', icon: CheckCircle, color: 'from-emerald-500 to-teal-500' },
  { label: 'Happy Clients', count: '30+', icon: Smile, color: 'from-cyan-500 to-blue-500' },
];

export default function About() {
  return (
    <section id="about" className="py-20 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <User className="w-4 h-4" />
            <span>Discover My Story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Detailed Bio */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-2xl sm:text-3xl font-display font-semibold text-slate-900 dark:text-white">
              Passionate Web Designer & Front-End Developer based in Mohali, India
            </h3>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a passionate Web Designer and Front-End Developer with <strong className="text-blue-600 dark:text-cyan-400 font-semibold">2.5+ years of professional experience</strong> creating modern websites for businesses, agencies, and startups.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I enjoy transforming creative concepts into responsive, interactive, and visually captivating digital experiences. My engineering approach focuses on <strong>clean modular code</strong>, strict adherence to <strong>UI/UX best practices</strong>, deep performance optimization, and flawless cross-browser compatibility.
            </p>

            {/* Quick Contact Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-card">
                <div className="p-2.5 rounded-lg bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Location</span>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Mohali, Punjab, India</p>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-card">
                <div className="p-2.5 rounded-lg bg-purple-500/10 text-purple-600 dark:text-purple-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Email</span>
                  <a href="mailto:bhupendernadal@gmail.com" className="block text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                    bhupendernadal@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-card">
                <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-600 dark:text-cyan-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Phone</span>
                  <a href="tel:+919015381011" className="block text-sm font-medium text-slate-800 dark:text-slate-200 hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                    +91 9015381011
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-3.5 rounded-xl glass-card">
                <div className="p-2.5 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 uppercase font-semibold">Role</span>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">Web Designer & Front-End</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Key Stats Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div 
                  key={idx} 
                  className="glass-card p-6 rounded-2xl flex flex-col items-center text-center space-y-3 hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className={`p-3.5 rounded-2xl bg-gradient-to-tr ${stat.color} text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-3xl sm:text-4xl font-display font-extrabold text-slate-900 dark:text-white">
                    {stat.count}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-600 dark:text-slate-400">
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
