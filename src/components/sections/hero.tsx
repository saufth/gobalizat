import { type PropsWithChildren } from 'react'
import { cn } from '@/lib/utils'
import type { Title, Description } from '@/types'
import BackgroundVideo from '../background-video'

export interface HeroProps extends Title, Partial<Description>, PropsWithChildren {
  highlight?: number
  className?: string
}

export const Hero = ({ title, description, children, className }: HeroProps) => {
  return (
    <section className={cn('screen-container relative overflow-hidden', className)}>
      <div className='container h-full flex flex-col justify-center relative z-10'>
        <div className='max-w-md sm:max-w-xl xl:max-w-3xl mt-spacing-6'>
          <h1 className='f-display-2 font-primary font-bold text-white'>
            {title}
          </h1>
          {description && (
            <div className='mt-spacing-4'>
              <p className='f-subhead-2 text-balance text-white'>
                {description}
              </p>
            </div>
          )}
        </div>
        {children}
      </div>
      <BackgroundVideo src='/video/home-hero.mp4' />
    </section>
  )
}
