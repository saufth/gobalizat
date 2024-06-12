import { type Metadata } from 'next'
import Image from 'next/image'
import { Hero } from '@/components/sections/hero'
import { aboutUs } from '@/config/organization'
import { siteConfig } from '@/config/site'

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: aboutUs.title,
  description: aboutUs.description
}

export default function AboutUsPage () {
  return (
    <>
      <Hero title={aboutUs.title} description={aboutUs.description} highlight={1} />
      <div className='space-y-spacing-7 mt-spacing-7'>
        {aboutUs.items.map((aboutUsItem, key) => (
          <article className='cols-container mt-spacing-3 odd:flex-row-reverse' key={key}>
            <div className='w-6-cols sm:w-8-cols md:w-3-cols lg:w-5-cols mt-spacing-6 md:mt-0 order-2'>
              <div className='sm:max-w-lg sm:pt-spacing-6 lg:pt-spacing-7'>
                <h3 className='f-heading-2 f-header'>
                  {aboutUsItem.title}
                </h3>
                <p className='f-subhead-2 text-muted-foreground text-balance mt-spacing-5'>
                  {aboutUsItem.description}.
                </p>
              </div>
            </div>
            <div className='w-6-cols sm:w-8-cols md:w-5-cols lg:w-7-cols bg-secondary order-1'>
              <Image
                src={aboutUsItem.image.src}
                alt={aboutUsItem.image.alt}
                width={aboutUsItem.image.width}
                height={aboutUsItem.image.height}
                sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                loading='lazy'
                className='w-full'
              />
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
