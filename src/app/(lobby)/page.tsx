import Image from 'next/image'
import { Hero } from '@/components/sections/hero'
import { services } from '@/config/services'
import { siteConfig } from '@/config/site'

export default function IndexPage () {
  return (
    <>
      <Hero
        title={siteConfig.slogan}
        description={siteConfig.description}
        highlight={2}
      />
      <section className='mt-spacing-8'>
        <div className='container space-y-spacing-8'>
          {services.items.map((serviceItem, key) => (
            <article className='cols-container mt-spacing-7 even:flex-row-reverse' key={key}>
              <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-5-cols md:mt-0 order-2 md:px-spacing-3'>
                <div className='sm:max-w-lg'>
                  <h3 className='f-heading-3 font-semibold text-balance text-primary'>
                    {serviceItem.title}
                  </h3>
                  <div className='space-y-spacing-3 mt-spacing-4'>
                    {serviceItem.description.map((descriptionItem, key) => (
                      <p className='f-body-1 text-muted-foreground text-balance' key={key}>
                        {descriptionItem}
                      </p>
                    ))}
                  </div>
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
      </section>
    </>
  )
}
