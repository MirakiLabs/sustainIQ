'use client'

import { Card, CardContent } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { LucideIcon } from 'lucide-react'

interface KPICardProps {
  title: string
  value: string | number
  subtitle?: string
  change?: {
    value: number
    label: string
  }
  icon: LucideIcon
  iconColor?: string
  progress?: {
    value: number
    max: number
  }
  children?: React.ReactNode
}

export function KPICard({
  title,
  value,
  subtitle,
  change,
  icon: Icon,
  iconColor = 'text-emerald-600 bg-emerald-100 dark:bg-emerald-900/50',
  progress,
  children,
}: KPICardProps) {
  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardContent className="p-6">
        <div className="flex items-start justify-between">
          <div className="space-y-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">{title}</p>
            <p className="text-2xl font-bold text-gray-900 dark:text-white">{value}</p>
            {subtitle && (
              <p className="text-sm text-gray-500 dark:text-gray-400">{subtitle}</p>
            )}
          </div>
          <div className={cn('p-3 rounded-xl', iconColor)}>
            <Icon className="w-5 h-5" />
          </div>
        </div>

        {change && (
          <div className="mt-4 flex items-center gap-2">
            <span
              className={cn(
                'text-sm font-medium',
                change.value >= 0 ? 'text-emerald-600' : 'text-red-600'
              )}
            >
              {change.value >= 0 ? '↑' : '↓'} {Math.abs(change.value)}%
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{change.label}</span>
          </div>
        )}

        {progress && (
          <div className="mt-4">
            <div className="flex justify-between text-sm mb-1">
              <span className="text-gray-500 dark:text-gray-400">Progress to target</span>
              <span className="font-medium">{Math.round((progress.value / progress.max) * 100)}%</span>
            </div>
            <div className="h-2 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-600 rounded-full transition-all"
                style={{ width: `${Math.min((progress.value / progress.max) * 100, 100)}%` }}
              />
            </div>
          </div>
        )}

        {children}
      </CardContent>
    </Card>
  )
}
