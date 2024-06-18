import { Header } from '@/types'

export const SectionHeader = ({ title, description } : Header) => {
  return (
    <div>
      <h2 className='text-[11px] sm:text-sm xl:text-base uppercase text-muted-foreground font-medium text-balance tracking-wider'>
        {title}
      </h2>
      <p className='f-heading-1 font-medium text-balance mt-spacing-2'>
        {description}
      </p>
    </div>
  )
}
