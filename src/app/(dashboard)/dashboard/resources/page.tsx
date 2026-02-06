'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import {
  BookOpen,
  Search,
  FileText,
  Video,
  Download,
  ExternalLink,
  Globe,
  Scale,
  Calendar,
  ChevronRight,
  Calculator,
  Zap,
  Lightbulb,
  Building,
  ArrowUpRight,
  RefreshCcw,
} from 'lucide-react'
import { regulations } from '@/lib/dummy-data'
import { formatDate } from '@/lib/utils'
import Link from 'next/link'

const templates = [
  { name: 'Emission Calculation Spreadsheet', type: 'Excel', downloads: 1250 },
  { name: 'Audit Preparation Checklist', type: 'PDF', downloads: 890 },
  { name: 'Carbon Footprint Report Template', type: 'Word', downloads: 2100 },
  { name: 'Data Collection Form', type: 'Excel', downloads: 675 },
  { name: 'ESG Disclosure Template', type: 'PDF', downloads: 1450 },
]

const learningResources = [
  { title: 'Getting Started with Carbon Accounting', type: 'Video', duration: '15 min', level: 'Beginner', url: 'https://www.youtube.com/watch?v=kYc5g5yqW0k' },
  { title: 'Understanding GHG Protocol Scopes', type: 'Guide', duration: '20 min read', level: 'Beginner', url: 'https://ghgprotocol.org/sites/default/files/standards/ghg-protocol-revised.pdf' },
  { title: 'EU CBAM Compliance Deep Dive', type: 'Video', duration: '45 min', level: 'Advanced', url: 'https://taxation-customs.ec.europa.eu/carbon-border-adjustment-mechanism_en' },
  { title: 'Carbon Credit Trading Basics', type: 'Guide', duration: '15 min read', level: 'Intermediate', url: 'https://carboncredits.com/the-ultimate-guide-to-understanding-carbon-credits/' },
  { title: 'Setting Science-Based Targets', type: 'Video', duration: '30 min', level: 'Advanced', url: 'https://sciencebasedtargets.org/how-it-works' },
]

const caseStudies = [
  {
    title: 'GreenSteel Transformation',
    industry: 'Manufacturing',
    description: 'How a mid-sized steel plant reduced carbon intensity by 40% using hydrogen-based reduction.',
    image: 'https://images.unsplash.com/photo-1558486012-817176f84c6d?q=80&w=2670&auto=format&fit=crop',
    impact: '40% Reduction in CO2',
  },
  {
    title: 'EcoLogistics Fleet Electrification',
    industry: 'Transportation',
    description: 'Transitioning a logistics fleet to 100% electric vehicles: challenges and outcomes.',
    image: 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?q=80&w=2672&auto=format&fit=crop',
    impact: '$2M Annual Savings',
  },
  {
    title: 'Sustainable Cement Production',
    industry: 'Construction',
    description: 'Implementing CCUS technology to capture emissions at the source.',
    image: 'https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2670&auto=format&fit=crop',
    impact: 'Zero Net Emissions',
  },
]

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('')

  // Tool States
  const [emissionInputs, setEmissionInputs] = useState({ electricity: '', fuel: '' })
  const [emissionResult, setEmissionResult] = useState<number | null>(null)

  const [energyInputs, setEnergyInputs] = useState({ value: '', unit: 'kWh' })
  const [energyResult, setEnergyResult] = useState({ mwh: 0, joules: 0 })

  const [roiInputs, setRoiInputs] = useState({ cost: '', annualSavings: '', years: '5' })
  const [roiResult, setRoiResult] = useState<number | null>(null)

  const filteredRegulations = regulations.filter(r =>
    r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.shortName.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const calculateEmissions = () => {
    const electricity = parseFloat(emissionInputs.electricity) || 0;
    const fuel = parseFloat(emissionInputs.fuel) || 0;
    // Dummy factors: 0.5 kgCO2/kWh, 2.3 kgCO2/L fuel
    const total = (electricity * 0.5) + (fuel * 2.3);
    setEmissionResult(total);
  }

  const calculateEnergy = () => {
    const val = parseFloat(energyInputs.value) || 0;
    if (energyInputs.unit === 'kWh') {
       setEnergyResult({ mwh: val / 1000, joules: val * 3.6e6 })
    } else if (energyInputs.unit === 'MWh') {
       setEnergyResult({ mwh: val, joules: val * 1000 * 3.6e6 })
       // Update input unit display logic if needed but keep simple
    } else if (energyInputs.unit === 'Joules') {
       setEnergyResult({ mwh: val / 3.6e9, joules: val })
    }
  }

  const calculateROI = () => {
    const cost = parseFloat(roiInputs.cost) || 0;
    const savings = parseFloat(roiInputs.annualSavings) || 0;
    const years = parseFloat(roiInputs.years) || 1;
    const totalSavings = savings * years;
    const roi = ((totalSavings - cost) / cost) * 100;
    setRoiResult(roi);
  }

  return (
    <div className="space-y-8 pb-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Resources & Tools</h1>
          <p className="mt-2 text-lg text-gray-500 dark:text-gray-400">Comprehensive guide to regulations, sustainability tools, and learning materials.</p>
        </div>
      </div>

      <Tabs defaultValue="regulations" className="space-y-8">
        <TabsList className="grid h-12 w-full max-w-4xl grid-cols-5 bg-gray-100/50 p-1 dark:bg-gray-800/50">
          <TabsTrigger value="regulations">Regulations</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="learning">Learning</TabsTrigger>
          <TabsTrigger value="casestudies">Case Studies</TabsTrigger>
          <TabsTrigger value="templates">Templates</TabsTrigger>
        </TabsList>

        {/* Regulations */}
        <TabsContent value="regulations" className="space-y-6">
          <div className="flex gap-4">
            <div className="relative flex-1 max-w-lg">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input
                placeholder="Search regulations (e.g., CBAM, EU ETS)..."
                className="pl-9 bg-white dark:bg-gray-900/50"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="grid gap-6">
            {filteredRegulations.map((reg) => (
              <Card key={reg.id} className="overflow-hidden border-0 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 transition-all hover:shadow-md">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between">
                        <div className="flex items-start gap-4">
                          <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-900/20 ring-1 ring-inset ring-blue-100 dark:ring-blue-900/50">
                            <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                          </div>
                          <div>
                            <div className="flex items-center gap-2 mb-1">
                              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{reg.name}</h3>
                              <Badge variant="secondary" className="font-mono text-xs font-normal">{reg.shortName}</Badge>
                            </div>
                            <p className="text-sm text-gray-500 flex items-center gap-2 mb-3">
                              <Globe className="w-3.5 h-3.5" />
                              {reg.jurisdiction}
                              <span className="text-gray-300 dark:text-gray-700">•</span>
                              <Calendar className="w-3.5 h-3.5" />
                              Effective: {formatDate(reg.effectiveDate)}
                            </p>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                              {reg.description}
                            </p>
                            <div className="flex flex-wrap gap-2 mt-4">
                              {reg.affectedIndustries.slice(0, 4).map((industry) => (
                                <Badge key={industry} variant="outline" className="text-xs bg-gray-50 dark:bg-gray-900/50">
                                  {industry}
                                </Badge>
                              ))}
                              {reg.affectedIndustries.length > 4 && (
                                <Badge variant="outline" className="text-xs bg-gray-50 dark:bg-gray-900/50">
                                  +{reg.affectedIndustries.length - 4} more
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>

                      {reg.complianceDeadlines.length > 0 && (
                        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-800">
                          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">Key Compliance Deadlines</p>
                          <div className="flex flex-wrap gap-3">
                            {reg.complianceDeadlines.slice(0, 3).map((deadline, i) => (
                              <div key={i} className={`flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-medium ${
                                deadline.status === 'passed' 
                                  ? 'bg-gray-50 text-gray-600 border-gray-200 dark:bg-gray-900 dark:text-gray-400 dark:border-gray-800'
                                  : 'bg-amber-50 text-amber-700 border-amber-200 dark:bg-amber-900/20 dark:text-amber-400 dark:border-amber-800/50'
                              }`}>
                                <span className="font-bold">{formatDate(deadline.date)}</span>
                                <span className="opacity-75">— {deadline.description.slice(0, 30)}...</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    <div className="w-full md:w-64 bg-gray-50/50 dark:bg-gray-900/20 p-6 border-l border-gray-100 dark:border-gray-800 flex flex-col justify-between">
                      <div className="space-y-4">
                         <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">Official Resources</p>
                         <div className="space-y-2">
                           {reg.resources.slice(0, 3).map((res, i) => (
                             <Link 
                              key={i} 
                              href={res.url} 
                              target="_blank" 
                              className="group flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-500 transition-colors"
                             >
                               <ExternalLink className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-70 group-hover:opacity-100" />
                               <span className="line-clamp-2">{res.title}</span>
                             </Link>
                           ))}
                         </div>
                      </div>
                      
                      {reg.resources[0]?.url && (
                         <Button asChild className="w-full mt-6 gap-2 bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm shadow-emerald-200 dark:shadow-none">
                           <Link href={reg.resources[0].url} target="_blank">
                             Official Portal
                             <ChevronRight className="w-4 h-4" />
                           </Link>
                         </Button>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Tools */}
        <TabsContent value="tools">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Calculator */}
            <Card className="hover:shadow-lg transition-all border-emerald-100 dark:border-emerald-900/50">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-600">
                  <Calculator className="w-6 h-6" />
                </div>
                <CardTitle>Carbon Estimator</CardTitle>
                <CardDescription>Quick assessment of Scope 1 & 2 emissions.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label>Electricity (kWh)</Label>
                  <Input 
                    type="number" 
                    placeholder="e.g. 5000" 
                    value={emissionInputs.electricity}
                    onChange={(e) => setEmissionInputs(p => ({...p, electricity: e.target.value}))}
                  />
                </div>
                <div className="space-y-2">
                  <Label>Fuel (Liters)</Label>
                  <Input 
                    type="number" 
                    placeholder="e.g. 200"
                    value={emissionInputs.fuel}
                    onChange={(e) => setEmissionInputs(p => ({...p, fuel: e.target.value}))}
                  />
                </div>
                {emissionResult !== null && (
                   <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg">
                      <p className="text-sm font-medium text-emerald-800 dark:text-emerald-300">Estimated Emissions:</p>
                      <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">{emissionResult.toFixed(2)} <span className="text-sm text-gray-500">kgCO2e</span></p>
                      <p className="text-xs text-gray-400 mt-1">Based on avg factors: 0.5kg/kWh, 2.3kg/L</p>
                   </div>
                )}
              </CardContent>
              <CardFooter>
                 <Button className="w-full" onClick={calculateEmissions}>Calculate</Button>
              </CardFooter>
            </Card>

            {/* Converter */}
            <Card className="hover:shadow-lg transition-all border-yellow-100 dark:border-yellow-900/50">
               <CardHeader>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600">
                  <RefreshCcw className="w-6 h-6" />
                </div>
                <CardTitle>Unit Converter</CardTitle>
                <CardDescription>Convert energy units instantly.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="space-y-2">
                   <Label>Value</Label>
                   <Input 
                     type="number" 
                     value={energyInputs.value}
                     onChange={(e) => setEnergyInputs(p => ({...p, value: e.target.value}))}
                   />
                 </div>
                 <div className="space-y-2">
                   <Label>Unit</Label>
                   <Select value={energyInputs.unit} onValueChange={(v) => setEnergyInputs(p => ({...p, unit: v}))}>
                     <SelectTrigger><SelectValue /></SelectTrigger>
                     <SelectContent>
                       <SelectItem value="kWh">kWh (Kilowatt-hour)</SelectItem>
                       <SelectItem value="MWh">MWh (Megawatt-hour)</SelectItem>
                       <SelectItem value="Joules">Joules</SelectItem>
                     </SelectContent>
                   </Select>
                 </div>
                 {(energyResult.mwh > 0 || energyResult.joules > 0) && (
                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg space-y-1">
                      <div className="flex justify-between">
                         <span className="text-sm text-gray-600">MWh:</span>
                         <span className="font-bold">{energyResult.mwh.toFixed(4)}</span>
                      </div>
                      <div className="flex justify-between">
                         <span className="text-sm text-gray-600">Joules:</span>
                         <span className="font-bold">{energyResult.joules.toExponential(2)}</span>
                      </div>
                    </div>
                 )}
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-yellow-600 hover:bg-yellow-700 text-white" onClick={calculateEnergy}>Convert</Button>
              </CardFooter>
            </Card>

            {/* ROI */}
            <Card className="hover:shadow-lg transition-all border-blue-100 dark:border-blue-900/50">
               <CardHeader>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 bg-blue-100 dark:bg-blue-900/20 text-blue-600">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
                <CardTitle>ROI Estimator</CardTitle>
                <CardDescription>Calculate return on green investments.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Cost ($)</Label>
                      <Input type="number" value={roiInputs.cost} onChange={(e) => setRoiInputs(p => ({...p, cost: e.target.value}))} />
                    </div>
                    <div className="space-y-2">
                      <Label>Savings/Yr ($)</Label>
                      <Input type="number" value={roiInputs.annualSavings} onChange={(e) => setRoiInputs(p => ({...p, annualSavings: e.target.value}))} />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <Label>Duration (Years)</Label>
                    <Input type="number" value={roiInputs.years} onChange={(e) => setRoiInputs(p => ({...p, years: e.target.value}))} />
                 </div>
                 {roiResult !== null && (
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-center">
                       <p className="text-sm text-blue-800 dark:text-blue-300">Total ROI</p>
                       <p className={`text-3xl font-bold ${roiResult >= 0 ? 'text-green-600' : 'text-red-500'}`}>
                         {roiResult.toFixed(1)}%
                       </p>
                    </div>
                 )}
              </CardContent>
              <CardFooter>
                 <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" onClick={calculateROI}>Calculate ROI</Button>
              </CardFooter>
            </Card>

          </div>
        </TabsContent>

        {/* Case Studies */}
        <TabsContent value="casestudies">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             {caseStudies.map((study, index) => (
               <Card key={index} className="overflow-hidden border-0 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800 hover:shadow-md transition-all">
                  <div className="aspect-video w-full bg-gray-100 dark:bg-gray-800 relative">
                    {/* In a real app, this would be a proper Next.js Image component */}
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="object-cover w-full h-full opacity-90 hover:opacity-100 transition-opacity"
                    />
                    <div className="absolute top-3 left-3">
                      <Badge className="bg-white/90 text-gray-900 border-none shadow-sm dark:bg-black/80 dark:text-white backdrop-blur-sm">
                        {study.industry}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-5">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-1 mb-2">{study.title}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 line-clamp-3 mb-4">
                      {study.description}
                    </p>
                    <div className="flex items-center gap-2 p-3 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-400">
                      <TrendIcon className="w-4 h-4" />
                      <span className="text-sm font-semibold">{study.impact}</span>
                    </div>
                  </CardContent>
                  <CardFooter className="p-5 pt-0">
                    <Button variant="outline" className="w-full">Read Full Story</Button>
                  </CardFooter>
               </Card>
             ))}
           </div>
        </TabsContent>

        {/* Learning Center */}
        <TabsContent value="learning">
          <div className="grid gap-6 md:grid-cols-2">
            {learningResources.map((resource) => (
              <a 
                key={resource.title}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div
                  className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 hover:border-emerald-500/50 hover:shadow-lg dark:hover:shadow-emerald-900/10 transition-all duration-300"
                >
                  <div className="flex items-start gap-5">
                    <div className={`p-4 rounded-xl flex-shrink-0 ${
                      resource.type === 'Video'
                        ? 'bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400'
                        : 'bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400'
                    }`}>
                      {resource.type === 'Video' ? (
                        <Video className="w-6 h-6" />
                      ) : (
                        <BookOpen className="w-6 h-6" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-lg text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors truncate">
                        {resource.title}
                      </h3>
                      <div className="flex items-center gap-3 mt-2">
                        <Badge variant="secondary" className="font-normal">{resource.type}</Badge>
                        <span className="text-sm text-gray-500">{resource.duration}</span>
                      </div>
                      <div className="flex items-center justify-between mt-4">
                        <Badge
                          variant={
                            resource.level === 'Beginner' ? 'success' :
                            resource.level === 'Intermediate' ? 'warning' : 'destructive'
                          }
                          className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-semibold"
                        >
                          {resource.level}
                        </Badge>
                        <span className="flex items-center text-xs font-medium text-gray-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                          Open Resource <ExternalLink className="w-3 h-3 ml-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </TabsContent>

        {/* Templates */}
        <TabsContent value="templates">
          <Card className="border-0 shadow-sm ring-1 ring-gray-200 dark:ring-gray-800">
            <CardHeader>
              <CardTitle>Downloadable Templates</CardTitle>
              <CardDescription>Ready-to-use documents for carbon management</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {templates.map((template) => (
                  <div
                    key={template.name}
                    className="flex items-center justify-between p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-700 shadow-sm">
                        <FileText className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">{template.name}</p>
                        <p className="text-sm text-gray-500">
                          {template.type} • {template.downloads.toLocaleString()} downloads
                        </p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="gap-2 group-hover:border-emerald-200 dark:group-hover:border-emerald-800 group-hover:text-emerald-700 dark:group-hover:text-emerald-300">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function TrendIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  )
}
