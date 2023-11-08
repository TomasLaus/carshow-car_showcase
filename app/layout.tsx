import type { Metadata } from 'next'
import './globals.css'
import { Footer, Navbar } from '@/components'


export const metadata: Metadata = {
  title: 'ShowCar',
  description: 'Fast and easy way to rent cars.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
