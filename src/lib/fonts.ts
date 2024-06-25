import { Roboto as RobotoFont } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = RobotoFont({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-sans'
})

export const fontPrimary = localFont({
  src: [
    {
      path: '../../public/fonts/primary-light.woff2',
      weight: '300'
    },
    {
      path: '../../public/fonts/primary-regular.woff2',
      weight: '500'
    },
    {
      path: '../../public/fonts/primary-semibold.woff2',
      weight: '600'
    },
    {
      path: '../../public/fonts/primary-bold.woff2',
      weight: '700'
    }
  ],
  display: 'swap',
  variable: '--font-primary'
})

export const fontHeader = localFont({
  src: '../../public/fonts/header-regular.woff2',
  display: 'swap',
  variable: '--font-header'
})
