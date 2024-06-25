import NextLink from '@/components/ui/next-link'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Icons } from '@/components/icons'
import { capitalize, cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'
import { type Nav } from '@/types'

interface SocialNavIconProps { muted?: boolean }

export const socialIcons = [
  {
    title: 'facebook',
    Icon: ({ muted }: SocialNavIconProps) => <Icons.Facebook className={cn('w-auto h-8 md:h-9 lg:h-10', muted && 'text-card-foreground')} />
  },
  {
    title: 'instagram',
    Icon: ({ muted }: SocialNavIconProps) => <Icons.Instagram className={cn('w-auto h-8 md:h-9 lg:h-10', muted && 'text-card-foreground')} />
  },
  {
    title: 'tiktok',
    Icon: ({ muted }: SocialNavIconProps) => <Icons.Tiktok className={cn('w-auto h-8 md:h-9 lg:h-10', muted && 'text-card-foreground')} />
  },
  {
    title: 'twitter',
    Icon: ({ muted }: SocialNavIconProps) => <Icons.Twitter className={cn('w-auto h-6 md:h-[27px] lg:h-[30px]', muted && 'text-card-foreground')} />
  },
  {
    title: 'linkedin',
    Icon: ({ muted }: SocialNavIconProps) => <Icons.Linkedin className={cn('w-auto h-8 md:h-9 lg:h-10', muted && 'text-card-foreground')} />
  },
  {
    title: 'whatsapp',
    Icon: ({ muted }: SocialNavIconProps) => <Icons.Whatsapp className={cn('w-auto h-6 md:h-[27px] lg:h-[30px]', muted && 'text-card-foreground')} />
  }
]

interface SocialNavProps extends Nav {
  action?: () => void
  muted?: boolean
}

const SocialNav = ({ items, action, muted }: SocialNavProps) => {
  return (
    <ul className='flex gap-x-3 items-center'>
      {items.map((socialItem, key) => {
        const socialIcon = socialIcons.find((socialIcon) => socialIcon.title === socialItem.title)
        const socialTitle = capitalize(socialItem.title)

        return (
          <li key={key}>
            <NextLink
              href={socialItem.href}
              onClick={action}
              aria-label={`${socialTitle} - ${siteConfig.name}`}
              target='_blank'
              rel='nooponer noreferrer'
            >
              {socialIcon
                ? <socialIcon.Icon muted />
                : <ArrowRightIcon className={cn('w-7 h-7', muted && 'text-card-foreground')} />}
              <span className='sr-only'>{socialTitle}</span>
            </NextLink>
          </li>
        )
      })}
    </ul>
  )
}

export default SocialNav
