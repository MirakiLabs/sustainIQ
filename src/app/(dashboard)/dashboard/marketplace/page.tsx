'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Search,
  Filter,
  Leaf,
  Wind,
  Sun,
  TreePine,
  Factory,
  MapPin,
  Shield,
  Star,
  ShoppingCart,
  TrendingUp,
} from 'lucide-react'
import { carbonCredits, getCreditPriceTrends } from '@/lib/dummy-data'
import { formatCurrency, formatNumber } from '@/lib/utils'
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts'

const PROJECT_TYPE_ICONS: Record<string, React.ElementType> = {
  'Renewable Energy': Wind,
  'Forestry & Conservation': TreePine,
  'Direct Air Capture': Factory,
  'Blue Carbon': Leaf,
  'Methane Capture': Factory,
  'Cookstove Distribution': Sun,
  'Energy Efficiency': Sun,
}

export default function MarketplacePage() {
  const [searchQuery, setSearchQuery] = useState('')
  const [projectTypeFilter, setProjectTypeFilter] = useState('all')
  const [certificationFilter, setCertificationFilter] = useState('all')
  const [priceRange, setPriceRange] = useState([0, 100])
  const [selectedCredit, setSelectedCredit] = useState<typeof carbonCredits[0] | null>(null)

  const filteredCredits = carbonCredits.filter((credit) => {
    if (searchQuery && !credit.projectName.toLowerCase().includes(searchQuery.toLowerCase())) return false
    if (projectTypeFilter !== 'all' && credit.projectType !== projectTypeFilter) return false
    if (certificationFilter !== 'all' && credit.certification !== certificationFilter) return false
    if (credit.pricePerCredit < priceRange[0] || credit.pricePerCredit > priceRange[1]) return false
    return true
  })

  const featuredCredits = carbonCredits.filter(c => c.featured)
  const priceTrends = getCreditPriceTrends()

  const projectTypes = [...new Set(carbonCredits.map(c => c.projectType))]
  const certifications = [...new Set(carbonCredits.map(c => c.certification))]

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Carbon Credit Marketplace</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Browse and purchase verified carbon credits</p>
        </div>
        <Button className="gap-2 w-fit" size="sm">
          <ShoppingCart className="w-4 h-4" />
          Cart (0)
        </Button>
      </div>

      {/* Featured Projects Carousel */}
      <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {featuredCredits.map((credit) => {
          const Icon = PROJECT_TYPE_ICONS[credit.projectType] || Leaf
          return (
            <Card key={credit.id} className="overflow-hidden border-emerald-200 dark:border-emerald-800">
              <div className="h-32 bg-gradient-to-br from-emerald-500 to-teal-600 p-4 flex flex-col justify-between">
                <Badge className="w-fit bg-white/20 text-white hover:bg-white/30">Featured</Badge>
                <div>
                  <p className="text-white/80 text-sm">{credit.projectType}</p>
                  <p className="text-white font-semibold">{credit.projectName}</p>
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4" />
                    {credit.location.country}
                  </div>
                  <Badge variant="secondary">{credit.certification}</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-emerald-600">{formatCurrency(credit.pricePerCredit)}</p>
                    <p className="text-xs text-gray-500">per credit</p>
                  </div>
                  <Button size="sm">Buy Now</Button>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid gap-4 sm:gap-6 lg:grid-cols-4">
        {/* Filters Sidebar */}
        <Card className="lg:col-span-1 h-fit order-2 lg:order-1">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-medium">Search</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search projects..."
                  className="pl-9"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Project Type</label>
              <Select value={projectTypeFilter} onValueChange={setProjectTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  {projectTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Certification</label>
              <Select value={certificationFilter} onValueChange={setCertificationFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="All certifications" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Certifications</SelectItem>
                  {certifications.map((cert) => (
                    <SelectItem key={cert} value={cert}>{cert}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between">
                <label className="text-sm font-medium">Price Range</label>
                <span className="text-sm text-gray-500">
                  €{priceRange[0]} - €{priceRange[1]}
                </span>
              </div>
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                min={0}
                max={100}
                step={5}
              />
            </div>

            <Button variant="outline" className="w-full" onClick={() => {
              setSearchQuery('')
              setProjectTypeFilter('all')
              setCertificationFilter('all')
              setPriceRange([0, 100])
            }}>
              Clear Filters
            </Button>
          </CardContent>
        </Card>

        {/* Credit Listings */}
        <div className="lg:col-span-3 space-y-4 order-1 lg:order-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-500">{filteredCredits.length} projects found</p>
            <Select defaultValue="price-low">
              <SelectTrigger className="w-40">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="newest">Newest First</SelectItem>
                <SelectItem value="popular">Most Popular</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid gap-3 sm:gap-4 grid-cols-1 md:grid-cols-2">
            {filteredCredits.map((credit) => {
              const Icon = PROJECT_TYPE_ICONS[credit.projectType] || Leaf
              return (
                <Card key={credit.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <p className="font-semibold text-gray-900 dark:text-white truncate">
                              {credit.projectName}
                            </p>
                            <p className="text-sm text-gray-500">{credit.projectType}</p>
                          </div>
                          <Badge variant="secondary">{credit.certification}</Badge>
                        </div>
                        <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {credit.location.country}
                          </span>
                          <span>Vintage: {credit.vintage}</span>
                        </div>
                        <div className="flex items-center justify-between mt-4">
                          <div>
                            <p className="text-xl font-bold text-emerald-600">
                              {formatCurrency(credit.pricePerCredit)}
                            </p>
                            <p className="text-xs text-gray-500">
                              {formatNumber(credit.availableCredits)} available
                            </p>
                          </div>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button size="sm" onClick={() => setSelectedCredit(credit)}>
                                View Details
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto mx-4">
                              <DialogHeader>
                                <DialogTitle>{credit.projectName}</DialogTitle>
                                <DialogDescription>{credit.projectType}</DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <p className="text-gray-600 dark:text-gray-400">{credit.description}</p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                                    <p className="text-sm text-gray-500">Location</p>
                                    <p className="font-medium">{credit.location.country}</p>
                                  </div>
                                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                                    <p className="text-sm text-gray-500">Certification</p>
                                    <p className="font-medium">{credit.certification}</p>
                                  </div>
                                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                                    <p className="text-sm text-gray-500">Methodology</p>
                                    <p className="font-medium text-sm">{credit.methodology}</p>
                                  </div>
                                  <div className="p-3 rounded-lg bg-gray-50 dark:bg-gray-800">
                                    <p className="text-sm text-gray-500">Vintage</p>
                                    <p className="font-medium">{credit.vintage}</p>
                                  </div>
                                </div>
                                <div className="flex items-center justify-between p-4 rounded-lg bg-emerald-50 dark:bg-emerald-900/30">
                                  <div>
                                    <p className="text-sm text-emerald-600">Price per Credit</p>
                                    <p className="text-2xl font-bold text-emerald-700">{formatCurrency(credit.pricePerCredit)}</p>
                                  </div>
                                  <div>
                                    <p className="text-sm text-emerald-600">Available</p>
                                    <p className="text-2xl font-bold text-emerald-700">{formatNumber(credit.availableCredits)}</p>
                                  </div>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button variant="outline">Add to Cart</Button>
                                <Button>Purchase Now</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </div>

      {/* Price Trends */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-600" />
            Carbon Credit Price Trends
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-48 sm:h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={priceTrends}>
                <XAxis dataKey="month" className="text-xs" />
                <YAxis className="text-xs" />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Forestry" stroke="#10B981" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Renewable Energy" stroke="#3B82F6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Direct Air Capture" stroke="#8B5CF6" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="Blue Carbon" stroke="#06B6D4" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
