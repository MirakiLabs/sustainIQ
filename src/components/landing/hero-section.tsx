'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight, Play, Factory, BarChart3, Leaf, Shield } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-14 sm:pt-16 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-48 sm:w-72 h-48 sm:h-72 bg-emerald-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-teal-500/20 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm font-medium">
              <Leaf className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>AI-Powered Carbon Intelligence</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
              Industrial Carbon Intelligence at{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
                Your Fingertips
              </span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto lg:mx-0">
              Track emissions in real-time, leverage AI-powered analytics, trade carbon credits,
              and ensure compliance with blockchain-verified offsets. All in one unified platform
              built for modern manufacturing.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="w-full sm:w-auto">
                <Link href="/signup">
                  Start Free Trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                <Play className="w-4 h-4" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800">
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">1M+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Tons CO₂ Tracked</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Facilities</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">€50M+</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Credits Traded</div>
              </div>
              <div>
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">99.8%</div>
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">Compliance Rate</div>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="relative lg:pl-10 hidden sm:block">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-200 dark:border-gray-800">
              {/* Dashboard Preview */}
              <div className="space-y-3 sm:space-y-4">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl gradient-primary flex items-center justify-center">
                      <Factory className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">Carbon Dashboard</div>
                      <div className="text-xs text-gray-500">Real-time monitoring</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-2 sm:px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/50 text-emerald-700 dark:text-emerald-300 text-xs sm:text-sm">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Live
                  </div>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-2 sm:gap-3">
                  <div className="p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Total Emissions</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">1,247 <span className="text-xs sm:text-sm font-normal">tCO₂e</span></div>
                    <div className="text-xs sm:text-sm text-emerald-600">↓ 12% vs last month</div>
                  </div>
                  <div className="p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-800">
                    <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Carbon Credits</div>
                    <div className="text-lg sm:text-2xl font-bold text-gray-900 dark:text-white">3,450</div>
                    <div className="text-xs sm:text-sm text-gray-500">€86,250 value</div>
                  </div>
                </div>

                {/* Chart Preview */}
                <div className="h-24 sm:h-32 bg-gradient-to-t from-emerald-50 dark:from-emerald-950/50 to-transparent rounded-xl flex items-end justify-around p-3 sm:p-4">
                  {[40, 65, 45, 80, 55, 70, 60, 75, 50, 85, 65, 55].map((height, i) => (
                    <div
                      key={i}
                      className="w-2.5 sm:w-4 bg-gradient-to-t from-emerald-600 to-teal-400 rounded-t"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>

                {/* Compliance */}
                <div className="flex items-center justify-between p-2.5 sm:p-3 rounded-xl bg-emerald-50 dark:bg-emerald-900/30">
                  <div className="flex items-center gap-2">
                    <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                    <span className="text-xs sm:text-sm font-medium text-emerald-700 dark:text-emerald-300">Compliance Score</span>
                  </div>
                  <div className="text-base sm:text-lg font-bold text-emerald-700 dark:text-emerald-300">94%</div>
                </div>
              </div>
            </div>

            {/* Floating Cards - hidden on tablets to prevent overflow */}
            <div className="absolute -left-4 top-1/4 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-3 border border-gray-200 dark:border-gray-800 animate-fade-in hidden lg:block">
              <div className="flex items-center gap-2">
                <BarChart3 className="w-5 h-5 text-blue-500" />
                <span className="text-sm font-medium">AI Insights Ready</span>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/4 bg-white dark:bg-gray-900 rounded-xl shadow-lg p-3 border border-gray-200 dark:border-gray-800 animate-fade-in hidden lg:block">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900 flex items-center justify-center">
                  <Leaf className="w-4 h-4 text-emerald-600" />
                </div>
                <div>
                  <div className="text-sm font-medium">Offset Complete</div>
                  <div className="text-xs text-gray-500">500 credits retired</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
