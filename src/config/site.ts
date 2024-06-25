import { Author as NextAuthor } from 'next/dist/lib/metadata/types/metadata-types'
import { blog } from '@/config/blog'
import type {
  SiteConfig,
  MainNavItem,
  NavItem
} from '@/types'

export const author: NextAuthor = {
  name: 'saufth',
  url: 'https://github.com/saufth'
}

export const blogNav: MainNavItem[] = [
  ...blog.map((blogItem) => ({ title: blogItem.title, href: blogItem.slug }))
]

export const siteNav: MainNavItem[] = [
  {
    title: 'Nuestros servicios',
    href: '/servicios'
  },
  {
    title: 'Acerca de nosotros',
    href: '/#nosotros'
  },
  {
    title: 'Preguntas frecuentes',
    href: '/#preguntas-frecuentes'
  },
  {
    title: 'Ponte en contacto',
    href: '/contacto'
  }
]

export const domain = 'globalizat.com'

export const contactEmail = `contacto@${domain}`

export const contact = [
  {
    country: 'México',
    phone: {
      number: '4422714413',
      code: '+52',
      fullNumber: '+524422714413'
    },
    address: {
      name: 'José María Truchuelo 16, Cimatario, 76030 Santiago de Querétaro, Qro.',
      url: 'https://maps.app.goo.gl/Gtjf5kqQ1YAwRS3v8'
    }
  },
  {
    country: 'Colombia',
    phone: {
      number: '3017753104',
      code: '+57',
      fullNumber: '+573017753104'
    },
    address: {
      name: 'Medellín-Antioquia-Colombia',
      url: 'https://maps.app.goo.gl/6G93YyqtL2YzYNLZ6'
    }
  }
]

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
  }
]

export const siteConfig: SiteConfig = {
  name: 'GlobalizaT',
  slogan: 'Transformamos tu potencial en éxito global',
  description: 'Proporcionamos soluciones integrales y de alta calidad en consultoría legal, logística internacional, asesoría comercial y representación de marcas extranjeras.',
  url: `https://${domain}`,
  author,
  mainNav: [
    {
      title: 'Página principal',
      href: '/'
    },
    ...siteNav
  ]
}
