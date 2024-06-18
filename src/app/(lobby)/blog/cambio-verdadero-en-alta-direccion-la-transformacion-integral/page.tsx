import { type Metadata } from 'next'
import Image from 'next/image'
import { siteConfig } from '@/config/site'
import { blog } from '@/config/blog'

const article = blog.find((articleItem) => articleItem.title === 'Cambio verdadero en alta dirección: La transformación integral')!

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: article.title,
  description: typeof article.description === 'string' ? article.description : article.description[0]!
}

export default function CambioVerdaderoEnAltaDireccionLaTransformacionIntegralPage () {
  return (
    <>
      <section className='-mt-nav-h'>
        <div className='container pt-spacing-9'>
          <h1 className='f-display-3 font-primary font-bold text-balance'>
            {article.title}
          </h1>
        </div>
        <div className='block md:hidden bg-primary mt-spacing-6'>
          <Image
            src={article.image.src}
            alt={article.image.alt}
            width={article.image.width}
            height={article.image.height}
            sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
            loading='lazy'
          />
        </div>
      </section>
      <section>
        <div className='container pt-spacing-5'>
          <div className='hidden md:block bg-primary float-right ml-gutter mb-gutter'>
            <Image
              src={article.image.src}
              alt={article.image.alt}
              width={article.image.width}
              height={article.image.height}
              sizes='(max-width: 744px) 100vw, (max-width: 1280px) 100vw, (max-width: 1440px) 100vw, 100vw'
              loading='lazy'
              className='md:w-md lg:w-xl xl:w-2xl h-auto'
            />
          </div>
          <div className='mt-spacing-6 md:mt-0 space-y-spacing-6'>
            <p className='text-muted-foreground f-subhead-3 text-balance mt-spacing-5 md:mt-0'>
              {article.description}
            </p>
            {article.items.map((articleItem, key) => (
              <div className='' key={key}>
                <h3 className='f-heading-2 mt-spacing-5 text-balance font-header f-header'>
                  {articleItem.title}
                </h3>
                {typeof articleItem.description === 'string'
                  ? (
                    <p className='text-muted-foreground f-subhead-3 text-balance mt-spacing-5'>
                      {articleItem.description}
                    </p>
                    )
                  : (
                    <div className='mt-spacing-5 space-y-spacing-4'>
                      {articleItem.description.map((descriptionItem, key) => (
                        <p className='text-muted-foreground f-subhead-3 text-balance' key={key}>
                          {descriptionItem}
                        </p>
                      ))}
                    </div>
                    )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
