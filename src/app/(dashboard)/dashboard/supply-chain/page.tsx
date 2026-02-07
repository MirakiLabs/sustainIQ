'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Truck,
  Factory,
  MapPin,
  AlertTriangle,
  CheckCircle,
  Clock,
  ArrowUpRight,
  Package,
  Ship,
  Leaf,
  TrendingDown,
  Filter,
} from 'lucide-react'

const suppliers = [
  {
    name: 'Nordic Steel AB',
    location: 'Stockholm, Sweden',
    tier: 'Tier 1',
    category: 'Raw Materials',
    emissions: 4520,
    rating: 'A',
    ratingColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400',
    status: 'compliant',
    lastAudit: '2025-11-15',
    reduction: -12,
  },
  {
    name: 'Rhine Chemicals GmbH',
    location: 'Frankfurt, Germany',
    tier: 'Tier 1',
    category: 'Chemicals',
    emissions: 8230,
    rating: 'B+',
    ratingColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400',
    status: 'compliant',
    lastAudit: '2025-10-22',
    reduction: -8,
  },
  {
    name: 'Pacific Logistics Ltd',
    location: 'Singapore',
    tier: 'Tier 2',
    category: 'Transport',
    emissions: 12450,
    rating: 'B',
    ratingColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400',
    status: 'review',
    lastAudit: '2025-09-10',
    reduction: -3,
  },
  {
    name: 'Eastern Polymers Inc',
    location: 'Mumbai, India',
    tier: 'Tier 2',
    category: 'Packaging',
    emissions: 3870,
    rating: 'C+',
    ratingColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400',
    status: 'action-needed',
    lastAudit: '2025-08-05',
    reduction: 2,
  },
  {
    name: 'Green Energy Co.',
    location: 'Oslo, Norway',
    tier: 'Tier 1',
    category: 'Energy',
    emissions: 1200,
    rating: 'A+',
    ratingColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400',
    status: 'compliant',
    lastAudit: '2025-12-01',
    reduction: -22,
  },
]

const scope3Categories = [
  { name: 'Purchased Goods', emissions: 18500, percentage: 35 },
  { name: 'Transportation', emissions: 12300, percentage: 23 },
  { name: 'Fuel & Energy', emissions: 8700, percentage: 16 },
  { name: 'Waste Operations', emissions: 5400, percentage: 10 },
  { name: 'Business Travel', emissions: 4200, percentage: 8 },
  { name: 'Other', emissions: 4100, percentage: 8 },
]

export default function SupplyChainPage() {
  const totalScope3 = scope3Categories.reduce((sum, c) => sum + c.emissions, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Supply Chain</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Scope 3 emissions tracking and supplier management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" className="gap-2">
            <Filter className="w-4 h-4" />
            <span className="hidden sm:inline">Filter</span>
          </Button>
          <Button size="sm" className="gap-2">
            <Package className="w-4 h-4" />
            Add Supplier
          </Button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-purple-100 dark:bg-purple-900/50">
                <Ship className="w-5 h-5 text-purple-600" />
              </div>
              <span className="text-sm text-gray-500">Scope 3 Emissions</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {totalScope3.toLocaleString()} <span className="text-sm font-normal text-gray-500">tCO₂e</span>
            </p>
            <div className="flex items-center gap-1 mt-2 text-sm text-emerald-600">
              <TrendingDown className="w-3 h-3" /> 8% vs last quarter
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-blue-100 dark:bg-blue-900/50">
                <Factory className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-sm text-gray-500">Active Suppliers</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">127</p>
            <p className="text-sm text-gray-500 mt-2">Across 23 countries</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/50">
                <CheckCircle className="w-5 h-5 text-emerald-600" />
              </div>
              <span className="text-sm text-gray-500">Compliance Rate</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">89%</p>
            <Progress value={89} className="mt-3" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5 sm:p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-2 rounded-lg bg-amber-100 dark:bg-amber-900/50">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <span className="text-sm text-gray-500">Action Required</span>
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">14</p>
            <p className="text-sm text-amber-600 mt-2">Suppliers need attention</p>
          </CardContent>
        </Card>
      </div>

      {/* Scope 3 Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Scope 3 Emissions Breakdown</CardTitle>
          <CardDescription>Upstream and downstream emission categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {scope3Categories.map((category) => (
              <div key={category.name}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{category.name}</span>
                  <span className="text-sm text-gray-500">
                    {category.emissions.toLocaleString()} tCO₂e ({category.percentage}%)
                  </span>
                </div>
                <Progress value={category.percentage} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Supplier Table */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Supplier Directory</CardTitle>
          <CardDescription>Track and manage supplier sustainability performance</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[700px]">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-800">
                  <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Supplier</th>
                  <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Category</th>
                  <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Emissions</th>
                  <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Rating</th>
                  <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Status</th>
                  <th className="text-left py-3 px-3 text-xs font-medium text-gray-500 uppercase">Reduction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                {suppliers.map((supplier) => (
                  <tr key={supplier.name} className="hover:bg-gray-50 dark:hover:bg-gray-800/50">
                    <td className="py-3 px-3">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{supplier.name}</p>
                        <p className="text-xs text-gray-500 flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {supplier.location}
                        </p>
                      </div>
                    </td>
                    <td className="py-3 px-3">
                      <Badge variant="outline" className="text-xs">{supplier.category}</Badge>
                    </td>
                    <td className="py-3 px-3 text-sm text-gray-900 dark:text-white">
                      {supplier.emissions.toLocaleString()} tCO₂e
                    </td>
                    <td className="py-3 px-3">
                      <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-semibold ${supplier.ratingColor}`}>
                        {supplier.rating}
                      </span>
                    </td>
                    <td className="py-3 px-3">
                      {supplier.status === 'compliant' && (
                        <Badge className="bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" /> Compliant
                        </Badge>
                      )}
                      {supplier.status === 'review' && (
                        <Badge className="bg-blue-100 text-blue-700 dark:bg-blue-900/50 dark:text-blue-400 text-xs">
                          <Clock className="w-3 h-3 mr-1" /> Under Review
                        </Badge>
                      )}
                      {supplier.status === 'action-needed' && (
                        <Badge className="bg-amber-100 text-amber-700 dark:bg-amber-900/50 dark:text-amber-400 text-xs">
                          <AlertTriangle className="w-3 h-3 mr-1" /> Action Needed
                        </Badge>
                      )}
                    </td>
                    <td className="py-3 px-3">
                      <span className={`text-sm font-medium ${supplier.reduction <= 0 ? 'text-emerald-600' : 'text-red-600'}`}>
                        {supplier.reduction <= 0 ? '' : '+'}{supplier.reduction}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Supply Chain Map Placeholder */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base sm:text-lg">Supply Chain Map</CardTitle>
          <CardDescription>Geographic distribution of supplier emissions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-48 sm:h-64 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex items-center justify-center border border-dashed border-gray-300 dark:border-gray-700">
            <div className="text-center">
              <MapPin className="w-10 h-10 text-gray-400 mx-auto mb-2" />
              <p className="text-sm text-gray-500">Interactive supply chain map</p>
              <p className="text-xs text-gray-400">127 suppliers across 23 countries</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
