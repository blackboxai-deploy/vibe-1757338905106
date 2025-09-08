'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('bookings')

  // Sample user data
  const user = {
    customerId: 'ABHI-001234',
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+91 9876543210',
    totalBookings: 12,
    totalSpent: 1547
  }

  // Sample bookings data
  const bookings = [
    {
      id: 'BK001',
      service: 'Home Cleaning',
      date: '2024-01-15',
      time: '10:00 AM',
      duration: '3 hours',
      cost: 117,
      status: 'completed',
      address: '123 Main Street, Andheri West, Mumbai'
    },
    {
      id: 'BK002',
      service: 'Office Cleaning',
      date: '2024-01-18',
      time: '2:00 PM',
      duration: '4 hours',
      cost: 156,
      status: 'in-progress',
      address: '456 Business Park, BKC, Mumbai'
    },
    {
      id: 'BK003',
      service: 'Cooking Services',
      date: '2024-01-20',
      time: '6:00 PM',
      duration: '2 hours',
      cost: 78,
      status: 'upcoming',
      address: '789 Residency, Bandra West, Mumbai'
    }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800'
      case 'in-progress': return 'bg-blue-100 text-blue-800'
      case 'upcoming': return 'bg-yellow-100 text-yellow-800'
      case 'cancelled': return 'bg-red-100 text-red-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed': return '✅'
      case 'in-progress': return '🔄'
      case 'upcoming': return '⏰'
      case 'cancelled': return '❌'
      default: return '📋'
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
              <p className="text-gray-600 mt-1">Welcome back, {user.name}!</p>
            </div>
            <Link href="/booking">
              <Button className="bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                Book New Service
              </Button>
            </Link>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100">Customer ID</p>
                  <p className="text-xl font-bold">{user.customerId}</p>
                </div>
                <div className="text-3xl">👤</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100">Total Bookings</p>
                  <p className="text-2xl font-bold">{user.totalBookings}</p>
                </div>
                <div className="text-3xl">📊</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100">Total Spent</p>
                  <p className="text-2xl font-bold">₹{user.totalSpent}</p>
                </div>
                <div className="text-3xl">💰</div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100">Active Services</p>
                  <p className="text-2xl font-bold">2</p>
                </div>
                <div className="text-3xl">🚀</div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="bookings">My Bookings</TabsTrigger>
                <TabsTrigger value="history">History</TabsTrigger>
                <TabsTrigger value="profile">Profile</TabsTrigger>
              </TabsList>

              {/* Bookings Tab */}
              <TabsContent value="bookings" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                    <CardDescription>Your latest service bookings</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {bookings.map((booking) => (
                        <Card key={booking.id} className="border-l-4 border-l-blue-500">
                          <CardContent className="p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <div className="flex items-center space-x-3 mb-2">
                                  <h3 className="font-semibold text-gray-800">{booking.service}</h3>
                                  <Badge className={getStatusColor(booking.status)}>
                                    {getStatusIcon(booking.status)} {booking.status}
                                  </Badge>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-600">
                                  <div>
                                    <p><span className="font-medium">Date:</span> {booking.date}</p>
                                    <p><span className="font-medium">Time:</span> {booking.time}</p>
                                    <p><span className="font-medium">Duration:</span> {booking.duration}</p>
                                  </div>
                                  <div>
                                    <p><span className="font-medium">Cost:</span> ₹{booking.cost}</p>
                                    <p><span className="font-medium">Booking ID:</span> {booking.id}</p>
                                  </div>
                                </div>
                                <p className="text-sm text-gray-500 mt-2">
                                  <span className="font-medium">Address:</span> {booking.address}
                                </p>
                              </div>
                              <div className="flex flex-col space-y-2 ml-4">
                                {booking.status === 'upcoming' && (
                                  <>
                                    <Button size="sm" variant="outline">
                                      Reschedule
                                    </Button>
                                    <Button size="sm" variant="outline" className="text-red-600 hover:text-red-700">
                                      Cancel
                                    </Button>
                                  </>
                                )}
                                {booking.status === 'completed' && (
                                  <Button size="sm" variant="outline">
                                    Rate Service
                                  </Button>
                                )}
                                {booking.status === 'in-progress' && (
                                  <Button size="sm" variant="outline">
                                    Track Service
                                  </Button>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* History Tab */}
              <TabsContent value="history" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Service History</CardTitle>
                    <CardDescription>All your past bookings and transactions</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {bookings.filter(b => b.status === 'completed').map((booking) => (
                        <div key={booking.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                          <div>
                            <p className="font-medium">{booking.service}</p>
                            <p className="text-sm text-gray-600">{booking.date} - {booking.duration}</p>
                          </div>
                          <div className="text-right">
                            <p className="font-semibold text-green-600">₹{booking.cost}</p>
                            <p className="text-xs text-gray-500">Completed</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              {/* Profile Tab */}
              <TabsContent value="profile" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>Manage your account details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium text-gray-700">Customer ID</label>
                        <p className="text-lg font-semibold text-blue-600">{user.customerId}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Full Name</label>
                        <p className="text-lg">{user.name}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Email</label>
                        <p className="text-lg">{user.email}</p>
                      </div>
                      <div>
                        <label className="text-sm font-medium text-gray-700">Phone</label>
                        <p className="text-lg">{user.phone}</p>
                      </div>
                    </div>
                    <div className="pt-4">
                      <Button className="bg-blue-600 hover:bg-blue-700">
                        Edit Profile
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/booking">
                  <Button className="w-full justify-start bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
                    <span className="mr-2">📅</span>
                    Book New Service
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <span className="mr-2">📞</span>
                  Contact Support
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <span className="mr-2">💳</span>
                  Payment History
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <span className="mr-2">⚙️</span>
                  Account Settings
                </Button>
              </CardContent>
            </Card>

            {/* Current Offers */}
            <Card className="bg-gradient-to-r from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-lg text-green-800">Special Offers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded-lg border border-green-200">
                    <p className="font-semibold text-green-800">First Time Bonus</p>
                    <p className="text-sm text-green-600">Get 20% off on your next booking</p>
                    <Button size="sm" className="mt-2 bg-green-600 hover:bg-green-700">
                      Apply Now
                    </Button>
                  </div>
                  <div className="bg-white p-3 rounded-lg border border-blue-200">
                    <p className="font-semibold text-blue-800">Refer & Earn</p>
                    <p className="text-sm text-blue-600">Earn ₹50 for each referral</p>
                    <Button size="sm" variant="outline" className="mt-2 border-blue-600 text-blue-600">
                      Refer Now
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Help & Support */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Need Help?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">📞</span>
                    <div>
                      <p className="font-medium">Call Support</p>
                      <p className="text-gray-600">+91 9876543210</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">💬</span>
                    <div>
                      <p className="font-medium">Live Chat</p>
                      <p className="text-gray-600">Available 24/7</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="text-xl">📧</span>
                    <div>
                      <p className="font-medium">Email Support</p>
                      <p className="text-gray-600">help@abhimaids.com</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}