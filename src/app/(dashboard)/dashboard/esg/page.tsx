'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'
import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  Leaf,
  Users,
  Building2,
  FileText,
  Share2,
  Download,
} from 'lucide-react'
import { esgMetrics, getESGScore } from '@/lib/dummy-data'
import { formatNumber } from '@/lib/utils'

export default function ESGPage() {
  const esgScore = getESGScore()

  const radarData = [
    { subject: 'Emissions', A: 85, fullMark: 100 },
    { subject: 'Energy', A: 78, fullMark: 100 },
    { subject: 'Water', A: 92, fullMark: 100 },
    { subject: 'Waste', A: 88, fullMark: 100 },
    { subject: 'Safety', A: 95, fullMark: 100 },
    { subject: 'Governance', A: 90, fullMark: 100 },
  ]

  const trendData = [
    { month: 'Jul', E: 72, S: 75, G: 80 },
    { month: 'Aug', E: 74, S: 76, G: 81 },
    { month: 'Sep', E: 76, S: 78, G: 82 },
    { month: 'Oct', E: 79, S: 79, G: 84 },
    { month: 'Nov', E: 82, S: 81, G: 85 },
    { month: 'Dec', E: 85, S: 83, G: 86 },
  ]

  const environmentalMetrics = esgMetrics.filter(m => m.category === 'environmental')
  const socialMetrics = esgMetrics.filter(m => m.category === 'social')
  const governanceMetrics = esgMetrics.filter(m => m.category === 'governance')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">ESG Reporting</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Environmental, Social, and Governance metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 text-sm" size="sm">
            <Share2 className="w-4 h-4" />
            <span className="hidden sm:inline">Share</span>
          </Button>
          <Button className="gap-2 text-sm" size="sm">
            <FileText className="w-4 h-4" />
            Report
          </Button>
        </div>
      </div>

      {/* ESG Score Overview */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <Card className="bg-gradient-to-br from-purple-500 to-indigo-600 text-white">
          <CardContent className="p-6">
            <p className="text-purple-100">Overall ESG Score</p>
            <p className="text-5xl font-bold mt-2">{esgScore.total}</p>
            <p className="text-purple-100 text-sm mt-1">out of 100</p>
            <div className="mt-4 pt-4 border-t border-white/20">
              <Badge className="bg-white/20 text-white">Industry: 72</Badge>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50">
                <Leaf className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-gray-500">Environmental</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{esgScore.environmental}</p>
            <Progress value={esgScore.environmental} className="mt-3" indicatorClassName="bg-emerald-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                <Users className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-gray-500">Social</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{esgScore.social}</p>
            <Progress value={esgScore.social} className="mt-3" indicatorClassName="bg-blue-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/50">
                <Building2 className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-gray-500">Governance</span>
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">{esgScore.governance}</p>
            <Progress value={esgScore.governance} className="mt-3" indicatorClassName="bg-amber-500" />
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Radar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Performance Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData}>
                  <PolarGrid />
                  <PolarAngleAxis dataKey="subject" className="text-xs" />
                  <PolarRadiusAxis angle={30} domain={[0, 100]} />
                  <Radar
                    name="Score"
                    dataKey="A"
                    stroke="#8B5CF6"
                    fill="#8B5CF6"
                    fillOpacity={0.3}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Trend Chart */}
        <Card>
          <CardHeader>
            <CardTitle>ESG Score Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={trendData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" domain={[0, 100]} />
                  <Tooltip />
                  <Bar dataKey="E" name="Environmental" fill="#10B981" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="S" name="Social" fill="#3B82F6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="G" name="Governance" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>Detailed Metrics</CardTitle>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="environmental">
            <div className="overflow-x-auto -mx-6 px-6 no-scrollbar">
              <TabsList className="w-max sm:w-auto">
                <TabsTrigger value="environmental" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                  <Leaf className="w-3 h-3 sm:w-4 sm:h-4" />
                  Environmental
                </TabsTrigger>
                <TabsTrigger value="social" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  Social
                </TabsTrigger>
                <TabsTrigger value="governance" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                  <Building2 className="w-3 h-3 sm:w-4 sm:h-4" />
                  Governance
                </TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="environmental" className="mt-6">
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {environmentalMetrics.map((metric) => (
                  <div key={metric.name} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{metric.name}</span>
                      <span className={`text-sm font-medium flex items-center gap-1 ${
                        metric.trend >= 0 ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {metric.trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {Math.abs(metric.trend)}%
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {formatNumber(metric.value)} <span className="text-sm font-normal text-gray-500">{metric.unit}</span>
                    </p>
                    {metric.benchmark && (
                      <p className="text-xs text-gray-500 mt-1">
                        Benchmark: {formatNumber(metric.benchmark)} {metric.unit}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="social" className="mt-6">
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {socialMetrics.map((metric) => (
                  <div key={metric.name} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{metric.name}</span>
                      <span className={`text-sm font-medium flex items-center gap-1 ${
                        metric.trend >= 0 ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {metric.trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {Math.abs(metric.trend)}%
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {formatNumber(metric.value)} <span className="text-sm font-normal text-gray-500">{metric.unit}</span>
                    </p>
                    {metric.benchmark && (
                      <p className="text-xs text-gray-500 mt-1">
                        Benchmark: {formatNumber(metric.benchmark)} {metric.unit}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="governance" className="mt-6">
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {governanceMetrics.map((metric) => (
                  <div key={metric.name} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">{metric.name}</span>
                      <span className={`text-sm font-medium flex items-center gap-1 ${
                        metric.trend >= 0 ? 'text-emerald-600' : 'text-red-600'
                      }`}>
                        {metric.trend >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {Math.abs(metric.trend)}%
                      </span>
                    </div>
                    <p className="text-2xl font-bold text-gray-900 dark:text-white">
                      {formatNumber(metric.value)} <span className="text-sm font-normal text-gray-500">{metric.unit}</span>
                    </p>
                    {metric.benchmark && (
                      <p className="text-xs text-gray-500 mt-1">
                        Benchmark: {formatNumber(metric.benchmark)} {metric.unit}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Report Generator */}
      <Card>
        <CardHeader>
          <CardTitle>Report Generator</CardTitle>
          <CardDescription>Generate ESG reports for different frameworks</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-4">
            {['GRI', 'SASB', 'CDP', 'TCFD'].map((framework) => (
              <div key={framework} className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 text-center hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors cursor-pointer">
                <p className="text-lg font-semibold text-gray-900 dark:text-white">{framework}</p>
                <p className="text-sm text-gray-500 mt-1">Framework Report</p>
                <Button variant="outline" size="sm" className="mt-3 gap-2">
                  <Download className="w-4 h-4" />
                  Generate
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
