import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Nikhil Chitrapu - Engineering & Digital Marketing Professional",
  description: "Transforming Technical Expertise into Digital Success with AI-Powered Efficiency",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
