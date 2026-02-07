'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Target,
  TrendingDown,
  TrendingUp,
  Calendar,
  Plus,
  CheckCircle,
  Clock,
  AlertTriangle,
  Leaf,
  Zap,
  Droplets,
  Recycle,
  ArrowRight,
} from 'lucide-react'

const goals = [
  {
    id: 1,
    title: 'Net Zero by 2040',
    description: 'Achieve net-zero carbon emissions across all operations and supply chain',
    category: 'Emissions',
    icon: Leaf,
    iconColor: 'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600',
    target: 0,
    current: 24500,
    baseline: 85000,
    unit: 'tCO₂e',
    progress: 71,
    deadline: '2040-12-31',
    status: 'on-track',
    milestones: [
      { year: '2025', target: '50% reduction', achieved: true },
      { year: '2030', target: '75% reduction', achieved: false },
      { year: '2035', target: '90% reduction', achieved: false },
      { year: '2040', target: 'Net Zero', achieved: false },
    ],
  },
  {
    id: 2,
    title: '100% Renewable Energy',
    description: 'Transition all facilities to renewable energy sources',
    category: 'Energy',
    icon: Zap,
    iconColor: 'bg-amber-100 dark:bg-amber-900/50 text-amber-600',
    target: 100,
    current: 68,
    baseline: 15,
    unit: '%',
    progress: 68,
    deadline: '2030-12-31',
    status: 'on-track',
    milestones: [
      { year: '2024', target: '50% renewable', achieved: true },
      { year: '2026', target: '70% renewable', achieved: false },
      { year: '2028', target: '85% renewable', achieved: false },
      { year: '2030', target: '100% renewable', achieved: false },
    ],
  },
  {
    id: 3,
    title: 'Water Usage Reduction',
    description: 'Reduce industrial water consumption by 40% from 2020 baseline',
    category: 'Water',
    icon: Droplets,
    iconColor: 'bg-blue-100 dark:bg-blue-900/50 text-blue-600',
    target: 40,
    current: 28,
    baseline: 0,
    unit: '% reduction',
    progress: 70,
    deadline: '2030-12-31',
    status: 'at-risk',
    milestones: [
      { year: '2024', target: '20% reduction', achieved: true },
      { year: '2026', target: '28% reduction', achieved: true },
      { year: '2028', target: '35% reduction', achieved: false },
      { year: '2030', target: '40% reduction', achieved: false },
    ],
  },
  {
    id: 4,
    title: 'Zero Waste to Landfill',
    description: 'Divert 100% of operational waste from landfill through recycling and reuse',
    category: 'Waste',
    icon: Recycle,
    iconColor: 'bg-green-100 dark:bg-green-900/50 text-green-600',
    target: 100,
    current: 82,
    baseline: 45,
    unit: '% diversion',
    progress: 82,
    deadline: '2028-12-31',
    status: 'on-track',
    milestones: [
      { year: '2024', target: '70% diversion', achieved: true },
      { year: '2025', target: '80% diversion', achieved: true },
      { year: '2027', target: '95% diversion', achieved: false },
      { year: '2028', target: '100% diversion', achieved: false },
    ],
  },
]

const sdgAlignments = [
  { number: 7, name: 'Affordable & Clean Energy', color: 'bg-yellow-500' },
  { number: 9, name: 'Industry, Innovation & Infrastructure', color: 'bg-orange-500' },
  { number: 12, name: 'Responsible Consumption', color: 'bg-amber-700' },
  { number: 13, name: 'Climate Action', color: 'bg-green-700' },
]

export default function GoalsPage() {
  const onTrack = goals.filter(g => g.status === 'on-track').length
  const atRisk = goals.filter(g => g.status === 'at-risk').length

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Sustainability Goals</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Track progress towards your sustainability targets</p>
        </div>
        <Button size="sm" className="gap-2 w-fit">
          <Plus className="w-4 h-4" />
          Add Goal
        </Button>
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                <Target className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">Active Goals</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{goals.length}</p>
            <p className="text-sm text-gray-500 mt-1">Across 4 categories</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-500">On Track</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{onTrack}</p>
            <p className="text-sm text-emerald-600 mt-1">Meeting milestones</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/50">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-sm text-gray-500">At Risk</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">{atRisk}</p>
            <p className="text-sm text-amber-600 mt-1">Needs attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Goals Detail */}
      <div className="space-y-4 sm:space-y-6">
        {goals.map((goal) => (
          <Card key={goal.id}>
            <CardContent className="p-5 sm:p-6">
              <div className="flex flex-col lg:flex-row lg:items-start gap-5 sm:gap-6">
                {/* Goal Info */}
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                    <div className={`p-2.5 rounded-xl ${goal.iconColor} w-fit`}>
                      <goal.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">{goal.title}</h3>
                        {goal.status === 'on-track' ? (
                          <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 text-xs">
                            <CheckCircle className="w-3 h-3 mr-1" /> On Track
                          </Badge>
                        ) : (
                          <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400 text-xs">
                            <AlertTriangle className="w-3 h-3 mr-1" /> At Risk
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-500 mt-1">{goal.description}</p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Progress</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white">{goal.progress}%</span>
                    </div>
                    <Progress value={goal.progress} className="h-3" />
                    <div className="flex items-center justify-between mt-2">
                      <span className="text-xs text-gray-500">Current: {goal.current} {goal.unit}</span>
                      <span className="text-xs text-gray-500 flex items-center gap-1">
                        <Calendar className="w-3 h-3" /> Deadline: {goal.deadline.split('-')[0]}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Milestones */}
                <div className="lg:w-64 xl:w-72 shrink-0">
                  <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Milestones</p>
                  <div className="space-y-2.5">
                    {goal.milestones.map((milestone) => (
                      <div key={milestone.year} className="flex items-center gap-2.5">
                        {milestone.achieved ? (
                          <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        ) : (
                          <Clock className="w-4 h-4 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${milestone.achieved ? 'text-gray-900 dark:text-white line-through' : 'text-gray-600 dark:text-gray-400'}`}>
                          {milestone.year}: {milestone.target}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* SDG Alignment */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">UN Sustainable Development Goals Alignment</CardTitle>
          <CardDescription>Our sustainability goals align with these UN SDGs</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {sdgAlignments.map((sdg) => (
              <div key={sdg.number} className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg ${sdg.color} flex items-center justify-center text-white font-bold text-sm sm:text-base flex-shrink-0`}>
                  {sdg.number}
                </div>
                <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">{sdg.name}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
