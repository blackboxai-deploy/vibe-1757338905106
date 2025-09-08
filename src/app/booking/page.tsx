'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'

export default function BookingPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [bookingData, setBookingData] = useState({
    service: '',
    serviceType: '',
    date: '',
    time: '',
    duration: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
    specialRequests: '',
    totalCost: 0
  })

  const services = [
    { id: 'home-cleaning', name: 'Home Cleaning', baseRate: 39 },
    { id: 'office-cleaning', name: 'Office Cleaning', baseRate: 39 },
    { id: 'mall-cleaning', name: 'Mall Cleaning', baseRate: 39 },
    { id: 'hospital-cleaning', name: 'Hospital Cleaning', baseRate: 39 },
    { id: 'cooking', name: 'Cooking Services', baseRate: 39 }
  ]

  const timeSlots = [
    '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM'
  ]

  const cities = [
    'Mumbai', 'Delhi', 'Bangalore', 'Hyderabad', 'Chennai', 'Kolkata',
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow'
  ]

  const calculateCost = () => {
    const duration = parseInt(bookingData.duration) || 0
    const selectedService = services.find(s => s.id === bookingData.service)
    const baseRate = selectedService?.baseRate || 39
    return duration * baseRate
  }

  const handleInputChange = (field: string, value: string) => {
    setBookingData(prev => {
      const updated = { ...prev, [field]: value }
      if (field === 'duration' || field === 'service') {
        const duration = field === 'duration' ? parseInt(value) || 0 : parseInt(prev.duration) || 0
        const selectedService = services.find(s => s.id === (field === 'service' ? value : prev.service))
        const baseRate = selectedService?.baseRate || 39
        updated.totalCost = duration * baseRate
      }
      return updated
    })
  }

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = () => {
    // Redirect to payment page
    window.location.href = '/payment'
  }

  const renderStepIndicator = () => (
    <div className="flex items-center justify-center mb-8">
      {[1, 2, 3].map((step) => (
        <div key={step} className="flex items-center">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${
              step === currentStep
                ? 'bg-blue-600 text-white'
                : step < currentStep
                ? 'bg-green-600 text-white'
                : 'bg-gray-200 text-gray-600'
            }`}
          >
            {step < currentStep ? '✓' : step}
          </div>
          {step < 3 && (
            <div className={`w-16 h-1 mx-2 ${step < currentStep ? 'bg-green-600' : 'bg-gray-200'}`} />
          )}
        </div>
      ))}
    </div>
  )

  const renderStep1 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Select Service</h2>
        <p className="text-gray-600">Choose the service you need</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {services.map((service) => (
          <Card
            key={service.id}
            className={`cursor-pointer transition-all hover:shadow-lg ${
              bookingData.service === service.id
                ? 'ring-2 ring-blue-600 bg-blue-50'
                : 'hover:bg-gray-50'
            }`}
            onClick={() => handleInputChange('service', service.id)}
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">{service.name}</CardTitle>
              <CardDescription className="text-green-600 font-semibold">
                ₹{service.baseRate}/hour
              </CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            Service Duration (hours) *
          </Label>
          <Select onValueChange={(value) => handleInputChange('duration', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="1">1 hour</SelectItem>
              <SelectItem value="2">2 hours</SelectItem>
              <SelectItem value="3">3 hours</SelectItem>
              <SelectItem value="4">4 hours</SelectItem>
              <SelectItem value="6">6 hours</SelectItem>
              <SelectItem value="8">8 hours</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            Estimated Cost
          </Label>
          <div className="h-12 bg-green-50 border border-green-200 rounded-md flex items-center px-4">
            <span className="text-lg font-semibold text-green-600">
              ₹{calculateCost()}
            </span>
          </div>
        </div>
      </div>

      {bookingData.service && bookingData.duration && (
        <Button onClick={nextStep} className="w-full h-12 bg-blue-600 hover:bg-blue-700">
          Continue to Date & Time
        </Button>
      )}
    </div>
  )

  const renderStep2 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Date, Time & Location</h2>
        <p className="text-gray-600">When and where do you need the service?</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="date" className="text-sm font-medium text-gray-700">
            Service Date *
          </Label>
          <Input
            id="date"
            type="date"
            value={bookingData.date}
            onChange={(e) => handleInputChange('date', e.target.value)}
            className="h-12"
            min={new Date().toISOString().split('T')[0]}
            required
          />
        </div>

        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            Preferred Time *
          </Label>
          <Select onValueChange={(value) => handleInputChange('time', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select time slot" />
            </SelectTrigger>
            <SelectContent>
              {timeSlots.map((time) => (
                <SelectItem key={time} value={time}>{time}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="address" className="text-sm font-medium text-gray-700">
          Complete Address *
        </Label>
        <Textarea
          id="address"
          placeholder="House/Flat No, Street, Landmark, Area"
          value={bookingData.address}
          onChange={(e) => handleInputChange('address', e.target.value)}
          className="min-h-[100px]"
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-700">
            City *
          </Label>
          <Select onValueChange={(value) => handleInputChange('city', value)}>
            <SelectTrigger className="h-12">
              <SelectValue placeholder="Select city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="pincode" className="text-sm font-medium text-gray-700">
            Pincode *
          </Label>
          <Input
            id="pincode"
            type="text"
            placeholder="400001"
            value={bookingData.pincode}
            onChange={(e) => handleInputChange('pincode', e.target.value)}
            className="h-12"
            maxLength={6}
            required
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Contact Number *
        </Label>
        <Input
          id="phone"
          type="tel"
          placeholder="+91 9876543210"
          value={bookingData.phone}
          onChange={(e) => handleInputChange('phone', e.target.value)}
          className="h-12"
          required
        />
      </div>

      <div className="flex gap-4">
        <Button onClick={prevStep} variant="outline" className="flex-1 h-12">
          Back
        </Button>
        {bookingData.date && bookingData.time && bookingData.address && bookingData.city && bookingData.pincode && bookingData.phone && (
          <Button onClick={nextStep} className="flex-1 h-12 bg-blue-600 hover:bg-blue-700">
            Continue to Review
          </Button>
        )}
      </div>
    </div>
  )

  const renderStep3 = () => (
    <div className="space-y-6">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Review Booking</h2>
        <p className="text-gray-600">Confirm your service details</p>
      </div>

      <Card className="bg-gradient-to-r from-blue-50 to-green-50">
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Service Details</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-gray-600">Service:</span> <span className="font-medium">{services.find(s => s.id === bookingData.service)?.name}</span></p>
                <p><span className="text-gray-600">Duration:</span> <span className="font-medium">{bookingData.duration} hours</span></p>
                <p><span className="text-gray-600">Date:</span> <span className="font-medium">{bookingData.date}</span></p>
                <p><span className="text-gray-600">Time:</span> <span className="font-medium">{bookingData.time}</span></p>
                <p className="text-lg font-semibold text-green-600 mt-4">
                  Total Cost: ₹{calculateCost()}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Service Location</h3>
              <div className="space-y-2 text-sm">
                <p><span className="text-gray-600">Address:</span></p>
                <p className="font-medium">{bookingData.address}</p>
                <p><span className="text-gray-600">City:</span> <span className="font-medium">{bookingData.city}</span></p>
                <p><span className="text-gray-600">Pincode:</span> <span className="font-medium">{bookingData.pincode}</span></p>
                <p><span className="text-gray-600">Contact:</span> <span className="font-medium">{bookingData.phone}</span></p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <Label htmlFor="special" className="text-sm font-medium text-gray-700">
          Special Instructions (Optional)
        </Label>
        <Textarea
          id="special"
          placeholder="Any specific requirements or instructions for our team..."
          value={bookingData.specialRequests}
          onChange={(e) => handleInputChange('specialRequests', e.target.value)}
          className="min-h-[80px]"
        />
      </div>

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h4 className="font-semibold text-yellow-800 mb-2">Service Promise</h4>
        <ul className="text-sm text-yellow-700 space-y-1">
          <li>🚀 Our team will reach within 20 minutes</li>
          <li>💰 Transparent pricing at ₹39/hour</li>
          <li>🏆 100% satisfaction guarantee</li>
          <li>🛡️ Fully insured and background-verified professionals</li>
        </ul>
      </div>

      <div className="flex gap-4">
        <Button onClick={prevStep} variant="outline" className="flex-1 h-12">
          Back
        </Button>
        <Button onClick={handleSubmit} className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700">
          Proceed to Payment
        </Button>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-blue-600">AbhiMaids</h1>
              <p className="text-sm text-gray-600">Book Your Service</p>
            </div>
          </Link>
        </div>

        <Card className="shadow-xl border-0">
          <CardContent className="p-8">
            {renderStepIndicator()}
            
            {currentStep === 1 && renderStep1()}
            {currentStep === 2 && renderStep2()}
            {currentStep === 3 && renderStep3()}
          </CardContent>
        </Card>

        {/* Contact Support */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">Need help with booking?</p>
          <p className="text-blue-600 font-semibold">Call us: +91 9876543210</p>
        </div>
      </div>
    </div>
  )
}