import React, { useState } from 'react';
import { ExternalLink, Eye, Layers, Check, ArrowRight, X, Sparkles, CheckCircle2 } from 'lucide-react';
import Portfolioimage1 from '../assets/images/portfolio2.webp';
import businessImage from '../assets/images/business-website1.webp';
import project3 from '../assets/images/project3.webp';
import project4 from '../assets/images/project4.webp';
import project5 from '../assets/images/project5.webp';
import WordpressProject from '../assets/images/wordpress-project.webp';
import EcommerceProject from '../assets/images/e-commerce-project.webp';
import DashboardProject from '../assets/images/dashboard-project.webp';
import landingPageProject from '../assets/images/landing-page-project.webp';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const projectsData = [
  {
    id: 1,
    title: 'Corporate Financial Business Portal',
    category: 'Web Design',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Bootstrap 5', 'UI/UX'],
    desc: 'Modern enterprise financial advisory portal featuring interactive service calculators, executive team profiles, and smooth section transitions.',
    imageBg: businessImage,
    demoUrl: 'https://kindlebit.com',
    problem: 'Financial advisory firm needed an authoritative, high-trust digital portal with interactive service calculators and responsive corporate layouts.',
    solution: 'Engineered a multi-page Bootstrap 5 web portal with custom CSS micro-animations, responsive lead capture forms, and structured semantic HTML.',
    result: '45% increase in online lead inquiries, sub-second initial load performance, and 100% mobile compatibility across all modern devices.',
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
    problem: 'Recruitment portal required an intuitive interface for job seekers and recruiters to search listings and manage candidate applications dynamically.',
    solution: 'Built a modular React.js frontend with Tailwind CSS styling, real-time search filtering, and custom dashboard components converted from Figma.',
    result: '60% improvement in user session duration, instant client-side filtering without page reloads, and flawless mobile UX.',
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
    problem: 'B2B marketplace needed a fast searchable directory for brands to find verified Amazon suppliers.',
    solution: 'Developed a custom WordPress theme with Elementor Pro integration, instant supplier search, and responsive WooCommerce catalog views.',
    result: 'Enabled instant supplier lookup across 500+ verified listings with mobile-optimized navigation.',
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
    problem: 'Travel agency needed an engaging vacation rental booking portal with destination showcases and interactive trip planning guides.',
    solution: 'Built a responsive HTML5/CSS3 and jQuery interface with property search filters, interactive city maps, and image galleries.',
    result: 'Streamlined vacation discovery for thousands of active travelers with fast image rendering.',
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
    problem: 'European tour operator required a high-converting ticket booking portal for guided tours in Rome.',
    solution: 'Designed a mobile-first tour reservation UI featuring skip-the-line ticket showcases, itinerary breakdowns, and fast checkout CTAs.',
    result: 'Achieved 98+ Core Web Vitals score and significant boost in direct tour bookings.',
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
    problem: 'Global medical machinery exporter needed an international product catalog and RFQ inquiry system.',
    solution: 'Created a high-trust corporate portal with structured product categories, dynamic request-for-quote forms, and multi-language styling.',
    result: 'Increased international b2b inquiry submissions by 35% across hospital equipment buyers.',
    highlights: ['Product catalog categorization', 'Inquiry & RFQ submission flow', 'High-trust corporate design', 'Fully responsive mobile layout']
  },
  {
    id: 7,
    title: 'Insiders Health AI Analytics Dashboard',
    category: 'React.js',
    tech: ['React.js', 'Tailwind CSS', 'JavaScript', 'UI/UX'],
    desc: 'Modern AI analytics dashboard designed for health tech organizations to visualize metrics, content performance, and marketing insights.',
    imageBg: DashboardProject,
    demoUrl: 'https://insidershealth.ai',
    problem: 'Health tech organization required a clean analytics dashboard to display marketing insights and content performance metrics.',
    solution: 'Developed modular React dashboard component system with dark/light mode support, chart layouts, and responsive data tables.',
    result: 'Delivered intuitive data visualization UI allowing healthcare marketers to analyze metrics at a glance.',
    highlights: ['Clean dashboard component system', 'Data visualization layouts', 'Light & Dark theme adaptability', 'Modular React structure']
  },
  {
    id: 8,
    title: 'Trupaths — Enterprise Business Agency',
    category: 'WordPress',
    tech: ['WordPress', 'HTML5', 'CSS3', 'Elementor'],
    desc: 'Comprehensive corporate website built for a digital agency offering SEO, content writing, web development, and growth strategy.',
    imageBg: WordpressProject,
    demoUrl: 'https://www.trupaths.com',
    problem: 'Corporate digital agency needed an authoritative online presence to present SEO, content, and development services.',
    solution: 'Engineered a custom WordPress site with Elementor layouts, service detail pages, and lead capture forms.',
    result: 'Improved organic search visibility and client conversion rates across all core service offerings.',
    highlights: ['Custom Elementor page layouts', 'Service detail pages', 'Lead conversion forms', 'Search engine friendly structure']
  },
  {
    id: 9,
    title: 'Louvre Museum Tour Landing Page',
    category: 'Landing Page',
    tech: ['HTML5', 'CSS3', 'Bootstrap 5', 'JavaScript'],
    desc: 'High-converting promotional landing page designed for guided tour packages, ticket bookings, and visitor informational guides.',
    imageBg: landingPageProject,
    demoUrl: 'https://www.louvre.tours',
    problem: 'Tourism operator required a high-converting landing page for museum ticket bookings and guided group tours.',
    solution: 'Converted Figma designs into a conversion-focused web page with interactive accordion FAQs, ticket pricing cards, and instant booking buttons.',
    result: 'Reduced page load time to under 1.1s and maximized mobile conversion rates for ticket sales.',
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
    <section id="portfolio" aria-labelledby="portfolio-heading" className="py-24 relative overflow-hidden bg-white/60 dark:bg-slate-950/60">
      {/* Background Accent Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/10 dark:bg-blue-600/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold uppercase tracking-wider border border-blue-500/20 shadow-sm">
              <Layers className="w-4 h-4" />
              <span>Featured Portfolio</span>
            </div>
            
            <h2 id="portfolio-heading" className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              Selected <span className="text-gradient-primary">Projects</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Explore web applications, client portals, and modern responsive websites engineered with React, Tailwind & WordPress.
            </p>

            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-400 mx-auto rounded-full mt-2" />
          </div>
        </ScrollReveal>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" role="tablist" aria-label="Portfolio Category Filters">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selectedCategory === cat}
              aria-controls="portfolio-projects-grid"
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold btn-3d transition-all duration-200 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${selectedCategory === cat
                ? 'btn-3d-primary shadow-lg'
                : 'btn-3d-secondary'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 3D Project Cards Grid */}
        <div id="portfolio-projects-grid" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <ScrollReveal key={project.id} direction="up" delay={idx * 60}>
              <TiltCard maxTilt={8} scale={1.03} glare={true} className="h-full">
                <article
                  className="glass-card rounded-2xl overflow-hidden border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between shadow-2xl transition-all duration-300 group h-full bg-white/90 dark:bg-slate-900/70"
                >
                  {/* Screenshot Header Frame */}
                  <div className="h-56 relative overflow-hidden bg-slate-950">
                    <img
                      src={project.imageBg}
                      alt={`${project.title} — ${project.category} web development project by Bhupender Singh`}
                      loading="lazy"
                      decoding="async"
                      width={400}
                      height={224}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 ease-out"
                    />

                    {/* Top Badges */}
                    <div className="absolute top-3 left-3 right-3 flex justify-between items-center z-10">
                      <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-slate-950/80 text-cyan-400 backdrop-blur-md border border-cyan-400/30 shadow-md">
                        {project.category}
                      </span>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="p-2 rounded-xl bg-slate-950/80 hover:bg-blue-600 text-white backdrop-blur-md border border-slate-700/50 shadow-md transition-all hover:scale-110 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                        title="Quick View Details"
                        aria-label={`View case study details for ${project.title}`}
                      >
                        <Eye className="w-4 h-4" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-4 border-t border-slate-200/60 dark:border-slate-800/80">
                    <div className="space-y-2">
                      <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed line-clamp-2">
                        {project.desc}
                      </p>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
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
                        className="flex-1 btn-3d btn-3d-primary inline-flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs shadow-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                        aria-label={`Launch live website for ${project.title}`}
                      >
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Live Demo</span>
                      </a>

                      <button
                        onClick={() => setActiveModalProject(project)}
                        className="btn-3d btn-3d-secondary inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl font-bold text-xs focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                        title="View Case Study Details"
                        aria-label={`View case study details for ${project.title}`}
                      >
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </article>
              </TiltCard>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      {activeModalProject && (
        <div 
          role="dialog" 
          aria-modal="true" 
          aria-labelledby={`modal-title-${activeModalProject.id}`}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
        >
          <div className="glass-card max-w-3xl w-full rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-2xl relative max-h-[90vh] flex flex-col bg-white dark:bg-slate-900">

            {/* Modal Top Bar */}
            <div className="p-4 sm:p-5 border-b border-slate-200/80 dark:border-slate-800/80 flex items-center justify-between shrink-0 bg-slate-50/80 dark:bg-slate-900/80">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-blue-500/10 text-blue-600 dark:text-cyan-400 border border-blue-500/20">
                  {activeModalProject.category}
                </span>
                <h3 id={`modal-title-${activeModalProject.id}`} className="text-base sm:text-xl font-display font-bold text-slate-900 dark:text-white truncate max-w-md">
                  {activeModalProject.title}
                </h3>
              </div>

              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white bg-slate-200/60 dark:bg-slate-800/60 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
                aria-label="Close case study details modal"
              >
                <X className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-5 sm:p-6 space-y-6 overflow-y-auto">

              {/* Realistic Browser Window Frame */}
              <div className="relative w-full rounded-xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 shadow-xl">
                <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-rose-500" />
                    <div className="w-3 h-3 rounded-full bg-amber-500" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500" />
                  </div>

                  <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-slate-950 text-slate-400 text-xs font-mono max-w-xs sm:max-w-sm truncate border border-slate-800">
                    <span className="text-emerald-400">https://</span>
                    <span>{activeModalProject.demoUrl ? activeModalProject.demoUrl.replace(/^https?:\/\//, '') : 'demo.com'}</span>
                  </div>

                  <div className="w-12 hidden sm:block" />
                </div>

                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-slate-950 flex items-center justify-center">
                  <img
                    src={activeModalProject.imageBg}
                    alt={`${activeModalProject.title} screenshot`}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              {/* Structured Case Study */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rose-500">
                    01. Problem & Challenge
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeModalProject.problem || activeModalProject.desc}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-100/70 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/60 space-y-1.5">
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-500 dark:text-cyan-400">
                    02. Engineering Solution
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                    {activeModalProject.solution || activeModalProject.desc}
                  </p>
                </div>
              </div>

              {/* Impact / Result */}
              <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-1.5">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  03. Business Impact & Measurable Result
                </span>
                <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 font-medium leading-relaxed">
                  {activeModalProject.result || 'Delivered pixel-perfect design, optimized web performance scores, and seamless cross-device layout compatibility.'}
                </p>
              </div>

              {/* Technologies Used */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeModalProject.tech.map((t, idx) => (
                    <span key={idx} className="px-3 py-1 rounded-lg text-xs font-mono font-semibold bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
                  Key Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {activeModalProject.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-800/40 border border-slate-200/60 dark:border-slate-700/50 text-xs text-slate-700 dark:text-slate-300">
                      <Check className="w-4 h-4 text-emerald-500 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Action Footer */}
            <div className="p-4 sm:p-5 border-t border-slate-200 dark:border-slate-800 flex items-center gap-3 shrink-0 bg-slate-50/80 dark:bg-slate-900/80">
              <a
                href={activeModalProject.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn-3d btn-3d-primary flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-bold text-xs sm:text-sm shadow-md focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Launch Live Website</span>
              </a>

              <a
                href="#contact"
                onClick={() => setActiveModalProject(null)}
                className="btn-3d btn-3d-secondary flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-bold text-xs sm:text-sm focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              >
                <span>Inquire Similar Project</span>
              </a>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
