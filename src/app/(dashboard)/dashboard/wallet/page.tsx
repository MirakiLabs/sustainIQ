'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts'
import {
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
  RefreshCw,
  Download,
  ExternalLink,
  Shield,
  Plus,
} from 'lucide-react'
import { transactions, getPortfolioSummary, getProjectTypeBreakdown } from '@/lib/dummy-data'
import { formatCurrency, formatNumber, formatDate } from '@/lib/utils'

const COLORS = ['#10B981', '#3B82F6', '#8B5CF6', '#F59E0B', '#06B6D4', '#EC4899']

export default function WalletPage() {
  const portfolio = getPortfolioSummary()
  const typeBreakdown = getProjectTypeBreakdown()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Digital Wallet</h1>
          <p className="text-gray-500 dark:text-gray-400">Manage your carbon credit portfolio</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <Download className="w-4 h-4" />
            Export
          </Button>
          <Button className="gap-2">
            <Plus className="w-4 h-4" />
            Purchase Credits
          </Button>
        </div>
      </div>

      {/* Balance Overview */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 rounded-xl bg-white/20">
                <Wallet className="w-6 h-6" />
              </div>
              <Badge className="bg-white/20 text-white">Active</Badge>
            </div>
            <p className="text-emerald-100">Total Credits Owned</p>
            <p className="text-4xl font-bold mt-1">{formatNumber(portfolio.totalOwned)}</p>
            <div className="mt-4 pt-4 border-t border-white/20">
              <p className="text-emerald-100">Estimated Value</p>
              <p className="text-2xl font-bold">{formatCurrency(portfolio.totalOwned * 25)}</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500">Total Retired</p>
              <RefreshCw className="w-5 h-5 text-purple-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">
              {formatNumber(portfolio.totalRetired)}
            </p>
            <p className="text-sm text-gray-500 mt-1">credits offset</p>
            <div className="mt-4 p-3 rounded-lg bg-purple-50 dark:bg-purple-900/30">
              <p className="text-sm text-purple-700 dark:text-purple-300">
                Equivalent to removing {Math.round(portfolio.totalRetired * 0.8)} cars from roads for a year
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500">Blockchain Verified</p>
              <Shield className="w-5 h-5 text-blue-500" />
            </div>
            <p className="text-3xl font-bold text-gray-900 dark:text-white">100%</p>
            <p className="text-sm text-gray-500 mt-1">of transactions verified</p>
            <Button variant="outline" size="sm" className="mt-4 gap-2 w-full">
              <ExternalLink className="w-4 h-4" />
              View on Blockchain
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Portfolio Breakdown */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio by Project Type</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={typeBreakdown}
                    cx="50%"
                    cy="50%"
                    innerRadius={50}
                    outerRadius={80}
                    dataKey="value"
                    label={({ percent }) => `${((percent ?? 0) * 100).toFixed(0)}%`}
                  >
                    {typeBreakdown.map((entry, index) => (
                      <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Transaction History */}
        <Card className="lg:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle>Transaction History</CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Project</TableHead>
                  <TableHead className="text-right">Quantity</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.slice(0, 6).map((tx) => (
                  <TableRow key={tx.id}>
                    <TableCell className="text-sm">{formatDate(tx.date)}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        {tx.type === 'buy' ? (
                          <ArrowDownRight className="w-4 h-4 text-emerald-500" />
                        ) : tx.type === 'retire' ? (
                          <RefreshCw className="w-4 h-4 text-purple-500" />
                        ) : (
                          <ArrowUpRight className="w-4 h-4 text-blue-500" />
                        )}
                        <span className="capitalize">{tx.type}</span>
                      </div>
                    </TableCell>
                    <TableCell className="max-w-[200px] truncate">{tx.projectName}</TableCell>
                    <TableCell className="text-right">{formatNumber(tx.quantity)}</TableCell>
                    <TableCell className="text-right font-medium">
                      {formatCurrency(tx.totalAmount)}
                    </TableCell>
                    <TableCell>
                      <Badge variant={tx.status === 'completed' ? 'success' : 'warning'}>
                        {tx.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Retirement Records */}
      <Card>
        <CardHeader>
          <CardTitle>Retirement Certificates</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {transactions.filter(t => t.type === 'retire').map((tx) => (
              <div
                key={tx.id}
                className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-800/50"
              >
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">Certificate</Badge>
                  <span className="text-sm text-gray-500">{formatDate(tx.date)}</span>
                </div>
                <p className="font-medium text-gray-900 dark:text-white mb-1">{tx.projectName}</p>
                <p className="text-2xl font-bold text-purple-600">{formatNumber(tx.quantity)} credits</p>
                <p className="text-sm text-gray-500 mt-2">
                  Offset equivalent: {Math.round(tx.quantity * 0.8)} tCO₂e
                </p>
                {tx.blockchainHash && (
                  <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <p className="text-xs text-gray-500 mb-1">Blockchain Hash</p>
                    <code className="text-xs text-gray-600 dark:text-gray-400 break-all">
                      {tx.blockchainHash.slice(0, 20)}...
                    </code>
                  </div>
                )}
                <Button variant="outline" size="sm" className="w-full mt-3 gap-2">
                  <Download className="w-4 h-4" />
                  Download Certificate
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
