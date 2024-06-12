import { Header } from '@/types'
import { Highlight } from '@/components/highlight'

interface SectionHeaderProps extends Header {
  highlight?: number
}

export const SectionHeader = ({ title, description, highlight = -1 } : SectionHeaderProps) => {
  return (
    <header>
      <h2 className='text-sm sm:f-body-1 font-light text-muted-foreground uppercase font-primary'>
        {title}
      </h2>
      <p className='f-display-2 xs:f-display-2 mt-spacing-3 text-balance font-prvmary f-header'>
        <Highlight index={highlight}>
          {description}
        </Highlight>
      </p>
    </header>
  )
}
