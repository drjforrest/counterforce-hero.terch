import type { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'HERO — Health Equity & Resilience Observatory',
  description: 'The Health Equity & Resilience Observatory at UBC transforms evidence into action, bridging academic research and crisis response.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}