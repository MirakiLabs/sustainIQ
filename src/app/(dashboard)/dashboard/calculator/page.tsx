'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from 'recharts'
import {
  Calculator,
  Factory,
  Truck,
  Zap,
  Flame,
  Leaf,
  ArrowRight,
  RefreshCw,
  Download,
  Info,
} from 'lucide-react'

const emissionFactors = [
  { source: 'Natural Gas', factor: 2.02, unit: 'kg CO₂/m³', category: 'Scope 1' },
  { source: 'Diesel', factor: 2.68, unit: 'kg CO₂/litre', category: 'Scope 1' },
  { source: 'Electricity (Grid)', factor: 0.42, unit: 'kg CO₂/kWh', category: 'Scope 2' },
  { source: 'Electricity (Renewable)', factor: 0.02, unit: 'kg CO₂/kWh', category: 'Scope 2' },
  { source: 'Road Freight', factor: 0.11, unit: 'kg CO₂/tonne-km', category: 'Scope 3' },
  { source: 'Air Freight', factor: 0.60, unit: 'kg CO₂/tonne-km', category: 'Scope 3' },
]

const sampleCalculation = {
  scope1: [
    { name: 'Natural Gas', consumption: 50000, unit: 'm³', emissions: 101000 },
    { name: 'Diesel (Fleet)', consumption: 25000, unit: 'litres', emissions: 67000 },
    { name: 'Process Emissions', consumption: 1, unit: 'batch', emissions: 45000 },
  ],
  scope2: [
    { name: 'Grid Electricity', consumption: 800000, unit: 'kWh', emissions: 336000 },
    { name: 'Renewable Energy', consumption: 500000, unit: 'kWh', emissions: 10000 },
    { name: 'District Heating', consumption: 150000, unit: 'kWh', emissions: 37500 },
  ],
  scope3: [
    { name: 'Purchased Goods', consumption: 1, unit: 'category', emissions: 185000 },
    { name: 'Transportation', consumption: 1, unit: 'category', emissions: 123000 },
    { name: 'Business Travel', consumption: 1, unit: 'category', emissions: 42000 },
  ],
}

const totalScope1 = sampleCalculation.scope1.reduce((sum, item) => sum + item.emissions, 0)
const totalScope2 = sampleCalculation.scope2.reduce((sum, item) => sum + item.emissions, 0)
const totalScope3 = sampleCalculation.scope3.reduce((sum, item) => sum + item.emissions, 0)
const totalAll = totalScope1 + totalScope2 + totalScope3

const pieData = [
  { name: 'Scope 1', value: totalScope1, color: '#10B981' },
  { name: 'Scope 2', value: totalScope2, color: '#3B82F6' },
  { name: 'Scope 3', value: totalScope3, color: '#8B5CF6' },
]

const monthlyData = [
  { month: 'Jul', scope1: 18, scope2: 32, scope3: 29 },
  { month: 'Aug', scope1: 17, scope2: 31, scope3: 30 },
  { month: 'Sep', scope1: 19, scope2: 33, scope3: 28 },
  { month: 'Oct', scope1: 16, scope2: 30, scope3: 31 },
  { month: 'Nov', scope1: 18, scope2: 32, scope3: 29 },
  { month: 'Dec', scope1: 17, scope2: 31, scope3: 30 },
]

export default function CalculatorPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Carbon Calculator</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Calculate and analyze your carbon footprint</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <RefreshCw className="w-4 h-4" />
            <span className="hidden sm:inline">Recalculate</span>
          </Button>
          <Button size="sm" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Total Footprint Summary */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
          <CardContent className="p-5 sm:p-6">
            <p className="text-emerald-100 text-sm">Total Carbon Footprint</p>
            <p className="text-3xl sm:text-4xl font-bold mt-2">{(totalAll / 1000).toFixed(0)}</p>
            <p className="text-emerald-100 text-sm mt-1">tonnes CO₂e / year</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50">
                <Flame className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-500">Scope 1</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{(totalScope1 / 1000).toFixed(0)} t</p>
            <p className="text-xs text-gray-500 mt-1">Direct emissions</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                <Zap className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Scope 2</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{(totalScope2 / 1000).toFixed(0)} t</p>
            <p className="text-xs text-gray-500 mt-1">Indirect - energy</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                <Truck className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">Scope 3</span>
            </div>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{(totalScope3 / 1000).toFixed(0)} t</p>
            <p className="text-xs text-gray-500 mt-1">Value chain</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 lg:grid-cols-2">
        {/* Pie Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Emissions by Scope</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius="50%"
                    outerRadius="75%"
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => `${(Number(value) / 1000).toFixed(0)} tCO₂e`} />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 sm:gap-6 mt-2">
              {pieData.map((entry) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }} />
                  <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Bar Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base sm:text-lg">Monthly Trend (tCO₂e)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-56 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={monthlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="month" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Bar dataKey="scope1" name="Scope 1" stackId="a" fill="#10B981" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="scope2" name="Scope 2" stackId="a" fill="#3B82F6" radius={[0, 0, 0, 0]} />
                  <Bar dataKey="scope3" name="Scope 3" stackId="a" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Detailed Emission Sources</CardTitle>
          <CardDescription>Breakdown by scope and source category</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="scope1">
            <div className="overflow-x-auto -mx-6 px-6 no-scrollbar">
              <TabsList className="w-max sm:w-auto">
                <TabsTrigger value="scope1" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                  <Flame className="w-3 h-3 sm:w-4 sm:h-4" />
                  Scope 1
                </TabsTrigger>
                <TabsTrigger value="scope2" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                  <Zap className="w-3 h-3 sm:w-4 sm:h-4" />
                  Scope 2
                </TabsTrigger>
                <TabsTrigger value="scope3" className="gap-1 sm:gap-2 text-xs sm:text-sm">
                  <Truck className="w-3 h-3 sm:w-4 sm:h-4" />
                  Scope 3
                </TabsTrigger>
              </TabsList>
            </div>

            {(['scope1', 'scope2', 'scope3'] as const).map((scope) => (
              <TabsContent key={scope} value={scope} className="mt-6">
                <div className="overflow-x-auto -mx-6 px-6">
                  <table className="w-full min-w-[500px]">
                    <thead>
                      <tr className="border-b border-gray-200 dark:border-gray-800">
                        <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Source</th>
                        <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Consumption</th>
                        <th className="text-right py-3 px-3 text-xs font-medium text-gray-500 uppercase">Emissions (kg CO₂e)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                      {sampleCalculation[scope].map((item) => (
                        <tr key={item.name} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                          <td className="py-3 px-3 text-sm font-medium text-gray-900 dark:text-white">{item.name}</td>
                          <td className="py-3 px-3 text-sm text-gray-500">
                            {item.consumption.toLocaleString()} {item.unit}
                          </td>
                          <td className="py-3 px-3 text-sm text-right font-medium text-gray-900 dark:text-white">
                            {item.emissions.toLocaleString()}
                          </td>
                        </tr>
                      ))}
                      <tr className="border-t-2 border-gray-300 dark:border-gray-600">
                        <td className="py-3 px-3 text-sm font-bold text-gray-900 dark:text-white">Total</td>
                        <td></td>
                        <td className="py-3 px-3 text-sm text-right font-bold text-gray-900 dark:text-white">
                          {sampleCalculation[scope].reduce((sum, item) => sum + item.emissions, 0).toLocaleString()}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </CardContent>
      </Card>

      {/* Emission Factors Reference */}
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle className="text-base sm:text-lg">Emission Factors Reference</CardTitle>
            <Info className="w-4 h-4 text-gray-400" />
          </div>
          <CardDescription>Standard emission factors used in calculations</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
            {emissionFactors.map((factor) => (
              <div key={factor.source} className="p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">{factor.source}</span>
                  <Badge variant="outline" className="text-xs">{factor.category}</Badge>
                </div>
                <p className="text-lg font-bold text-emerald-600">{factor.factor} <span className="text-xs font-normal text-gray-500">{factor.unit}</span></p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Offset Suggestion */}
      <Card className="border-emerald-200 dark:border-emerald-800 bg-emerald-50/50 dark:bg-emerald-950/20">
        <CardContent className="p-5 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
              <Leaf className="w-6 h-6 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">Offset Your Emissions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Based on your current footprint of {(totalAll / 1000).toFixed(0)} tCO₂e, you can offset your emissions through our marketplace.
                Estimated cost: €{((totalAll / 1000) * 25).toLocaleString()}/year.
              </p>
            </div>
            <Button className="gap-2 w-full sm:w-auto">
              Browse Credits
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
