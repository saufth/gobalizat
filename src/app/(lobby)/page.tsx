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
        to='contact'
        src='/video/home-hero.mp4'
      />
      <section>
        <div className='container pt-spacing-8'>
          <div className='space-y-spacing-7'>
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
              <div className='w-6-cols sm:w-8-cols md:w-4-cols lg:w-6-cols bg-secondary mt-spacing-6 md:mt-0'>
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
      <section id='nosotros'>
        <div className='container pt-spacing-8'>
          <SectionHeader
            title={aboutUs.title}
            description={aboutUs.description}
          />
          <div className='space-y-spacing-6 mt-spacing-6'>
            {aboutUs.items.map((aboutUsItem, key) => (
              <article className='cols-container even:flex-row-reverse' key={key}>
                <div className='w-6-cols sm:w-8-cols md:w-4-cols lg:w-6-cols mt-spacing-4 md:mt-0 order-2 lg:px-spacing-3'>
                  <div className='sm:max-w-lg'>
                    <h3 className='f-heading-2 font-header text-balance'>
                      {aboutUsItem.title}
                    </h3>
                    <div className='space-y-spacing-3 mt-spacing-4'>
                      {aboutUsItem.description.map((descriptionItem, key) => (
                        <p className='f-body-1 text-balance' key={key}>
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
        <div className='container pt-spacing-8'>
          <SectionHeader
            title='Nuestro blog'
            description='Hecha un vistazo a nuestros últimos artículos.'
          />
          <div className='cols-container mt-spacing-6 gap-y-gutter relative z-10'>
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
                      <CardTitle className='font-header'>
                        {blogItem.title}
                      </CardTitle>
                      <CardDescription>
                        {blogItem.description}
                      </CardDescription>
                      <div className='pt-spacing-4'>
                        <div className='f-body-1 group-hover:underline flex items-center gap-x-2'>
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
      <section id='preguntas-frecuentes'>
        <div className='container pt-spacing-8'>
          <SectionHeader
            title={faq.title}
            description={faq.description}
          />
          <div className='mt-spacing-6'>
            <Accordion type='single' collapsible className='w-full space-y-spacing-4'>
              {faq.items.map((faqItem, key) => (
                <AccordionItem value={`item-${key}`} key={`item-${key}`}>
                  <AccordionTrigger className='f-subhead-3 text-left text-balance pt-0 pb-spacing-4'>
                    {faqItem.title}
                  </AccordionTrigger>
                  <AccordionContent className='f-body-1 text-balance pb-spacing-4 text-muted-foreground'>
                    {typeof faqItem.description === 'string'
                      ? faqItem.description
                      : (
                        <div className='space-y-spacing-3 text-muted-foreground'>
                          {faqItem.description.map((descriptionItem, key) => (
                            <div key={key}>
                              {descriptionItem}
                            </div>
                          ))}
                        </div>
                        )}
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
