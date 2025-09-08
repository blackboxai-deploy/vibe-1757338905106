import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AbhiMaids - Professional Cleaning Services | ₹39/Hour',
  description: 'Professional home, office, mall, hospital cleaning and cooking services. Book now for just ₹39/hour with 20-minute reach guarantee. Quality cleaning services at your doorstep.',
  keywords: 'cleaning services, home cleaning, office cleaning, mall cleaning, hospital cleaning, cooking services, professional cleaners, Mumbai, Delhi, Bangalore',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}