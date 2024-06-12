import { Author as NextAuthor } from 'next/dist/lib/metadata/types/metadata-types'
import { whatsappUrl } from '@/lib/utils'
import type {
  SiteConfig,
  MainNavItem,
  NavItem,
  NavItemExternal
} from '@/types'

export const author: NextAuthor = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const homeNav: MainNavItem[] = [
  {
    title: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes'
  }
]

export const siteNav: MainNavItem[] = [
  {
    title: 'Acerca de nosotros',
    href: '/nosotros'
  },
  {
    title: 'Nuestros servicios',
    href: '/servicios'
  },
  {
    title: 'Contáctanos',
    href: '/contacto'
  }
]

export const domain = 'globalizat.com'

export const contactEmail = `contacto@${domain}`

export const contactPhone = '5555555555'

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
  name: 'Lorem ipsum #55 Int. #55 Col. Centro 55555, Querétaro, Qro.',
  url: 'https://maps.app.goo.gl/eRYE6njBE8pBw3Vz6'
}

export const siteConfig: SiteConfig = {
  name: 'GlobalizaT',
  slogan: 'Transformamos tu potencial en exito global',
  description: 'Proporcionamos soluciones integrales y de alta calidad en consultoría legal, logística internacional, asesoría comercial, promoción de inversiones y representación de marcas extranjeras.',
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
