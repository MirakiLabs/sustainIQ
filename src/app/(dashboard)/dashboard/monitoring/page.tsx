'use client'

import { useState, useEffect } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
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
  Activity,
  Gauge,
  Zap,
  Flame,
  Wind,
  Droplets,
  RefreshCw,
} from 'lucide-react'
import { facilities, emissionSources, energyMix, generateHourlyData } from '@/lib/dummy-data'
import { cn, formatNumber } from '@/lib/utils'

export default function MonitoringPage() {
  const [selectedFacility, setSelectedFacility] = useState('all')
  const [hourlyData, setHourlyData] = useState(generateHourlyData())
  const [currentRate, setCurrentRate] = useState(52.3)
  const [isLive, setIsLive] = useState(true)

  const selectedFacilityData = selectedFacility === 'all'
    ? null
    : facilities.find(f => f.id === selectedFacility)

  // Simulate live data updates
  useEffect(() => {
    if (!isLive) return

    const interval = setInterval(() => {
      setCurrentRate(prev => prev + (Math.random() - 0.5) * 5)
      setHourlyData(generateHourlyData())
    }, 5000)

    return () => clearInterval(interval)
  }, [isLive])

  const COLORS = ['#10B981', '#3B82F6', '#F59E0B', '#8B5CF6']

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Real-time Monitoring</h1>
          <p className="text-gray-500 dark:text-gray-400">Live emission data and sensor readings</p>
        </div>
        <div className="flex items-center gap-4">
          <Select value={selectedFacility} onValueChange={setSelectedFacility}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Select facility" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Facilities</SelectItem>
              {facilities.map((facility) => (
                <SelectItem key={facility.id} value={facility.id}>
                  {facility.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <div className="flex items-center gap-2">
            <div className={cn(
              'w-2 h-2 rounded-full',
              isLive ? 'bg-emerald-500 animate-pulse' : 'bg-gray-400'
            )} />
            <span className="text-sm text-gray-600 dark:text-gray-400">
              {isLive ? 'Live' : 'Paused'}
            </span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsLive(!isLive)}
            >
              <RefreshCw className={cn('w-4 h-4', isLive && 'animate-spin')} />
            </Button>
          </div>
        </div>
      </div>

      {/* Live Stats */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-emerald-100">Current Emission Rate</p>
                <p className="text-4xl font-bold mt-2">{currentRate.toFixed(1)}</p>
                <p className="text-emerald-100 text-sm">tons CO₂/hour</p>
              </div>
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <Gauge className="w-8 h-8" />
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between text-sm">
                <span className="text-emerald-100">Capacity utilization</span>
                <span className="font-medium">68%</span>
              </div>
              <div className="mt-2 h-2 bg-white/20 rounded-full overflow-hidden">
                <div className="h-full bg-white rounded-full" style={{ width: '68%' }} />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 dark:text-gray-400">Today&apos;s Total</p>
              <Activity className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">847.2</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">tons CO₂e</p>
            <div className="mt-4 flex items-center gap-2">
              <Badge variant="success">↓ 8%</Badge>
              <span className="text-sm text-gray-500 dark:text-gray-400">vs yesterday</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500 dark:text-gray-400">Active Sensors</p>
              <Zap className="w-5 h-5 text-amber-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">38/42</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">sensors online</p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500" />
              <span className="text-sm text-gray-500 dark:text-gray-400">4 sensors need attention</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* 24-Hour Timeline */}
        <Card>
          <CardHeader>
            <CardTitle>24-Hour Emission Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hourlyData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200 dark:stroke-gray-700" />
                  <XAxis dataKey="hour" className="text-xs" interval={3} />
                  <YAxis className="text-xs" />
                  <Tooltip />
                  <Bar
                    dataKey="emissions"
                    fill="#10B981"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
            <div className="mt-4 flex items-center justify-center gap-4 text-sm">
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-emerald-500" />
                Normal hours
              </span>
              <span className="flex items-center gap-2">
                <div className="w-3 h-3 rounded bg-amber-500" />
                Peak hours (9 AM - 5 PM)
              </span>
            </div>
          </CardContent>
        </Card>

        {/* Emission Sources */}
        <Card>
          <CardHeader>
            <CardTitle>Emission Sources Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-8">
              <div className="w-48 h-48">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={emissionSources}
                      cx="50%"
                      cy="50%"
                      innerRadius={50}
                      outerRadius={80}
                      dataKey="value"
                    >
                      {emissionSources.map((entry, index) => (
                        <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex-1 space-y-3">
                {emissionSources.map((source, index) => (
                  <div key={source.name} className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded"
                        style={{ backgroundColor: COLORS[index] }}
                      />
                      <span className="text-sm text-gray-600 dark:text-gray-400">{source.name}</span>
                    </div>
                    <span className="font-medium">{source.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Sensor Grid */}
      <Card>
        <CardHeader>
          <CardTitle>
            Sensor Data Grid
            {selectedFacilityData && (
              <span className="ml-2 text-sm font-normal text-gray-500">
                - {selectedFacilityData.name}
              </span>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {(selectedFacilityData?.sensors || facilities[0].sensors).map((sensor) => (
              <div
                key={sensor.id}
                className={cn(
                  'p-4 rounded-xl border',
                  sensor.status === 'online'
                    ? 'border-emerald-200 dark:border-emerald-800 bg-emerald-50 dark:bg-emerald-900/20'
                    : sensor.status === 'warning'
                    ? 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20'
                    : 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20'
                )}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-medium text-gray-900 dark:text-white">{sensor.name}</span>
                  <Badge
                    variant={
                      sensor.status === 'online' ? 'success' : sensor.status === 'warning' ? 'warning' : 'destructive'
                    }
                  >
                    {sensor.status}
                  </Badge>
                </div>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {sensor.lastReading}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">{sensor.unit}</p>
                <div className="mt-2 h-8 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                  {/* Mini sparkline placeholder */}
                  <div className="h-full flex items-end gap-0.5 p-1">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-emerald-500 rounded-t"
                        style={{ height: `${30 + Math.random() * 70}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Energy Mix */}
      <Card>
        <CardHeader>
          <CardTitle>Current Energy Mix</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            {energyMix.map((source) => {
              const Icon = source.name.includes('Electricity') ? Zap :
                source.name.includes('Gas') ? Flame :
                source.name.includes('Solar') ? Wind : Droplets

              return (
                <div key={source.name} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-white dark:bg-gray-800">
                      <Icon className="w-5 h-5" style={{ color: source.color }} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 dark:text-white">{source.name}</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {source.renewable}% renewable
                      </p>
                    </div>
                  </div>
                  <div className="flex items-end justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">{source.value}%</span>
                  </div>
                  <div className="mt-2 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${source.value}%`, backgroundColor: source.color }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
