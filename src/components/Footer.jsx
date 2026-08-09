import React from 'react';
import { ArrowUp, Code2, Linkedin, Github, Instagram, ExternalLink, Heart } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-slate-900 text-slate-300 border-t border-slate-800 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start justify-between">

          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <a href="#home" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-purple-600 p-[2px]">
                <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center">
                  <Code2 className="w-5 h-5 text-cyan-400" />
                </div>
              </div>
              <span className="font-display font-bold text-xl text-white tracking-tight">
                Bhupender<span className="text-cyan-400">.dev</span>
              </span>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Web Designer & Front-End Developer with 2.5+ years of experience building pixel-perfect, modern, and high-performance websites for startups and businesses worldwide.
            </p>

            <p className="text-xs text-slate-500 font-mono">
              Mohali, Punjab, India • bhupendernadal@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-3">
                Navigation
              </h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="hover:text-cyan-400 transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-cyan-400 transition-colors">About Me</a></li>
                <li><a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a></li>
                <li><a href="#services" className="hover:text-cyan-400 transition-colors">Services</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-3">
                Explore
              </h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a></li>
                <li><a href="#portfolio" className="hover:text-cyan-400 transition-colors">Portfolio</a></li>
                <li><a href="#testimonials" className="hover:text-cyan-400 transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>

          {/* Social Links & Back to top */}
          <div className="md:col-span-3 space-y-4 md:text-right">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-100 mb-3">
              Social Profiles
            </h4>
            <div className="flex items-center md:justify-end gap-3">
              <a
                href="https://www.linkedin.com/in/bhupender-singh-b39ba9289"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-blue-600 text-slate-300 hover:text-white transition-all duration-200"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Bhupender-Singh-D"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-200"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              {/* <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-pink-600 text-slate-300 hover:text-white transition-all duration-200"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a> */}
              <a
                href="https://www.behance.net/bhupender-singh"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-cyan-600 text-slate-300 hover:text-white transition-all duration-200"
                title="Behance"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-blue-600 text-white text-xs font-semibold transition-all duration-200 group"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p className="flex items-center gap-1">
            Designed & Developed by <strong className="text-slate-200 font-semibold">Bhupender Singh</strong> © 2026
          </p>
          <p className="flex items-center gap-1">
            Made with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
}
