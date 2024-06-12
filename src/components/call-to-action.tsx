import { type ComponentProps } from 'react'
import { Button } from '@/components/ui/button'
import NextLink from '@/components/ui/next-link'
import { cn } from '@/lib/utils'
import { siteNav } from '@/config/site'

const routes = {
  contact: siteNav.find((navItem) => navItem.title === 'Contáctanos')
}

interface CallToActionProps extends Pick<ComponentProps<typeof NextLink>, 'className' | 'onClick'> {
  to: keyof typeof routes
}

export const CallToAction = ({ className, onClick, to }: CallToActionProps) => {
  return (
    <Button
      asChild
      size='lg'
      className={cn(
        'hidden sm:inline-flex lg:font-medium text-sm lg:text-lg tracking-wider',
        className
      )}
    >
      <NextLink
        href={to}
        onClick={onClick}
      >
        Contáctanos
      </NextLink>
    </Button>
  )
}
