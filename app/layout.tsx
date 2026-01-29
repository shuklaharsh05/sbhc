import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poppins = Poppins({ subsets: ['latin'], weight: ['300', '400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Swasth Bharat Healthcare - Professional Healthcare Consultancy & Personal TPA Support',
  description: 'Right to Direction | Saving Lives Through Guidance. Simplifying healthcare access through structured guidance, case-level coordination, and accountable support.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
