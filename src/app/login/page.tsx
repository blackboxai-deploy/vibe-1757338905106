'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
  const [formData, setFormData] = useState({
    customerId: '',
    password: ''
  })
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      setIsLoading(false)
      // Redirect to dashboard on successful login
      window.location.href = '/dashboard'
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo Header */}
        <div className="text-center mb-8">
          <Link href="/" className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
            <div className="text-left">
              <h1 className="text-2xl font-bold text-blue-600">AbhiMaids</h1>
              <p className="text-sm text-gray-600">Professional Cleaning</p>
            </div>
          </Link>
        </div>

        <Card className="shadow-xl border-0">
          <CardHeader className="text-center pb-6">
            <CardTitle className="text-2xl font-bold text-gray-800">Customer Login</CardTitle>
            <CardDescription className="text-gray-600">
              Enter your Customer ID and password to access your account
            </CardDescription>
          </CardHeader>

          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="customerId" className="text-sm font-medium text-gray-700">
                  Customer ID
                </Label>
                <Input
                  id="customerId"
                  name="customerId"
                  type="text"
                  placeholder="e.g., ABHI-001234"
                  value={formData.customerId}
                  onChange={handleInputChange}
                  className="h-12 text-lg"
                  required
                />
                <p className="text-xs text-gray-500">
                  Your unique Customer ID (format: ABHI-XXXXXX)
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="h-12 text-lg"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <Label htmlFor="remember" className="ml-2 block text-sm text-gray-600">
                    Remember me
                  </Label>
                </div>
                <Link href="#" className="text-sm text-blue-600 hover:text-blue-800">
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-lg font-semibold"
                disabled={isLoading}
              >
                {isLoading ? 'Signing In...' : 'Sign In'}
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Don't have an account?{' '}
                <Link href="/register" className="text-blue-600 hover:text-blue-800 font-semibold">
                  Register here
                </Link>
              </p>
            </div>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="text-sm font-semibold text-blue-800 mb-2">Demo Credentials:</h4>
              <div className="text-xs text-blue-700 space-y-1">
                <p><span className="font-semibold">Customer ID:</span> ABHI-001234</p>
                <p><span className="font-semibold">Password:</span> demo123</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Links */}
        <div className="mt-8 text-center">
          <div className="flex justify-center space-x-6 text-sm">
            <Link href="/" className="text-gray-600 hover:text-blue-600">
              Back to Home
            </Link>
            <Link href="/booking" className="text-gray-600 hover:text-blue-600">
              Book Service
            </Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600">
              Help & Support
            </Link>
          </div>
        </div>

        {/* Service Highlights */}
        <div className="mt-8 bg-white rounded-lg p-6 shadow-lg">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl mb-2">🚀</div>
              <p className="text-xs text-gray-600">20 Min Reach</p>
            </div>
            <div>
              <div className="text-2xl mb-2">💰</div>
              <p className="text-xs text-gray-600">₹39/Hour</p>
            </div>
            <div>
              <div className="text-2xl mb-2">🏆</div>
              <p className="text-xs text-gray-600">Quality Service</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}