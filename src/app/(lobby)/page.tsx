import Image from 'next/image'
import NextLink from '@/components/ui/next-link'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { CallToAction } from '@/components/call-to-action'
import { Hero } from '@/components/sections/hero'
import { SectionHeader } from '@/components/sections/section-header'
import { siteConfig } from '@/config/site'
import { aboutUs, faq } from '@/config/organization'
import { blog } from '@/config/blog'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function IndexPage () {
  return (
    <>
      <Hero
        title={siteConfig.slogan}
        description={siteConfig.description}
        src='/video/home-hero.mp4'
      />
      <section className='mt-spacing-9'>
        <div className='container'>
          <div className='space-y-spacing-7 mt-spacing-7'>
            <div className='cols-container'>
              <div className='w-6-cols sm:w-8-cols md:w-4-cols lg:w-6-cols mt-spacing-4 md:mt-0'>
                <div className='sm:max-w-lg'>
                  <SectionHeader
                    title='Soluciones personalizadas'
                    description='Aseguramos que nuestras marcas asociadas logren el éxito global con resultados sostenibles.'
                  />
                  <CallToAction to='services' className='mt-spacing-5' />
                </div>
              </div>
              <div className='w-6-cols sm:w-8-cols md:w-4-cols lg:w-6-cols bg-secondary mt-spacing-5 md:mt-0'>
                <Image
                  src='/images/home-services.webp'
                  alt=''
                  width={768}
                  height={768}
                  sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
                  loading='lazy'
                  className='w-full'
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='nosotros' className='mt-spacing-9'>
        <div className='container'>
          <div className='space-y-spacing-3'>
            <h2 className='text-xs sm:text-sm xl:text-base uppercase text-muted-foreground text-balance font-medium'>
              {aboutUs.title}
            </h2>
            <p className='f-heading-1 text-balance'>
              {aboutUs.description}
            </p>
          </div>
          <div className='space-y-spacing-7 mt-spacing-7'>
            {aboutUs.items.map((aboutUsItem, key) => (
              <article className='cols-container even:flex-row-reverse' key={key}>
                <div className='w-6-cols sm:w-8-cols md:w-4-cols lg:w-6-cols mt-spacing-4 md:mt-0 order-2 lg:px-spacing-3'>
                  <div className='sm:max-w-lg'>
                    <h3 className='f-heading-2 font-light text-balance'>
                      {aboutUsItem.title}
                    </h3>
                    <div className='space-y-spacing-3 mt-spacing-4'>
                      {aboutUsItem.description.map((descriptionItem, key) => (
                        <p className='f-body-1 font-light text-balance' key={key}>
                          {descriptionItem}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
                <div className='w-6-cols sm:w-8-cols md:w-4-cols lg:w-6-cols bg-secondary order-1'>
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
        </div>
      </section>
      <section>
        <div className='container pt-spacing-9'>
          <SectionHeader
            title='Nuestro blog'
            description='Lorem ipsum dolor sit amet espectatum amet ipsum.'
          />
          <div className='cols-container mt-spacing-5 gap-y-gutter relative z-10'>
            {blog.map((blogItem, key) => (
              <div className='w-6-cols xs:w-3-cols md:w-4-cols lg:w-6-cols' key={key}>
                <NextLink href={blogItem.slug}>
                  <Card as='article' className='group'>
                    <CardContent>
                      <Image
                        src={blogItem.image.src}
                        alt={blogItem.image.alt}
                        width={blogItem.image.width}
                        height={blogItem.image.height}
                      />
                    </CardContent>
                    <CardHeader>
                      <CardTitle>
                        {blogItem.title}
                      </CardTitle>
                      <CardDescription>
                        {blogItem.description}
                      </CardDescription>
                      <div className='pt-spacing-4'>
                        <div className='f-subhead-3 font-semibold group-hover:underline flex items-center gap-x-2'>
                          Ver articulo
                          <ArrowRightIcon />
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </NextLink>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id='preguntas-frecuentes' className='pt-spacing-9'>
        <div className='container'>
          <SectionHeader
            title={faq.title}
            description={faq.description}
          />
          <div className='mt-spacing-5'>
            <Accordion type='single' collapsible className='w-full'>
              {faq.items.map((faqItem, key) => (
                <AccordionItem value={`item-${key}`} key={`item-${key}`}>
                  <AccordionTrigger className='f-subhead-2 text-left'>
                    {faqItem.title}
                  </AccordionTrigger>
                  <AccordionContent className='f-subhead-3'>
                    {faqItem.description}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
    </>
  )
}
