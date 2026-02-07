'use client'

import {
  Activity,
  Brain,
  Store,
  FileCheck,
  Link2,
  Building2,
  ArrowRight
} from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

const features = [
  {
    icon: Activity,
    title: 'Real-time Emission Monitoring',
    description: 'Track emissions across all facilities with IoT-connected sensors and live dashboards. Get instant alerts when thresholds are exceeded.',
    color: 'emerald',
  },
  {
    icon: Brain,
    title: 'AI Predictive Analytics',
    description: 'Leverage machine learning to forecast emissions, identify anomalies, and discover optimization opportunities before they happen.',
    color: 'blue',
  },
  {
    icon: Store,
    title: 'Carbon Credit Marketplace',
    description: 'Browse, compare, and purchase verified carbon credits from global projects. All transactions secured with blockchain verification.',
    color: 'purple',
  },
  {
    icon: FileCheck,
    title: 'Automated Compliance Reporting',
    description: 'Generate regulatory reports for EU CBAM, ETS, CDP, and more with one click. Stay compliant with automatic deadline tracking.',
    color: 'amber',
  },
  {
    icon: Link2,
    title: 'Blockchain-Verified Offsets',
    description: 'Every carbon credit purchase and retirement is recorded on blockchain, providing immutable proof for auditors and stakeholders.',
    color: 'teal',
  },
  {
    icon: Building2,
    title: 'Multi-facility Management',
    description: 'Manage emissions across unlimited facilities worldwide. Compare performance, set targets, and allocate credits efficiently.',
    color: 'rose',
  },
]

const colorClasses = {
  emerald: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600',
  blue: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600',
  purple: 'bg-purple-100 dark:bg-purple-900/50 text-purple-600',
  amber: 'bg-amber-100 dark:bg-amber-900/50 text-amber-600',
  teal: 'bg-teal-100 dark:bg-teal-900/50 text-teal-600',
  rose: 'bg-rose-100 dark:bg-rose-900/50 text-rose-600',
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Everything You Need to Manage Carbon
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            A comprehensive platform that combines monitoring, analytics, trading, and compliance
            into one seamless experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature) => (
            <Card key={feature.title} className="group card-hover border-0 shadow-sm">
              <CardContent className="p-5 sm:p-6">
                <div className={`w-12 h-12 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-4`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {feature.description}
                </p>
                <button className="inline-flex items-center text-sm font-medium text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 group-hover:gap-2 transition-all">
                  Learn more
                  <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
