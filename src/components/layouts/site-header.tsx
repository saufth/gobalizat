'use client'
import { useState } from 'react'
import { CallToAction } from '@/components/call-to-action'
import { Icons } from '@/components/icons'
import { ModeToggle } from '@/components/layouts/mode-toggle'
import Menu from '@/components/layouts/menu'
import NextLink from '@/components/ui/next-link'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'

export default function SiteHeader () {
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
          borderColor: 'transparent'
        }}
        animate={{
          y: visible || isMenuOpen ? 0 : -100,
          backgroundColor: isOnTop || isMenuOpen ? 'oklch(var(--background)/0)' : 'oklch(var(--background)/0.8)',
          borderColor: isOnTop || isMenuOpen ? 'transparent' : 'oklch(var(--border))'
        }}
        transition={{
          duration: 0.5
        }}
        className={cn(
          'w-full fixed top-0 left-0 z-40 backdrop-filter backdrop-saturate-150 backdrop-blur-lg border-b',
          (isOnTop || isMenuOpen) && 'backdrop-filter-none'
        )}
      >
        <nav aria-label={`${siteConfig.name} directory`}>
          <div className='container relative z-10'>
            <div className='w-full h-[74px] lg:h-24 flex justify-between items-center'>
              <div className='h-12 lg:h-16'>
                <NextLink href='/' onClick={closeMenu}>
                  <Icons.Logotype
                    className={cn('w-auto h-full', (isOnTop && !isMenuOpen) && '[&_.logo-primary-fill]:fill-white')}
                  />
                  <span className='sr-only'>{siteConfig.name} home</span>
                </NextLink>
              </div>
              <div className='flex items-center gap-x-6'>
                <ModeToggle />
                <button className='w-9 h-2.5 relative' onClick={toggleMenu}>
                  <motion.span
                    initial={{
                      backgroundColor: 'oklch(100% 0 0)',
                      top: 0,
                      left: 0
                    }}
                    animate={{
                      backgroundColor: isMenuOpen ? 'oklch(var(--accent))' : 'oklch(100% 0 0)',
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
                      backgroundColor: isMenuOpen ? 'oklch(var(--accent))' : 'oklch(100% 0 0)',
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
                <CallToAction to='contact' onClick={closeMenu} />
              </div>
            </div>
          </div>
        </nav>
      </motion.header>
      <motion.div
        initial={{ height: '0px' }}
        animate={{ height: isMenuOpen ? '100dvh' : '0px' }}
        transition={{
          duration: 0.8,
          type: 'spring'
        }}
        className='w-full bg-background/90 backdrop-filter backdrop-blur-md fixed flex flex-col justify-between top-0 left-0 z-30 overflow-x-hidden overflow-y-auto'
      >
        <div className='container mt-spacing-8 md:mt-spacing-9 pb-gutter'>
          <Menu action={closeMenu} />
        </div>
      </motion.div>
    </>
  )
}
