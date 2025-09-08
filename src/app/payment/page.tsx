'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [isProcessing, setIsProcessing] = useState(false)
  const [cardData, setCardData] = useState({
    cardNumber: '',
    expiryMonth: '',
    expiryYear: '',
    cvv: '',
    cardName: ''
  })
  const [upiId, setUpiId] = useState('')

  // Sample booking data (in real app, this would come from booking context/API)
  const bookingDetails = {
    service: 'Home Cleaning',
    duration: '3 hours',
    date: '2024-01-15',
    time: '10:00 AM',
    address: '123 Main Street, Andheri West',
    city: 'Mumbai',
    cost: 117 // 3 hours * ₹39
  }

  const handleCardInputChange = (field: string, value: string) => {
    setCardData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const generateOrderId = () => {
    return `ABHI-${Date.now()}-${Math.floor(Math.random() * 1000)}`
  }

  const processPayment = async () => {
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      const orderId = generateOrderId()
      setIsProcessing(false)
      
      // Show success and redirect to dashboard
      alert(`Payment successful! Your order ID is: ${orderId}`)
      window.location.href = '/dashboard'
    }, 3000)
  }

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: '💳' },
    { id: 'upi', name: 'UPI Payment', icon: '📱' },
    { id: 'netbanking', name: 'Net Banking', icon: '🏦' },
    { id: 'cod', name: 'Cash on Delivery', icon: '💵' }
  ]

  const banks = [
    'State Bank of India', 'HDFC Bank', 'ICICI Bank', 'Axis Bank', 
    'Kotak Mahindra Bank', 'Punjab National Bank', 'Bank of Baroda', 'Other'
  ]

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
              <p className="text-sm text-gray-600">Secure Payment</p>
            </div>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-lg">Order Summary</CardTitle>
                <CardDescription>Review your booking details</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service</span>
                    <span className="font-medium">{bookingDetails.service}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Duration</span>
                    <span className="font-medium">{bookingDetails.duration}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Date & Time</span>
                    <span className="font-medium">{bookingDetails.date} at {bookingDetails.time}</span>
                  </div>
                  <div className="pt-2 border-t">
                    <span className="text-gray-600 text-sm">Service Location:</span>
                    <p className="font-medium text-sm">{bookingDetails.address}, {bookingDetails.city}</p>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total Amount</span>
                    <span className="text-green-600">₹{bookingDetails.cost}</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Inclusive of all taxes</p>
                </div>

                <div className="bg-blue-50 p-3 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-blue-600">🛡️</span>
                    <span className="text-sm font-semibold text-blue-800">Secure Payment</span>
                  </div>
                  <p className="text-xs text-blue-700">Your payment information is encrypted and secure</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Payment Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Payment Method</CardTitle>
                <CardDescription>Choose your preferred payment method</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4">
                    {paymentMethods.map((method) => (
                      <TabsTrigger key={method.id} value={method.id} className="text-xs">
                        <span className="mr-1">{method.icon}</span>
                        <span className="hidden sm:inline">{method.name}</span>
                      </TabsTrigger>
                    ))}
                  </TabsList>

                  {/* Credit/Debit Card */}
                  <TabsContent value="card" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="cardNumber" className="text-sm font-medium">
                          Card Number *
                        </Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={cardData.cardNumber}
                          onChange={(e) => handleCardInputChange('cardNumber', e.target.value)}
                          maxLength={19}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cardName" className="text-sm font-medium">
                          Name on Card *
                        </Label>
                        <Input
                          id="cardName"
                          placeholder="John Doe"
                          value={cardData.cardName}
                          onChange={(e) => handleCardInputChange('cardName', e.target.value)}
                          className="h-12"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Expiry Month *
                          </Label>
                          <Select onValueChange={(value) => handleCardInputChange('expiryMonth', value)}>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="MM" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 12 }, (_, i) => (
                                <SelectItem key={i + 1} value={(i + 1).toString().padStart(2, '0')}>
                                  {(i + 1).toString().padStart(2, '0')}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label className="text-sm font-medium">
                            Expiry Year *
                          </Label>
                          <Select onValueChange={(value) => handleCardInputChange('expiryYear', value)}>
                            <SelectTrigger className="h-12">
                              <SelectValue placeholder="YYYY" />
                            </SelectTrigger>
                            <SelectContent>
                              {Array.from({ length: 10 }, (_, i) => {
                                const year = new Date().getFullYear() + i
                                return (
                                  <SelectItem key={year} value={year.toString()}>
                                    {year}
                                  </SelectItem>
                                )
                              })}
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="cvv" className="text-sm font-medium">
                            CVV *
                          </Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={cardData.cvv}
                            onChange={(e) => handleCardInputChange('cvv', e.target.value)}
                            maxLength={3}
                            className="h-12"
                          />
                        </div>
                      </div>
                    </div>
                  </TabsContent>

                  {/* UPI Payment */}
                  <TabsContent value="upi" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="upiId" className="text-sm font-medium">
                          UPI ID *
                        </Label>
                        <Input
                          id="upiId"
                          placeholder="yourname@paytm / yourname@googlepay"
                          value={upiId}
                          onChange={(e) => setUpiId(e.target.value)}
                          className="h-12"
                        />
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <p className="text-green-800 text-sm">
                          💚 Quick and secure UPI payment. You'll be redirected to your UPI app to complete the payment.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Net Banking */}
                  <TabsContent value="netbanking" className="space-y-4">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <Label className="text-sm font-medium">
                          Select Your Bank *
                        </Label>
                        <Select>
                          <SelectTrigger className="h-12">
                            <SelectValue placeholder="Choose your bank" />
                          </SelectTrigger>
                          <SelectContent>
                            {banks.map((bank) => (
                              <SelectItem key={bank} value={bank.toLowerCase().replace(/\s+/g, '-')}>
                                {bank}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <p className="text-blue-800 text-sm">
                          🏦 You'll be redirected to your bank's secure website to complete the payment.
                        </p>
                      </div>
                    </div>
                  </TabsContent>

                  {/* Cash on Delivery */}
                  <TabsContent value="cod" className="space-y-4">
                    <div className="bg-yellow-50 p-6 rounded-lg text-center">
                      <div className="text-4xl mb-4">💵</div>
                      <h3 className="text-lg font-semibold text-yellow-800 mb-2">Cash on Delivery</h3>
                      <p className="text-yellow-700 mb-4">
                        Pay ₹{bookingDetails.cost} in cash when our service professional arrives at your location.
                      </p>
                      <div className="bg-yellow-100 p-3 rounded-md">
                        <p className="text-sm text-yellow-800">
                          💡 Please keep exact change ready for a smooth experience.
                        </p>
                      </div>
                    </div>
                  </TabsContent>
                </Tabs>

                {/* Payment Actions */}
                <div className="mt-8 space-y-4">
                  <div className="flex items-center space-x-2">
                    <input
                      id="terms"
                      type="checkbox"
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      required
                    />
                    <Label htmlFor="terms" className="text-sm text-gray-600">
                      I agree to the{' '}
                      <Link href="#" className="text-blue-600 hover:text-blue-800">
                        Terms of Service
                      </Link>{' '}
                      and{' '}
                      <Link href="#" className="text-blue-600 hover:text-blue-800">
                        Refund Policy
                      </Link>
                    </Label>
                  </div>

                  <div className="flex gap-4">
                    <Link href="/booking" className="flex-1">
                      <Button variant="outline" className="w-full h-12">
                        Back to Booking
                      </Button>
                    </Link>
                    <Button
                      onClick={processPayment}
                      disabled={isProcessing}
                      className="flex-1 h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    >
                      {isProcessing ? (
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Processing...</span>
                        </div>
                      ) : (
                        `Pay ₹${bookingDetails.cost}`
                      )}
                    </Button>
                  </div>
                </div>

                {/* Security Info */}
                <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-green-600">🔒</span>
                    <span className="text-sm font-semibold text-gray-800">Secure Payment Guarantee</span>
                  </div>
                  <p className="text-xs text-gray-600">
                    Your payment information is encrypted using 256-bit SSL encryption and is never stored on our servers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center mt-8">
          <p className="text-gray-600 mb-2">Need help with payment?</p>
          <div className="flex justify-center space-x-6 text-sm">
            <a href="#" className="text-blue-600 hover:text-blue-800">Payment Help</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Call +91 9876543210</a>
            <a href="#" className="text-blue-600 hover:text-blue-800">Live Chat</a>
          </div>
        </div>
      </div>
    </div>
  )
}