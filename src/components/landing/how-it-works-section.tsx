'use client'

import { Radio, BarChart2, BadgeCheck } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Radio,
    title: 'Connect Your Facilities',
    description: 'Integrate your factories with our platform through IoT sensors, manual data input, or API connections. Support for all major industrial equipment.',
    features: ['IoT sensor integration', 'Manual data entry', 'ERP system connectors', 'Automated data validation'],
  },
  {
    number: '02',
    icon: BarChart2,
    title: 'Track & Analyze',
    description: 'Monitor emissions in real-time with AI-powered insights. Identify trends, predict future emissions, and discover optimization opportunities.',
    features: ['Real-time dashboards', 'Predictive analytics', 'Anomaly detection', 'Benchmarking tools'],
  },
  {
    number: '03',
    icon: BadgeCheck,
    title: 'Offset & Comply',
    description: 'Purchase verified carbon credits, retire them for offsetting, and generate compliance reports automatically. All blockchain-verified.',
    features: ['Global credit marketplace', 'Automated reporting', 'Audit-ready documents', 'Blockchain verification'],
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Get started in minutes with our simple three-step process
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500 transform -translate-y-1/2" />

          <div className="grid lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative">
                {/* Step Card */}
                <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-200 dark:border-gray-800 relative z-10">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-8 w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-6">
                    <step.icon className="w-7 h-7 text-emerald-600" />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {step.description}
                  </p>

                  <ul className="space-y-2">
                    {step.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
