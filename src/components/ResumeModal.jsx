import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Award, CheckCircle2 } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card max-w-3xl w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 relative max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        
        {/* Modal Top Toolbar */}
        <div className="p-4 sm:p-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-cyan-300" />
            <h3 className="font-display font-bold text-lg sm:text-xl">
              Bhupender Singh — Official Resume
            </h3>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors"
              title="Print / Save PDF"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/30 text-white transition-colors"
              title="Close Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable CV Document Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 flex-1 text-slate-800 dark:text-slate-200">
          
          {/* Header Contact Block */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 space-y-3">
            <h1 className="text-3xl font-display font-extrabold text-slate-900 dark:text-white">
              Bhupender Singh
            </h1>
            <p className="text-base font-semibold text-blue-600 dark:text-cyan-400">
              Web Designer & Front-End Developer (2.5+ Years Experience)
            </p>

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-500" /> bhupendernadal@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-purple-500" /> +91 9015381011
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-500" /> Mohali, Punjab, India
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Professional Summary
            </h3>
            <p className="text-sm leading-relaxed">
              Passionate Web Designer and Front-End Developer with 2.5+ years of experience delivering modern, responsive, and pixel-perfect web applications. Expert in HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap, and WordPress integration. Dedicated to clean code standards, UI/UX best practices, and fast core web vitals performance.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Core Technical Competencies
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <div><strong className="text-slate-900 dark:text-white">Front-End:</strong> React.js, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, Bootstrap 5, jQuery</div>
              <div><strong className="text-slate-900 dark:text-white">Design & Tools:</strong> Figma, Adobe Photoshop, Illustrator, Canva, Git, GitHub</div>
              <div><strong className="text-slate-900 dark:text-white">CMS & Store:</strong> WordPress, Elementor Pro, WooCommerce, Shopify</div>
              <div><strong className="text-slate-900 dark:text-white">Methodology:</strong> Responsive Web Design, UI/UX, PSD to HTML, SEO Basics</div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Professional Experience
            </h3>

            <div className="space-y-4">
              <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">
                      Web Designer / Frontend Developer
                    </h4>
                    <p className="text-xs text-slate-500">Kindlebit Solutions Pvt. Ltd. | Mohali, India</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800">
                    16 Sep 2024 – Present
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-300 pt-3">
                  <li>Delivered modern, responsive client-facing web experiences with polished front-end implementation.</li>
                  <li>Built reusable interfaces using React.js, Tailwind CSS, and clean semantic HTML/CSS.</li>
                  <li>Translated UI requirements into user-friendly, high-quality digital products.</li>
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 dark:border-slate-800 p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h4 className="font-bold text-base text-slate-900 dark:text-white">
                      Web Designer
                    </h4>
                    <p className="text-xs text-slate-500">Finesin Tech Pvt. Ltd. | Mohali, India</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800">
                    19 Oct 2023 – 05 Jun 2024
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-300 pt-3">
                  <li>Developed pixel-perfect, responsive web interfaces from Figma and PSD designs.</li>
                  <li>Engineered reusable UI components and improved overall website usability.</li>
                  <li>Enhanced responsiveness and performance across devices and browsers.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="space-y-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Key Strengths & Highlights
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>50+ Web Applications Delivered</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>100% Client Approval Rate</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Fast & Efficient Project Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>SEO Optimized & Accessible Code</span>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors"
          >
            Close
          </button>
          <button
            onClick={handlePrint}
            className="px-6 py-2.5 rounded-xl text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:opacity-95 transition-opacity flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </button>
        </div>

      </div>
    </div>
  );
}
