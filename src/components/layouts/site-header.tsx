'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { CallToAction } from '@/components/call-to-action'
import { Icons } from '@/components/icons'
import { ModeToggle } from '@/components/layouts/mode-toggle'
import Menu from '@/components/layouts/menu'
import NextLink from '@/components/ui/next-link'
import { cn } from '@/lib/utils'
import { siteConfig } from '@/config/site'

export default function SiteHeader () {
  const pathname = usePathname()
  const { scrollYProgress } = useScroll()
  const [isOnTop, setIsOnTop] = useState(true)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [visible, setVisible] = useState(true)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  useMotionValueEvent(scrollYProgress, 'change', (current) => {
    if (typeof current === 'number') {
      const direction = current - scrollYProgress.getPrevious()!

      if (scrollYProgress.get() < 0.03) {
        setVisible(true)
        setIsOnTop(true)
      } else {
        setIsOnTop(false)
        direction < 0
          ? setVisible(true)
          : setVisible(false)
      }
    }
  })

  return (
    <>
      <motion.header
        initial={{
          y: 0,
          backgroundColor: 'oklch(var(--background) / 0)',
          backdropFilter: 'none',
          borderColor: 'oklch(var(--border) / 0)'
        }}
        animate={{
          y: visible || isMenuOpen ? 0 : -100,
          backgroundColor: isOnTop || isMenuOpen ? 'oklch(var(--background)/0)' : 'oklch(var(--background)/0.9)',
          backdropFilter: isOnTop || isMenuOpen
            ? 'none'
            : 'var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)',
          borderColor: isOnTop || isMenuOpen ? 'oklch(var(--border)/0)' : 'oklch(var(--border)/1)'
        }}
        transition={{
          duration: 0.5
        }}
        className='w-full sticky top-0 left-0 z-40 backdrop-filter backdrop-saturate-200 backdrop-blur-xl border-b'
      >
        <nav aria-label={`${siteConfig.name} directory`}>
          <div className='container relative z-10'>
            <div className='w-full h-header flex justify-between items-center'>
              <div className='h-10 lg:h-[50px]'>
                <NextLink href='/' onClick={closeMenu}>
                  <Icons.Logotype
                    className={cn(
                      'w-auto h-full',
                      (pathname === '/' && isOnTop && !isMenuOpen) && '[&_.logo-primary-fill]:fill-white'
                    )}
                  />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </NextLink>
              </div>
              <div className='flex items-center gap-x-6'>
                <ModeToggle className={(pathname === '/' && isOnTop && !isMenuOpen) ? '[&_svg]:fill-white' : ''} />
                <button className='w-9 h-2.5 relative' onClick={toggleMenu}>
                  <motion.span
                    initial={{
                      backgroundColor: 'oklch(100% 0 0)',
                      top: 0,
                      left: 0
                    }}
                    animate={{
                      backgroundColor: isMenuOpen ? 'oklch(var(--accent))' : pathname === '/' && isOnTop ? 'oklch(100% 0 0)' : 'oklch(var(--foreground))',
                      top: isMenuOpen ? 3.8 : 0,
                      left: isMenuOpen ? 3.6 : 0,
                      rotate: isMenuOpen ? 45 : 0
                    }}
                    transition={{
                      duration: 1,
                      type: 'spring'
                    }}
                    className='w-4/5 h-0.5 absolute'
                  />
                  <motion.span
                    initial={{
                      backgroundColor: 'oklch(100% 0 0)',
                      bottom: 0,
                      right: 0
                    }}
                    animate={{
                      backgroundColor: isMenuOpen ? 'oklch(var(--accent))' : pathname === '/' && isOnTop ? 'oklch(100% 0 0)' : 'oklch(var(--foreground))',
                      bottom: isMenuOpen ? 3.8 : 0,
                      right: isMenuOpen ? 3.6 : 0,
                      rotate: isMenuOpen ? -45 : 0
                    }}
                    transition={{
                      duration: 1,
                      type: 'spring'
                    }}
                    className='w-4/5 h-0.5 absolute'
                  />
                  <span className='sr-only'>Toggle menu</span>
                </button>
                <CallToAction to='contact' onClick={closeMenu} className='hidden sm:inline-flex' />
              </div>
            </div>
          </div>
        </nav>
      </motion.header>
      <AnimatePresence>
        {isMenuOpen && <Menu action={closeMenu} />}
      </AnimatePresence>
    </>
  )
}
