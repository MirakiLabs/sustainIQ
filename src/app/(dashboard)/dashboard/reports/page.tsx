'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  FileText,
  Download,
  Calendar,
  Clock,
  CheckCircle,
  AlertCircle,
  Plus,
  Filter,
  BarChart3,
  PieChart,
  TrendingUp,
  FileSpreadsheet,
  Send,
} from 'lucide-react'

const recentReports = [
  {
    id: 1,
    name: 'Q4 2025 Carbon Emissions Report',
    type: 'Quarterly',
    framework: 'GHG Protocol',
    status: 'completed',
    date: '2026-01-15',
    size: '2.4 MB',
  },
  {
    id: 2,
    name: 'Annual ESG Report 2025',
    type: 'Annual',
    framework: 'GRI',
    status: 'completed',
    date: '2026-01-10',
    size: '8.7 MB',
  },
  {
    id: 3,
    name: 'CSRD Compliance Report',
    type: 'Regulatory',
    framework: 'CSRD',
    status: 'in-progress',
    date: '2026-02-01',
    size: '-',
  },
  {
    id: 4,
    name: 'CDP Climate Change Disclosure',
    type: 'Annual',
    framework: 'CDP',
    status: 'draft',
    date: '2026-02-15',
    size: '-',
  },
  {
    id: 5,
    name: 'EU ETS Emissions Verification',
    type: 'Regulatory',
    framework: 'EU ETS',
    status: 'completed',
    date: '2025-12-20',
    size: '1.8 MB',
  },
  {
    id: 6,
    name: 'Scope 3 Supply Chain Analysis',
    type: 'Quarterly',
    framework: 'GHG Protocol',
    status: 'completed',
    date: '2025-12-15',
    size: '3.1 MB',
  },
]

const scheduledReports = [
  { name: 'Monthly Emissions Summary', frequency: 'Monthly', nextDue: '2026-03-01', framework: 'Internal' },
  { name: 'Quarterly ESG Dashboard', frequency: 'Quarterly', nextDue: '2026-04-01', framework: 'GRI' },
  { name: 'Annual Carbon Footprint', frequency: 'Annual', nextDue: '2026-12-31', framework: 'GHG Protocol' },
  { name: 'EU CBAM Quarterly Report', frequency: 'Quarterly', nextDue: '2026-03-31', framework: 'EU CBAM' },
]

const reportTemplates = [
  { name: 'GHG Protocol Report', description: 'Scope 1, 2, 3 emissions breakdown', icon: BarChart3, framework: 'GHG Protocol' },
  { name: 'GRI Standards Report', description: 'Full GRI sustainability disclosure', icon: FileText, framework: 'GRI' },
  { name: 'TCFD Report', description: 'Climate-related financial disclosures', icon: TrendingUp, framework: 'TCFD' },
  { name: 'CDP Questionnaire', description: 'Carbon Disclosure Project submission', icon: PieChart, framework: 'CDP' },
  { name: 'SASB Report', description: 'Industry-specific sustainability metrics', icon: FileSpreadsheet, framework: 'SASB' },
  { name: 'Custom Report', description: 'Build your own custom report template', icon: Plus, framework: 'Custom' },
]

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Reports</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Generate, schedule, and manage sustainability reports</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Schedule</span>
          </Button>
          <Button size="sm" className="gap-2">
            <Plus className="w-4 h-4" />
            New Report
          </Button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                <FileText className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Total Reports</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">48</p>
            <p className="text-sm text-gray-500 mt-1">Generated this year</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-500">Completed</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">42</p>
            <p className="text-sm text-emerald-600 mt-1">87.5% completion rate</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/50">
                <Clock className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-sm text-gray-500">In Progress</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">4</p>
            <p className="text-sm text-amber-600 mt-1">2 due this week</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                <Send className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">Shared</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">28</p>
            <p className="text-sm text-gray-500 mt-1">With stakeholders</p>
          </CardContent>
        </Card>
      </div>

      {/* Main Content */}
      <Tabs defaultValue="recent">
        <div className="overflow-x-auto -mx-6 px-6 no-scrollbar">
          <TabsList className="w-max sm:w-auto">
            <TabsTrigger value="recent" className="text-xs sm:text-sm">Recent Reports</TabsTrigger>
            <TabsTrigger value="scheduled" className="text-xs sm:text-sm">Scheduled</TabsTrigger>
            <TabsTrigger value="templates" className="text-xs sm:text-sm">Templates</TabsTrigger>
          </TabsList>
        </div>

        {/* Recent Reports */}
        <TabsContent value="recent" className="mt-4">
          <Card>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[600px]">
                  <thead>
                    <tr className="border-b border-gray-200 dark:border-gray-800">
                      <th className="text-left py-3 px-4 sm:px-6 text-xs font-medium text-gray-500 uppercase">Report</th>
                      <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Framework</th>
                      <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                      <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Date</th>
                      <th className="text-right py-3 px-4 sm:px-6 text-xs font-medium text-gray-500 uppercase">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                    {recentReports.map((report) => (
                      <tr key={report.id} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                        <td className="py-3 px-4 sm:px-6">
                          <div>
                            <p className="text-sm font-medium text-gray-900 dark:text-white">{report.name}</p>
                            <p className="text-xs text-gray-500">{report.type} &middot; {report.size}</p>
                          </div>
                        </td>
                        <td className="py-3 px-3">
                          <Badge variant="outline" className="text-xs">{report.framework}</Badge>
                        </td>
                        <td className="py-3 px-3">
                          {report.status === 'completed' && (
                            <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 text-xs">
                              <CheckCircle className="w-3 h-3 mr-1" /> Completed
                            </Badge>
                          )}
                          {report.status === 'in-progress' && (
                            <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400 text-xs">
                              <Clock className="w-3 h-3 mr-1" /> In Progress
                            </Badge>
                          )}
                          {report.status === 'draft' && (
                            <Badge className="bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-400 text-xs">
                              <AlertCircle className="w-3 h-3 mr-1" /> Draft
                            </Badge>
                          )}
                        </td>
                        <td className="py-3 px-3 text-sm text-gray-500">{report.date}</td>
                        <td className="py-3 px-4 sm:px-6 text-right">
                          {report.status === 'completed' ? (
                            <Button variant="outline" size="sm" className="gap-1.5">
                              <Download className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Download</span>
                            </Button>
                          ) : (
                            <Button variant="outline" size="sm" className="gap-1.5">
                              <FileText className="w-3.5 h-3.5" />
                              <span className="hidden sm:inline">Continue</span>
                            </Button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Scheduled Reports */}
        <TabsContent value="scheduled" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base sm:text-lg">Automated Report Schedule</CardTitle>
              <CardDescription>Reports that are automatically generated on schedule</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {scheduledReports.map((report) => (
                  <div key={report.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                    <div className="flex items-start sm:items-center gap-3">
                      <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                        <Calendar className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{report.name}</p>
                        <p className="text-xs text-gray-500">
                          {report.frequency} &middot; {report.framework} &middot; Next: {report.nextDue}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-11 sm:ml-0">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">Pause</Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Templates */}
        <TabsContent value="templates" className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {reportTemplates.map((template) => (
              <Card key={template.name} className="hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors cursor-pointer">
                <CardContent className="p-5 sm:p-6">
                  <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 w-fit mb-4">
                    <template.icon className="w-6 h-6 text-emerald-600" />
                  </div>
                  <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white mb-1">{template.name}</h3>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-4">{template.description}</p>
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">{template.framework}</Badge>
                    <Button variant="outline" size="sm">Use Template</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
