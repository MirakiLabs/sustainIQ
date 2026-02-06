export interface User {
  id: string
  email: string
  name: string
  company: string
  role: 'admin' | 'manager' | 'analyst' | 'viewer'
  avatar?: string
}

export interface Facility {
  id: string
  name: string
  type: string
  location: {
    city: string
    country: string
    countryCode: string
  }
  capacity: number
  status: 'normal' | 'warning' | 'alert'
  currentEmissions: number
  targetEmissions: number
  sensors: Sensor[]
  coordinates?: {
    lat: number
    lng: number
  }
}

export interface Sensor {
  id: string
  name: string
  type: string
  status: 'online' | 'offline' | 'warning'
  lastReading: number
  unit: string
  lastUpdated: string
}

export interface EmissionData {
  date: string
  scope1: number
  scope2: number
  scope3: number
  total: number
  facilityId?: string
}

export interface CarbonCredit {
  id: string
  projectName: string
  projectType: string
  location: {
    country: string
    countryCode: string
    region?: string
  }
  certification: string
  vintage: number
  pricePerCredit: number
  availableCredits: number
  totalCredits: number
  description: string
  image?: string
  methodology: string
  verificationDate: string
  featured?: boolean
}

export interface Transaction {
  id: string
  type: 'buy' | 'sell' | 'retire'
  projectName: string
  projectId: string
  quantity: number
  pricePerCredit: number
  totalAmount: number
  date: string
  status: 'completed' | 'pending' | 'failed'
  certificateUrl?: string
  blockchainHash?: string
}

export interface Alert {
  id: string
  type: string
  severity: 'low' | 'medium' | 'high' | 'critical'
  facilityId: string
  facilityName: string
  message: string
  value?: number
  threshold?: number
  timestamp: string
  status: 'active' | 'acknowledged' | 'resolved'
  source?: string
}

export interface Certification {
  id: string
  name: string
  issuingBody: string
  status: 'active' | 'pending' | 'expired'
  issueDate: string
  expiryDate: string
  certificateNumber: string
  scope: string
  requirements?: CertificationRequirement[]
}

export interface CertificationRequirement {
  id: string
  name: string
  completed: boolean
  evidence?: string
}

export interface Regulation {
  id: string
  name: string
  shortName: string
  jurisdiction: string
  description: string
  effectiveDate: string
  affectedIndustries: string[]
  complianceDeadlines: ComplianceDeadline[]
  requirements: string[]
  resources: RegulationResource[]
}

export interface ComplianceDeadline {
  date: string
  description: string
  status: 'upcoming' | 'passed'
}

export interface RegulationResource {
  title: string
  type: 'document' | 'link' | 'template'
  url: string
}

export interface ESGMetric {
  category: 'environmental' | 'social' | 'governance'
  name: string
  value: number
  unit: string
  trend: number
  benchmark?: number
}

export interface AuditRecord {
  id: string
  type: string
  date: string
  auditor: string
  status: 'scheduled' | 'in-progress' | 'completed'
  findings?: string
  score?: number
  documents: AuditDocument[]
}

export interface AuditDocument {
  id: string
  name: string
  type: string
  uploadDate: string
  expiryDate?: string
  url: string
}

export interface AIInsight {
  id: string
  type: 'prediction' | 'recommendation' | 'anomaly' | 'optimization'
  title: string
  description: string
  impact: {
    co2Savings?: number
    costSavings?: number
    percentage?: number
  }
  confidence: number
  effort: 'low' | 'medium' | 'high'
  timeline: string
  accepted?: boolean
}

export interface NotificationPreference {
  type: string
  email: boolean
  inApp: boolean
  sms: boolean
  frequency: 'instant' | 'daily' | 'weekly'
}

export interface TeamMember {
  id: string
  name: string
  email: string
  role: 'admin' | 'manager' | 'analyst' | 'viewer'
  status: 'active' | 'invited' | 'inactive'
  lastActive?: string
  avatar?: string
}

export interface ChartDataPoint {
  name: string
  value: number
  [key: string]: string | number
}
