'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ClipboardCheck,
  Calendar,
  FileText,
  Download,
  Upload,
  CheckCircle,
  Clock,
  AlertTriangle,
  Shield,
  ExternalLink,
} from 'lucide-react'
import { certifications, auditRecords, getComplianceScore } from '@/lib/dummy-data'
import { formatDate } from '@/lib/utils'

const complianceFrameworks = [
  { name: 'EU CBAM', score: 98, status: 'compliant' },
  { name: 'EU ETS', score: 100, status: 'compliant' },
  { name: 'GHG Protocol', score: 95, status: 'compliant' },
  { name: 'ISO 14064', score: 92, status: 'compliant' },
  { name: 'CDP', score: 88, status: 'review' },
  { name: 'TCFD', score: 85, status: 'review' },
]

export default function AuditPage() {
  const complianceScore = getComplianceScore()

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Audit Hub</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Compliance tracking and audit management</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2 text-sm" size="sm">
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Schedule</span> Audit
          </Button>
          <Button className="gap-2 text-sm" size="sm">
            <FileText className="w-4 h-4" />
            Report
          </Button>
        </div>
      </div>

      {/* Compliance Score */}
      <div className="grid gap-4 sm:gap-6 grid-cols-1 md:grid-cols-3">
        <Card className="md:col-span-1">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <p className="text-gray-500">Overall Compliance Score</p>
              <Shield className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="relative w-40 h-40 mx-auto">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  className="text-gray-200 dark:text-gray-800"
                />
                <circle
                  cx="80"
                  cy="80"
                  r="70"
                  stroke="currentColor"
                  strokeWidth="12"
                  fill="none"
                  strokeDasharray={`${complianceScore * 4.4} 440`}
                  className="text-emerald-500"
                  strokeLinecap="round"
                />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{complianceScore}%</span>
                  <p className="text-sm text-gray-500">Compliant</p>
                </div>
              </div>
            </div>
            <div className="mt-4 text-center">
              <Badge variant="success">On Track</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Framework Breakdown */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Compliance by Framework</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
              {complianceFrameworks.map((framework) => (
                <div key={framework.name} className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{framework.name}</span>
                    <Badge variant={framework.status === 'compliant' ? 'success' : 'warning'}>
                      {framework.status}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-3">
                    <Progress value={framework.score} className="flex-1" />
                    <span className="text-sm font-medium w-12">{framework.score}%</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-2">
        {/* Audit Schedule */}
        <Card>
          <CardHeader>
            <CardTitle>Audit Schedule</CardTitle>
            <CardDescription>Upcoming and past audits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {auditRecords.map((audit) => (
                <div
                  key={audit.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 sm:p-4 rounded-lg border border-gray-200 dark:border-gray-800"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className={`p-2 rounded-lg ${
                      audit.status === 'completed' ? 'bg-emerald-100 dark:bg-emerald-900/50' :
                      audit.status === 'scheduled' ? 'bg-blue-100 dark:bg-blue-900/50' :
                      'bg-amber-100 dark:bg-amber-900/50'
                    }`}>
                      {audit.status === 'completed' ? (
                        <CheckCircle className="w-5 h-5 text-emerald-600" />
                      ) : audit.status === 'scheduled' ? (
                        <Calendar className="w-5 h-5 text-blue-600" />
                      ) : (
                        <Clock className="w-5 h-5 text-amber-600" />
                      )}
                    </div>
                    <div>
                      <p className="font-medium">{audit.type}</p>
                      <p className="text-sm text-gray-500">{audit.auditor} • {formatDate(audit.date)}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {audit.score && (
                      <span className="text-lg font-bold text-emerald-600">{audit.score}%</span>
                    )}
                    <Badge variant={
                      audit.status === 'completed' ? 'success' :
                      audit.status === 'scheduled' ? 'info' : 'warning'
                    }>
                      {audit.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document Management */}
        <Card>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Document Management</CardTitle>
                <CardDescription>Compliance documents and certificates</CardDescription>
              </div>
              <Button variant="outline" size="sm" className="gap-2">
                <Upload className="w-4 h-4" />
                Upload
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {[
                { name: 'GHG Verification Report 2023', type: 'PDF', date: '2024-01-10', status: 'current' },
                { name: 'ISO 14064 Certificate', type: 'PDF', date: '2023-03-15', status: 'current' },
                { name: 'EU ETS Monitoring Plan', type: 'PDF', date: '2023-09-01', status: 'current' },
                { name: 'Environmental Policy v3.2', type: 'DOCX', date: '2023-11-20', status: 'current' },
                { name: 'Internal Audit Report Q4', type: 'PDF', date: '2023-11-15', status: 'archived' },
              ].map((doc, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/50 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-red-600" />
                    </div>
                    <div>
                      <p className="font-medium text-sm">{doc.name}</p>
                      <p className="text-xs text-gray-500">{doc.type} • {formatDate(doc.date)}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon">
                    <Download className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Audit Trail */}
      <Card>
        <CardHeader>
          <CardTitle>Audit Trail</CardTitle>
          <CardDescription>Complete activity log with blockchain verification</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto -mx-6 px-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Timestamp</TableHead>
                <TableHead>Action</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Details</TableHead>
                <TableHead>Blockchain Hash</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {[
                { date: '2024-01-15T10:30:00Z', action: 'Data Submitted', user: 'John Anderson', details: 'January emission data for Stuttgart', hash: '0x8f3e7a2d...' },
                { date: '2024-01-14T16:45:00Z', action: 'Report Generated', user: 'System', details: 'Weekly summary report', hash: '0x7e2d1c9b...' },
                { date: '2024-01-14T09:15:00Z', action: 'Certificate Uploaded', user: 'Sarah Miller', details: 'ISO 14064 renewal certificate', hash: '0x6d1c9b4a...' },
                { date: '2024-01-13T14:00:00Z', action: 'Threshold Updated', user: 'John Anderson', details: 'Lyon Chemical alert threshold', hash: '0x5c9b4a3e...' },
                { date: '2024-01-12T11:30:00Z', action: 'Credit Retired', user: 'System', details: '200 credits - Kenya Cookstove', hash: '0x4b4a3e5f...' },
              ].map((entry, i) => (
                <TableRow key={i}>
                  <TableCell className="text-sm">{formatDate(entry.date)}</TableCell>
                  <TableCell>
                    <Badge variant="secondary">{entry.action}</Badge>
                  </TableCell>
                  <TableCell>{entry.user}</TableCell>
                  <TableCell className="max-w-[200px] truncate">{entry.details}</TableCell>
                  <TableCell>
                    <code className="text-xs text-gray-500">{entry.hash}</code>
                    <Button variant="ghost" size="icon" className="h-6 w-6 ml-1">
                      <ExternalLink className="w-3 h-3" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
