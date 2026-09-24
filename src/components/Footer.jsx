import React from 'react';
import { ArrowUp, Code2, Linkedin, Github, ExternalLink, Heart, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-950 text-slate-300 border-t border-slate-800/80 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">

          {/* Brand Column */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-lg">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-display font-extrabold text-2xl text-white tracking-tight">
                Bhupender<span className="text-cyan-400">.dev</span>
              </span>
            </a>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Web Designer & Front-End Developer with 2.8+ years of experience building pixel-perfect, modern, high-performance websites for startups and companies worldwide.
            </p>

            <div className="space-y-1 text-xs text-slate-400 font-mono">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>Mohali & Chandigarh, Punjab, India</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:bhupendernadal@gmail.com" className="hover:text-cyan-400 transition-colors">bhupendernadal@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-100 mb-3">
                Navigation
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-100 mb-3">
                Explore
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm">
                <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
                <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio Work</a></li>
                <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links & Back to top */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-100 mb-3">
              Social Profiles
            </h3>
            
            <div className="flex items-center md:justify-end gap-2.5">
              <a
                href="https://www.linkedin.com/in/bhupender-singh-b39ba9289"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d-secondary p-2.5 rounded-xl text-slate-300 hover:text-white"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Bhupender-Singh-D"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d-secondary p-2.5 rounded-xl text-slate-300 hover:text-white"
                title="GitHub Profile"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.behance.net/bhupender-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d btn-3d-secondary p-2.5 rounded-xl text-slate-300 hover:text-white"
                title="Behance Portfolio"
                aria-label="Behance Portfolio"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="btn-3d btn-3d-secondary inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-white focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none group"
                aria-label="Scroll back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p className="flex items-center gap-1 font-mono">
            Designed & Developed by <strong className="text-slate-100 font-bold">Bhupender Singh</strong> © 2026
          </p>
          <p className="flex items-center gap-1">
            Engineered with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
