import { type Metadata } from 'next'
import Image from 'next/image'
import { SectionHeader } from '@/components/sections/section-header'
import ContactForm from '@/components/forms/contact-form'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: 'Contáctanos',
  description: '¿Listo para expandir tu negocio?'
}

export default function ContactPage () {
  return (
    <>
      <section className='-mt-header-h'>
        <div className='container pt-spacing-9'>
          <SectionHeader
            title='Contáctanos hoy mismo'
            description='¿Listo para expandir tu negocio?'
          />
          <div className='cols-container mt-spacing-6'>
            <div className='w-full lg:w-5-cols relative mt-12 lg:mt-0 order-2 lg:order-1'>
              <ContactForm />
            </div>
            <div className='w-full lg:w-7-cols order-1 lg:order-2'>
              <Image
                src='/images/contact-page.webp'
                alt='Mujer hablando por teléfono mientras sostiene una tables y esta parada en medo de la sala de su casa'
                width={2840}
                height={2840}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='w-full'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
