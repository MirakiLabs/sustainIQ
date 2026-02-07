'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { KPICard } from '@/components/dashboard'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Area,
  AreaChart,
} from 'recharts'
import {
  Factory,
  Wallet,
  Shield,
  Building2,
  FileText,
  ShoppingCart,
  Calendar,
  Plus,
  AlertTriangle,
  TrendingDown,
  ExternalLink,
} from 'lucide-react'
import { facilities, emissionHistory, getActiveAlerts, getPortfolioSummary, getCurrentMonthSummary } from '@/lib/dummy-data'
import { formatNumber, formatCurrency } from '@/lib/utils'

export default function DashboardOverview() {
  const [emissionScope, setEmissionScope] = useState('total')
  const monthSummary = getCurrentMonthSummary()
  const portfolio = getPortfolioSummary()
  const activeAlerts = getActiveAlerts().slice(0, 5)

  // Format chart data for display
  const chartData = emissionHistory.slice(-12).map((d) => ({
    month: new Date(d.date).toLocaleDateString('en-US', { month: 'short' }),
    scope1: d.scope1,
    scope2: d.scope2,
    scope3: d.scope3,
    total: d.total,
    benchmark: Math.round(d.total * 1.15),
  }))

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Dashboard Overview</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Monitor your carbon footprint and sustainability metrics</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 text-sm" size="sm">
            <FileText className="w-4 h-4" />
            <span className="hidden sm:inline">Generate</span> Report
          </Button>
          <Button className="gap-2 text-sm" size="sm">
            <Plus className="w-4 h-4" />
            Add Facility
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Emissions (Current Month)"
          value={`${formatNumber(monthSummary.currentEmissions)} tCO₂e`}
          icon={Factory}
          iconColor="text-blue-600 bg-blue-100 dark:bg-blue-900/50"
          change={{
            value: Math.round(monthSummary.change),
            label: 'vs last month',
          }}
          progress={{
            value: monthSummary.currentEmissions,
            max: monthSummary.target,
          }}
        />

        <KPICard
          title="Carbon Credits Balance"
          value={`${formatNumber(portfolio.totalOwned)} credits`}
          subtitle={formatCurrency(portfolio.totalOwned * 25)}
          icon={Wallet}
          iconColor="text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50"
        >
          <div className="mt-4 space-y-1 text-sm text-gray-500 dark:text-gray-400">
            <p>• 500 purchased this month</p>
            <p>• 200 retired for offsetting</p>
          </div>
        </KPICard>

        <KPICard
          title="Compliance Score"
          value="94%"
          icon={Shield}
          iconColor="text-purple-600 bg-purple-100 dark:bg-purple-900/50"
        >
          <div className="mt-4 flex items-center gap-2">
            <Badge variant="success">On Track</Badge>
            <span className="text-sm text-gray-500 dark:text-gray-400">Next audit: Feb 15</span>
          </div>
        </KPICard>

        <KPICard
          title="Active Facilities"
          value={`${facilities.length} facilities`}
          icon={Building2}
          iconColor="text-amber-600 bg-amber-100 dark:bg-amber-900/50"
        >
          <div className="mt-4 flex items-center gap-4 text-sm">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              {facilities.filter(f => f.status === 'normal').length} normal
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-amber-500" />
              {facilities.filter(f => f.status === 'warning').length} warning
            </span>
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              {facilities.filter(f => f.status === 'alert').length} alert
            </span>
          </div>
        </KPICard>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-3">
        {/* Emissions Chart */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <CardTitle className="text-base sm:text-lg">Emission Trends</CardTitle>
            <Tabs value={emissionScope} onValueChange={setEmissionScope}>
              <TabsList className="h-8 sm:h-9">
                <TabsTrigger value="total" className="text-xs sm:text-sm px-2 sm:px-3">Total</TabsTrigger>
                <TabsTrigger value="scope1" className="text-xs sm:text-sm px-2 sm:px-3">Scope 1</TabsTrigger>
                <TabsTrigger value="scope2" className="text-xs sm:text-sm px-2 sm:px-3">Scope 2</TabsTrigger>
                <TabsTrigger value="scope3" className="text-xs sm:text-sm px-2 sm:px-3">Scope 3</TabsTrigger>
              </TabsList>
            </Tabs>
          </CardHeader>
          <CardContent>
            <div className="h-56 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={chartData}>
                  <defs>
                    <linearGradient id="colorEmissions" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'var(--background)',
                      border: '1px solid var(--border)',
                      borderRadius: '8px',
                    }}
                  />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey={emissionScope}
                    stroke="#10B981"
                    fill="url(#colorEmissions)"
                    strokeWidth={2}
                    name={emissionScope === 'total' ? 'Total Emissions' : `Scope ${emissionScope.slice(-1)}`}
                  />
                  <Line
                    type="monotone"
                    dataKey="benchmark"
                    stroke="#94a3b8"
                    strokeDasharray="5 5"
                    strokeWidth={2}
                    name="Industry Benchmark"
                    dot={false}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Recent Alerts</CardTitle>
            <Button variant="ghost" size="sm">
              View All
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeAlerts.map((alert) => (
                <div
                  key={alert.id}
                  className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50"
                >
                  <div
                    className={`p-2 rounded-lg ${
                      alert.severity === 'critical'
                        ? 'bg-red-100 text-red-600 dark:bg-red-900/50'
                        : alert.severity === 'high'
                        ? 'bg-orange-100 text-orange-600 dark:bg-orange-900/50'
                        : alert.severity === 'medium'
                        ? 'bg-amber-100 text-amber-600 dark:bg-amber-900/50'
                        : 'bg-blue-100 text-blue-600 dark:bg-blue-900/50'
                    }`}
                  >
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                      {alert.type}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                      {alert.facilityName}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {new Date(alert.timestamp).toLocaleString()}
                    </p>
                  </div>
                  <Badge
                    variant={
                      alert.severity === 'critical' || alert.severity === 'high'
                        ? 'destructive'
                        : alert.severity === 'medium'
                        ? 'warning'
                        : 'secondary'
                    }
                    className="text-xs"
                  >
                    {alert.severity}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Facility Table */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-base sm:text-lg">Facility Breakdown</CardTitle>
          <Button variant="outline" size="sm">
            Export
          </Button>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto -mx-6 px-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Facility Name</TableHead>
                <TableHead>Location</TableHead>
                <TableHead className="text-right">Current Month</TableHead>
                <TableHead className="text-right">vs Target</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {facilities.slice(0, 8).map((facility) => {
                const targetDiff = ((facility.currentEmissions - facility.targetEmissions) / facility.targetEmissions) * 100
                return (
                  <TableRow key={facility.id}>
                    <TableCell className="font-medium">{facility.name}</TableCell>
                    <TableCell>
                      {facility.location.city}, {facility.location.country}
                    </TableCell>
                    <TableCell className="text-right">
                      {formatNumber(facility.currentEmissions)} tCO₂e
                    </TableCell>
                    <TableCell className="text-right">
                      <span
                        className={
                          targetDiff <= 0
                            ? 'text-emerald-600'
                            : targetDiff <= 10
                            ? 'text-amber-600'
                            : 'text-red-600'
                        }
                      >
                        {targetDiff <= 0 ? '↓' : '↑'} {Math.abs(targetDiff).toFixed(1)}%
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          facility.status === 'normal'
                            ? 'success'
                            : facility.status === 'warning'
                            ? 'warning'
                            : 'destructive'
                        }
                      >
                        {facility.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid gap-3 sm:gap-4 grid-cols-2 md:grid-cols-4">
        <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2">
          <FileText className="w-5 h-5 text-emerald-600" />
          <span className="font-medium">Generate Monthly Report</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Create compliance documentation</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2">
          <ShoppingCart className="w-5 h-5 text-blue-600" />
          <span className="font-medium">Purchase Carbon Credits</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Browse marketplace offerings</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2">
          <Calendar className="w-5 h-5 text-purple-600" />
          <span className="font-medium">Schedule Audit</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Book verification session</span>
        </Button>
        <Button variant="outline" className="h-auto p-4 flex flex-col items-start gap-2">
          <Plus className="w-5 h-5 text-amber-600" />
          <span className="font-medium">Add New Facility</span>
          <span className="text-xs text-gray-500 dark:text-gray-400">Register and connect facility</span>
        </Button>
      </div>
    </div>
  )
}
