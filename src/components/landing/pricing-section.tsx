'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { CheckCircle, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    price: '€299',
    period: '/month',
    description: 'For small manufacturers starting their sustainability journey',
    features: [
      'Up to 3 facilities',
      'Basic emission tracking',
      'Monthly compliance reports',
      'Email support',
      '5 user accounts',
      'Standard dashboards',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '€799',
    period: '/month',
    description: 'For growing companies with advanced sustainability needs',
    features: [
      'Up to 15 facilities',
      'Real-time monitoring & IoT',
      'AI predictive analytics',
      'Carbon credit marketplace',
      'All compliance frameworks',
      '25 user accounts',
      'Priority support',
      'Custom reports',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with complex multi-site operations',
    features: [
      'Unlimited facilities',
      'Advanced AI & ML models',
      'Blockchain verification',
      'Supply chain tracking',
      'Dedicated account manager',
      'Unlimited users',
      'SLA guarantee',
      'Custom integrations',
      'On-premise deployment option',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            Choose the plan that fits your sustainability goals. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-6 sm:p-8 border ${
                plan.highlighted
                  ? 'bg-white dark:bg-gray-900 border-emerald-500 shadow-xl shadow-emerald-500/10 ring-1 ring-emerald-500'
                  : 'bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-800 shadow-lg'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-xs sm:text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                    {plan.price}
                  </span>
                  {plan.period && (
                    <span className="text-sm sm:text-base text-gray-500">{plan.period}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className="w-full gap-2"
                variant={plan.highlighted ? 'default' : 'outline'}
                asChild
              >
                <Link href="/signup">
                  {plan.cta}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-8 sm:mt-12">
          All prices in EUR. Annual billing available with 20% discount. No credit card required for trial.
        </p>
      </div>
    </section>
  )
}
