'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Leaf,
  LayoutDashboard,
  Activity,
  TrendingUp,
  Bell,
  FileInput,
  Store,
  Wallet,
  ClipboardCheck,
  Award,
  BarChart3,
  BookOpen,
  Settings,
  ChevronLeft,
  LogOut,
} from 'lucide-react'
import { useAuthStore } from '@/lib/store/auth-store'

const iconMap = {
  LayoutDashboard,
  Activity,
  TrendingUp,
  Bell,
  FileInput,
  Store,
  Wallet,
  ClipboardCheck,
  Award,
  BarChart3,
  BookOpen,
  Settings,
}

const navItems = [
  { id: 'overview', label: 'Overview', href: '/dashboard', icon: 'LayoutDashboard' },
  {
    id: 'factory-hub',
    label: 'FACTORY HUB',
    isSection: true,
    items: [
      { id: 'monitoring', label: 'Real-time Monitoring', href: '/dashboard/monitoring', icon: 'Activity' },
      { id: 'analytics', label: 'Predictive Analytics', href: '/dashboard/analytics', icon: 'TrendingUp' },
      { id: 'alerts', label: 'Alerts & Anomalies', href: '/dashboard/alerts', icon: 'Bell' },
      { id: 'data-input', label: 'Data Input', href: '/dashboard/data-input', icon: 'FileInput' },
    ],
  },
  {
    id: 'trading-hub',
    label: 'TRADING HUB',
    isSection: true,
    items: [
      { id: 'marketplace', label: 'Marketplace', href: '/dashboard/marketplace', icon: 'Store' },
      { id: 'wallet', label: 'Digital Wallet', href: '/dashboard/wallet', icon: 'Wallet' },
    ],
  },
  {
    id: 'compliance',
    label: 'COMPLIANCE',
    isSection: true,
    items: [
      { id: 'audit', label: 'Audit Hub', href: '/dashboard/audit', icon: 'ClipboardCheck' },
      { id: 'certifications', label: 'Certifications', href: '/dashboard/certifications', icon: 'Award' },
      { id: 'esg', label: 'ESG Reporting', href: '/dashboard/esg', icon: 'BarChart3' },
    ],
  },
  { id: 'resources', label: 'Resources', href: '/dashboard/resources', icon: 'BookOpen' },
  { id: 'settings', label: 'Settings', href: '/dashboard/settings', icon: 'Settings' },
]

interface SidebarProps {
  collapsed: boolean
  onCollapse: (collapsed: boolean) => void
}

export function Sidebar({ collapsed, onCollapse }: SidebarProps) {
  const pathname = usePathname()
  const { logout } = useAuthStore()

  const isActive = (href: string) => {
    if (href === '/dashboard') {
      return pathname === href
    }
    return pathname.startsWith(href)
  }

  return (
    <aside
      className={cn(
        'fixed left-0 top-0 z-40 h-screen bg-white dark:bg-gray-950 border-r border-gray-200 dark:border-gray-800 transition-all duration-300',
        collapsed ? 'w-20' : 'w-64'
      )}
    >
      <div className="flex flex-col h-full">
        {/* Logo */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-200 dark:border-gray-800">
          <Link href="/dashboard" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-lg gradient-primary flex items-center justify-center flex-shrink-0">
              <Leaf className="w-5 h-5 text-white" />
            </div>
            {!collapsed && (
              <div className="flex flex-col">
                <span className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                  Sustain<span className="text-emerald-600">IQ</span>
                </span>
                <span className="text-[10px] text-gray-500 dark:text-gray-400 -mt-1">Carbon Platform</span>
              </div>
            )}
          </Link>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8"
            onClick={() => onCollapse(!collapsed)}
          >
            <ChevronLeft className={cn('h-4 w-4 transition-transform', collapsed && 'rotate-180')} />
          </Button>
        </div>

        {/* Navigation */}
        <ScrollArea className="flex-1 py-4">
          <nav className="px-3 space-y-1">
            {navItems.map((item) => {
              if ('isSection' in item && item.isSection) {
                return (
                  <div key={item.id} className="pt-4 pb-2">
                    {!collapsed && (
                      <span className="px-3 text-[10px] font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                        {item.label}
                      </span>
                    )}
                    <div className="mt-2 space-y-1">
                      {item.items?.map((subItem) => {
                        const Icon = iconMap[subItem.icon as keyof typeof iconMap]
                        return (
                          <Link
                            key={subItem.id}
                            href={subItem.href}
                            className={cn(
                              'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                              isActive(subItem.href)
                                ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                                : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                            )}
                            title={collapsed ? subItem.label : undefined}
                          >
                            <Icon className="w-5 h-5 flex-shrink-0" />
                            {!collapsed && <span>{subItem.label}</span>}
                          </Link>
                        )
                      })}
                    </div>
                  </div>
                )
              }

              const Icon = iconMap[item.icon as keyof typeof iconMap]
              return (
                <Link
                  key={item.id}
                  href={item.href!}
                  className={cn(
                    'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors',
                    isActive(item.href!)
                      ? 'bg-emerald-50 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400'
                      : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-gray-900 dark:hover:text-white'
                  )}
                  title={collapsed ? item.label : undefined}
                >
                  <Icon className="w-5 h-5 flex-shrink-0" />
                  {!collapsed && <span>{item.label}</span>}
                </Link>
              )
            })}
          </nav>
        </ScrollArea>

        {/* Logout */}
        <div className="p-3 border-t border-gray-200 dark:border-gray-800">
          <Button
            variant="ghost"
            className={cn(
              'w-full justify-start gap-3 text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400',
              collapsed && 'justify-center'
            )}
            onClick={() => {
              logout()
              window.location.href = '/login'
            }}
          >
            <LogOut className="w-5 h-5" />
            {!collapsed && <span>Logout</span>}
          </Button>
        </div>
      </div>
    </aside>
  )
}
