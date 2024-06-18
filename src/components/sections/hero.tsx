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
        'screen-container relative overflow-hidden -mt-[75px] lg:-mt-[97px]',
        className
      )}
    >
      <div className='container h-full flex flex-col justify-center relative z-10 pt-spacing-6'>
        <div className='max-w-md sm:max-w-2xl lg:max-w-3xl'>
          <div className='space-y-spacing-4'>
            <h1 className='f-display-2 font-primary font-bold text-white text-balance'>
              {title}
            </h1>
            {description && (
              <p className='f-subhead-3 text-balance text-white'>
                {description}
              </p>
            )}
          </div>
          {to && (
            <CallToAction to={to} className='mt-spacing-5' />
          )}
        </div>
        {children}
      </div>
      {src && <BackgroundVideo src={src} />}
    </section>
  )
}
