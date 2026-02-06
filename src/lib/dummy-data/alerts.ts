import { Alert, AIInsight } from '@/types'

export const alerts: Alert[] = [
  {
    id: 'alt-001',
    type: 'Emission Spike',
    severity: 'high',
    facilityId: 'fac-003',
    facilityName: 'Lyon Chemical Plant',
    message: 'Reactor 2 emissions exceeded threshold by 15%',
    value: 92.3,
    threshold: 80,
    timestamp: '2024-01-15T09:45:00Z',
    status: 'active',
    source: 'sen-010',
  },
  {
    id: 'alt-002',
    type: 'Equipment Anomaly',
    severity: 'critical',
    facilityId: 'fac-007',
    facilityName: 'Pune Steel Complex',
    message: 'Rolling Section sensor offline - data collection interrupted',
    timestamp: '2024-01-15T08:30:00Z',
    status: 'active',
    source: 'sen-024',
  },
  {
    id: 'alt-003',
    type: 'Threshold Exceeded',
    severity: 'medium',
    facilityId: 'fac-007',
    facilityName: 'Pune Steel Complex',
    message: 'Monthly emissions trending 8% above target',
    value: 4100,
    threshold: 3800,
    timestamp: '2024-01-15T07:00:00Z',
    status: 'active',
  },
  {
    id: 'alt-004',
    type: 'Unusual Pattern',
    severity: 'low',
    facilityId: 'fac-002',
    facilityName: 'Munich Auto Assembly',
    message: 'Unusual emission pattern detected during night shift',
    timestamp: '2024-01-14T23:15:00Z',
    status: 'acknowledged',
  },
  {
    id: 'alt-005',
    type: 'Compliance Warning',
    severity: 'medium',
    facilityId: 'fac-003',
    facilityName: 'Lyon Chemical Plant',
    message: 'EU ETS quarterly report due in 5 days',
    timestamp: '2024-01-14T09:00:00Z',
    status: 'active',
  },
  {
    id: 'alt-006',
    type: 'Certification Expiring',
    severity: 'medium',
    facilityId: 'fac-001',
    facilityName: 'Stuttgart Steel Works',
    message: 'ISO 14064 certification expires in 30 days',
    timestamp: '2024-01-13T10:00:00Z',
    status: 'acknowledged',
  },
  {
    id: 'alt-007',
    type: 'Sensor Offline',
    severity: 'low',
    facilityId: 'fac-009',
    facilityName: 'Rotterdam Paper Mill',
    message: 'Backup sensor connection intermittent',
    timestamp: '2024-01-13T14:22:00Z',
    status: 'resolved',
  },
  {
    id: 'alt-008',
    type: 'Emission Spike',
    severity: 'high',
    facilityId: 'fac-010',
    facilityName: 'Texas Cement Works',
    message: 'Kiln system emissions 20% above normal',
    value: 171.4,
    threshold: 142.8,
    timestamp: '2024-01-12T16:30:00Z',
    status: 'resolved',
  },
  {
    id: 'alt-009',
    type: 'Target Deviation',
    severity: 'medium',
    facilityId: 'fac-004',
    facilityName: 'Detroit Motors Plant',
    message: 'Weekly emissions 5% above forecast',
    timestamp: '2024-01-12T08:00:00Z',
    status: 'resolved',
  },
  {
    id: 'alt-010',
    type: 'Unusual Pattern',
    severity: 'low',
    facilityId: 'fac-005',
    facilityName: 'Chennai Textile Factory',
    message: 'Steam boiler efficiency below optimal range',
    timestamp: '2024-01-11T11:45:00Z',
    status: 'resolved',
  },
]

// Generate historical alerts for the past 90 days
export const generateHistoricalAlerts = (): { date: string; low: number; medium: number; high: number; critical: number }[] => {
  const data = []
  const today = new Date()

  for (let i = 89; i >= 0; i--) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)

    data.push({
      date: date.toISOString().split('T')[0],
      low: Math.floor(Math.random() * 3),
      medium: Math.floor(Math.random() * 2),
      high: Math.random() > 0.7 ? 1 : 0,
      critical: Math.random() > 0.9 ? 1 : 0,
    })
  }

  return data
}

export const alertHistory = generateHistoricalAlerts()

export const aiInsights: AIInsight[] = [
  {
    id: 'ins-001',
    type: 'prediction',
    title: 'Production Ramp-up Impact',
    description: 'Expected 8% increase in emissions next week due to scheduled production ramp-up at Stuttgart and Munich facilities.',
    impact: { percentage: 8 },
    confidence: 92,
    effort: 'low',
    timeline: 'Next 7 days',
  },
  {
    id: 'ins-002',
    type: 'optimization',
    title: 'Off-Peak Production Shift',
    description: 'Shifting energy-intensive operations to off-peak hours (10 PM - 6 AM) could reduce grid emissions by leveraging cleaner nighttime energy mix.',
    impact: { co2Savings: 120, costSavings: 15000 },
    confidence: 85,
    effort: 'medium',
    timeline: '2-4 weeks',
  },
  {
    id: 'ins-003',
    type: 'anomaly',
    title: 'Boiler Efficiency Decline',
    description: 'Boiler 2 at Lyon Chemical Plant showing 12% efficiency decline. Service recommended to prevent further degradation and emission increase.',
    impact: { co2Savings: 45, costSavings: 8500 },
    confidence: 94,
    effort: 'low',
    timeline: 'Immediate',
  },
  {
    id: 'ins-004',
    type: 'prediction',
    title: 'Weather Impact Forecast',
    description: 'Weather forecast suggests 15% lower cooling demand next week, reducing HVAC-related emissions across all European facilities.',
    impact: { co2Savings: 35, percentage: -15 },
    confidence: 78,
    effort: 'low',
    timeline: 'Next 7 days',
  },
  {
    id: 'ins-005',
    type: 'recommendation',
    title: 'Solar Panel Expansion',
    description: 'ROI analysis shows adding 500kW solar capacity at Texas Cement Works would offset 12% of annual emissions with 4.2-year payback.',
    impact: { co2Savings: 620, costSavings: 95000 },
    confidence: 88,
    effort: 'high',
    timeline: '6-12 months',
  },
  {
    id: 'ins-006',
    type: 'optimization',
    title: 'Route Optimization',
    description: 'Optimizing logistics routes between European facilities could reduce transportation emissions by 18% while maintaining delivery schedules.',
    impact: { co2Savings: 85, costSavings: 42000 },
    confidence: 82,
    effort: 'medium',
    timeline: '4-8 weeks',
  },
  {
    id: 'ins-007',
    type: 'recommendation',
    title: 'LED Lighting Upgrade',
    description: 'Upgrading to LED lighting across Chennai and Pune facilities would reduce lighting energy consumption by 65%.',
    impact: { co2Savings: 28, costSavings: 12000 },
    confidence: 95,
    effort: 'low',
    timeline: '2-4 weeks',
  },
]

export const getActiveAlerts = (): Alert[] => {
  return alerts.filter(a => a.status === 'active')
}

export const getAlertsByFacility = (facilityId: string): Alert[] => {
  return alerts.filter(a => a.facilityId === facilityId)
}

export const getAlertsBySeverity = (severity: Alert['severity']): Alert[] => {
  return alerts.filter(a => a.severity === severity)
}

export const getAlertStats = () => {
  const active = alerts.filter(a => a.status === 'active')
  return {
    total: alerts.length,
    active: active.length,
    critical: active.filter(a => a.severity === 'critical').length,
    high: active.filter(a => a.severity === 'high').length,
    medium: active.filter(a => a.severity === 'medium').length,
    low: active.filter(a => a.severity === 'low').length,
  }
}
