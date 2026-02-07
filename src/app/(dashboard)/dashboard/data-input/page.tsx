'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  FileInput,
  Upload,
  Wifi,
  WifiOff,
  CheckCircle,
  AlertCircle,
  FileSpreadsheet,
  Database,
  Clock,
  Plus,
} from 'lucide-react'
import { facilities } from '@/lib/dummy-data'
import { cn, formatDateTime } from '@/lib/utils'

const importHistory = [
  { id: 1, source: 'CSV Upload', filename: 'emissions_jan_2024.csv', records: 1250, date: '2024-01-15T14:30:00Z', status: 'completed' },
  { id: 2, source: 'API Sync', filename: 'IoT Sensors - Stuttgart', records: 8640, date: '2024-01-15T12:00:00Z', status: 'completed' },
  { id: 3, source: 'Manual Entry', filename: 'Munich Assembly - Dec', records: 45, date: '2024-01-14T09:15:00Z', status: 'completed' },
  { id: 4, source: 'CSV Upload', filename: 'transport_data.csv', records: 320, date: '2024-01-13T16:45:00Z', status: 'failed' },
  { id: 5, source: 'ERP Integration', filename: 'SAP Export - Q4', records: 4520, date: '2024-01-12T10:00:00Z', status: 'completed' },
]

const iotSensors = [
  { id: 1, name: 'Stuttgart - Main Meter', type: 'Energy', status: 'online', lastData: '2024-01-15T10:29:45Z' },
  { id: 2, name: 'Stuttgart - Boiler 1', type: 'Emissions', status: 'online', lastData: '2024-01-15T10:29:30Z' },
  { id: 3, name: 'Munich - Assembly Line', type: 'Production', status: 'online', lastData: '2024-01-15T10:28:15Z' },
  { id: 4, name: 'Lyon - Reactor Monitor', type: 'Emissions', status: 'warning', lastData: '2024-01-15T10:15:00Z' },
  { id: 5, name: 'Detroit - Paint Shop', type: 'VOC', status: 'online', lastData: '2024-01-15T10:29:00Z' },
  { id: 6, name: 'Chennai - Steam Meter', type: 'Energy', status: 'offline', lastData: '2024-01-14T23:45:00Z' },
]

export default function DataInputPage() {
  const [selectedFacility, setSelectedFacility] = useState('')

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Data Input</h1>
          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Manage emission data entry and integrations</p>
        </div>
        <Button className="gap-2 w-fit" size="sm">
          <Plus className="w-4 h-4" />
          Add Data Source
        </Button>
      </div>

      <Tabs defaultValue="manual" className="space-y-6">
        <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0 no-scrollbar">
          <TabsList className="w-max sm:w-auto">
            <TabsTrigger value="manual" className="text-xs sm:text-sm">Manual Entry</TabsTrigger>
            <TabsTrigger value="upload" className="text-xs sm:text-sm">CSV Upload</TabsTrigger>
            <TabsTrigger value="iot" className="text-xs sm:text-sm">IoT Sensors</TabsTrigger>
            <TabsTrigger value="api" className="text-xs sm:text-sm">API</TabsTrigger>
          </TabsList>
        </div>

        {/* Manual Entry */}
        <TabsContent value="manual">
          <Card>
            <CardHeader>
              <CardTitle>Manual Data Entry</CardTitle>
              <CardDescription>Enter emission data manually for your facilities</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-6">
                <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label>Facility</Label>
                    <Select value={selectedFacility} onValueChange={setSelectedFacility}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select facility" />
                      </SelectTrigger>
                      <SelectContent>
                        {facilities.map((f) => (
                          <SelectItem key={f.id} value={f.id}>{f.name}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Reporting Period</Label>
                    <Input type="month" />
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-4">
                  <h4 className="font-medium">Energy Consumption</h4>
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label>Grid Electricity (kWh)</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label>Natural Gas (m³)</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label>Diesel (liters)</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-4">
                  <h4 className="font-medium">Process Emissions</h4>
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label>Production Volume (units)</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label>Waste Generated (kg)</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label>Water Usage (m³)</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                  </div>
                </div>

                <div className="border rounded-lg p-4 space-y-4">
                  <h4 className="font-medium">Transportation</h4>
                  <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                    <div className="space-y-2">
                      <Label>Truck km</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label>Rail km</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                    <div className="space-y-2">
                      <Label>Air km</Label>
                      <Input type="number" placeholder="0" />
                    </div>
                  </div>
                </div>

                <div className="flex justify-end gap-2">
                  <Button variant="outline">Save Draft</Button>
                  <Button>Submit Data</Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        {/* CSV Upload */}
        <TabsContent value="upload">
          <Card>
            <CardHeader>
              <CardTitle>CSV Upload</CardTitle>
              <CardDescription>Upload emission data from spreadsheets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-xl p-6 sm:p-12 text-center">
                <FileSpreadsheet className="w-12 h-12 mx-auto text-gray-400 mb-4" />
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  Drop your CSV file here
                </p>
                <p className="text-sm text-gray-500 mb-4">or click to browse</p>
                <Button variant="outline" className="gap-2">
                  <Upload className="w-4 h-4" />
                  Select File
                </Button>
                <p className="text-xs text-gray-400 mt-4">
                  Supported formats: CSV, XLS, XLSX (max 10MB)
                </p>
              </div>
              <div className="mt-6">
                <Button variant="link" className="gap-2 p-0">
                  <FileInput className="w-4 h-4" />
                  Download template file
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* IoT Sensors */}
        <TabsContent value="iot">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>IoT Connection Status</CardTitle>
                <CardDescription>Monitor connected sensors and meters</CardDescription>
              </div>
              <Button variant="outline" className="gap-2">
                <Plus className="w-4 h-4" />
                Add Sensor
              </Button>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                {iotSensors.map((sensor) => (
                  <div
                    key={sensor.id}
                    className={cn(
                      'p-4 rounded-xl border',
                      sensor.status === 'online' && 'border-emerald-200 dark:border-emerald-800',
                      sensor.status === 'warning' && 'border-amber-200 dark:border-amber-800',
                      sensor.status === 'offline' && 'border-red-200 dark:border-red-800'
                    )}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        {sensor.status === 'online' ? (
                          <Wifi className="w-4 h-4 text-emerald-500" />
                        ) : sensor.status === 'warning' ? (
                          <Wifi className="w-4 h-4 text-amber-500" />
                        ) : (
                          <WifiOff className="w-4 h-4 text-red-500" />
                        )}
                        <Badge variant={
                          sensor.status === 'online' ? 'success' :
                          sensor.status === 'warning' ? 'warning' : 'destructive'
                        }>
                          {sensor.status}
                        </Badge>
                      </div>
                      <Badge variant="secondary">{sensor.type}</Badge>
                    </div>
                    <p className="font-medium text-gray-900 dark:text-white">{sensor.name}</p>
                    <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      Last data: {formatDateTime(sensor.lastData)}
                    </p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API Integration */}
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API Integration</CardTitle>
              <CardDescription>Connect external systems via API</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center flex-shrink-0">
                      <Database className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">REST API</p>
                      <p className="text-sm text-gray-500">Push data programmatically</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">View Documentation</Button>
                </div>
                <div className="p-4 rounded-xl border">
                  <p className="font-medium mb-2">Your API Key</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Input value="sk_live_••••••••••••••••••••" readOnly className="font-mono text-sm" />
                    <Button variant="outline" size="sm" className="flex-shrink-0">Regenerate</Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Keep this key secret. Never share it publicly.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Import History */}
      <Card>
        <CardHeader>
          <CardTitle>Import History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto -mx-6 px-6">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Source</TableHead>
                <TableHead>File/Description</TableHead>
                <TableHead className="text-right">Records</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {importHistory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <Badge variant="secondary">{item.source}</Badge>
                  </TableCell>
                  <TableCell>{item.filename}</TableCell>
                  <TableCell className="text-right">{item.records.toLocaleString()}</TableCell>
                  <TableCell>{formatDateTime(item.date)}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      {item.status === 'completed' ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-red-500" />
                      )}
                      <span className={item.status === 'completed' ? 'text-emerald-600' : 'text-red-600'}>
                        {item.status}
                      </span>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
