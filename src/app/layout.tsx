import { type PropsWithChildren } from 'react'
import { type Metadata, type Viewport } from 'next'
import { TailwindIndicator } from '@/components/tailwind-indicator'
import ThemeProvider from '@/components/layouts/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import GoogleSearchScript from '@/components/layouts/google-seacrch-script'
import { cn } from '@/lib/utils'
import { fontPrimary, fontSans } from '@/lib/fonts'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'
import '@/styles/globals.css'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name}: ${siteConfig.slogan}`,
    template: `${siteConfig.name}: %s`
  },
  description: siteConfig.description,
  keywords: [
    siteConfig.name,
    siteConfig.slogan,
    services.title,
    ...services.items.map(({ title }) => title)
  ],
  authors: siteConfig.author,
  creator: siteConfig.author.name,
  publisher: siteConfig.author.name,
  applicationName: siteConfig.name,
  generator: 'Next.js',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  userScalable: true,
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    { media: '(prefers-color-scheme: dark)', color: '#000000' }
  ],
  colorScheme: 'normal'
}

export default function RootLayout ({ children }: PropsWithChildren) {
  return (
    <html
      lang='es'
      suppressHydrationWarning
      className={cn(
        fontSans.variable,
        fontPrimary.variable,
        'font-sans antialiased !scroll-smooth'
      )}
    >
      <body className='bg-background min-h-screen'>
        <ThemeProvider attribute='class' defaultTheme='system'>
          {children}
          <Toaster />
          <TailwindIndicator />
        </ThemeProvider>
        <GoogleSearchScript />
      </body>
    </html>
  )
}
