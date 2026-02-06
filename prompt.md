Project Overview
Build a professional carbon emission tracking and sustainability management platform called SustainIQ using Next.js 14+ (App Router). This is a sales demo/prototype targeting manufacturing industries, showcasing a unified platform for carbon tracking, credit offsetting, compliance, and trading.
Reference Platform: https://sustainiq-lime.vercel.app/
Tech Stack Requirements

Framework: Next.js 14+ (App Router with TypeScript)
Styling: Tailwind CSS + shadcn/ui components
Charts: Recharts or Chart.js
Icons: Lucide React
State Management: React Context or Zustand (for demo data)
Authentication: Mock authentication (dummy login system)
Data: All dummy/mock data with realistic carbon metrics

Design Guidelines
Brand Identity

Primary Color: Emerald/Teal Green (#10B981, #14B8A6) - sustainability theme
Secondary Color: Dark charcoal (#1F2937) for text
Accent Colors: Amber (#F59E0B) for warnings, Red (#EF4444) for high emissions, Blue (#3B82F6) for insights
Typography: Modern sans-serif (Inter, Geist Sans)
Style: Clean, professional, data-driven dashboard aesthetic

UI/UX Principles

Clean, minimalist design with ample white space
Card-based layouts for data sections
Responsive design (mobile, tablet, desktop)
Smooth animations and transitions
Clear data visualization with interactive charts
Accessible (WCAG 2.1 AA compliant)
Professional color-coded alerts (green=good, yellow=warning, red=critical)

Application Structure
1. Public Pages (Unauthenticated)
A. Landing Page (/)
Hero Section:

Bold headline: "Industrial Carbon Intelligence at Your Fingertips"
Subheadline about AI-powered emission tracking and blockchain-verified offsets
CTA buttons: "Start Free Trial" + "Watch Demo"
Hero image/illustration: Factory with green tech overlay

Features Section:

Grid of 6 key features with icons:

Real-time Emission Monitoring
AI Predictive Analytics
Carbon Credit Marketplace
Automated Compliance Reporting
Blockchain-Verified Offsets
Multi-facility Management



How It Works (3-step process):

Connect Your Facilities → IoT/manual data input
Track & Analyze → AI-powered insights
Offset & Comply → Trade credits, generate reports

Statistics Section:

"1M+ Tons CO₂ Tracked"
"500+ Manufacturing Facilities"
"€50M+ Carbon Credits Traded"
"99.8% Compliance Rate"

Compliance Badges:

EU CBAM Ready
ISO 14064 Certified
CDP Reporting Compatible
Science Based Targets Initiative

Testimonials: 2-3 fake company testimonials
Footer:

Company info, links, social media
Quick links to Resources, About, Contact

B. Login Page (/login)

Clean centered card design
Email + Password fields
"Remember me" checkbox
"Forgot password?" link
Demo credentials displayed:

Email: demo@sustainiq.com
Password: demo123


"Don't have an account? Sign up" link
SustainIQ logo at top

C. Signup Page (/signup)

Company name, Industry dropdown
Email, Password, Confirm Password
Number of facilities
Country selector
Terms acceptance checkbox
"Already have an account? Login" link

2. Dashboard Pages (Authenticated)
Sidebar Navigation (matches your image):
SustainIQ Logo + "Carbon Platform"

📊 Overview

FACTORY HUB
📈 Real-time Monitoring
📊 Predictive Analytics  
🔔 Alerts & Anomalies
📥 Data Input

TRADING HUB
🛒 Marketplace
💳 Digital Wallet

COMPLIANCE
📋 Audit Hub
🏅 Certifications
📊 ESG Reporting

📚 Resources
⚙️ Settings
A. Overview Dashboard (/dashboard)
Header KPI Cards (4 cards in grid):

Total Emissions (Current Month)

Large number: "1,247 tons CO₂e"
Trend: ↓ 12% vs last month (green)
Progress bar to monthly target


Carbon Credits Balance

"3,450 credits"
Value: "€86,250"
Recent transaction list (last 3)


Compliance Score

Large percentage: "94%"
Status: "On Track" (green badge)
Next audit date


Active Facilities

"12 facilities"
Status breakdown: 10 normal, 2 alerts
Map pin icon



Emission Trends Chart:

Line/area chart showing last 12 months
Toggle between: Scope 1, Scope 2, Scope 3, Total
Benchmark line for industry average
Annotations for key events

Facility Breakdown Table:

Columns: Facility Name, Location, Current Month Emissions, vs Target, Status, Actions
Color-coded status indicators
Drill-down button to facility details

Recent Alerts Panel (sidebar):

List of 5 most recent alerts
Alert types: Spike detected, Threshold exceeded, Equipment anomaly
Timestamp and facility name
Severity indicators

Quick Actions:

"Generate Monthly Report"
"Purchase Carbon Credits"
"Schedule Audit"
"Add New Facility"

B. Real-time Monitoring (/dashboard/monitoring)
Live Data Stream:

Auto-refreshing dashboard (simulate with dummy data updates)
Current emissions rate: tons CO₂/hour
Live gauge chart showing current vs capacity

Facility Selector:

Dropdown to select facility
"All Facilities" view option

Sensor Data Grid (for selected facility):

Individual cards for each sensor:

Boiler 1, Boiler 2, Production Line A, B, C
HVAC System, Waste Processing


Each shows: Current reading, 24h trend sparkline, status

Emission Sources Breakdown:

Donut chart: Energy (45%), Transportation (25%), Process Emissions (20%), Waste (10%)
Hover for detailed breakdown

24-Hour Timeline:

Hourly emission levels as bar chart
Highlight peak hours
Annotations for shift changes, events

Energy Mix Panel:

Current energy source breakdown
Grid electricity (% renewable), Natural Gas, Diesel, Solar
Real-time percentage indicators

C. Predictive Analytics (/dashboard/analytics)
Forecast Dashboard:

30-day emission forecast (line chart with confidence interval)
Toggle scenarios: Business as usual, Optimized, Best case

AI Insights Cards:

"Expected 8% increase next week due to production ramp-up"
"Switching to off-peak hours could save 120 tons CO₂e/month"
"Boiler 2 efficiency declining, service recommended"
"Weather forecast suggests 15% lower cooling demand"

Optimization Recommendations:

List of 5-7 actionable recommendations
Each with: Title, Expected savings (CO₂ + €), Effort level, Implementation timeline
"Accept" button to add to action plan

Anomaly Detection:

Pattern analysis chart
Highlight unusual spikes/dips
ML confidence score for each detection
Root cause analysis

Historical Comparison:

Year-over-year comparison
Seasonal patterns
Industry benchmarking

D. Alerts & Anomalies (/dashboard/alerts)
Alert Configuration Panel:

Set threshold alerts for each facility/sensor
Configure notification channels (email, SMS, in-app)
Alert severity levels

Active Alerts Table:

Columns: Timestamp, Facility, Alert Type, Severity, Value, Threshold, Status, Actions
Filters: By facility, severity, date range, status
Export to CSV option

Alert History Chart:

Timeline of alerts over last 90 days
Grouped by type and severity
Click to see details

Anomaly Patterns:

ML-detected unusual patterns
Visual representation
Investigation status

E. Data Input (/dashboard/data-input)
Manual Data Entry Form:

Facility selector
Date range picker
Data categories:

Energy consumption (kWh, broken down by source)
Fuel usage (liters/kg by type)
Process data (production volume, waste)
Transportation (km traveled by vehicle type)


CSV upload option
API integration guide (documentation link)

IoT Connection Status:

List of connected sensors
Connection health indicators
Last data received timestamp
Add new sensor/meter button

Data Quality Dashboard:

Completeness percentage
Missing data periods highlighted
Data validation issues
Reconciliation tools

Import History:

Table of past imports
Source, timestamp, records imported, status
Re-process failed imports option

F. Marketplace (/dashboard/marketplace)
Carbon Credits Marketplace:
Filter Panel (sidebar):

Project type: Renewable Energy, Forestry, Direct Air Capture, etc.
Location/Country
Certification: Gold Standard, Verra, CDM
Price range slider
Vintage year

Credit Listings Grid:
Each card shows:

Project name + thumbnail image
Project type badge
Location with flag
Price per credit
Available quantity
Certification badges
Carbon reduction methodology
"View Details" + "Buy Now" buttons

Featured Projects Section:

Carousel of 3-4 highlighted projects

My Purchases History:

Table of past purchases
Certificate download links

Price Trends Chart:

Historical carbon credit prices
By project type

G. Digital Wallet (/dashboard/wallet)
Balance Overview:

Total credits owned
Total value (current market price)
Breakdown by project type

Transaction History:

Table: Date, Type (Buy/Sell/Retire), Project, Quantity, Price, Status
Filters and export options

Retirement Records:

Credits retired for offsetting
Retirement certificates
Blockchain verification links (simulated)

Portfolio Breakdown:

Pie chart by project type
By vintage year
By certification standard

Auto-offset Settings:

Configure automatic purchasing rules
Set monthly budget
Preferred project types

H. Audit Hub (/dashboard/audit)
Compliance Dashboard:

Overall compliance score (large gauge)
Breakdown by regulation: EU CBAM, CDP, GRI, TCFD, etc.
Status indicators

Audit Schedule:

Calendar view of upcoming audits
Past audit results
Schedule new audit button

Document Management:

Upload and organize compliance documents
Version control
Expiry date tracking
Document templates library

Audit Trail:

Complete activity log
Who changed what and when
Blockchain-verified records (simulated hash)
Export audit trail report

Report Generator:

Select report type: Monthly, Quarterly, Annual, Custom
Choose scope and facilities
Select frameworks: GHG Protocol, ISO 14064, etc.
Generate PDF report with all required data

I. Certifications (/dashboard/certifications)
Current Certifications:

Cards for each certification
Status: Active, Pending, Expired
Expiry dates
Renewal alerts
Certificate download

Available Certifications:

Browse certification programs
Requirements checklist
Apply button

Certification Progress:

For pending certifications
Requirements checklist with completion %
Upload evidence documents
Tracking number

J. ESG Reporting (/dashboard/esg)
ESG Score Dashboard:

Overall ESG score (large number)
Breakdown: Environmental (E), Social (S), Governance (G)
Trend over time
Industry comparison

Environmental Metrics:

GHG emissions (Scope 1, 2, 3)
Energy consumption
Water usage
Waste management
Renewable energy %

Report Builder:

Select reporting framework: GRI, SASB, CDP, TCFD
Choose metrics to include
Set reporting period
Generate report (PDF/Excel)

Stakeholder Dashboard (public-facing view):

Simplified metrics for investors/customers
Share link generation
Transparency score

Third-party Integrations:

CDP submission
Carbon Disclosure Project
Export to sustainability platforms

K. Resources (/dashboard/resources)
Regulation Library (searchable, filterable):

EU Regulations:

EU CBAM (Carbon Border Adjustment Mechanism)

Full regulation text
Implementation timeline
Affected industries
Compliance checklist


EU ETS (Emissions Trading System)
Corporate Sustainability Reporting Directive (CSRD)
Taxonomy Regulation


Country-specific Regulations:

Organized by country/region
USA: EPA regulations, California Cap-and-Trade
UK: Climate Change Act, UK ETS
China: National ETS
India: PAT scheme
Others: Australia, Canada, Japan, South Korea


International Standards:

GHG Protocol
ISO 14064 series
PAS 2060
Science Based Targets


Glossary:

Sustainability terms dictionary
Carbon accounting terminology
Industry-specific terms



Downloadable Templates:

Emission calculation spreadsheets
Audit preparation checklists
Report templates
Data collection forms

Learning Center:

Video tutorials (embedded YouTube placeholders)
How-to guides
Best practices
Case studies

Updates & News:

Latest regulatory changes
Industry news
Platform updates
Webinar recordings

L. Settings (/dashboard/settings)
Organization Profile:

Company name, logo upload
Industry sector
Headquarters location
Number of employees
Company description

Facilities Management:

Add/edit/remove facilities
Facility details: Name, address, type, capacity
Upload facility photos
Set emission targets per facility

User Management:

Team members list
Roles: Admin, Manager, Analyst, Viewer
Invite users
Permission settings

Notification Preferences:

Email notifications (daily digest, alerts, reports)
In-app notifications
SMS alerts (for critical)
Notification frequency

API & Integrations:

API key generation
Webhook configuration
Integration status: ERP systems, IoT platforms, accounting software
API documentation link

Billing & Subscription (for demo):

Current plan: Professional (mock)
Usage metrics
Billing history
Upgrade options

Data Export:

Export all data to CSV/Excel
Backup schedule
Data retention settings

Dummy Data Requirements
Companies/Facilities:
Create data for a fictional manufacturing company with:

12 facilities across EU, USA, India
Mix of: Steel mills, Chemical plants, Automotive assembly, Textile factories
Facility sizes: Small (500 tons CO₂e/year), Medium (5,000), Large (50,000)

Emission Data:

Historical data: 24 months
Realistic seasonal patterns
Scope 1, 2, 3 breakdowns
Various emission sources per facility type

Carbon Credits:

20-30 different project listings
Project types: Wind farms, Solar installations, Reforestation, Cookstove distribution, Direct air capture
Locations: India, Brazil, Kenya, Indonesia, USA
Price range: €15-€80 per credit
Certifications: Verra VCS, Gold Standard, CDM

Alerts/Anomalies:

50+ historical alerts
5-10 active alerts
Various types: Threshold exceedance, Unusual patterns, Equipment malfunction predictions

Regulations:

Full text summaries for 10+ major regulations
30+ countries covered
Implementation dates and deadlines

Additional Features

Dark Mode Toggle: Implement dark/light theme switching
Multi-language Support (at least structure): English, German, Spanish, Chinese
Export Functionality: PDF reports, Excel exports throughout
Search: Global search for facilities, regulations, credits
Onboarding Flow: First-time user tour with tooltips
Changelog/Updates: Modal for platform updates
Help Center: Contextual help buttons with tooltips
Performance: Lazy loading, optimized images, code splitting

File Structure Suggestion
src/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   └── signup/
│   ├── (dashboard)/
│   │   ├── layout.tsx (with sidebar)
│   │   ├── page.tsx (overview)
│   │   ├── monitoring/
│   │   ├── analytics/
│   │   ├── alerts/
│   │   ├── data-input/
│   │   ├── marketplace/
│   │   ├── wallet/
│   │   ├── audit/
│   │   ├── certifications/
│   │   ├── esg/
│   │   ├── resources/
│   │   └── settings/
│   ├── layout.tsx
│   └── page.tsx (landing)
├── components/
│   ├── ui/ (shadcn components)
│   ├── dashboard/
│   │   ├── Sidebar.tsx
│   │   ├── Header.tsx
│   │   ├── KPICard.tsx
│   │   ├── EmissionChart.tsx
│   │   └── ...
│   ├── landing/
│   └── shared/
├── lib/
│   ├── dummy-data/
│   │   ├── facilities.ts
│   │   ├── emissions.ts
│   │   ├── credits.ts
│   │   ├── regulations.ts
│   │   └── alerts.ts
│   ├── utils.ts
│   └── constants.ts
├── types/
└── styles/
Implementation Priorities

Set up Next.js project with Tailwind + shadcn/ui
Create landing page
Build auth pages (login/signup) with mock auth
Implement dashboard layout with sidebar navigation
Build Overview dashboard with charts
Develop each dashboard section progressively
Create dummy data generators
Implement Resources section with regulation content
Polish UI/UX, animations, responsiveness
Add finishing touches (dark mode, search, etc.)

Success Criteria

Professional, sales-ready demo that impresses manufacturing clients
All navigation items functional
Realistic data and scenarios
Smooth user experience
Mobile responsive
Can be deployed to Vercel for live demo


Build this as a complete, production-ready demo application. Focus on visual appeal, professional design, and realistic data that showcases the platform's capabilities to potential enterprise clients in the manufacturing sector.