import React, { useState } from 'react';
import { ExternalLink, Eye, Layers, Check, ArrowRight } from 'lucide-react';
import Portfolioimage1 from '../assets/images/portfolio2.webp';
import businessImage from '../assets/images/business-website1.webp';
import project3 from '../assets/images/project3.webp';
import project4 from '../assets/images/project4.webp';
import project5 from '../assets/images/project5.webp';
import WordpressProject from '../assets/images/wordpress-project.webp';
import EcommerceProject from '../assets/images/e-commerce-project.webp';
import DashboardProject from '../assets/images/dashboard-project.webp';
import landingPageProject from '../assets/images/landing-page-project.webp';
import PortfolioPortfolio from '../assets/images/portfolio.webp';

const projectsData = [
  {
    id: 1,
    title: 'Corporate Financial Business Portal',
    category: 'Web Design',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'UI/UX'],
    desc: 'Modern enterprise financial advisory portal featuring interactive service calculators, executive team profiles, and smooth section transitions.',
    imageBg: businessImage,
    demoUrl: 'https://kindlebit.com',
    highlights: ['Multi-page responsive layout', 'Contact & lead form integration', 'Custom CSS micro-animations', 'Page load speed index < 1.2s']
  },
  {
    id: 2,
    title: 'Candidate & Recruiter Job Platform',
    category: 'React.js',
    tech: ['React.js', 'Tailwind CSS', 'Lucide Icons', 'ES6+'],
    desc: 'Full-featured recruitment platform with dynamic job search, candidate profile management, recruiter dashboards, and application tracking.',
    imageBg: Portfolioimage1,
    demoUrl: 'https://surch360.com',
    highlights: ['Job listings with interactive filters', 'Candidate profile management', 'Figma to React conversion', '100% mobile-first UI']
  },
  {
    id: 3,
    title: 'SellerAir — Amazon Supplier Search Platform',
    category: 'WordPress',
    tech: ['WordPress', 'Elementor', 'WooCommerce', 'PHP'],
    desc: 'B2B platform enabling e-commerce brands and retailers to search and connect with authorized Amazon suppliers in seconds.',
    imageBg: project3,
    demoUrl: 'https://sellerair.kindlebit.org',
    highlights: ['B2B supplier directory filter', 'Custom WordPress theme customization', 'Fast catalog search functionality', 'Mobile-optimized layout']
  },
  {
    id: 4,
    title: 'MySittiVacations — Vacation Rental Portal',
    category: 'Web Design',
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'jQuery'],
    desc: 'Immersive travel and vacation rental booking portal designed for vacation planners featuring property showcases and interactive city guides.',
    imageBg: project4,
    demoUrl: 'https://www.mysittivacations.com/',
    highlights: ['Location search and custom filters', 'Interactive destination maps', 'Tour booking integration', 'Optimized image gallery']
  },
  {
    id: 5,
    title: 'Rome Sightseeing & Tour Platform',
    category: 'Web Design',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'UI/UX'],
    desc: 'Premium tourism portal for booking ticketed tours, skip-the-line passes to Vatican City, Colosseum, and historical landmarks in Rome.',
    imageBg: project5,
    demoUrl: 'https://www.rome.tours/',
    highlights: ['Ticket reservation interface', 'Tour itinerary showcases', 'Cross-browser responsive design', 'Fast Core Web Vitals score']
  },
  {
    id: 6,
    title: 'SNS Meditech — Medical Equipment Store',
    category: 'E-Commerce',
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'UI Design'],
    desc: 'Global e-commerce portal for a leading manufacturer and exporter of high-precision medical machinery and surgical equipment.',
    imageBg: EcommerceProject,
    demoUrl: 'https://www.snsmeditech.com/',
    highlights: ['Product catalog categorization', 'Inquiry & RFQ submission flow', 'High-trust corporate design', 'Fully responsive mobile layout']
  },
  {
    id: 7,
    title: 'Bhupender.dev — Portfolio Website',
    category: 'React.js',
    tech: ['React.js', 'Tailwind CSS', 'Vite', 'Canvas API'],
    desc: 'State-of-the-art personal portfolio featuring smooth theme toggling, interactive canvas background, SEO schema markup, and responsive card layouts.',
    imageBg: PortfolioPortfolio,
    demoUrl: 'https://bhupender-portfolio.vercel.app',
    highlights: ['Particle canvas background', 'Dark/Light mode persistence', 'Responsive UI components', 'Structured SEO schema markup']
  },
  {
    id: 8,
    title: 'Insiders Health AI Analytics Dashboard',
    category: 'React.js',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
    desc: 'Modern AI analytics dashboard designed for health tech organizations to visualize metrics, content performance, and marketing insights.',
    imageBg: DashboardProject,
    demoUrl: 'https://insidershealth.ai',
    highlights: ['Clean dashboard component system', 'Data visualization layouts', 'Light & Dark theme adaptability', 'Modular React structure']
  },
  {
    id: 9,
    title: 'Trupaths — Enterprise Business Agency',
    category: 'WordPress',
    tech: ['WordPress', 'HTML5', 'CSS3', 'Elementor'],
    desc: 'Comprehensive corporate website built for a digital agency offering SEO, content writing, web development, and growth strategy.',
    imageBg: WordpressProject,
    demoUrl: 'https://www.trupaths.com',
    highlights: ['Custom Elementor page layouts', 'Service detail pages', 'Lead conversion forms', 'Search engine friendly structure']
  },
  {
    id: 10,
    title: 'Louvre Museum Tour Landing Page',
    category: 'Landing Page',
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    desc: 'High-converting promotional landing page designed for guided tour packages, ticket bookings, and visitor informational guides.',
    imageBg: landingPageProject,
    demoUrl: 'https://www.louvre.tours',
    highlights: ['Conversion-optimized call-to-actions', 'Micro-interactions and hover effects', 'Figma to code conversion', 'Fast mobile load time']
  }
];

const categories = ['All', 'Web Design', 'React.js', 'WordPress', 'E-Commerce', 'Landing Page'];

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
            A showcase of modern web development and design projects built for corporate clients, agencies, and startups.
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
            <div
              key={project.id}
              className="glass-card rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              {/* Graphic Mockup Preview Image Header */}
              <div className="h-52 relative p-3 flex flex-col justify-between overflow-hidden bg-slate-900">
                <img
                  src={project.imageBg}
                  alt={project.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Category Badge */}
                <div className="flex justify-between items-center z-10 relative">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-900/80 text-white backdrop-blur-md border border-slate-700/50 shadow-md">
                    {project.category}
                  </span>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-2 rounded-full bg-slate-900/80 hover:bg-slate-950 text-white backdrop-blur-md border border-slate-700/50 shadow-md transition-all hover:scale-110"
                    title="Quick Details"
                    aria-label={`View details for ${project.title}`}
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
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-xs text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-95 shadow-md transition-all"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Website</span>
                  </a>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="inline-flex items-center justify-center px-3.5 py-2.5 rounded-xl font-semibold text-xs text-slate-700 dark:text-slate-200 bg-slate-200/70 dark:bg-slate-800/70 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors gap-1"
                    title="View Details"
                  >
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
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
                aria-label="Close modal"
              >
                ✕
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
                  <img
                    src={activeModalProject.imageBg}
                    alt={activeModalProject.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-top"
                  />
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
                  Key Features & Business Impact
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
                <span>Launch Live Website</span>
              </a>

              <a
                href="#contact"
                onClick={() => setActiveModalProject(null)}
                className="flex items-center justify-center gap-2 px-4 sm:px-5 py-3 rounded-xl font-semibold text-xs sm:text-sm text-slate-700 dark:text-slate-200 bg-slate-200/80 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              >
                <span>Inquire Project</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
