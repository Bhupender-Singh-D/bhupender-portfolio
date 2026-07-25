import React from 'react';
import { Star, MessageSquareQuote, Quote } from 'lucide-react';

const testimonialsData = [
  {
    name: 'Rajesh Sharma',
    role: 'Managing Director, Apex Capital',
    review: 'Bhupender converted our complex Figma prototypes into a blazing-fast React website. His attention to pixel perfection and mobile responsiveness is truly top tier!',
    rating: 5,
    avatarText: 'RS',
    avatarColor: 'from-blue-600 to-indigo-600'
  },
  {
    name: 'Emily Watson',
    role: 'Creative Director, Studio Bloom',
    review: 'Working with Bhupender was completely effortless. He revamped our WordPress portal and boosted our Core Web Vitals score from 45 to 98.',
    rating: 5,
    avatarText: 'EW',
    avatarColor: 'from-purple-600 to-pink-600'
  },
  {
    name: 'Karan Verma',
    role: 'Founder, TechPulse India',
    review: 'Extremely professional Front-End Developer. His React code is clean, modular, well-documented, and delivered right on deadline.',
    rating: 5,
    avatarText: 'KV',
    avatarColor: 'from-emerald-600 to-teal-600'
  },
  {
    name: 'Sophia Martinez',
    role: 'E-Commerce Manager, Luxe Living',
    review: 'Bhupender built our custom WooCommerce storefront ahead of schedule. Outstanding UI/UX design taste and continuous post-launch support.',
    rating: 5,
    avatarText: 'SM',
    avatarColor: 'from-amber-600 to-orange-600'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 relative overflow-hidden bg-slate-100/50 dark:bg-slate-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-500/10 text-purple-600 dark:text-purple-400 text-xs font-bold uppercase tracking-wider">
            <MessageSquareQuote className="w-4 h-4" />
            <span>Client Reviews</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-bold text-slate-900 dark:text-white">
            What Clients <span className="text-gradient-primary">Say</span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300">
            Real feedback from business owners, agency partners, and project leads.
          </p>
          <div className="w-20 h-1.5 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonialsData.map((item, idx) => (
            <div
              key={idx}
              className="glass-card p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between space-y-6 relative overflow-hidden group shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-12 h-12 text-slate-300/40 dark:text-slate-700/30 pointer-events-none group-hover:scale-110 transition-transform" />

              {/* Star Rating */}
              <div className="flex items-center gap-1">
                {[...Array(item.rating)].map((_, rIdx) => (
                  <Star key={rIdx} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-base text-slate-700 dark:text-slate-300 italic leading-relaxed relative z-10">
                "{item.review}"
              </p>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-slate-200/60 dark:border-slate-800/80">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-tr ${item.avatarColor} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {item.avatarText}
                </div>
                <div>
                  <h4 className="text-base font-display font-bold text-slate-900 dark:text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400 font-medium">
                    {item.role}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
