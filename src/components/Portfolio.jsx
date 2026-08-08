import React, { useState } from 'react';
import { ExternalLink, Github, Eye, Layers, Filter, X, Check } from 'lucide-react';
import Portfolioimage1 from '../assets/images/portfolio2.png';

const projectsData = [
  {
    id: 1,
    title: 'Corporate Business Website',
    category: 'Web Design',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5'],
    desc: 'Modern corporate portal for an enterprise financial advisory firm featuring interactive service calculators, team profiles, and smooth section transitions.',
    imageBg: 'from-blue-600 to-indigo-900',
    demoUrl: 'https://example.com/corporate-demo',
    githubUrl: 'https://github.com/bhupendersingh/corporate-business-web',
    highlights: ['Multi-page layout', 'Contact form integration', 'Custom CSS animations', 'Speed index < 1s']
  },
  {
    id: 2,
    title: 'Hotel Booking Website',
    category: 'React.js',
    tech: ['React.js', 'Tailwind CSS', 'Lucide Icons'],
    desc: 'Luxury hotel & resort reservation web application featuring room filter systems, date pickers, virtual tour galleries, and instant booking confirmation UI.',
    imageBg: Portfolioimage1,
    demoUrl: 'https://example.com/hotel-booking-demo',
    githubUrl: 'https://github.com/bhupendersingh/hotel-booking-react',
    highlights: ['Interactive room selection', 'Date range picker', 'Responsive modal checkout', 'Figma to React conversion']
  },
  {
    id: 3,
    title: 'Real Estate Website',
    category: 'Web Design',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Figma'],
    desc: 'Premium property listing platform with dynamic filter tabs (buy, rent, lease), map view integration, agent cards, and lead capture forms.',
    imageBg: 'from-emerald-600 to-teal-900',
    demoUrl: 'https://example.com/realestate-demo',
    githubUrl: 'https://github.com/bhupendersingh/real-estate-web',
    highlights: ['Property price filters', 'Interactive image carousels', 'Mortgage calculator widget', 'Mobile optimized']
  },
  {
    id: 4,
    title: 'Medical Website',
    category: 'React.js',
    tech: ['React.js', 'Tailwind CSS', 'Context API'],
    desc: 'Healthcare & hospital portal featuring online doctor appointment scheduling, department directory, emergency contacts, and patient testimonials.',
    imageBg: 'from-teal-600 to-blue-900',
    demoUrl: 'https://example.com/medical-portal-demo',
    githubUrl: 'https://github.com/bhupendersingh/medical-healthcare-react',
    highlights: ['Doctor appointment modal', 'Department tabs', 'Accessibility compliant (WCAG)', 'Fast loading']
  },
  {
    id: 5,
    title: 'Restaurant Website',
    category: 'Web Design',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'jQuery'],
    desc: 'Gourmet restaurant web app with digital menu filters, table reservation form, chef specials carousel, and food delivery quick links.',
    imageBg: 'from-amber-600 to-orange-900',
    demoUrl: 'https://example.com/restaurant-demo',
    githubUrl: 'https://github.com/bhupendersingh/restaurant-web-app',
    highlights: ['Interactive digital menu', 'Online reservation modal', 'Smooth scrolling navigation', 'Dark aesthetic theme']
  },
  {
    id: 6,
    title: 'E-Commerce Website',
    category: 'E-Commerce',
    tech: ['WordPress', 'WooCommerce', 'Elementor Pro'],
    desc: 'Full-featured online apparel store built with WooCommerce, custom cart drawer, wishlist functionality, secure checkout, and product quick view.',
    imageBg: 'from-purple-600 to-pink-800',
    demoUrl: 'https://example.com/ecommerce-demo',
    githubUrl: 'https://github.com/bhupendersingh/woocommerce-store',
    highlights: ['WooCommerce setup', 'Custom Elementor templates', 'Payment gateway integration', 'Mobile checkout UX']
  },
  {
    id: 7,
    title: 'Portfolio Website',
    category: 'React.js',
    tech: ['React.js', 'Tailwind CSS', 'Vite'],
    desc: 'Ultra-modern developer portfolio featuring dark/light themes, canvas particle background, skills progress indicators, and interactive project filters.',
    imageBg: 'from-indigo-600 to-purple-900',
    demoUrl: 'https://example.com/portfolio-demo',
    githubUrl: 'https://github.com/bhupendersingh/portfolio-website',
    highlights: ['Particle animations', 'Dark/Light mode persistence', 'Responsive UI components', 'SEO structured data']
  },
  {
    id: 8,
    title: 'Dashboard UI',
    category: 'UI/UX',
    tech: ['React.js', 'Tailwind CSS', 'Figma'],
    desc: 'SaaS analytics dashboard prototype with chart visualizations, user management tables, dark mode, sidebar navigation, and quick metrics widgets.',
    imageBg: 'from-slate-700 to-slate-900',
    demoUrl: 'https://example.com/dashboard-ui-demo',
    githubUrl: 'https://github.com/bhupendersingh/react-dashboard-ui',
    highlights: ['Figma design system', 'Responsive sidebar', 'Interactive metrics cards', 'Clean component hierarchy']
  },
  {
    id: 9,
    title: 'Education Website',
    category: 'WordPress',
    tech: ['WordPress', 'Elementor', 'CSS3'],
    desc: 'Online e-learning academy portal with course catalogs, instructor profiles, student registration forms, and event calendar integration.',
    imageBg: 'from-sky-600 to-indigo-900',
    demoUrl: 'https://example.com/education-demo',
    githubUrl: 'https://github.com/bhupendersingh/education-wordpress',
    highlights: ['Course filter catalog', 'Custom post types', 'Fast page speed scores', 'Student lead forms']
  },
  {
    id: 10,
    title: 'Landing Page Collection',
    category: 'Landing Page',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript'],
    desc: 'Curated collection of 5 high-converting SaaS landing pages designed for mobile apps, software startups, lead generation, and newsletter signups.',
    imageBg: 'from-rose-600 to-purple-900',
    demoUrl: 'https://example.com/landing-pages-demo',
    githubUrl: 'https://github.com/bhupendersingh/landing-page-collection',
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
              className={`px-4 sm:px-5 py-2.5 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                selectedCategory === cat
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
            const bgClass = isImageBg ? 'bg-cover bg-center' : `bg-gradient-to-br ${project.imageBg}`;
            const bgStyle = isImageBg ? { backgroundImage: `url(${project.imageBg})` } : undefined;

            return (
            <div
              key={project.id}
              className="glass-card rounded-3xl overflow-hidden border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between group hover:-translate-y-2 transition-all duration-300 shadow-xl"
            >
              {/* Graphic Mockup Preview Image Header */}
              <div className={`h-52 ${bgClass} relative p-6 flex flex-col justify-between overflow-hidden group-hover:scale-105 transition-transform duration-500`} style={bgStyle}>
                
                {/* Floating Category Badge */}
                <div className="flex justify-between items-center z-10">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-black/40 text-white backdrop-blur-md border border-white/20">
                    {project.category}
                  </span>

                  <button
                    onClick={() => setActiveModalProject(project)}
                    className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white backdrop-blur-md transition-colors"
                    title="Quick Details"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>

                {/* Mockup Title & Graphic Illustration */}
                <div className="z-10 mt-auto">
                  <div className="w-12 h-1 rounded bg-cyan-400 mb-2" />
                  <h4 className="text-xl font-display font-extrabold text-white drop-shadow-md">
                    {project.title}
                  </h4>
                </div>

                {/* Grid Glow Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent opacity-60 pointer-events-none" />
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                  {project.desc}
                </p>

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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="glass-card max-w-2xl w-full rounded-3xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl space-y-6 relative max-h-[90vh] overflow-y-auto">
            
            {/* Modal Header */}
            <div
              className={`p-6 ${typeof activeModalProject.imageBg === 'string' && /from-|to-/.test(activeModalProject.imageBg) ? `bg-gradient-to-r ${activeModalProject.imageBg}` : 'bg-cover bg-center'} text-white relative`}
                style={typeof activeModalProject.imageBg === 'string' && /from-|to-/.test(activeModalProject.imageBg) ? undefined : { backgroundImage: `url(${activeModalProject.imageBg})` }}
            >
              <button
                onClick={() => setActiveModalProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white backdrop-blur-md transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/20 text-white backdrop-blur-md mb-2 inline-block">
                {activeModalProject.category}
              </span>

              <h3 className="text-2xl sm:text-3xl font-display font-bold">
                {activeModalProject.title}
              </h3>
            </div>

            {/* Modal Body */}
            <div className="p-6 space-y-6">
              <p className="text-slate-700 dark:text-slate-300 text-base leading-relaxed">
                {activeModalProject.desc}
              </p>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-bold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
                  Key Features & Deliverables:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex items-center gap-4">
                <a
                  href={activeModalProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg hover:opacity-95 transition-opacity"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Launch Live Demo</span>
                </a>

                <a
                  href={activeModalProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-slate-700 dark:text-slate-200 bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>Repository</span>
                </a>
              </div>

            </div>

          </div>
        </div>
      )}

    </section>
  );
}
