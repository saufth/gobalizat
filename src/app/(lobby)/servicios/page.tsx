import { type Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/sections/hero'
import { SectionHeader } from '@/components/sections/section-header'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: services.title,
  description: services.description
}

export default function ServicesPage () {
  return (
    <>
      <Hero title={services.title} description={services.description} />
      <section className='pt-spacing-9'>
        <div className='container'>
          <SectionHeader
            title='Nuestros servicios'
            description='Queremos que los autores alcancen su objetivo.'
          />
          <div className='space-y-spacing-8 mt-spacing-8'>
            {services.items.map((serviceItem, key) => (
              <article className='cols-container mt-spacing-3 odd:flex-row-reverse' key={key}>
                <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-5-cols mt-spacing-6 md:mt-0 order-2'>
                  <div className='sm:max-w-lg md:pt-spacing-6 lg:pt-spacing-7'>
                    <h3 className='f-heading-1 f-header text-balance'>
                      {serviceItem.title}
                    </h3>
                    <p className='f-subhead-2 text-muted-foreground text-balance mt-spacing-4'>
                      {serviceItem.description}
                    </p>
                  </div>
                </div>
                <div className='w-6-cols sm:w-8-cols md:w-5-cols lg:w-7-cols bg-secondary order-1'>
                  <Image
                    src={serviceItem.image.src}
                    alt={serviceItem.image.alt}
                    width={serviceItem.image.width}
                    height={serviceItem.image.height}
                    sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                    loading='lazy'
                    className='w-full'
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
