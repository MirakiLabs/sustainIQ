import { Facility } from '@/types'

export const facilities: Facility[] = [
  {
    id: 'fac-001',
    name: 'Stuttgart Steel Works',
    type: 'Steel Mill',
    location: { city: 'Stuttgart', country: 'Germany', countryCode: 'DE' },
    capacity: 50000,
    status: 'normal',
    currentEmissions: 4250,
    targetEmissions: 4500,
    coordinates: { lat: 48.7758, lng: 9.1829 },
    sensors: [
      { id: 'sen-001', name: 'Blast Furnace A', type: 'emission', status: 'online', lastReading: 145.2, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-002', name: 'Blast Furnace B', type: 'emission', status: 'online', lastReading: 138.7, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-003', name: 'Rolling Mill', type: 'emission', status: 'online', lastReading: 42.5, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-004', name: 'HVAC System', type: 'energy', status: 'online', lastReading: 8.3, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
  {
    id: 'fac-002',
    name: 'Munich Auto Assembly',
    type: 'Automotive Assembly',
    location: { city: 'Munich', country: 'Germany', countryCode: 'DE' },
    capacity: 25000,
    status: 'normal',
    currentEmissions: 1890,
    targetEmissions: 2000,
    coordinates: { lat: 48.1351, lng: 11.582 },
    sensors: [
      { id: 'sen-005', name: 'Paint Shop', type: 'emission', status: 'online', lastReading: 32.1, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-006', name: 'Assembly Line A', type: 'emission', status: 'online', lastReading: 28.4, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-007', name: 'Assembly Line B', type: 'emission', status: 'online', lastReading: 26.9, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-008', name: 'Quality Testing', type: 'energy', status: 'online', lastReading: 5.2, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
  {
    id: 'fac-003',
    name: 'Lyon Chemical Plant',
    type: 'Chemical Plant',
    location: { city: 'Lyon', country: 'France', countryCode: 'FR' },
    capacity: 35000,
    status: 'warning',
    currentEmissions: 3150,
    targetEmissions: 2900,
    coordinates: { lat: 45.764, lng: 4.8357 },
    sensors: [
      { id: 'sen-009', name: 'Reactor 1', type: 'emission', status: 'online', lastReading: 78.5, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-010', name: 'Reactor 2', type: 'emission', status: 'warning', lastReading: 92.3, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-011', name: 'Distillation Tower', type: 'emission', status: 'online', lastReading: 45.6, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-012', name: 'Waste Processing', type: 'emission', status: 'online', lastReading: 12.8, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
  {
    id: 'fac-004',
    name: 'Detroit Motors Plant',
    type: 'Automotive Assembly',
    location: { city: 'Detroit', country: 'United States', countryCode: 'US' },
    capacity: 30000,
    status: 'normal',
    currentEmissions: 2340,
    targetEmissions: 2500,
    coordinates: { lat: 42.3314, lng: -83.0458 },
    sensors: [
      { id: 'sen-013', name: 'Body Shop', type: 'emission', status: 'online', lastReading: 38.2, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-014', name: 'Paint Booth', type: 'emission', status: 'online', lastReading: 41.5, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-015', name: 'Final Assembly', type: 'emission', status: 'online', lastReading: 22.8, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
  {
    id: 'fac-005',
    name: 'Chennai Textile Factory',
    type: 'Textile Factory',
    location: { city: 'Chennai', country: 'India', countryCode: 'IN' },
    capacity: 8000,
    status: 'normal',
    currentEmissions: 620,
    targetEmissions: 700,
    coordinates: { lat: 13.0827, lng: 80.2707 },
    sensors: [
      { id: 'sen-016', name: 'Dyeing Unit', type: 'emission', status: 'online', lastReading: 12.4, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-017', name: 'Weaving Section', type: 'emission', status: 'online', lastReading: 8.7, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-018', name: 'Steam Boiler', type: 'emission', status: 'online', lastReading: 15.2, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
  {
    id: 'fac-006',
    name: 'Manchester Processing',
    type: 'Food Processing',
    location: { city: 'Manchester', country: 'United Kingdom', countryCode: 'GB' },
    capacity: 5000,
    status: 'normal',
    currentEmissions: 380,
    targetEmissions: 400,
    coordinates: { lat: 53.4808, lng: -2.2426 },
    sensors: [
      { id: 'sen-019', name: 'Refrigeration', type: 'emission', status: 'online', lastReading: 6.8, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-020', name: 'Processing Line', type: 'emission', status: 'online', lastReading: 4.2, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-021', name: 'Packaging', type: 'emission', status: 'online', lastReading: 2.1, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
  {
    id: 'fac-007',
    name: 'Pune Steel Complex',
    type: 'Steel Mill',
    location: { city: 'Pune', country: 'India', countryCode: 'IN' },
    capacity: 45000,
    status: 'alert',
    currentEmissions: 4100,
    targetEmissions: 3800,
    coordinates: { lat: 18.5204, lng: 73.8567 },
    sensors: [
      { id: 'sen-022', name: 'Electric Arc Furnace', type: 'emission', status: 'warning', lastReading: 125.6, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-023', name: 'Caster Unit', type: 'emission', status: 'online', lastReading: 45.3, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-024', name: 'Rolling Section', type: 'emission', status: 'offline', lastReading: 0, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T08:30:00Z' },
    ],
  },
  {
    id: 'fac-008',
    name: 'Barcelona Chemicals',
    type: 'Chemical Plant',
    location: { city: 'Barcelona', country: 'Spain', countryCode: 'ES' },
    capacity: 20000,
    status: 'normal',
    currentEmissions: 1650,
    targetEmissions: 1800,
    coordinates: { lat: 41.3851, lng: 2.1734 },
    sensors: [
      { id: 'sen-025', name: 'Polymerization Unit', type: 'emission', status: 'online', lastReading: 35.2, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-026', name: 'Storage Tanks', type: 'emission', status: 'online', lastReading: 8.4, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-027', name: 'Thermal Oxidizer', type: 'emission', status: 'online', lastReading: 18.9, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
  {
    id: 'fac-009',
    name: 'Rotterdam Paper Mill',
    type: 'Paper Mill',
    location: { city: 'Rotterdam', country: 'Netherlands', countryCode: 'NL' },
    capacity: 12000,
    status: 'normal',
    currentEmissions: 920,
    targetEmissions: 1000,
    coordinates: { lat: 51.9244, lng: 4.4777 },
    sensors: [
      { id: 'sen-028', name: 'Pulping Section', type: 'emission', status: 'online', lastReading: 22.5, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-029', name: 'Paper Machine', type: 'emission', status: 'online', lastReading: 18.3, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-030', name: 'Drying System', type: 'emission', status: 'online', lastReading: 12.7, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
  {
    id: 'fac-010',
    name: 'Texas Cement Works',
    type: 'Cement Plant',
    location: { city: 'Houston', country: 'United States', countryCode: 'US' },
    capacity: 60000,
    status: 'normal',
    currentEmissions: 5200,
    targetEmissions: 5500,
    coordinates: { lat: 29.7604, lng: -95.3698 },
    sensors: [
      { id: 'sen-031', name: 'Kiln System', type: 'emission', status: 'online', lastReading: 142.8, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-032', name: 'Raw Mill', type: 'emission', status: 'online', lastReading: 28.4, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-033', name: 'Cement Mill', type: 'emission', status: 'online', lastReading: 35.6, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
  {
    id: 'fac-011',
    name: 'Milan Electronics',
    type: 'Electronics Manufacturing',
    location: { city: 'Milan', country: 'Italy', countryCode: 'IT' },
    capacity: 3000,
    status: 'normal',
    currentEmissions: 245,
    targetEmissions: 280,
    coordinates: { lat: 45.4642, lng: 9.19 },
    sensors: [
      { id: 'sen-034', name: 'SMT Line', type: 'emission', status: 'online', lastReading: 4.2, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-035', name: 'Clean Room', type: 'emission', status: 'online', lastReading: 3.8, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-036', name: 'Testing Facility', type: 'emission', status: 'online', lastReading: 2.1, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
  {
    id: 'fac-012',
    name: 'Sydney Food Plant',
    type: 'Food Processing',
    location: { city: 'Sydney', country: 'Australia', countryCode: 'AU' },
    capacity: 6000,
    status: 'normal',
    currentEmissions: 450,
    targetEmissions: 500,
    coordinates: { lat: -33.8688, lng: 151.2093 },
    sensors: [
      { id: 'sen-037', name: 'Cold Storage', type: 'emission', status: 'online', lastReading: 8.5, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-038', name: 'Production Line', type: 'emission', status: 'online', lastReading: 5.2, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
      { id: 'sen-039', name: 'Packaging Unit', type: 'emission', status: 'online', lastReading: 2.8, unit: 'tons CO₂/day', lastUpdated: '2024-01-15T10:30:00Z' },
    ],
  },
]

export const getFacilityById = (id: string): Facility | undefined => {
  return facilities.find(f => f.id === id)
}

export const getFacilitiesByStatus = (status: Facility['status']): Facility[] => {
  return facilities.filter(f => f.status === status)
}

export const getFacilitiesByCountry = (countryCode: string): Facility[] => {
  return facilities.filter(f => f.location.countryCode === countryCode)
}

export const getTotalEmissions = (): number => {
  return facilities.reduce((sum, f) => sum + f.currentEmissions, 0)
}

export const getTotalTarget = (): number => {
  return facilities.reduce((sum, f) => sum + f.targetEmissions, 0)
}
