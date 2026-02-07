'use client'

import { CheckCircle } from 'lucide-react'

const complianceBadges = [
  {
    name: 'EU CBAM Ready',
    description: 'Carbon Border Adjustment Mechanism',
    status: 'Fully Compliant',
  },
  {
    name: 'ISO 14064 Certified',
    description: 'GHG Accounting & Verification',
    status: 'Certified',
  },
  {
    name: 'CDP Compatible',
    description: 'Carbon Disclosure Project',
    status: 'A-List Partner',
  },
  {
    name: 'SBTi Aligned',
    description: 'Science Based Targets initiative',
    status: 'Approved',
  },
]

const regulations = [
  'EU Emissions Trading System (EU ETS)',
  'Corporate Sustainability Reporting Directive (CSRD)',
  'GHG Protocol Standards',
  'Task Force on Climate-related Financial Disclosures (TCFD)',
  'Global Reporting Initiative (GRI)',
  'Sustainability Accounting Standards Board (SASB)',
]

export function ComplianceSection() {
  return (
    <section id="compliance" className="py-16 sm:py-24 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
              Stay Compliant with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> Global Standards</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
              Our platform is designed to meet the most stringent regulatory requirements.
              Generate audit-ready reports for any framework with a single click.
            </p>

            <div className="space-y-3 sm:space-y-4 text-left">
              {regulations.map((regulation) => (
                <div key={regulation} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                  <span className="text-sm sm:text-base text-gray-300">{regulation}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {complianceBadges.map((badge) => (
              <div
                key={badge.name}
                className="bg-gray-800/50 backdrop-blur rounded-xl p-4 sm:p-6 border border-gray-700 hover:border-emerald-500/50 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="font-semibold text-white mb-1">{badge.name}</h3>
                <p className="text-sm text-gray-400 mb-3">{badge.description}</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-500/20 text-emerald-300">
                  {badge.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
