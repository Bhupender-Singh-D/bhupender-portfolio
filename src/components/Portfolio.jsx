import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Layers, Filter, X, Check } from 'lucide-react';
import Portfolioimage1 from '../assets/images/portfolio2.png';
import businessImage from '../assets/images/business-website1.png';
import project3 from '../assets/images/project3.png'
import project4 from '../assets/images/project4.png'
import project5 from '../assets/images/project5.png'
import WordpressProject from '../assets/images/wordpress-project.png'
import EcommerceProject from '../assets/images/e-commerce-project.png'
import DashboardProject from '../assets/images/dashboard-project.png'
import landingPageProject from '../assets/images/landing-page-project.png'
import PortfolioPortfolio from '../assets/images/portfolio.png'

const projectsData = [
  {
    id: 1,
    title: 'Corporate Business Website',
    category: 'Web Design',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    desc: 'Modern corporate portal for an enterprise financial advisory firm featuring interactive service calculators, team profiles, and smooth section transitions.',
    imageBg: businessImage,
    demoUrl: 'https://kindlebit.com',
    githubUrl: 'https://github.com/bhupendersingh/corporate-business-web',
    highlights: ['Multi-page layout', 'Contact form integration', 'Custom CSS animations', 'Speed index < 1s']
  },
  {
    id: 2,
    title: 'Candidate and Recruiter Platform',
    category: 'React.js',
    tech: ['React.js', 'Tailwind CSS', 'Lucide Icons', 'Html'],
    desc: 'Job portal featuring job listings, candidate profiles, recruiter dashboards, and application tracking systems.',
    imageBg: Portfolioimage1,
    demoUrl: 'https://surch360.com',
    githubUrl: 'https://github.com/bhupendersingh/hotel-booking-react',
    highlights: ['Job listing with filters', 'Candidate profile management', 'Application tracking system', 'Figma to React conversion']
  },
  {
    id: 3,
    title: 'SellerAir Find Authorized Amazon',
    category: 'WordPress',
    tech: ['HTML5', 'CSS', 'Wordpress', 'Woocommerce'],
    desc: 'SellerAir is a platform that helps businesses find authorized Amazon suppliers in seconds.',
    imageBg: project3,
    demoUrl: 'https://sellerair.kindlebit.org',
    githubUrl: '',
    highlights: ['Find authorized amazon suppliers in seconds', 'Find authorized amazon suppliers in seconds', 'Find authorized amazon suppliers in seconds', 'Find authorized amazon suppliers in seconds']
  },
  {
    id: 4,
    title: 'Plan Your Perfect Guide to Denver',
    category: 'HTML5',
    tech: ['HTML5', 'Css', 'Bootstrap5', 'jQuery'],
    desc: 'MySittiVacations is a vacation rental company that offers a wide range of properties for rent in Denver. With properties ranging from cozy cabins to luxury villas, MySittiVacations has something for everyone. With years of experience in the vacation rental industry, MySittiVacations is the perfect choice for your next vacation.',
    imageBg: project4,
    demoUrl: 'https://mysittivacations.com/plan-your-perfect-guide-to-denver/',
    githubUrl: 'https://github.com/bhupendersingh/plan-your-perfect-guide-to-denver',
    highlights: ['Search and filters', 'Interactive map', 'Accommodation details', 'tours and activities']
  },
  {
    id: 5,
    title: 'Rome Tours',
    category: 'Web Design',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    desc: 'Rome tours and attractions. Buy tickets and skip the lines at the Vatican, Colosseum, and Borghese Gallery. Book now!',
    imageBg: project5,
    demoUrl: 'https://www.rome.tours/',
    githubUrl: 'https://github.com/bhupendersingh/restaurant-web-app',
    highlights: ['Skip the lines tickets', 'Booking System', 'Guide System', 'Tour System']
  },
  {
    id: 6,
    title: 'SNS Meditech',
    category: 'E-Commerce',
    tech: ['Html', 'css', 'Bootstrap5'],
    desc: 'SNS Meditech is a leading manufacturer and exporter of high-quality medical equipment and supplies.',
    imageBg: EcommerceProject,
    demoUrl: 'https://www.snsmeditech.com/',
    githubUrl: '',
    highlights: ['Manufacturing', 'Export', 'High-quality medical equipment and supplies.']
  },
  {
    id: 7,
    title: 'Portfolio Website',
    category: 'React.js',
    tech: ['React.js', 'Tailwind CSS', 'Vite'],
    desc: 'Ultra-modern developer portfolio featuring dark/light themes, canvas particle background, skills progress indicators, and interactive project filters.',
    imageBg: PortfolioPortfolio,
    demoUrl: 'https://bhupender-portfolio.vercel.app',
    githubUrl: 'https://github.com/bhupendersingh/portfolio-website',
    highlights: ['Particle animations', 'Dark/Light mode persistence', 'Responsive UI components', 'SEO structured data']
  },
  {
    id: 8,
    title: 'Insiders Health Ai Dashboard UI',
    category: 'React.js',
    tech: ['TailwindCss', 'React', 'Js'],
    desc: 'Insiders Health is a platform that helps businesses achieve their goals through various services including SEO, content writing, social media management, and web development.',
    imageBg: DashboardProject,
    demoUrl: 'https://insidershealth.ai',
    githubUrl: 'https://github.com/bhupendersingh/react-dashboard-ui ',
    highlights: ['Dashboard UI', 'Responsive design', 'Clean design system', 'Easy to use dashboard']
  },
  {
    id: 9,
    title: 'Trupaths Redefining the success Rate',
    category: 'WordPress',
    tech: ['WordPress', 'HTML5', 'Javascript', 'PHP'],
    desc: 'Trupaths is a platform that helps businesses achieve their goals through various services including SEO, content writing, social media management, and web development.',
    imageBg: WordpressProject,
    demoUrl: 'https://www.trupaths.com',
    githubUrl: '',
    highlights: ['SEO', 'Content Writing', 'Social Media Management', 'Web Development']
  },
  {
    id: 10,
    title: 'Louvre Tours',
    category: 'Landing Page',
    tech: ['HTML5', 'CSS', 'Bootstrap5'],
    desc: 'Louvre Tours is a tour and travel company that offers a wide range of tours and travel packages to customers.',
    imageBg: landingPageProject,
    demoUrl: 'https://www.louvre.tours',
    githubUrl: 'https://github.com/bhupendersingh/louvre-tours',
    highlights: ['5 distinct layouts', 'Conversion optimized', 'Micro-interactions', 'PSD/Figma to Code']
  }
];

const categories = ['All', 'Web Design', 'React.js', 'WordPress', 'E-Commerce', 'UI/UX', 'Landing Page'];

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeModalProject, setActiveModalProject] = useState(null);

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider">
            <Layers className="w-4 h-4" />
            <span>Featured Work</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white">
            My Creative <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            A showcase of recent web development & design projects built for clients, businesses, and startups.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full" />
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${selectedCategory === cat
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md'
                : 'glass-card text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            (() => {
              const isGradientBg = typeof project.imageBg === 'string' && /from-|to-/.test(project.imageBg);
              const isImageBg = !isGradientBg;

              return (
                <div
                  key={project.id}
                  className="glass-card rounded-[15px] overflow-hidden border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 shadow-xl"
                >
                  {/* Graphic Mockup Preview Image Header */}
                  <div className="h-52 relative p-3 flex flex-col justify-between overflow-hidden">
                    {isImageBg ? (
                      <img
                        src={project.imageBg}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className={`absolute inset-0 bg-gradient-to-br ${project.imageBg} group-hover:scale-105 transition-transform duration-500`} />
                    )}

                    {/* Floating Category Badge */}
                    <div className="flex justify-between items-center z-10 relative">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-slate-700/50 shadow-md">
                        {project.category}
                      </span>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white backdrop-blur-md border border-slate-700/50 shadow-md transition-all hover:scale-110"
                        title="Quick Details"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:opacity-95 shadow-md transition-all"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Live Demo</span>
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2.5 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-200 bg-slate-200/70 dark:bg-slate-800/70 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                        title="View GitHub Code"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              );
            })()
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="glass-card max-w-3xl w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative max-h-[90vh] flex flex-col bg-white dark:bg-slate-900">

            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                  {activeModalProject.category}
                </span>
                <h3 className="text-base sm:text-xl font-display font-bold text-slate-900 dark:text-white truncate max-w-md">
                  {activeModalProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-full text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-200/60 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                title="Close Modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Scrollable Body */}
            <div className="p-5 sm:p-6 space-y-6 overflow-y-auto custom-scrollbar">

              {/* Browser Mockup Window Preview */}
              <div className="relative w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl">
                {/* Browser Header Bar */}
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800/80">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-950 text-slate-400 text-xs font-mono max-w-xs sm:max-w-sm truncate border border-slate-800/80">
                    <span className="text-emerald-400">https://</span>
                    <span>{activeModalProject.demoUrl ? activeModalProject.demoUrl.replace(/^https?:\/\//, '') : 'demo.example.com'}</span>
                  </div>

                  <div className="w-12 hidden sm:block" />
                </div>

                {/* Image Showcase Frame */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  {typeof activeModalProject.imageBg === 'string' && /from-|to-/.test(activeModalProject.imageBg) ? (
                    <div className={`w-full h-full bg-gradient-to-br ${activeModalProject.imageBg} flex flex-col items-center justify-center p-6 text-center text-white relative`}>
                      <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mb-3 shadow-xl">
                        <Layers className="w-10 h-10 text-cyan-300" />
                      </div>
                      <h4 className="text-2xl font-bold text-white drop-shadow-md">{activeModalProject.title}</h4>
                      <span className="text-xs text-white/80 mt-1 uppercase tracking-wider font-semibold">{activeModalProject.category}</span>
                    </div>
                  ) : (
                    <img
                      src={activeModalProject.imageBg}
                      alt={activeModalProject.title}
                      className="w-full h-full object-cover object-top"
                    />
                  )}
                </div>
              </div>

              {/* Project Overview */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-slate-700 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
                  {activeModalProject.desc}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Features & Deliverables */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-400 mb-3">
                  Key Features & Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeModalProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Sticky Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3 shrink-0 bg-slate-50/50 dark:bg-slate-900/50">
              <a
                href={activeModalProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-semibold text-xs sm:text-sm text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-95 shadow-md transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Demo</span>
              </a>

              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
