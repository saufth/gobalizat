import SocialNav from '@/components/layouts/social-nav'
import { Link } from '@/components/ui/link'
import { Icons } from '@/components/icons'
import { cn, formatPhoneNumber, whatsappUrl } from '@/lib/utils'
import {
  siteConfig,
  contactEmail,
  socialNav,
  contactPhone,
  address,
  blogNav
} from '@/config/site'

export interface MenuProps {
  action?: () => void
  muted?: boolean
}

export default function MainNav ({ action, muted }: MenuProps) {
  return (
    <div className='cols-container gap-y-spacing-7'>
      <div className='w-6-cols md:w-3-cols lg:w-5-cols flex flex-col gap-y-spacing-4 order-2 md:order-1'>
        <Link
          href={whatsappUrl(contactPhone)}
          onClick={action}
          aria-label='Whatsapp de atención al cliente, se abre en una nueva pestaña'
          target='_blank'
          size='xl'
          rel='noreferrer'
          className={cn('w-fit flex gap-x-2 items-center', muted && 'text-card-foreground')}
        >
          <Icons.WhatsappOutlined className={cn('w-auto h-6 lg:h-8', muted && 'stroke-card-foreground')} />
          <span className='sr-only'>Whatsapp{' '}</span>
          {formatPhoneNumber(contactPhone)}
        </Link>
        <Link
          href={address.url}
          onClick={action}
          aria-label='Abre la ubicación del corporativo en Google Maps, se abre en una nueva pestaña o en tu aplicación de mapas predeterminada'
          target='_blank'
          size='xl'
          rel='noreferrer'
          className={cn('w-fit text-balance', muted && 'text-card-foreground')}
        >
          {address.name}
        </Link>
        <Link
          href={`mailto:${contactEmail}`}
          onClick={action}
          aria-label='Envía un mensaje con tu servicio de correo, se abre en una nueva pestaña o en tu cliente de correo predeterminado'
          target='_blank'
          rel='noreferrer'
          size='xl'
          className={cn('w-fit', muted && 'text-card-foreground')}
        >
          {contactEmail}
        </Link>
        <SocialNav items={socialNav} action={action} muted />
      </div>
      <nav
        className='w-6-cols md:w-5-cols lg:w-7-cols order-1 md:order-2'
        aria-label={`${siteConfig.name} directorio`}
      >
        <div className='cols-container gap-y-spacing-6'>
          <div className='w-6-cols sm:w-4-cols lg:w-6-cols'>
            <div className='text-lg sm:text-xl text-muted-foreground font-medium'>
              Navegación
            </div>
            <ul className='space-y-spacing-3 mt-spacing-4'>
              {siteConfig.mainNav.map((navItem, key) => {
                return navItem.title !== 'Soluciones' && (
                  <li key={key}>
                    <Link
                      href={navItem.href}
                      onClick={action}
                      aria-label={navItem.title}
                      className={cn('text-base sm:text-lg font-bold text-balance', muted && 'text-card-foreground')}
                    >
                      {navItem.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='w-6-cols sm:w-4-cols lg:w-6-cols'>
            <div className='text-lg sm:text-xl text-muted-foreground font-medium'>
              Blog
            </div>
            <ul className='space-y-spacing-3 mt-spacing-4'>
              {blogNav.map((navItem, key) => {
                return navItem.title !== 'Soluciones' && (
                  <li key={key}>
                    <Link
                      href={navItem.href}
                      onClick={action}
                      aria-label={navItem.title}
                      className={cn('text-base sm:text-lg font-bold text-balance', muted && 'text-card-foreground')}
                    >
                      {navItem.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
