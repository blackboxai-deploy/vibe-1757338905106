import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function HomeCleaningPage() {
  const serviceFeatures = [
    {
      title: 'Deep Cleaning',
      description: 'Thorough cleaning of all surfaces, corners, and hard-to-reach areas',
      icon: '🧽'
    },
    {
      title: 'Eco-Friendly Products',
      description: 'Safe, non-toxic cleaning products that are gentle on your family and pets',
      icon: '🌱'
    },
    {
      title: 'Professional Equipment',
      description: 'Advanced cleaning tools and equipment for superior results',
      icon: '🛠️'
    },
    {
      title: 'Flexible Scheduling',
      description: 'Book at your convenience - daily, weekly, monthly, or one-time service',
      icon: '📅'
    },
    {
      title: 'Trained Professionals',
      description: 'Background-verified, experienced cleaning professionals',
      icon: '👨‍💼'
    },
    {
      title: 'Satisfaction Guarantee',
      description: '100% satisfaction guaranteed or we will re-clean for free',
      icon: '✅'
    }
  ]

  const cleaningAreas = [
    { area: 'Living Room', tasks: ['Dusting furniture', 'Vacuuming carpets', 'Cleaning surfaces', 'Organizing items'] },
    { area: 'Kitchen', tasks: ['Cleaning countertops', 'Appliance cleaning', 'Sink sanitization', 'Floor mopping'] },
    { area: 'Bedrooms', tasks: ['Bed making', 'Dusting surfaces', 'Organizing closets', 'Vacuum cleaning'] },
    { area: 'Bathrooms', tasks: ['Deep sanitization', 'Tile and grout cleaning', 'Mirror cleaning', 'Toilet cleaning'] }
  ]

  const pricingPlans = [
    {
      name: 'Basic Clean',
      duration: '2-3 hours',
      price: 78,
      features: ['Surface cleaning', 'Vacuuming', 'Dusting', 'Basic bathroom cleaning']
    },
    {
      name: 'Standard Clean',
      duration: '3-4 hours',
      price: 117,
      features: ['Everything in Basic', 'Kitchen deep clean', 'Detailed bathroom clean', 'Inside appliances']
    },
    {
      name: 'Premium Clean',
      duration: '4-6 hours',
      price: 195,
      features: ['Everything in Standard', 'Inside cabinets', 'Baseboards', 'Light fixtures', 'Organizing']
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Andheri, Mumbai',
      rating: 5,
      comment: 'Amazing service! They cleaned my 3BHK apartment perfectly. The team was professional and punctual.'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Koramangala, Bangalore',
      rating: 5,
      comment: 'Best home cleaning service in the city. They use eco-friendly products and the quality is excellent.'
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Professional Home Cleaning Services
              </h1>
              <p className="text-xl mb-6 text-blue-100">
                Transform your home with our professional cleaning services. Deep cleaning, regular maintenance, 
                and eco-friendly solutions at just ₹39/hour.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link href="/booking">
                  <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                    Book Now - ₹39/Hour
                  </Button>
                </Link>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                  Get Free Quote
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span>4.9/5 Rating</span>
                </div>
                <div>🚀 20 Min Reach</div>
                <div>🛡️ Insured & Bonded</div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ad4839e9-1753-4842-8e41-9feec262f0fe.png"
                alt="Professional home cleaning team with modern equipment cleaning beautiful living room interior"
                className="w-full rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white text-gray-800 p-4 rounded-lg shadow-lg">
                <p className="font-bold text-green-600 text-lg">20+ Years</p>
                <p className="text-sm">Experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our Home Cleaning?</h2>
            <p className="text-xl text-gray-600">Experience the difference with our comprehensive cleaning solutions</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceFeatures.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* What We Clean */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What's Included in Our Home Cleaning</h2>
            <p className="text-xl text-gray-600">Comprehensive cleaning for every area of your home</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cleaningAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{area.area}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {area.tasks.map((task, taskIndex) => (
                      <li key={taskIndex} className="flex items-center space-x-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        <span className="text-gray-700">{task}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Choose Your Cleaning Plan</h2>
            <p className="text-xl text-gray-600">Flexible options to suit your needs and budget</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <Card key={index} className={`text-center hover:shadow-xl transition-all ${index === 1 ? 'ring-2 ring-blue-500 scale-105' : ''}`}>
                <CardHeader className="pb-4">
                  <div className="flex justify-center mb-4">
                    {index === 1 && <Badge className="bg-blue-600">Most Popular</Badge>}
                  </div>
                  <CardTitle className="text-2xl text-gray-800">{plan.name}</CardTitle>
                  <CardDescription className="text-gray-600">{plan.duration}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-green-600">₹{plan.price}</span>
                    <span className="text-gray-600 ml-2">total</span>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center justify-center space-x-2">
                        <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/booking">
                    <Button className={`w-full ${index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-600 hover:bg-gray-700'}`}>
                      Select Plan
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">Real reviews from satisfied homeowners</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location}</p>
                    </div>
                    <div className="ml-auto flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500">⭐</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready for a Spotless Home?</h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Book your professional home cleaning service today and experience the AbhiMaids difference. 
            Quality guaranteed with 20-minute reach and affordable pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold">
                Book Service - ₹39/Hour
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Call +91 9876543210
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}