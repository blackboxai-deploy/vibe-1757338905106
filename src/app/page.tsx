import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ServiceCard from '@/components/ServiceCard'

export default function HomePage() {
  const services = [
    {
      id: 'home-cleaning',
      title: 'Home Cleaning',
      description: 'Complete home cleaning solutions including deep cleaning, regular maintenance, and specialized services.',
      price: '₹39/hour',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/6ccbb952-776f-499a-aaec-8f490479b417.png',
      features: ['Deep Cleaning', 'Regular Maintenance', 'Eco-Friendly Products', 'Trained Professionals'],
      href: '/services/home-cleaning'
    },
    {
      id: 'office-cleaning',
      title: 'Office Cleaning',
      description: 'Professional office cleaning services to maintain a clean and productive work environment.',
      price: '₹39/hour',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/ade831f1-e4a2-4977-93e3-c49e20e3c242.png',
      features: ['Daily Cleaning', 'Sanitization', 'Waste Management', 'Window Cleaning'],
      href: '/services/office-cleaning'
    },
    {
      id: 'mall-cleaning',
      title: 'Mall Cleaning',
      description: 'Comprehensive mall cleaning services for retail spaces, common areas, and facilities.',
      price: '₹39/hour',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0ab9132e-5c51-4c3f-bfb0-424caf4a92d1.png',
      features: ['Floor Maintenance', 'Restroom Cleaning', 'Food Court Cleaning', 'Security Area Cleaning'],
      href: '/services/mall-cleaning'
    },
    {
      id: 'hospital-cleaning',
      title: 'Hospital Cleaning',
      description: 'Specialized hospital and medical facility cleaning with strict hygiene protocols.',
      price: '₹39/hour',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/87e0e512-da62-411f-8f6d-06406e95fed3.png',
      features: ['Medical Grade Cleaning', 'Infection Control', 'Biohazard Handling', 'Certified Staff'],
      href: '/services/hospital-cleaning'
    },
    {
      id: 'cooking',
      title: 'Cooking Services',
      description: 'Professional cooking assistance for homes, events, and special occasions.',
      price: '₹39/hour',
      image: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/811c861e-50a7-4627-b6fe-399e6f37fb6c.png',
      features: ['Home Cooking', 'Event Catering', 'Meal Prep', 'Custom Menus'],
      href: '/services/cooking'
    }
  ]

  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      comment: 'Excellent service! They arrived within 15 minutes and did an amazing job cleaning my apartment.',
      service: 'Home Cleaning'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      comment: 'Very professional office cleaning team. Our workplace has never been cleaner!',
      service: 'Office Cleaning'
    },
    {
      name: 'Anita Patel',
      location: 'Bangalore',
      rating: 5,
      comment: 'The cooking service was fantastic. Fresh, delicious meals prepared exactly as requested.',
      service: 'Cooking Services'
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                  Professional Cleaning Services
                  <span className="block text-yellow-300">At Your Doorstep</span>
                </h1>
                <p className="text-xl lg:text-2xl mb-8 text-blue-100">
                  Quality cleaning services starting at just ₹39/hour with 20-minute reach guarantee
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🚀</span>
                  </div>
                  <div>
                    <p className="font-semibold">20 Min Reach</p>
                    <p className="text-blue-100">Fast Response Time</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="font-semibold">₹39/Hour</p>
                    <p className="text-blue-100">Affordable Pricing</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <div>
                    <p className="font-semibold">Quality Service</p>
                    <p className="text-blue-100">Guaranteed Satisfaction</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-2xl">🛡️</span>
                  </div>
                  <div>
                    <p className="font-semibold">Trusted Professionals</p>
                    <p className="text-blue-100">Verified & Insured</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/booking">
                  <Button size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4">
                    Book Now - ₹39/Hour
                  </Button>
                </Link>
                <Link href="/login">
                  <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg px-8 py-4">
                    Customer Login
                  </Button>
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/64e68ddb-d7bd-417a-bfd7-33c6de9b42e2.png" 
                  alt="Professional cleaning team working in modern home with cleaning equipment and supplies"
                  className="w-full h-auto rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-yellow-500 text-black p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-lg">24/7 Available</p>
                  <p className="text-sm">Book Anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Professional Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From homes to hospitals, we provide comprehensive cleaning solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose AbhiMaids?
            </h2>
            <p className="text-xl text-gray-600">
              Experience the difference with our professional cleaning services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">⚡</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Lightning Fast Service</h3>
              <p className="text-gray-600">
                Our team reaches your location within 20 minutes of booking, ensuring quick and efficient service delivery.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-green-100 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">💎</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">
                We use eco-friendly products and advanced cleaning techniques to deliver exceptional results every time.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🛡️</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Trusted Professionals</h3>
              <p className="text-gray-600">
                All our staff are background-verified, trained professionals with insurance coverage for your peace of mind.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-orange-50 to-orange-100 rounded-2xl">
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">📱</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Easy Booking</h3>
              <p className="text-gray-600">
                Simple online booking system with real-time tracking and customer support available 24/7.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-red-50 to-red-100 rounded-2xl">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">💰</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Affordable Pricing</h3>
              <p className="text-gray-600">
                Transparent pricing starting at just ₹39/hour with no hidden charges or surprise fees.
              </p>
            </div>

            <div className="text-center p-8 bg-gradient-to-br from-teal-50 to-teal-100 rounded-2xl">
              <div className="w-16 h-16 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white">🎯</span>
              </div>
              <h3 className="text-xl font-semibold mb-4">Customized Solutions</h3>
              <p className="text-gray-600">
                Tailored cleaning plans based on your specific needs, schedule, and preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <CardDescription className="text-gray-500">{testimonial.location}</CardDescription>
                    </div>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-500 text-lg">⭐</span>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 italic">"{testimonial.comment}"</p>
                  <p className="text-sm text-blue-600 font-semibold">{testimonial.service}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready for a Cleaner Space?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Book your professional cleaning service now and experience the AbhiMaids difference. 
              Quality service guaranteed with 20-minute reach and affordable ₹39/hour pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/booking">
                <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold text-lg px-8 py-4">
                  Book Service Now
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 font-semibold text-lg px-8 py-4">
                Call +91 9876543210
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}