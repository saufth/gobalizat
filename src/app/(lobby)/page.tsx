import { Hero } from '@/components/sections/hero'
import { siteConfig } from '@/config/site'

export default function IndexPage () {
  return (
    <>
      <Hero
        title={siteConfig.slogan}
        description={siteConfig.description}
        highlight={2}
      />
    </>
  )
}
