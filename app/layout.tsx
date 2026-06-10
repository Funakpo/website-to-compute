import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Inter, Playfair_Display, Geist_Mono } from 'next/font/google'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { Watermark } from '@/components/watermark'
import './globals.css'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })
const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title:
    'Factory 7 Global Development Group Ltd — Building Opportunities, Empowering Communities, Creating the Future',
  description:
    'Factory 7 Global Development Group Ltd is a multi-sector development ecosystem integrating technology, education, finance, agriculture, logistics, and infrastructure for sustainable human progress across Africa and beyond.',
  keywords: [
    'Factory 7',
    'F7',
    'Global Development',
    'Smart City',
    'Digital Economy',
    'FinTech',
    'Africa',
    'Nigeria',
    'Innovation',
    'Investment',
  ],
  metadataBase: new URL('https://factory7global.com'),
  openGraph: {
    title: 'Factory 7 Global Development Group Ltd',
    description:
      'Building Opportunities, Empowering Communities, Creating the Future.',
    url: 'https://factory7global.com',
    siteName: 'Factory 7 Global Development Group',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Factory 7 Global Development Group Ltd',
    description:
      'Building Opportunities, Empowering Communities, Creating the Future.',
  },
  generator: 'v0.app',
}

export const viewport = {
  themeColor: '#0A192F',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        <Watermark />
        <Navbar />
        <main className="relative z-10">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
