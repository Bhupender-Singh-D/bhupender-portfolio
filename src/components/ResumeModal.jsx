import React from 'react';
import { X, Download, Printer, Mail, Phone, MapPin, Award, CheckCircle2, Globe, GraduationCap } from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div className="glass-card max-w-3xl w-full rounded-[8px] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl space-y-6 relative max-h-[92vh] flex flex-col bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100">
        
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
              className="p-2 rounded-[5px] bg-white/20 hover:bg-white/30 text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              title="Print Resume"
              aria-label="Print resume"
            >
              <Printer className="w-4 h-4" />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-[5px] bg-white/20 hover:bg-white/30 text-white transition-colors focus-visible:ring-2 focus-visible:ring-white focus-visible:outline-none"
              title="Close Modal"
              aria-label="Close modal"
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
              BHUPENDER SINGH
            </h1>
            <p className="text-base font-semibold text-blue-600 dark:text-cyan-400">
              FRONT-END DEVELOPER | WEB DESIGNER (2.8+ Years Experience)
            </p>

            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-2">
              <span className="flex items-center gap-1.5">
                <Mail className="w-4 h-4 text-blue-500" /> bhupendernadal@gmail.com
              </span>
              <span className="flex items-center gap-1.5">
                <Phone className="w-4 h-4 text-purple-500" /> +91 9015381011
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-emerald-500" /> Sahibzada Ajit Singh Nagar, Punjab, India
              </span>
            </div>
          </div>

          {/* Profile Summary */}
          <div className="space-y-2">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Professional Summary
            </h2>
            <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
              Front-End Developer and Web Designer with 2.8+ years of professional experience developing responsive websites and web interfaces. Hands-on experience with HTML5, CSS3, JavaScript, React.js, jQuery, Bootstrap 5, Tailwind CSS and WordPress, with UI design capability in Figma and Photoshop. Experienced in translating design requirements into responsive, mobile-first interfaces, building reusable React components, supporting website performance and SEO, and maintaining cross-browser compatibility. Collaborative and delivery-focused, with experience handling project requirements and production web work.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Core Technical Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-sm">
              <div><strong className="text-slate-900 dark:text-white">Front-End Development:</strong> HTML5, CSS3, JavaScript (ES6+), React.js, jQuery</div>
              <div><strong className="text-slate-900 dark:text-white">UI / CSS Frameworks:</strong> Tailwind CSS, Bootstrap 5, Responsive Web Design, Mobile-First Development</div>
              <div><strong className="text-slate-900 dark:text-white">CMS / Web Platforms:</strong> WordPress</div>
              <div><strong className="text-slate-900 dark:text-white">Design Tools:</strong> Figma, Adobe Photoshop, UI/UX Design, PSD/Figma to Web</div>
              <div><strong className="text-slate-900 dark:text-white">Web Quality & Optimization:</strong> Cross-Browser Compatibility, Website Performance, Page Speed, SEO</div>
              <div><strong className="text-slate-900 dark:text-white">Professional Tools:</strong> GitHub</div>
            </div>
          </div>

          {/* Work Experience */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Professional Experience
            </h2>

            <div className="space-y-4">
              <div className="rounded-[8px] border border-slate-200 dark:border-slate-800 p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Web Designer — KindleBit Solutions Pvt. Ltd.
                    </h3>
                    <p className="text-xs text-slate-500">Punjab, India</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-[5px] bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400">
                    09/2024 – Present
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-300 pt-3">
                  <li>Develop responsive, mobile-first websites and web applications using HTML5, CSS3, Bootstrap 5, Tailwind CSS, JavaScript, jQuery, React.js and WordPress.</li>
                  <li>Build reusable and interactive React.js components for dynamic, scalable and user-friendly interfaces.</li>
                  <li>Translate design concepts and client requirements into responsive web pages with attention to usability, visual consistency and responsive behavior.</li>
                  <li>Optimize website performance, page speed, SEO and cross-browser compatibility across modern browsers.</li>
                  <li>Collaborate with team members to align UI design and development work with project requirements and delivery timelines.</li>
                  <li>Refine interfaces based on feedback and performance observations to support usability and user satisfaction.</li>
                </ul>
              </div>

              <div className="rounded-[8px] border border-slate-200 dark:border-slate-800 p-4">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1">
                  <div>
                    <h3 className="font-bold text-base text-slate-900 dark:text-white">
                      Web Designer — FinsinTech Pvt. Ltd.
                    </h3>
                    <p className="text-xs text-slate-500">Punjab, India</p>
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-[5px] bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-cyan-400">
                    10/2023 – 06/2024
                  </span>
                </div>
                <ul className="space-y-1.5 text-xs sm:text-sm list-disc list-inside text-slate-600 dark:text-slate-300 pt-3">
                  <li>Developed responsive and mobile-friendly websites using HTML5, CSS3, Bootstrap 5, Tailwind CSS, JavaScript, jQuery and WordPress.</li>
                  <li>Implemented web interfaces from design references while maintaining responsive layouts and cross-browser compatibility.</li>
                  <li>Created clean, user-friendly interfaces and supported website updates based on project and client requirements.</li>
                  <li>Collaborated with team members to deliver assigned web design work within agreed timelines.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Selected Projects */}
          <div className="space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400">
              Selected Projects
            </h2>
            <div className="grid grid-cols-1 gap-3 text-xs sm:text-sm">
              <div className="p-3 rounded-[8px] border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>LumenCare / Lumen Healthcare</span>
                  <a href="https://lumencare.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 text-xs">
                    <Globe className="w-3.5 h-3.5" /> lumencare.com
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">Healthcare services website providing vascular access, mobile radiology and dialysis services for healthcare facilities.</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1"><strong>Stack:</strong> HTML5, CSS3, JavaScript</p>
              </div>

              <div className="p-3 rounded-[8px] border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Insiders Health AI</span>
                  <a href="https://insidershealth.ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 text-xs">
                    <Globe className="w-3.5 h-3.5" /> insidershealth.ai
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">AI-powered health-information product focused on personalized health insights, search workflows, AI-generated answers and custom health guides.</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1"><strong>Stack:</strong> Tailwind CSS, React.js, JavaScript, Responsive Web Design</p>
              </div>

              <div className="p-3 rounded-[8px] border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>TruPaths</span>
                  <a href="https://www.trupaths.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 text-xs">
                    <Globe className="w-3.5 h-3.5" /> www.trupaths.com
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">Recovery and healthcare navigation platform helping users explore verified treatment centers, detox, sober living, residential/outpatient care, therapy and related support.</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1"><strong>Stack:</strong> HTML5, CSS3, JavaScript, WordPress, Responsive UI</p>
              </div>

              <div className="p-3 rounded-[8px] border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Penguin Ice Cream</span>
                  <a href="https://penguinicecream.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 text-xs">
                    <Globe className="w-3.5 h-3.5" /> penguinicecream.com
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">Responsive business website presenting ice cream products, cakes and pies, delivery information, gift cards, location and customer contact details.</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1"><strong>Stack:</strong> HTML, CSS, WordPress, Responsive Web Design</p>
              </div>

              <div className="p-3 rounded-[8px] border border-slate-200 dark:border-slate-800">
                <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                  <span>Surch360</span>
                  <a href="https://www.surch360.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-cyan-400 hover:underline flex items-center gap-1 text-xs">
                    <Globe className="w-3.5 h-3.5" /> www.surch360.com
                  </a>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mt-1">Recruitment and workforce management platform supporting job discovery, candidate profiles, recruitment workflows and workforce-related processes.</p>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1"><strong>Stack:</strong> HTML, CSS, Tailwind CSS, React.js, JavaScript</p>
              </div>
            </div>
          </div>

          {/* Education & Development */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 flex items-center gap-1.5">
                <GraduationCap className="w-4 h-4" /> Education
              </h2>
              <div className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                <div><strong>Diploma in Web & Graphic Designing</strong> — Bepoj Technology | 2022 – 2023</div>
                <div><strong>12th</strong> — H.P.S.E.B. Dharamshala | 2020 – 2021</div>
              </div>
            </div>

            <div className="space-y-2">
              <h2 className="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-cyan-400 flex items-center gap-1.5">
                <Award className="w-4 h-4" /> Development & Languages
              </h2>
              <div className="text-xs sm:text-sm space-y-1.5 text-slate-700 dark:text-slate-300">
                <div><strong>Full Stack Software Developer Specialization</strong> — Coursera (In Progress)</div>
                <div><strong>Languages:</strong> English | Hindi | Punjabi</div>
              </div>
            </div>
          </div>

        </div>

        {/* Modal Footer Actions - 5px Button Radius */}
        <div className="p-4 sm:p-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-[5px] text-sm font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
          >
            Close
          </button>
          <a
            href="/Bhupender_Singh_Front_End_Developer.pdf"
            download="Bhupender_Singh_Front_End_Developer.pdf"
            className="px-6 py-2.5 rounded-[5px] text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-md hover:opacity-95 transition-opacity flex items-center gap-2 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
          >
            <Download className="w-4 h-4" />
            <span>Download PDF</span>
          </a>
        </div>

      </div>
    </div>
  );
}

