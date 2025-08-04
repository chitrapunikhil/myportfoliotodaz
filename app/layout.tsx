import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Nikhil Chitrapu - Engineering & Digital Marketing Professional',
  description: 'Transforming Technical Expertise into Digital Success with AI-Powered Efficiency',
  keywords: 'Engineering, Digital Marketing, AI, Project Management, PRINCE2, Scrum Master, Meta Ads, Berlin',
  authors: [{ name: 'Nikhil Chitrapu' }],
  creator: 'Nikhil Chitrapu',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nikhilchitrapu.com',
    title: 'Nikhil Chitrapu - Engineering & Digital Marketing Professional',
    description: 'Transforming Technical Expertise into Digital Success with AI-Powered Efficiency',
    siteName: 'Nikhil Chitrapu Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikhil Chitrapu - Engineering & Digital Marketing Professional',
    description: 'Transforming Technical Expertise into Digital Success with AI-Powered Efficiency',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}