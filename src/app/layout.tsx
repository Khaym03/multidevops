import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import Footer from '@/components/footer'
import { HeroSwapProvider } from '@/components/hero-options'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900'
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900'
})

export const metadata: Metadata = {
  title: 'MultiDevOps',
  description:
    'Transforma tu negocio con MultiDevOps. Ofrecemos soluciones personalizadas en desarrollo web, gestión de bases de datos y automatización de procesos para optimizar tu operación.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative `}
      >
       
        <div className="flex flex-col items-center justify-items-center min-h-[calc(100vh-3.5rem)] border-x font-[family-name:var(--font-geist-sans)] mx-auto relative">
          <HeroSwapProvider>
            <SiteHeader />

            {children}
            <Footer />
          </HeroSwapProvider>
        </div>
      </body>
    </html>
  )
}
