'use client'

import { Star } from 'lucide-react'

const testimonials = [
  {
    quote: "SustainIQ transformed our carbon management. We reduced emissions by 23% in the first year while cutting compliance costs by 40%.",
    author: 'Sarah Chen',
    role: 'Chief Sustainability Officer',
    company: 'Nordic Steel Industries',
    avatar: 'SC',
    rating: 5,
  },
  {
    quote: "The AI-powered insights helped us identify optimization opportunities we never knew existed. The ROI was visible within months.",
    author: 'Marcus Weber',
    role: 'Operations Director',
    company: 'AutoTech Manufacturing',
    avatar: 'MW',
    rating: 5,
  },
  {
    quote: "Finally, a platform that makes carbon credit trading transparent and trustworthy. The blockchain verification gives our stakeholders confidence.",
    author: 'Priya Sharma',
    role: 'VP of Sustainability',
    company: 'Global Chemicals Ltd.',
    avatar: 'PS',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            See how manufacturing companies are achieving their sustainability goals with SustainIQ
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-gray-700 dark:text-gray-300 mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {testimonial.role}
                  </div>
                  <div className="text-sm text-emerald-600 dark:text-emerald-400">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
