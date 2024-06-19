import { Author as NextAuthor } from 'next/dist/lib/metadata/types/metadata-types'
import { whatsappUrl } from '@/lib/utils'
import type {
  SiteConfig,
  MainNavItem,
  NavItem,
  NavItemExternal
} from '@/types'
import { blog } from './blog'

export const author: NextAuthor = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const homeNav: MainNavItem[] = [
  {
    title: 'Acerca de nosotros',
    href: '/#nosotros'
  },
  {
    title: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes'
  }
]

export const blogNav: MainNavItem[] = [
  ...blog.map((blogItem) => ({ title: blogItem.title, href: blogItem.slug }))
]

export const siteNav: MainNavItem[] = [
  {
    title: 'Nuestros servicios',
    href: '/servicios'
  },
  {
    title: 'Ponte en contacto',
    href: '/contacto'
  }
]

export const domain = 'globalizat.com'

export const contactEmail = `contacto@${domain}`

export const contactPhone = '4422714413'

export const socialNav: NavItem[] = [
  {
    title: 'facebook',
    href: '#'
  },
  {
    title: 'instagram',
    href: '#'
  },
  {
    title: 'twitter',
    href: '#'
  },
  {
    title: 'linkedin',
    href: '#'
  },
  {
    title: 'whatsapp',
    href: whatsappUrl(contactPhone)
  }
]

export const address: NavItemExternal = {
  name: 'José María Truchuelo 16, Cimatario, 76030 Santiago de Querétaro, Qro.',
  url: 'https://maps.app.goo.gl/Gtjf5kqQ1YAwRS3v8'
}

export const siteConfig: SiteConfig = {
  name: 'GlobalizaT',
  slogan: 'Transformamos tu potencial en exito global',
  description: 'Proporcionamos soluciones integrales y de alta calidad en consultoría legal, logística internacional, asesoría comercial y representación de marcas extranjeras.',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Página principal',
      href: '/'
    },
    ...siteNav,
    ...homeNav
  ]
}
