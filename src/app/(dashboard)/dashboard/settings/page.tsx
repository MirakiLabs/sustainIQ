'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  Building2,
  User,
  Bell,
  Key,
  CreditCard,
  Download,
  Plus,
  Trash2,
  Edit,
  Shield,
} from 'lucide-react'
import { useAuthStore } from '@/lib/store/auth-store'
import { facilities } from '@/lib/dummy-data'

const teamMembers = [
  { id: 1, name: 'John Anderson', email: 'john@sustainiq.com', role: 'admin', status: 'active' },
  { id: 2, name: 'Sarah Miller', email: 'sarah@sustainiq.com', role: 'manager', status: 'active' },
  { id: 3, name: 'Mike Chen', email: 'mike@sustainiq.com', role: 'analyst', status: 'active' },
  { id: 4, name: 'Emily Brown', email: 'emily@sustainiq.com', role: 'viewer', status: 'invited' },
]

export default function SettingsPage() {
  const { user } = useAuthStore()
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    emailReports: true,
    emailDigest: false,
    inAppAlerts: true,
    smsAlerts: false,
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Settings</h1>
        <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400">Manage your account and organization settings</p>
      </div>

      <Tabs defaultValue="organization" className="space-y-6">
        <div className="overflow-x-auto -mx-3 px-3 sm:mx-0 sm:px-0 no-scrollbar">
          <TabsList className="w-max sm:w-auto">
            <TabsTrigger value="organization" className="text-xs sm:text-sm">Organization</TabsTrigger>
            <TabsTrigger value="facilities" className="text-xs sm:text-sm">Facilities</TabsTrigger>
            <TabsTrigger value="team" className="text-xs sm:text-sm">Team</TabsTrigger>
            <TabsTrigger value="notifications" className="text-xs sm:text-sm">Notifications</TabsTrigger>
            <TabsTrigger value="api" className="text-xs sm:text-sm">API</TabsTrigger>
            <TabsTrigger value="billing" className="text-xs sm:text-sm">Billing</TabsTrigger>
          </TabsList>
        </div>

        {/* Organization Settings */}
        <TabsContent value="organization">
          <Card>
            <CardHeader>
              <CardTitle>Organization Profile</CardTitle>
              <CardDescription>Manage your company information</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-10 h-10 sm:w-12 sm:h-12 text-emerald-600" />
                </div>
                <div>
                  <Button variant="outline" size="sm">Upload Logo</Button>
                  <p className="text-xs text-gray-500 mt-1">PNG, JPG up to 2MB</p>
                </div>
              </div>

              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Company Name</Label>
                  <Input defaultValue={user?.company || 'GreenTech Manufacturing Co.'} />
                </div>
                <div className="space-y-2">
                  <Label>Industry Sector</Label>
                  <Select defaultValue="manufacturing">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="manufacturing">Manufacturing</SelectItem>
                      <SelectItem value="energy">Energy & Utilities</SelectItem>
                      <SelectItem value="automotive">Automotive</SelectItem>
                      <SelectItem value="chemicals">Chemicals</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label>Headquarters</Label>
                  <Input defaultValue="Munich, Germany" />
                </div>
                <div className="space-y-2">
                  <Label>Number of Employees</Label>
                  <Select defaultValue="5000-10000">
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1-50">1-50</SelectItem>
                      <SelectItem value="51-200">51-200</SelectItem>
                      <SelectItem value="201-1000">201-1,000</SelectItem>
                      <SelectItem value="1000-5000">1,000-5,000</SelectItem>
                      <SelectItem value="5000-10000">5,000-10,000</SelectItem>
                      <SelectItem value="10000+">10,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Company Description</Label>
                <textarea
                  className="w-full min-h-[100px] px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-950 text-sm"
                  defaultValue="Leading manufacturer of sustainable industrial equipment with operations across Europe and Asia."
                />
              </div>

              <Button>Save Changes</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Facilities */}
        <TabsContent value="facilities">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Facilities Management</CardTitle>
                <CardDescription>Manage your registered facilities</CardDescription>
              </div>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Add Facility
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-6 px-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Facility Name</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Location</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {facilities.slice(0, 6).map((facility) => (
                    <TableRow key={facility.id}>
                      <TableCell className="font-medium">{facility.name}</TableCell>
                      <TableCell>{facility.type}</TableCell>
                      <TableCell>{facility.location.city}, {facility.location.country}</TableCell>
                      <TableCell>
                        <Badge variant={facility.status === 'normal' ? 'success' : facility.status === 'warning' ? 'warning' : 'destructive'}>
                          {facility.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="icon">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Team */}
        <TabsContent value="team">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Team Members</CardTitle>
                <CardDescription>Manage user access and permissions</CardDescription>
              </div>
              <Button className="gap-2">
                <Plus className="w-4 h-4" />
                Invite User
              </Button>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto -mx-6 px-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {teamMembers.map((member) => (
                    <TableRow key={member.id}>
                      <TableCell className="font-medium">{member.name}</TableCell>
                      <TableCell>{member.email}</TableCell>
                      <TableCell>
                        <Badge variant="secondary" className="capitalize">{member.role}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant={member.status === 'active' ? 'success' : 'warning'}>
                          {member.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="ghost" size="icon">
                          <Edit className="w-4 h-4" />
                        </Button>
                        {member.role !== 'admin' && (
                          <Button variant="ghost" size="icon">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Notifications */}
        <TabsContent value="notifications">
          <Card>
            <CardHeader>
              <CardTitle>Notification Preferences</CardTitle>
              <CardDescription>Choose how you want to be notified</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-medium">Email Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Alert Notifications</p>
                      <p className="text-sm text-gray-500">Receive emails when alerts are triggered</p>
                    </div>
                    <Switch
                      checked={notifications.emailAlerts}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, emailAlerts: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Weekly Reports</p>
                      <p className="text-sm text-gray-500">Receive weekly summary reports</p>
                    </div>
                    <Switch
                      checked={notifications.emailReports}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, emailReports: checked })}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium">Daily Digest</p>
                      <p className="text-sm text-gray-500">Receive daily activity summary</p>
                    </div>
                    <Switch
                      checked={notifications.emailDigest}
                      onCheckedChange={(checked) => setNotifications({ ...notifications, emailDigest: checked })}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">In-App Notifications</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Push Notifications</p>
                    <p className="text-sm text-gray-500">Show in-app notification popups</p>
                  </div>
                  <Switch
                    checked={notifications.inAppAlerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, inAppAlerts: checked })}
                  />
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">SMS Notifications</h3>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">Critical Alerts Only</p>
                    <p className="text-sm text-gray-500">Receive SMS for critical alerts</p>
                  </div>
                  <Switch
                    checked={notifications.smsAlerts}
                    onCheckedChange={(checked) => setNotifications({ ...notifications, smsAlerts: checked })}
                  />
                </div>
              </div>

              <Button>Save Preferences</Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* API */}
        <TabsContent value="api">
          <Card>
            <CardHeader>
              <CardTitle>API & Integrations</CardTitle>
              <CardDescription>Manage API keys and third-party integrations</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Key className="w-5 h-5 text-gray-500" />
                    <div>
                      <p className="font-medium">API Key</p>
                      <p className="text-sm text-gray-500">Use this key for API authentication</p>
                    </div>
                  </div>
                  <Badge variant="success">Active</Badge>
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input value="sk_live_••••••••••••••••••••••••••••" readOnly className="font-mono text-sm" />
                  <div className="flex gap-2 flex-shrink-0">
                    <Button variant="outline" size="sm">Copy</Button>
                    <Button variant="outline" size="sm">Regenerate</Button>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="font-medium">Connected Integrations</h3>
                <div className="space-y-3">
                  {['SAP ERP', 'Microsoft Power BI', 'Salesforce'].map((integration) => (
                    <div key={integration} className="flex items-center justify-between p-3 rounded-lg border border-gray-200 dark:border-gray-800">
                      <div className="flex items-center gap-3">
                        <Shield className="w-5 h-5 text-emerald-500" />
                        <span>{integration}</span>
                      </div>
                      <Badge variant="success">Connected</Badge>
                    </div>
                  ))}
                </div>
              </div>

              <Button variant="outline" className="gap-2">
                <Plus className="w-4 h-4" />
                Add Integration
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Billing */}
        <TabsContent value="billing">
          <Card>
            <CardHeader>
              <CardTitle>Billing & Subscription</CardTitle>
              <CardDescription>Manage your subscription and billing details</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="p-6 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p className="text-emerald-100">Current Plan</p>
                    <p className="text-2xl font-bold">Professional</p>
                  </div>
                  <Badge className="bg-white/20 text-white">Active</Badge>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mt-4">
                  <div>
                    <p className="text-emerald-100 text-sm">Facilities</p>
                    <p className="text-xl font-bold">12 / 25</p>
                  </div>
                  <div>
                    <p className="text-emerald-100 text-sm">Users</p>
                    <p className="text-xl font-bold">4 / 10</p>
                  </div>
                  <div>
                    <p className="text-emerald-100 text-sm">API Calls</p>
                    <p className="text-xl font-bold">45K / 100K</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 rounded-lg border border-gray-200 dark:border-gray-800">
                <div className="flex items-center gap-3">
                  <CreditCard className="w-5 h-5 text-gray-500" />
                  <div>
                    <p className="font-medium">Payment Method</p>
                    <p className="text-sm text-gray-500">Visa ending in 4242</p>
                  </div>
                </div>
                <Button variant="outline" size="sm">Update</Button>
              </div>

              <div className="flex gap-2">
                <Button variant="outline">View Invoices</Button>
                <Button>Upgrade Plan</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
