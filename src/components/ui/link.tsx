import React from 'react'
import NextLink from '@/components/ui/next-link'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'hover:underline transition-colors duration-300',
  {
    variants: {
      variant: {
        default: '',
        primary: 'text-primary-foreground',
        secondary: 'text-secondary-foreground',
        accent: 'text-accent',
        muted: 'text-muted-foreground hover:text-foreground transition-colors duration-300',
        destructive: 'text-destructive-foreground'
      },
      size: {
        default: '',
        xs: 'text-xs lg:text-sm',
        sm: 'text-sm lg:text-base',
        lg: 'f-subhead-2 font-medium',
        xl: 'f-subhead-1 font-medium',
        '2xl': 'f-subhead-2 font-medium'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

type LinkVariantProps = VariantProps<typeof buttonVariants>

type LinkProps = React.ComponentProps<typeof NextLink> & LinkVariantProps

const Link = ({ className, variant, size, ...props }: LinkProps) => {
  return (
    <NextLink
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}
Link.displayName = 'Link'

export {
  Link,
  type LinkVariantProps,
  type LinkProps
}
