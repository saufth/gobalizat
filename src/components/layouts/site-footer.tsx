import { Icons } from '@/components/icons'
import { Link } from '@/components/ui/link'
import MainNav from '@/components/layouts/main-nav'

export default function SiteFooter () {
  return (
    <footer className='bg-card border-t mt-spacing-8'>
      <div className='container'>
        <div className='py-spacing-7'>
          <MainNav muted />
        </div>
        <div className='pb-spacing-4 flex flex-col gap-y-spacing-4 md:flex-row justify-between'>
          <div className='flex items-center gap-x-spacing-1 md:pt-1 lg:pt-2 order-2 md:order-1'>
            <Icons.Logotype className='w-auto h-7 md:h-8 lg:h-9 [&_path]:fill-muted-foreground dark:[&_path]:fill-muted-foreground [&_*]:stroke-muted-foreground' />
            <span className='pt-2 text-muted-foreground text-sm md:text-base lg:text-lg font-primary font-semibold'>
              {`© ${new Date().getFullYear()}`}
            </span>
          </div>
          <div className='flex flex-col md:flex-row gap-4 order-1 md:order-2 sm:pt-2'>
            <Link
              href='/terminos-y-condiciones'
              variant='muted'
              className='text-sm lg:text-base'
            >
              Términos y condiciones
            </Link>
            <Link
              href='/privacidad'
              variant='muted'
              className='text-sm lg:text-base'
            >
              Política de privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
