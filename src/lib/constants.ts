export const BRAND_COLORS = {
  primary: '#10B981',
  primaryDark: '#059669',
  secondary: '#14B8A6',
  dark: '#1F2937',
  accent: {
    amber: '#F59E0B',
    red: '#EF4444',
    blue: '#3B82F6',
  },
} as const

export const EMISSION_SCOPES = {
  scope1: 'Direct emissions from owned or controlled sources',
  scope2: 'Indirect emissions from purchased energy',
  scope3: 'All other indirect emissions in the value chain',
} as const

export const CERTIFICATION_STANDARDS = [
  'Verra VCS',
  'Gold Standard',
  'CDM',
  'American Carbon Registry',
  'Climate Action Reserve',
] as const

export const PROJECT_TYPES = [
  'Renewable Energy',
  'Forestry & Conservation',
  'Direct Air Capture',
  'Methane Capture',
  'Energy Efficiency',
  'Cookstove Distribution',
  'Blue Carbon',
] as const

export const FACILITY_TYPES = [
  'Steel Mill',
  'Chemical Plant',
  'Automotive Assembly',
  'Textile Factory',
  'Electronics Manufacturing',
  'Food Processing',
  'Cement Plant',
  'Paper Mill',
] as const

export const COUNTRIES = [
  { code: 'US', name: 'United States', flag: '🇺🇸' },
  { code: 'DE', name: 'Germany', flag: '🇩🇪' },
  { code: 'FR', name: 'France', flag: '🇫🇷' },
  { code: 'GB', name: 'United Kingdom', flag: '🇬🇧' },
  { code: 'IN', name: 'India', flag: '🇮🇳' },
  { code: 'CN', name: 'China', flag: '🇨🇳' },
  { code: 'BR', name: 'Brazil', flag: '🇧🇷' },
  { code: 'JP', name: 'Japan', flag: '🇯🇵' },
  { code: 'KR', name: 'South Korea', flag: '🇰🇷' },
  { code: 'AU', name: 'Australia', flag: '🇦🇺' },
  { code: 'CA', name: 'Canada', flag: '🇨🇦' },
  { code: 'IT', name: 'Italy', flag: '🇮🇹' },
  { code: 'ES', name: 'Spain', flag: '🇪🇸' },
  { code: 'NL', name: 'Netherlands', flag: '🇳🇱' },
  { code: 'SE', name: 'Sweden', flag: '🇸🇪' },
  { code: 'KE', name: 'Kenya', flag: '🇰🇪' },
  { code: 'ID', name: 'Indonesia', flag: '🇮🇩' },
  { code: 'MX', name: 'Mexico', flag: '🇲🇽' },
] as const

export const INDUSTRIES = [
  'Manufacturing',
  'Energy & Utilities',
  'Transportation & Logistics',
  'Construction',
  'Mining & Metals',
  'Chemical & Petrochemical',
  'Food & Beverage',
  'Textile & Apparel',
  'Automotive',
  'Electronics',
  'Pharmaceuticals',
  'Paper & Packaging',
] as const

export const ALERT_TYPES = [
  'Threshold Exceeded',
  'Unusual Pattern',
  'Equipment Anomaly',
  'Emission Spike',
  'Sensor Offline',
  'Compliance Warning',
  'Certification Expiring',
  'Target Deviation',
] as const

export const COMPLIANCE_FRAMEWORKS = [
  { id: 'eu-cbam', name: 'EU CBAM', fullName: 'Carbon Border Adjustment Mechanism' },
  { id: 'eu-ets', name: 'EU ETS', fullName: 'EU Emissions Trading System' },
  { id: 'ghg-protocol', name: 'GHG Protocol', fullName: 'Greenhouse Gas Protocol' },
  { id: 'iso-14064', name: 'ISO 14064', fullName: 'ISO 14064 Series' },
  { id: 'cdp', name: 'CDP', fullName: 'Carbon Disclosure Project' },
  { id: 'tcfd', name: 'TCFD', fullName: 'Task Force on Climate-related Financial Disclosures' },
  { id: 'gri', name: 'GRI', fullName: 'Global Reporting Initiative' },
  { id: 'sasb', name: 'SASB', fullName: 'Sustainability Accounting Standards Board' },
  { id: 'sbti', name: 'SBTi', fullName: 'Science Based Targets initiative' },
] as const

export const NAV_ITEMS = [
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
] as const

export const DEMO_CREDENTIALS = {
  email: 'demo@sustainiq.com',
  password: 'demo123',
} as const
