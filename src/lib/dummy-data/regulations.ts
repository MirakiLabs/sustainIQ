import { Regulation, Certification, AuditRecord, ESGMetric } from '@/types'

export const regulations: Regulation[] = [
  {
    id: 'reg-001',
    name: 'Carbon Border Adjustment Mechanism',
    shortName: 'EU CBAM',
    jurisdiction: 'European Union',
    description: 'The EU Carbon Border Adjustment Mechanism is a tool to put a fair price on carbon emitted during the production of carbon-intensive goods entering the EU, and to encourage cleaner industrial production in non-EU countries.',
    effectiveDate: '2023-10-01',
    affectedIndustries: ['Steel', 'Cement', 'Fertilizers', 'Aluminum', 'Electricity', 'Hydrogen'],
    complianceDeadlines: [
      { date: '2023-10-01', description: 'Transitional period begins - quarterly reporting required', status: 'passed' },
      { date: '2025-12-31', description: 'Transitional period ends', status: 'upcoming' },
      { date: '2026-01-01', description: 'Full implementation - CBAM certificates required', status: 'upcoming' },
      { date: '2034-01-01', description: 'Full phase-out of free EU ETS allowances', status: 'upcoming' },
    ],
    requirements: [
      'Register as an authorized CBAM declarant',
      'Report embedded emissions in imported goods quarterly',
      'Verify emissions data through accredited verifiers',
      'Purchase CBAM certificates to cover embedded emissions',
      'Submit annual CBAM declaration by May 31 each year',
    ],
    resources: [
      { title: 'EU CBAM Regulation Full Text', type: 'document', url: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en' },
      { title: 'CBAM Implementation Guide', type: 'document', url: 'https://taxation-customs.ec.europa.eu/system/files/2023-08/CBAM_guidance_importers_0.pdf' },
      { title: 'Emission Calculation Template', type: 'template', url: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en#guidance' },
    ],
  },
  {
    id: 'reg-002',
    name: 'EU Emissions Trading System',
    shortName: 'EU ETS',
    jurisdiction: 'European Union',
    description: 'The EU ETS is a cornerstone of the EU\'s policy to combat climate change. It is the world\'s first major carbon market and remains the biggest one, covering around 40% of the EU\'s greenhouse gas emissions.',
    effectiveDate: '2005-01-01',
    affectedIndustries: ['Power Generation', 'Manufacturing', 'Aviation', 'Maritime'],
    complianceDeadlines: [
      { date: '2024-03-31', description: 'Submit verified emissions report for 2023', status: 'upcoming' },
      { date: '2024-04-30', description: 'Surrender allowances for 2023 emissions', status: 'upcoming' },
      { date: '2024-09-30', description: 'Submit improvement report (if applicable)', status: 'upcoming' },
    ],
    requirements: [
      'Obtain greenhouse gas emissions permit',
      'Monitor and report annual emissions',
      'Have emissions verified by accredited verifier',
      'Surrender sufficient allowances to cover emissions',
      'Maintain accurate records for at least 10 years',
    ],
    resources: [
      { title: 'EU ETS Handbook', type: 'document', url: 'https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets_en' },
      { title: 'MRV Regulation Guide', type: 'document', url: 'https://climate.ec.europa.eu/eu-action/eu-emissions-trading-system-eu-ets/monitoring-reporting-and-verification-eu-ets-emissions_en' },
      { title: 'Monitoring Plan Template', type: 'template', url: 'https://ec.europa.eu/clima/ets/account.do' },
    ],
  },
  {
    id: 'reg-003',
    name: 'Corporate Sustainability Reporting Directive',
    shortName: 'CSRD',
    jurisdiction: 'European Union',
    description: 'The CSRD modernizes and strengthens the rules about social and environmental information that companies have to report, creating a common reporting framework.',
    effectiveDate: '2024-01-01',
    affectedIndustries: ['All Large Companies', 'Listed SMEs'],
    complianceDeadlines: [
      { date: '2024-01-01', description: 'Large public interest entities (>500 employees) must comply', status: 'passed' },
      { date: '2025-01-01', description: 'Other large companies must comply', status: 'upcoming' },
      { date: '2026-01-01', description: 'Listed SMEs must comply', status: 'upcoming' },
    ],
    requirements: [
      'Report according to European Sustainability Reporting Standards (ESRS)',
      'Include sustainability report in management report',
      'Obtain limited assurance on sustainability information',
      'Use digital tagging (ESEF) for sustainability reports',
      'Report on entire value chain impacts',
    ],
    resources: [
      { title: 'CSRD Full Text', type: 'document', url: 'https://finance.ec.europa.eu/capital-markets-union-and-financial-markets/company-reporting-and-auditing/company-reporting/corporate-sustainability-reporting_en' },
      { title: 'ESRS Standards', type: 'document', url: 'https://efrag.org/lab2' },
      { title: 'Reporting Template', type: 'template', url: 'https://efrag.org/lab2' },
    ],
  },
  {
    id: 'reg-004',
    name: 'GHG Protocol Corporate Standard',
    shortName: 'GHG Protocol',
    jurisdiction: 'International',
    description: 'The GHG Protocol Corporate Standard provides requirements and guidance for companies preparing a corporate-level GHG emissions inventory. It is the most widely used international accounting tool.',
    effectiveDate: '2001-01-01',
    affectedIndustries: ['All Industries'],
    complianceDeadlines: [],
    requirements: [
      'Define organizational and operational boundaries',
      'Identify and calculate Scope 1 direct emissions',
      'Identify and calculate Scope 2 indirect emissions',
      'Optionally report Scope 3 value chain emissions',
      'Ensure quality management of GHG inventory',
      'Report and verify emissions annually',
    ],
    resources: [
      { title: 'GHG Protocol Corporate Standard', type: 'document', url: 'https://ghgprotocol.org/corporate-standard' },
      { title: 'Scope 2 Guidance', type: 'document', url: 'https://ghgprotocol.org/scope-2-guidance' },
      { title: 'Scope 3 Standard', type: 'document', url: 'https://ghgprotocol.org/corporate-value-chain-scope-3-standard' },
      { title: 'Calculation Tools', type: 'template', url: 'https://ghgprotocol.org/calculation-tools' },
    ],
  },
  {
    id: 'reg-005',
    name: 'ISO 14064 Greenhouse Gas Accounting',
    shortName: 'ISO 14064',
    jurisdiction: 'International',
    description: 'ISO 14064 provides government and business with a set of tools for programs to reduce greenhouse gas emissions, as well as for emissions trading.',
    effectiveDate: '2006-03-01',
    affectedIndustries: ['All Industries'],
    complianceDeadlines: [],
    requirements: [
      'Part 1: Design and develop organization-level GHG inventory',
      'Part 2: Quantify, monitor and report emission reductions',
      'Part 3: Validate and verify GHG assertions',
      'Establish GHG management policies and procedures',
      'Maintain documentation and records',
    ],
    resources: [
      { title: 'ISO 14064-1:2018 Full Standard', type: 'document', url: 'https://www.iso.org/standard/66453.html' },
      { title: 'Implementation Guide', type: 'document', url: 'https://www.iso.org/obp/ui/#iso:std:iso:14064:-1:ed-2:v1:en' },
    ],
  },
  {
    id: 'reg-006',
    name: 'Science Based Targets Initiative',
    shortName: 'SBTi',
    jurisdiction: 'International',
    description: 'The SBTi drives ambitious climate action in the private sector by enabling organizations to set science-based emissions reduction targets.',
    effectiveDate: '2015-01-01',
    affectedIndustries: ['All Industries'],
    complianceDeadlines: [
      { date: '2024-07-01', description: 'New net-zero standard requirements effective', status: 'upcoming' },
    ],
    requirements: [
      'Commit to setting science-based targets',
      'Develop targets covering Scope 1 and 2 emissions',
      'Set Scope 3 target if significant',
      'Submit targets for official validation',
      'Announce targets publicly',
      'Report progress annually',
    ],
    resources: [
      { title: 'SBTi Criteria and Recommendations', type: 'document', url: 'https://sciencebasedtargets.org/resources/files/SBTi-criteria.pdf' },
      { title: 'Target Setting Tool', type: 'template', url: 'https://sciencebasedtargets.org/resources/?type=tool' },
      { title: 'Sector Guidance Documents', type: 'document', url: 'https://sciencebasedtargets.org/sectors' },
    ],
  },
  {
    id: 'reg-007',
    name: 'US EPA Greenhouse Gas Reporting',
    shortName: 'EPA GHGRP',
    jurisdiction: 'United States',
    description: 'The Greenhouse Gas Reporting Program requires reporting of greenhouse gas data and other relevant information from large GHG emission sources, fuel and industrial gas suppliers.',
    effectiveDate: '2010-01-01',
    affectedIndustries: ['Power Plants', 'Refineries', 'Chemical Manufacturing', 'Metals', 'Mining'],
    complianceDeadlines: [
      { date: '2024-03-31', description: 'Submit 2023 annual GHG report', status: 'upcoming' },
    ],
    requirements: [
      'Report if facility emits 25,000+ metric tons CO2e/year',
      'Monitor emissions using approved methods',
      'Submit annual reports through e-GGRT system',
      'Maintain records for at least 3 years',
      'Undergo third-party verification if required',
    ],
    resources: [
      { title: 'GHGRP Reporting Instructions', type: 'document', url: 'https://www.epa.gov/ghgreporting' },
      { title: 'Calculation Methodologies', type: 'document', url: 'https://www.epa.gov/ghgreporting/ghg-reporting-program-methodology-fact-sheets' },
    ],
  },
  {
    id: 'reg-008',
    name: 'UK Climate Change Act',
    shortName: 'UK CCA',
    jurisdiction: 'United Kingdom',
    description: 'The Climate Change Act commits the UK government to reducing greenhouse gas emissions by at least 100% of 1990 levels (net zero) by 2050.',
    effectiveDate: '2008-11-26',
    affectedIndustries: ['All Industries'],
    complianceDeadlines: [
      { date: '2030-01-01', description: '68% reduction vs 1990 levels', status: 'upcoming' },
      { date: '2035-01-01', description: '78% reduction vs 1990 levels', status: 'upcoming' },
      { date: '2050-01-01', description: 'Net zero emissions', status: 'upcoming' },
    ],
    requirements: [
      'Participate in UK ETS (if applicable)',
      'Report under SECR (if qualifying company)',
      'Comply with Climate Change Agreements (if applicable)',
      'Meet energy efficiency obligations',
    ],
    resources: [
      { title: 'Climate Change Act 2008', type: 'document', url: 'https://www.legislation.gov.uk/ukpga/2008/27/contents' },
      { title: 'Net Zero Strategy', type: 'document', url: 'https://www.gov.uk/government/publications/net-zero-strategy' },
    ],
  },
]

export const certifications: Certification[] = [
  {
    id: 'cert-001',
    name: 'ISO 14064-1:2018',
    issuingBody: 'Bureau Veritas',
    status: 'active',
    issueDate: '2023-03-15',
    expiryDate: '2026-03-14',
    certificateNumber: 'GHG-2023-4521',
    scope: 'Organization-level GHG inventory verification',
    requirements: [
      { id: 'req-1', name: 'GHG inventory documentation', completed: true },
      { id: 'req-2', name: 'Data quality management', completed: true },
      { id: 'req-3', name: 'Verification audit', completed: true },
    ],
  },
  {
    id: 'cert-002',
    name: 'ISO 14001:2015',
    issuingBody: 'DNV GL',
    status: 'active',
    issueDate: '2022-08-01',
    expiryDate: '2025-07-31',
    certificateNumber: 'EMS-2022-8934',
    scope: 'Environmental Management System',
    requirements: [
      { id: 'req-4', name: 'Environmental policy established', completed: true },
      { id: 'req-5', name: 'Aspects and impacts identified', completed: true },
      { id: 'req-6', name: 'Objectives and targets set', completed: true },
      { id: 'req-7', name: 'Surveillance audit completed', completed: true },
    ],
  },
  {
    id: 'cert-003',
    name: 'CDP Climate A-List',
    issuingBody: 'CDP',
    status: 'active',
    issueDate: '2023-12-05',
    expiryDate: '2024-12-04',
    certificateNumber: 'CDP-2023-A-7823',
    scope: 'Climate Change Disclosure',
  },
  {
    id: 'cert-004',
    name: 'SBTi Commitment',
    issuingBody: 'Science Based Targets initiative',
    status: 'pending',
    issueDate: '2023-09-01',
    expiryDate: '2025-09-01',
    certificateNumber: 'SBTI-2023-COMMIT',
    scope: 'Near-term and net-zero target commitment',
    requirements: [
      { id: 'req-8', name: 'Commitment letter submitted', completed: true },
      { id: 'req-9', name: 'Base year inventory completed', completed: true },
      { id: 'req-10', name: 'Target development in progress', completed: false },
      { id: 'req-11', name: 'Target validation pending', completed: false },
    ],
  },
  {
    id: 'cert-005',
    name: 'Gold Standard for the Global Goals',
    issuingBody: 'Gold Standard Foundation',
    status: 'active',
    issueDate: '2023-06-20',
    expiryDate: '2026-06-19',
    certificateNumber: 'GS-VER-2023-1245',
    scope: 'Carbon credit project certification',
  },
  {
    id: 'cert-006',
    name: 'EU ETS Verified Emissions',
    issuingBody: 'TÜV SÜD',
    status: 'active',
    issueDate: '2024-01-10',
    expiryDate: '2024-12-31',
    certificateNumber: 'ETS-VER-2024-3421',
    scope: '2023 Annual Emissions Verification',
  },
]

export const auditRecords: AuditRecord[] = [
  {
    id: 'aud-001',
    type: 'Annual GHG Verification',
    date: '2024-02-15',
    auditor: 'Bureau Veritas',
    status: 'scheduled',
    documents: [],
  },
  {
    id: 'aud-002',
    type: 'ISO 14001 Surveillance',
    date: '2024-03-20',
    auditor: 'DNV GL',
    status: 'scheduled',
    documents: [],
  },
  {
    id: 'aud-003',
    type: 'EU ETS Verification',
    date: '2024-01-10',
    auditor: 'TÜV SÜD',
    status: 'completed',
    score: 98,
    findings: 'Minor observation: Improve documentation for fugitive emissions calculations',
    documents: [
      { id: 'doc-1', name: 'Verification Report 2023', type: 'pdf', uploadDate: '2024-01-12', url: '#' },
      { id: 'doc-2', name: 'Emissions Statement', type: 'pdf', uploadDate: '2024-01-12', url: '#' },
    ],
  },
  {
    id: 'aud-004',
    type: 'Internal EMS Audit',
    date: '2023-11-15',
    auditor: 'Internal Team',
    status: 'completed',
    score: 92,
    findings: 'Two minor non-conformities identified and addressed',
    documents: [
      { id: 'doc-3', name: 'Internal Audit Report', type: 'pdf', uploadDate: '2023-11-20', url: '#' },
    ],
  },
]

export const esgMetrics: ESGMetric[] = [
  // Environmental
  { category: 'environmental', name: 'GHG Emissions (Scope 1)', value: 8450, unit: 'tCO2e', trend: -12, benchmark: 9500 },
  { category: 'environmental', name: 'GHG Emissions (Scope 2)', value: 3200, unit: 'tCO2e', trend: -8, benchmark: 3800 },
  { category: 'environmental', name: 'GHG Emissions (Scope 3)', value: 1850, unit: 'tCO2e', trend: -5, benchmark: 2200 },
  { category: 'environmental', name: 'Energy Consumption', value: 45600, unit: 'MWh', trend: -6, benchmark: 52000 },
  { category: 'environmental', name: 'Renewable Energy Share', value: 38, unit: '%', trend: 15, benchmark: 30 },
  { category: 'environmental', name: 'Water Consumption', value: 125000, unit: 'm³', trend: -3, benchmark: 140000 },
  { category: 'environmental', name: 'Waste Recycled', value: 78, unit: '%', trend: 5, benchmark: 65 },

  // Social
  { category: 'social', name: 'Employee Safety Rate', value: 98.5, unit: '%', trend: 2, benchmark: 95 },
  { category: 'social', name: 'Training Hours per Employee', value: 42, unit: 'hours', trend: 8, benchmark: 35 },
  { category: 'social', name: 'Gender Diversity (Leadership)', value: 34, unit: '%', trend: 6, benchmark: 30 },
  { category: 'social', name: 'Employee Satisfaction', value: 82, unit: '%', trend: 4, benchmark: 75 },
  { category: 'social', name: 'Community Investment', value: 450000, unit: '€', trend: 12, benchmark: 350000 },

  // Governance
  { category: 'governance', name: 'Board Independence', value: 75, unit: '%', trend: 0, benchmark: 60 },
  { category: 'governance', name: 'Ethics Training Completion', value: 100, unit: '%', trend: 0, benchmark: 95 },
  { category: 'governance', name: 'Supplier Code Compliance', value: 94, unit: '%', trend: 3, benchmark: 90 },
  { category: 'governance', name: 'Data Privacy Compliance', value: 100, unit: '%', trend: 0, benchmark: 100 },
]

export const getComplianceScore = (): number => {
  // Calculate based on certifications and audit results
  const activeCerts = certifications.filter(c => c.status === 'active').length
  const totalCerts = certifications.length
  const completedAudits = auditRecords.filter(a => a.status === 'completed' && (a.score ?? 0) >= 90).length

  return Math.round((activeCerts / totalCerts) * 70 + (completedAudits / auditRecords.length) * 30)
}

export const getESGScore = (): { total: number; environmental: number; social: number; governance: number } => {
  const calcCategoryScore = (category: ESGMetric['category']) => {
    const metrics = esgMetrics.filter(m => m.category === category)
    const scores = metrics.map(m => {
      if (m.benchmark) {
        if (m.name.includes('Emissions') || m.name.includes('Consumption')) {
          return Math.min(100, (m.benchmark / m.value) * 100)
        }
        return Math.min(100, (m.value / m.benchmark) * 100)
      }
      return m.value
    })
    return Math.round(scores.reduce((a, b) => a + b, 0) / scores.length)
  }

  const environmental = calcCategoryScore('environmental')
  const social = calcCategoryScore('social')
  const governance = calcCategoryScore('governance')

  return {
    environmental,
    social,
    governance,
    total: Math.round((environmental * 0.4 + social * 0.3 + governance * 0.3)),
  }
}
