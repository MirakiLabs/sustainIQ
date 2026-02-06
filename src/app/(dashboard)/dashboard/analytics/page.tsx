'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
  Legend,
} from 'recharts'
import {
  Brain,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle,
  Clock,
  Zap,
  ArrowRight,
} from 'lucide-react'
import { forecastData, aiInsights, emissionHistory } from '@/lib/dummy-data'
import { cn, formatNumber, formatCurrency } from '@/lib/utils'

export default function AnalyticsPage() {
  // Year over year comparison
  const yoyData = emissionHistory.slice(-12).map((curr, i) => ({
    month: new Date(curr.date).toLocaleDateString('en-US', { month: 'short' }),
    current: curr.total,
    previous: Math.round(curr.total * (1.12 + Math.random() * 0.1)),
  }))

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Predictive Analytics</h1>
          <p className="text-gray-500 dark:text-gray-400">AI-powered insights and forecasting</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300">
          <Brain className="w-5 h-5" />
          <span className="text-sm font-medium">AI Engine Active</span>
        </div>
      </div>

      {/* Forecast Chart */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>30-Day Emission Forecast</CardTitle>
            <Tabs defaultValue="all">
              <TabsList>
                <TabsTrigger value="all">All Scenarios</TabsTrigger>
                <TabsTrigger value="baseline">Baseline</TabsTrigger>
                <TabsTrigger value="optimized">Optimized</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={forecastData.slice(0, 30)}>
                <defs>
                  <linearGradient id="confidence" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.2} />
                    <stop offset="95%" stopColor="#94a3b8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                <XAxis
                  dataKey="date"
                  tickFormatter={(date) => new Date(date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                  className="text-xs"
                  interval={4}
                />
                <YAxis className="text-xs" />
                <Tooltip
                  labelFormatter={(date) => new Date(date).toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="upperBound"
                  stroke="transparent"
                  fill="#94a3b8"
                  fillOpacity={0.1}
                  name="Confidence Interval"
                />
                <Area
                  type="monotone"
                  dataKey="lowerBound"
                  stroke="transparent"
                  fill="#ffffff"
                  fillOpacity={1}
                />
                <Line
                  type="monotone"
                  dataKey="predicted"
                  stroke="#6366F1"
                  strokeWidth={2}
                  dot={false}
                  name="Business as Usual"
                />
                <Line
                  type="monotone"
                  dataKey="optimized"
                  stroke="#10B981"
                  strokeWidth={2}
                  dot={false}
                  name="Optimized Scenario"
                />
                <Line
                  type="monotone"
                  dataKey="bestCase"
                  stroke="#06B6D4"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={false}
                  name="Best Case"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div className="p-3 rounded-lg bg-indigo-50 dark:bg-indigo-900/30">
              <p className="text-indigo-600 dark:text-indigo-400 font-medium">Business as Usual</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">~36,500 tCO₂e</p>
              <p className="text-gray-500 dark:text-gray-400">30-day projected</p>
            </div>
            <div className="p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/30">
              <p className="text-emerald-600 dark:text-emerald-400 font-medium">Optimized</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">~31,000 tCO₂e</p>
              <p className="text-gray-500 dark:text-gray-400">15% reduction potential</p>
            </div>
            <div className="p-3 rounded-lg bg-cyan-50 dark:bg-cyan-900/30">
              <p className="text-cyan-600 dark:text-cyan-400 font-medium">Best Case</p>
              <p className="text-lg font-bold text-gray-900 dark:text-white">~27,400 tCO₂e</p>
              <p className="text-gray-500 dark:text-gray-400">25% reduction potential</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* AI Insights */}
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-amber-500" />
                  <CardTitle>AI Insights & Recommendations</CardTitle>
                </div>
                <Badge variant="secondary">{aiInsights.length} insights available</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {aiInsights.map((insight) => (
                  <div
                    key={insight.id}
                    className={cn(
                      'p-4 rounded-xl border',
                      insight.type === 'prediction' && 'border-indigo-200 dark:border-indigo-800 bg-indigo-50/50 dark:bg-indigo-900/20',
                      insight.type === 'optimization' && 'border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-900/20',
                      insight.type === 'anomaly' && 'border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-900/20',
                      insight.type === 'recommendation' && 'border-amber-200 dark:border-amber-800 bg-amber-50/50 dark:bg-amber-900/20'
                    )}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-3">
                        <div className={cn(
                          'p-2 rounded-lg',
                          insight.type === 'prediction' && 'bg-indigo-100 text-indigo-600 dark:bg-indigo-900 dark:text-indigo-400',
                          insight.type === 'optimization' && 'bg-emerald-100 text-emerald-600 dark:bg-emerald-900 dark:text-emerald-400',
                          insight.type === 'anomaly' && 'bg-red-100 text-red-600 dark:bg-red-900 dark:text-red-400',
                          insight.type === 'recommendation' && 'bg-amber-100 text-amber-600 dark:bg-amber-900 dark:text-amber-400'
                        )}>
                          {insight.type === 'prediction' && <TrendingUp className="w-4 h-4" />}
                          {insight.type === 'optimization' && <Zap className="w-4 h-4" />}
                          {insight.type === 'anomaly' && <AlertTriangle className="w-4 h-4" />}
                          {insight.type === 'recommendation' && <Lightbulb className="w-4 h-4" />}
                        </div>
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">{insight.title}</p>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{insight.description}</p>
                          <div className="flex items-center gap-4 mt-3">
                            {insight.impact.co2Savings && (
                              <span className="text-sm text-emerald-600 dark:text-emerald-400 font-medium">
                                Save {insight.impact.co2Savings} tCO₂e
                              </span>
                            )}
                            {insight.impact.costSavings && (
                              <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                {formatCurrency(insight.impact.costSavings)} savings
                              </span>
                            )}
                            <span className="text-xs text-gray-500 dark:text-gray-400">
                              <Clock className="w-3 h-3 inline mr-1" />
                              {insight.timeline}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <Badge variant="secondary">{insight.confidence}% confidence</Badge>
                        <Button variant="ghost" size="sm" className="gap-1">
                          Accept <ArrowRight className="w-3 h-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Anomaly Detection */}
        <Card>
          <CardHeader>
            <CardTitle>Anomaly Detection</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="text-center py-6">
                <div className="w-20 h-20 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center mb-4">
                  <CheckCircle className="w-10 h-10 text-emerald-600" />
                </div>
                <p className="font-medium text-gray-900 dark:text-white">No Critical Anomalies</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  All patterns within normal range
                </p>
              </div>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-800">
                <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">Recent Detections</p>
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-amber-50 dark:bg-amber-900/20">
                    <AlertTriangle className="w-4 h-4 text-amber-500" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Minor pattern shift</p>
                      <p className="text-xs text-gray-500">Lyon Chemical - 2 days ago</p>
                    </div>
                    <Badge variant="warning">Resolved</Badge>
                  </div>
                  <div className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                    <CheckCircle className="w-4 h-4 text-gray-400" />
                    <div className="flex-1">
                      <p className="text-sm font-medium">Sensor calibration drift</p>
                      <p className="text-xs text-gray-500">Stuttgart Steel - 5 days ago</p>
                    </div>
                    <Badge variant="secondary">Resolved</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Year over Year */}
      <Card>
        <CardHeader>
          <CardTitle>Year-over-Year Comparison</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={yoyData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="previous"
                  stroke="#94a3b8"
                  fill="#94a3b8"
                  fillOpacity={0.2}
                  name="Last Year"
                />
                <Area
                  type="monotone"
                  dataKey="current"
                  stroke="#10B981"
                  fill="#10B981"
                  fillOpacity={0.3}
                  name="This Year"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex items-center justify-center gap-8">
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total YoY Change</p>
              <p className="text-2xl font-bold text-emerald-600">-12.4%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Emission Intensity</p>
              <p className="text-2xl font-bold text-emerald-600">-8.2%</p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-500 dark:text-gray-400">Cumulative Savings</p>
              <p className="text-2xl font-bold text-blue-600">€420K</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
