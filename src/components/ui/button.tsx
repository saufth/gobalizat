import React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'w-max inline-flex items-center font-header justify-center items-center focus-visible:outline-none ring-0 ring-transparent focus-visible:ring-0 focus-visible:ring-transparent disabled:pointer-events-none disabled:opacity-50 transition-colors duration-300',
  {
    variants: {
      variant: {
        default: 'bg-accent text-accent-foreground hover:bg-accent/90',
        destructive: 'bg-destructive/95 text-destructive-foreground hover:bg-destructive',
        outline: 'border border-primary text-primary hover:bg-primary text-primary hover:text-primary-foreground',
        secondary: 'bg-secondary/90 text-secondary-foreground hover:bg-secondary',
        ghost: 'bg-primary/50 hover:bg-primary/60 border',
        link: 'hover:underline'
      },
      size: {
        default: 'h-8 lg:h-9 px-4 text-sm lg:text-base',
        xs: 'text-xs lg:text-sm',
        sm: 'px-1 text-sm lg:text-base',
        lg: 'w-fit h-11 xl:h-12 px-3.5 sm:px-4 text-sm sm:text-base',
        full: 'w-full sm:w-fit h-11 xl:h-12 px-3.5 sm:px-4 text-sm sm:text-base',
        icon: 'h-7 lg:h-[33px] w-7 lg:w-[33px]'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
)

type ButtonVariantProps = VariantProps<typeof buttonVariants>

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantProps {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export {
  Button,
  buttonVariants,
  type ButtonVariantProps,
  type ButtonProps
}
