import { type Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { services } from '@/config/services'
import { CallToAction } from '@/components/call-to-action'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: services.title,
  description: services.description
}

export default function ServicesPage () {
  return (
    <>
      <section className='-mt-header-h'>
        <div className='container pt-spacing-9'>
          <h1 className='f-heading-1 font-header font-medium text-balance'>
            {services.description}
          </h1>
        </div>
        <div className='container space-y-spacing-7 mt-spacing-7'>
          <h2 className='sr-only'>{services.title}</h2>
          {services.items.map((serviceItem, key) => (
            <article className='cols-container even:flex-row-reverse' key={key}>
              <div className='w-6-cols sm:w-8-cols md:w-4-cols lg:w-6-cols mt-spacing-4 md:mt-0 order-2 lg:px-spacing-3'>
                <div className='sm:max-w-lg'>
                  <h3 className='f-heading-2 font-header text-balance'>
                    {serviceItem.title}
                  </h3>
                  <div className='space-y-spacing-3 mt-spacing-4'>
                    {serviceItem.description.map((descriptionItem, key) => (
                      <p className='f-body-1 font-light text-balance' key={key}>
                        {descriptionItem}
                      </p>
                    ))}
                  </div>
                  <CallToAction className='mt-spacing-5'>
                    Más información
                  </CallToAction>
                </div>
              </div>
              <div className='w-6-cols sm:w-8-cols md:w-4-cols lg:w-6-cols bg-secondary order-1'>
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
      </section>
    </>
  )
}
