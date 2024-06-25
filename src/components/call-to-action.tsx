import { type ComponentProps } from 'react'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Button, type ButtonVariantProps } from '@/components/ui/button'
import NextLink from '@/components/ui/next-link'
import { cn } from '@/lib/utils'
import { siteNav } from '@/config/site'

const siteRoutes = {
  services: siteNav.find((navItem) => navItem.href === '/servicios')!,
  contact: siteNav.find((navItem) => navItem.href === '/contacto')!
}

export interface CallToActionProps
  extends Pick<ComponentProps<typeof NextLink>, 'className' | 'onClick'>,
    ButtonVariantProps {
  children?: string
  to?: keyof typeof siteRoutes
}

export const CallToAction = (
  {
    children,
    className,
    onClick,
    to = 'contact',
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
        'text-sm lg:text-lg tracking-wide flex items-center gap-x-spacing-3',
        className
      )}
    >
      <NextLink
        href={siteRoutes[to].href}
        onClick={onClick}
      >
        {children || siteRoutes[to]?.title}
        <ArrowRightIcon className='[&_*]:fill-accent-foreground w-auto h-4 sm:h-5' />
      </NextLink>
    </Button>
  )
}
