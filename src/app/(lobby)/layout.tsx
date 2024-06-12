import React from 'react'
import SiteFooter from '@/components/layouts/site-footer'
import SiteHeader from '@/components/layouts/site-header'

export default async function LobbyLayout ({ children }: React.PropsWithChildren) {
  return (
    <>
      <SiteHeader />
      <main>
        {children}
      </main>
      <SiteFooter />
    </>
  )
}
