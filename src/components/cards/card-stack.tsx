'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { type CardStackItem } from '@/types'

let interval: any

export interface CardStackProps<T = CardStackItem> {
  items: T[]
  offset?: number
  scaleFactor?: number
  className?: string
}

export const CardStack = ({
  className,
  items,
  offset,
  scaleFactor
}: CardStackProps) => {
  const CARD_OFFSET = offset || 10
  const SCALE_FACTOR = scaleFactor || 0.06
  const [cards, setCards] = useState<CardStackItem[]>(items)

  useEffect(() => {
    startFlipping()

    return () => clearInterval(interval)
  }, [])

  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: CardStackItem[]) => {
        const newArray = [...prevCards] // create a copy of the array
        newArray.unshift(newArray.pop()!) // move the last element to the front
        return newArray
      })
    }, 5000)
  }

  return (
    <div className={cn('h-64 w-64 relative', className)}>
      {cards.map((card, index) => {
        return (
          <motion.div
            key={index}
            className='absolute bg-card text-card-foreground h-full w-full p-8 border shadow-xl dark:shadow-none flex flex-col justify-between'
            style={{
              transformOrigin: 'top center'
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index //  decrease z-index for the cards that are behind
            }}
          >
            <div className='f-subhead-2 font-normal text-card-foreground text-blance'>
              {card.content}
            </div>
            <div className='flex gap-x-4 items-center'>
              <Image
                src={card.image.src}
                alt={card.image.alt}
                width={card.image.width}
                height={card.image.height}
                className='w-16 h-16 rounded-full'
              />
              <div>
                <p className='f-subhead-3 text-card-foreground font-medium'>
                  {card.name}
                </p>
                <p className='f-subhead-3 text-muted-foreground'>
                  {card.designation}
                </p>
              </div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}
