import { EmissionData } from '@/types'

// Generate 24 months of emission data
const generateEmissionData = (): EmissionData[] => {
  const data: EmissionData[] = []
  const baseDate = new Date('2023-01-01')

  for (let i = 0; i < 24; i++) {
    const date = new Date(baseDate)
    date.setMonth(date.getMonth() + i)

    // Add seasonal variation
    const seasonalFactor = 1 + 0.15 * Math.sin((i / 12) * 2 * Math.PI)

    // Add gradual reduction trend
    const trendFactor = 1 - (i * 0.008)

    // Add some random variation
    const randomFactor = 0.95 + Math.random() * 0.1

    const baseScope1 = 850 * seasonalFactor * trendFactor * randomFactor
    const baseScope2 = 320 * seasonalFactor * trendFactor * randomFactor
    const baseScope3 = 180 * seasonalFactor * trendFactor * randomFactor

    data.push({
      date: date.toISOString().split('T')[0],
      scope1: Math.round(baseScope1),
      scope2: Math.round(baseScope2),
      scope3: Math.round(baseScope3),
      total: Math.round(baseScope1 + baseScope2 + baseScope3),
    })
  }

  return data
}

export const emissionHistory = generateEmissionData()

// Industry benchmark data
export const industryBenchmark: EmissionData[] = emissionHistory.map(d => ({
  ...d,
  scope1: Math.round(d.scope1 * 1.15),
  scope2: Math.round(d.scope2 * 1.2),
  scope3: Math.round(d.scope3 * 1.1),
  total: Math.round(d.total * 1.15),
}))

// Emission breakdown by source
export const emissionSources = [
  { name: 'Energy Consumption', value: 45, color: '#10B981' },
  { name: 'Transportation', value: 25, color: '#3B82F6' },
  { name: 'Process Emissions', value: 20, color: '#F59E0B' },
  { name: 'Waste Management', value: 10, color: '#8B5CF6' },
]

// Energy mix data
export const energyMix = [
  { name: 'Grid Electricity', value: 52, renewable: 35, color: '#3B82F6' },
  { name: 'Natural Gas', value: 28, renewable: 0, color: '#F59E0B' },
  { name: 'Solar', value: 12, renewable: 100, color: '#10B981' },
  { name: 'Diesel', value: 8, renewable: 0, color: '#6B7280' },
]

// Hourly emission data for real-time monitoring
export const generateHourlyData = () => {
  const data = []
  const now = new Date()

  for (let i = 23; i >= 0; i--) {
    const hour = new Date(now)
    hour.setHours(hour.getHours() - i)

    // Simulate work hours pattern
    const hourOfDay = hour.getHours()
    let baseFactor = 0.5
    if (hourOfDay >= 6 && hourOfDay < 22) {
      baseFactor = 0.7 + 0.3 * Math.sin(((hourOfDay - 6) / 16) * Math.PI)
    }

    data.push({
      hour: hour.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
      emissions: Math.round(50 + baseFactor * 100 + Math.random() * 20),
      isPeak: hourOfDay >= 9 && hourOfDay <= 17,
    })
  }

  return data
}

// Forecast data
export const generateForecastData = () => {
  const data = []
  const today = new Date()

  for (let i = 0; i < 30; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() + i)

    const baseForecast = 1200 + Math.random() * 100

    data.push({
      date: date.toISOString().split('T')[0],
      predicted: Math.round(baseForecast),
      upperBound: Math.round(baseForecast * 1.1),
      lowerBound: Math.round(baseForecast * 0.9),
      optimized: Math.round(baseForecast * 0.85),
      bestCase: Math.round(baseForecast * 0.75),
    })
  }

  return data
}

export const forecastData = generateForecastData()

// Scope breakdown by facility type
export const scopeBreakdownByType = {
  'Steel Mill': { scope1: 75, scope2: 20, scope3: 5 },
  'Automotive Assembly': { scope1: 35, scope2: 45, scope3: 20 },
  'Chemical Plant': { scope1: 60, scope2: 30, scope3: 10 },
  'Textile Factory': { scope1: 25, scope2: 55, scope3: 20 },
  'Food Processing': { scope1: 30, scope2: 50, scope3: 20 },
  'Paper Mill': { scope1: 45, scope2: 40, scope3: 15 },
  'Cement Plant': { scope1: 80, scope2: 15, scope3: 5 },
  'Electronics Manufacturing': { scope1: 15, scope2: 65, scope3: 20 },
}

// Monthly summary
export const getCurrentMonthSummary = () => {
  const latestData = emissionHistory[emissionHistory.length - 1]
  const previousData = emissionHistory[emissionHistory.length - 2]

  const change = ((latestData.total - previousData.total) / previousData.total) * 100

  return {
    currentEmissions: latestData.total,
    previousEmissions: previousData.total,
    change: change,
    scope1: latestData.scope1,
    scope2: latestData.scope2,
    scope3: latestData.scope3,
    target: 1400,
    targetProgress: (latestData.total / 1400) * 100,
  }
}
