import { Header } from '@/types'

export const SectionHeader = ({ title, description } : Header) => {
  return (
    <div className='flex flex-col gap-y-spacing-4'>
      <h2 className='text-[0.6875rem] sm:text-[0.875rem] xl:text-[1rem] font-header uppercase text-muted-foreground font-medium text-balance leading-none tracking-wider'>
        {title}
      </h2>
      <p className='f-heading-1 font-header text-balance'>
        {description}
      </p>
    </div>
  )
}
