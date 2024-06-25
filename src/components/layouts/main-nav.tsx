import Image from 'next/image'
// import SocialNav from '@/components/layouts/social-nav'
import { Link } from '@/components/ui/link'
import { cn, formatPhoneNumber } from '@/lib/utils'
import {
  siteConfig,
  contactEmail,
  // socialNav,
  contact,
  blogNav
} from '@/config/site'

export interface MainNavProps {
  action?: () => void
  muted?: boolean
}

export default function MainNav ({ action, muted }: MainNavProps) {
  return (
    <div className='cols-container gap-y-spacing-7'>
      <div className='w-6-cols md:w-5-cols lg:w-6-cols space-y-spacing-5 order-2 md:order-1'>
        {contact.map((contactItem, contactItemKey) => (
          <div className='flex flex-col gap-y-spacing-3' key={`contact-item-${contactItemKey}`}>
            <div className='flex items-center gap-x-3'>
              <Image
                src={`/icons/flags/${contactItem.country}.svg`}
                alt={`Bandera de ${contactItem.country}`}
                width={900}
                height={514.286}
                className='w-auto h-4 lg:h-[18px] xl:h-5'
              />
              <div className='text-muted-foreground f-body-1'>
                {contactItem.country}
              </div>
            </div>
            <Link
              href={`tel:${contactItem.phone.fullNumber}`}
              onClick={action}
              aria-label={`Número de atención a clientes ${contactItem.country}`}
              title='Llamar ahora'
              target='_blank'
              size='lg'
              rel='noreferrer'
              className={cn('w-fit flex gap-x-2 items-center', muted && 'text-card-foreground')}
            >
              <span className='font-normal'>{`+${contactItem.phone.code} ${formatPhoneNumber(contactItem.phone.number)}`}</span>
            </Link>
            <Link
              href={contactItem.address.url}
              onClick={action}
              aria-label='Abre la ubicación del corporativo en Google Maps, se abre en una nueva pestaña o en tu aplicación de mapas predeterminada'
              title='Ver ubicación en Google Maps'
              target='_blank'
              size='lg'
              rel='noreferrer'
              className={cn('w-fit text-balance font-normal', muted && 'text-card-foreground')}
            >
              {contactItem.address.name}
            </Link>
          </div>
        ))}
        <div className='flex flex-col gap-y-spacing-3'>
          <Link
            href={`mailto:${contactEmail}`}
            onClick={action}
            aria-label='Envía un mensaje con tu servicio de correo, se abre en una nueva pestaña o en tu cliente de correo predeterminado'
            title='Enviar correo ahora'
            target='_blank'
            rel='noreferrer'
            size='lg'
            className={cn('w-fit font-normal', muted && 'text-card-foreground')}
          >
            {contactEmail}
          </Link>
          {/* <SocialNav items={socialNav} action={action} muted /> */}
        </div>
      </div>
      <nav
        className='w-6-cols md:w-3-cols lg:w-6-cols order-1 md:order-2'
        aria-label={`${siteConfig.name} directorio`}
      >
        <div className='cols-container gap-y-spacing-6'>
          <div className='w-6-cols sm:w-4-cols md:w-8-cols lg:w-6-cols'>
            <div className='text-lg sm:text-xl text-muted-foreground'>
              Navegación
            </div>
            <ul className='space-y-spacing-3 mt-spacing-4'>
              {siteConfig.mainNav.map((mainNavItem, mainNavItemKey) => {
                return mainNavItem.title !== 'Soluciones' && (
                  <li key={`nav-item-${mainNavItemKey}`}>
                    <Link
                      href={mainNavItem.href}
                      onClick={action}
                      aria-label={mainNavItem.title}
                      title={`Ir a página ${mainNavItem.title}`}
                      className={cn('text-base sm:text-lg text-balance', muted && 'text-card-foreground')}
                    >
                      {mainNavItem.title}
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>
          <div className='w-6-cols sm:w-4-cols lg:w-6-cols'>
            <div className='text-lg sm:text-xl text-muted-foreground'>
              Blog
            </div>
            <ul className='space-y-spacing-3 mt-spacing-4'>
              {blogNav.map((blogNavItem, blogNavItemKey) => {
                return blogNavItem.title !== 'Soluciones' && (
                  <li key={`nav-item-${blogNavItemKey}`}>
                    <Link
                      href={blogNavItem.href}
                      onClick={action}
                      aria-label={blogNavItem.title}
                      title={`Ir a articulo ${blogNavItem.title}`}
                      className={cn('text-base sm:text-lg text-balance', muted && 'text-card-foreground')}
                    >
                      {blogNavItem.title}
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
