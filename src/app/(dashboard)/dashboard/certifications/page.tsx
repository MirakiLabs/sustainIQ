'use client'

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import {
  Award,
  Download,
  Calendar,
  CheckCircle,
  Clock,
  AlertTriangle,
  ExternalLink,
  Plus,
} from 'lucide-react'
import { certifications } from '@/lib/dummy-data'
import { formatDate } from '@/lib/utils'

const availableCertifications = [
  { name: 'PAS 2060', description: 'Carbon Neutrality Certification', requirements: 8, difficulty: 'Medium' },
  { name: 'ISO 50001', description: 'Energy Management System', requirements: 12, difficulty: 'High' },
  { name: 'B Corp', description: 'Social and Environmental Performance', requirements: 15, difficulty: 'High' },
  { name: 'LEED', description: 'Building Environmental Certification', requirements: 10, difficulty: 'Medium' },
]

export default function CertificationsPage() {
  const activeCerts = certifications.filter(c => c.status === 'active')
  const pendingCerts = certifications.filter(c => c.status === 'pending')
  const expiredCerts = certifications.filter(c => c.status === 'expired')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Certifications</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Manage your sustainability certifications</p>
        </div>
        <Button className="gap-2 w-fit" size="sm">
          <Plus className="w-4 h-4" />
          Apply for Certification
        </Button>
      </div>

      {/* Stats */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-emerald-100 dark:bg-emerald-900/50">
                <CheckCircle className="w-6 h-6 text-emerald-600" />
              </div>
              <div>
                <p className="text-3xl font-bold">{activeCerts.length}</p>
                <p className="text-sm text-gray-500">Active Certifications</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-amber-100 dark:bg-amber-900/50">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-3xl font-bold">{pendingCerts.length}</p>
                <p className="text-sm text-gray-500">Pending Applications</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-xl bg-red-100 dark:bg-red-900/50">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <p className="text-3xl font-bold">1</p>
                <p className="text-sm text-gray-500">Expiring Soon (30 days)</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Current Certifications */}
      <Card>
        <CardHeader>
          <CardTitle>Current Certifications</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <div
                key={cert.id}
                className={`p-4 rounded-xl border ${
                  cert.status === 'active' ? 'border-emerald-200 dark:border-emerald-800' :
                  cert.status === 'pending' ? 'border-amber-200 dark:border-amber-800' :
                  'border-red-200 dark:border-red-800'
                }`}
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg ${
                    cert.status === 'active' ? 'bg-emerald-100 dark:bg-emerald-900/50' :
                    cert.status === 'pending' ? 'bg-amber-100 dark:bg-amber-900/50' :
                    'bg-red-100 dark:bg-red-900/50'
                  }`}>
                    <Award className={`w-5 h-5 ${
                      cert.status === 'active' ? 'text-emerald-600' :
                      cert.status === 'pending' ? 'text-amber-600' :
                      'text-red-600'
                    }`} />
                  </div>
                  <Badge variant={
                    cert.status === 'active' ? 'success' :
                    cert.status === 'pending' ? 'warning' : 'destructive'
                  }>
                    {cert.status}
                  </Badge>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{cert.issuingBody}</p>
                <p className="text-xs text-gray-400 mt-1">{cert.scope}</p>
                <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-800 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Certificate #</span>
                    <span className="font-mono text-xs">{cert.certificateNumber}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Expires</span>
                    <span className={
                      new Date(cert.expiryDate) < new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
                        ? 'text-red-600 font-medium'
                        : ''
                    }>
                      {formatDate(cert.expiryDate)}
                    </span>
                  </div>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" className="flex-1 gap-1">
                    <Download className="w-3 h-3" />
                    Download
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 gap-1">
                    <ExternalLink className="w-3 h-3" />
                    Verify
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Pending Certification Progress */}
      {pendingCerts.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Certification Progress</CardTitle>
            <CardDescription>Track your pending certification applications</CardDescription>
          </CardHeader>
          <CardContent>
            {pendingCerts.map((cert) => (
              <div key={cert.id} className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-sm text-gray-500">{cert.issuingBody}</p>
                  </div>
                  <Badge variant="warning">In Progress</Badge>
                </div>
                {cert.requirements && (
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Requirements completed</span>
                      <span className="font-medium">
                        {cert.requirements.filter(r => r.completed).length}/{cert.requirements.length}
                      </span>
                    </div>
                    <Progress
                      value={(cert.requirements.filter(r => r.completed).length / cert.requirements.length) * 100}
                    />
                    <div className="space-y-2 mt-4">
                      {cert.requirements.map((req) => (
                        <div
                          key={req.id}
                          className="flex items-center gap-3 p-2 rounded-lg bg-white dark:bg-gray-900"
                        >
                          <div className={`p-1 rounded-full ${
                            req.completed
                              ? 'bg-emerald-100 text-emerald-600'
                              : 'bg-gray-100 text-gray-400'
                          }`}>
                            <CheckCircle className="w-4 h-4" />
                          </div>
                          <span className={req.completed ? 'line-through text-gray-400' : ''}>
                            {req.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {/* Available Certifications */}
      <Card>
        <CardHeader>
          <CardTitle>Available Certifications</CardTitle>
          <CardDescription>Browse and apply for new certifications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            {availableCertifications.map((cert) => (
              <div
                key={cert.name}
                className="p-4 rounded-xl border border-gray-200 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white">{cert.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{cert.description}</p>
                  </div>
                  <Badge variant="secondary">{cert.difficulty}</Badge>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-sm text-gray-500">{cert.requirements} requirements</span>
                  <Button size="sm">Learn More</Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
