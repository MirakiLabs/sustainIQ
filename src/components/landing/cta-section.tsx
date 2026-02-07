'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-emerald-600 to-teal-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
          <Sparkles className="w-4 h-4" />
          <span>Start your sustainability journey today</span>
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
          Ready to Transform Your Carbon Management?
        </h2>

        <p className="text-lg text-emerald-100 mb-8 max-w-2xl mx-auto">
          Join 500+ manufacturing facilities already using SustainIQ to reduce emissions,
          trade credits, and stay compliant. Start your free trial today.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" variant="secondary" className="bg-white text-emerald-700 hover:bg-gray-100" asChild>
            <Link href="/signup">
              Start Free Trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Schedule Demo
          </Button>
        </div>

        <p className="text-sm text-emerald-100 mt-6">
          No credit card required • 14-day free trial • Cancel anytime
        </p>
      </div>
    </section>
  )
}
