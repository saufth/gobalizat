import { type PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import type { Title, Description } from '@/types'

export interface HeroProps extends Title, Partial<Description>, PropsWithChildren {
  highlight?: number
  className?: string
}

export const Hero = ({ title, description, highlight = 0, children, className }: HeroProps) => {
  return (
    <section className={cn('pt-spacing-9', className)}>
      <div className='container'>
        <h1 className='f-display-1 font-primary'>
          {title}
        </h1>
        {description && (
          <div className='mt-spacing-6'>
            <p className='text-muted-foreground f-subhead-2 text-balance'>
              {description}
            </p>
          </div>
        )}
      </div>
      {children}
    </section>
  )
}
