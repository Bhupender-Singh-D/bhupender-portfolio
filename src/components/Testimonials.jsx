import React, { useState, useEffect, useRef } from 'react';
import { Star, MessageSquareQuote, Quote, ChevronLeft, ChevronRight, CheckCircle } from 'lucide-react';
import ScrollReveal from './ScrollReveal';
import TiltCard from './TiltCard';

const testimonialsData = [
  {
    id: 1,
    name: 'Rajesh Sharma',
    role: 'Managing Director',
    company: 'Apex Capital Solutions',
    review: 'Bhupender converted our complex Figma prototypes into a blazing-fast React website. His attention to pixel perfection, clean modular code, and mobile responsiveness is truly top tier!',
    rating: 5,
    avatarText: 'RS',
    avatarColor: 'from-blue-600 to-indigo-600'
  },
  {
    id: 2,
    name: 'Emily Watson',
    role: 'Creative Director',
    company: 'Studio Bloom Agency',
    review: 'Working with Bhupender was completely effortless. He revamped our WordPress portal and boosted our Core Web Vitals performance score from 45 to 98. Highly recommended!',
    rating: 5,
    avatarText: 'EW',
    avatarColor: 'from-purple-600 to-pink-600'
  },
  {
    id: 3,
    name: 'Karan Verma',
    role: 'Founder & CEO',
    company: 'TechPulse India',
    review: 'Extremely professional Front-End Developer. His React.js component architecture is clean, maintainable, well-documented, and delivered ahead of our project deadline.',
    rating: 5,
    avatarText: 'KV',
    avatarColor: 'from-emerald-600 to-teal-600'
  },
  {
    id: 4,
    name: 'Sophia Martinez',
    role: 'E-Commerce Manager',
    company: 'Luxe Living Co.',
    review: 'Bhupender built our custom WooCommerce storefront with precision. Excellent UI/UX design taste, fast turnarounds, and superb ongoing technical support.',
    rating: 5,
    avatarText: 'SM',
    avatarColor: 'from-amber-600 to-orange-600'
  },
  {
    id: 5,
    name: 'David Chen',
    role: 'Product Lead',
    company: 'Nexus Health Tech',
    review: 'Bhupender developed our analytics dashboard UI in React & Tailwind. His proactive communication and deep understanding of modern web standards made all the difference.',
    rating: 5,
    avatarText: 'DC',
    avatarColor: 'from-cyan-600 to-blue-600'
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(1);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(1);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(testimonialsData.length / itemsPerPage);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
    }, 5500);
    return () => clearInterval(interval);
  }, [isPaused, totalPages]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const handleTouchStart = (e) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      handleNext();
    } else if (touchEndX.current - touchStartX.current > 50) {
      handlePrev();
    }
    setIsPaused(false);
  };

  const visibleTestimonials = testimonialsData.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden bg-slate-100/70 dark:bg-slate-900/40 border-y border-slate-200/80 dark:border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider border border-purple-500/20 shadow-sm">
              <MessageSquareQuote className="w-4 h-4" />
              <span>Client Feedback</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-slate-900 dark:text-white tracking-tight">
              What Clients <span className="text-gradient-primary">Say</span>
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
              Real testimonials from business directors, agency partners, and product leads.
            </p>

            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mx-auto rounded-full mt-2" />
          </div>
        </ScrollReveal>

        {/* Carousel Container */}
        <div 
          className="relative max-w-5xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Review Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 min-h-[300px]">
            {visibleTestimonials.map((item) => (
              <TiltCard key={item.id} maxTilt={6} scale={1.02} glare={true} className="h-full">
                <div
                  className="glass-card p-8 rounded-2xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-6 relative overflow-hidden shadow-xl h-full bg-white/90 dark:bg-slate-900/70"
                >
                  <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-300/40 dark:text-slate-700/20 pointer-events-none" />

                  <div className="space-y-4">
                    {/* Star Rating */}
                    <div className="flex items-center gap-1" aria-label={`Rating: ${item.rating} out of 5 stars`}>
                      {[...Array(item.rating)].map((_, rIdx) => (
                        <Star key={rIdx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Review Quote */}
                    <p className="text-base text-slate-700 dark:text-slate-300 italic leading-relaxed relative z-10">
                      "{item.review}"
                    </p>
                  </div>

                  {/* Client Metadata */}
                  <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${item.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-md shrink-0`}>
                      {item.avatarText}
                    </div>
                    <div>
                      <h3 className="text-base font-display font-bold text-slate-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                        {item.role} • <span className="text-blue-600 dark:text-cyan-400 font-bold">{item.company}</span>
                      </p>
                    </div>
                  </div>

                </div>
              </TiltCard>
            ))}
          </div>

          {/* Controls & Dots */}
          <div className="flex items-center justify-between mt-10 pt-4">
            <button
              onClick={handlePrev}
              className="btn-3d btn-3d-secondary p-3 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label="Previous review"
              title="Previous Review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2">
              {[...Array(totalPages)].map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none ${
                    currentIndex === idx
                      ? 'w-8 bg-gradient-to-r from-blue-600 to-purple-600'
                      : 'w-2.5 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="btn-3d btn-3d-secondary p-3 rounded-xl focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none"
              aria-label="Next review"
              title="Next Review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
