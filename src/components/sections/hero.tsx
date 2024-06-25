import { type PropsWithChildren } from 'react'
import { CallToAction, type CallToActionProps } from '@/components/call-to-action'
import { BackgroundVideo, type BackgroundVideoProps } from '@/components/background-video'
import { cn } from '@/lib/utils'
import type { Title, Description } from '@/types'

export interface HeroProps
  extends Title,
    Partial<Description>,
    PropsWithChildren,
    Partial<Pick<CallToActionProps, 'to'>>,
    Partial<BackgroundVideoProps> {
  className?: string
}

export const Hero = ({ title, description, to, src, children, className }: HeroProps) => {
  return (
    <section
      className={cn(
        'screen-container relative overflow-hidden -mt-header-h',
        className
      )}
    >
      <div className='container h-full flex flex-col justify-center relative z-10 pt-spacing-6'>
        <div className='max-w-md sm:max-w-2xl lg:max-w-3xl space-y-spacing-4'>
          <h1 className='f-display-2 font-header text-white text-balance'>
            {title}
          </h1>
          {description && (
            <p className='f-subhead-3 font-header text-balance text-white'>
              {description}
            </p>
          )}
          {to && (
            <CallToAction to={to} />
          )}
        </div>
        {children}
      </div>
      {src && <BackgroundVideo src={src} />}
    </section>
  )
}
