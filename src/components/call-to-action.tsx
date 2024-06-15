import { type ComponentProps } from 'react'
import { Button, type ButtonVariantProps } from '@/components/ui/button'
import NextLink from '@/components/ui/next-link'
import { cn } from '@/lib/utils'
import { siteNav } from '@/config/site'

const siteRoutes = {
  contact: siteNav.find((navItem) => navItem.title === 'Contáctanos')
}

interface CallToActionProps
  extends Pick<ComponentProps<typeof NextLink>, 'className' | 'onClick'>,
    ButtonVariantProps {
  to: keyof typeof siteRoutes
}

export const CallToAction = (
  {
    className,
    onClick,
    to,
    size = 'lg',
    variant
  }: CallToActionProps
) => {
  return (
    <Button
      asChild
      size={size}
      variant={variant}
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
