import Script from 'next/script'
import { absoluteUrl } from '@/lib/utils'
import { siteConfig } from '@/config/site'

const SEARCH_SCHEME = {
  '@context': 'https://schema.org/',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': absoluteUrl('/#organization'),
      name: `${siteConfig.name}`
    },
    {
      '@type': 'WebSite',
      '@id': absoluteUrl('/#website'),
      url: absoluteUrl(),
      name: `${siteConfig.name}`,
      publisher: {
        '@id': absoluteUrl('/#organization')
      },
      inLanguage: 'es-MX'
    },
    {
      '@type': 'CollectionPage',
      '@id': absoluteUrl('/#webpage'),
      url: absoluteUrl(),
      name: `${siteConfig.name}`,
      about: {
        '@id': absoluteUrl('/#organization')
      },
      isPartOf: {
        '@id': absoluteUrl('/#website')
      },
      inLanguage: 'es-MX'
    }
  ]
} as const

const addWebsiteJsonId = () => {
  return {
    __html: JSON.stringify(SEARCH_SCHEME)
  }
}

export default function GoogleSearchScript () {
  return (
    <Script
      type='application/ld+json'
      dangerouslySetInnerHTML={addWebsiteJsonId()}
      id='WebSite'
    />
  )
}
