import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatNumber(num: number): string {
  return new Intl.NumberFormat('en-US').format(num)
}

export function formatCurrency(num: number, currency: string = 'EUR'): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num)
}

export function formatPercentage(num: number): string {
  return `${num >= 0 ? '+' : ''}${num.toFixed(1)}%`
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

export function formatDateTime(date: Date | string): string {
  return new Date(date).toLocaleString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function generateRandomId(): string {
  return Math.random().toString(36).substring(2, 15)
}

export function getStatusColor(status: string): string {
  switch (status.toLowerCase()) {
    case 'good':
    case 'normal':
    case 'active':
    case 'completed':
    case 'on track':
      return 'text-emerald-600 bg-emerald-100'
    case 'warning':
    case 'pending':
    case 'review':
      return 'text-amber-600 bg-amber-100'
    case 'critical':
    case 'alert':
    case 'expired':
    case 'high':
      return 'text-red-600 bg-red-100'
    case 'info':
    case 'low':
      return 'text-blue-600 bg-blue-100'
    default:
      return 'text-gray-600 bg-gray-100'
  }
}

export function getSeverityColor(severity: 'low' | 'medium' | 'high' | 'critical'): string {
  switch (severity) {
    case 'low':
      return 'text-blue-600 bg-blue-100 border-blue-200'
    case 'medium':
      return 'text-amber-600 bg-amber-100 border-amber-200'
    case 'high':
      return 'text-orange-600 bg-orange-100 border-orange-200'
    case 'critical':
      return 'text-red-600 bg-red-100 border-red-200'
  }
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength) + '...'
}
