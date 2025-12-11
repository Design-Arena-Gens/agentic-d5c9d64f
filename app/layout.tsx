import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'The Secret - हिंदी सारांश',
  description: 'The Secret by Rhonda Byrne - Complete Hindi Summary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
