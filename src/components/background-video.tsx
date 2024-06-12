'use client'
import { useEffect, useState, useRef, type MouseEvent } from 'react'
import { motion } from 'framer-motion'
import { Icons } from '@/components/icons'
import { isFullScreen, requestFullScreen } from '@/lib/utils'

interface BackgroundVideoProps {
  src: string
  filter?: boolean
}

export default function BackgroundVideo ({ src, filter }: BackgroundVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const preventContextMenu = (event: MouseEvent<HTMLVideoElement>) => event.preventDefault()

  const handleVideo = () => {
    const videoNode = videoRef.current

    if (videoNode) {
      if (videoNode.paused) {
        videoNode.play()
        setIsPlaying(true)
        requestFullScreen(videoNode)
      } else {
        videoNode.pause()
        setIsPlaying(false)
      }
    }
  }

  const handleFullScreenChange = () => {
    if (!isFullScreen()) {
      videoRef.current?.pause()
      setIsPlaying(false)
    } else {
      setIsPlaying(true)
    }
  }

  useEffect(() => {
    const videoNode = videoRef.current

    if (videoNode) {
      videoNode.addEventListener('fullscreenchange', handleFullScreenChange)
      return () => {
        videoNode.removeEventListener('fullscreenchange', handleFullScreenChange)
      }
    }
  }, [])

  return (
    <div className='absolute inset-0 overflow-hidden z-0'>
      <video
        className='w-full h-full object-cover relative'
        width={1920}
        height={1080}
        controls={isPlaying}
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
        onContextMenu={preventContextMenu}
        ref={videoRef}
      >
        <source src={src} type='video/mp4' />
      </video>
      <button
        className='w-24 lg:w-32 h-24 lg:h-32 absolute inset-0 m-auto z-20'
        onClick={handleVideo}
      >
        <div className='w-full h-full relative bg-black/50 backdrop-filter backdrop-blur-lg rounded-full grid place-content-center'>
          {isPlaying
            ? (
              <>
                <Icons.Pause className='fill-white w-9 lg:w-12 h-auto' />
                <span className='sr-only'>Pausar video</span>
              </>
              )
            : (
              <>
                <Icons.Play className='fill-white w-9 lg:w-12 h-auto' />
                <span className='sr-only'>Reproducir video</span>
              </>
              )}
        </div>
        <motion.div
          className='absolute inset-0 m-auto bg-black/50 rounded-full -z-10 opacity-40'
          initial={{
            scale: 1
          }}
          animate={{
            scale: [1, 1.2, 1.2, 1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.3
          }}
        />
        <motion.div
          className='absolute inset-0 m-auto bg-black/50 rounded-full -z-10 opacity-30'
          initial={{
            scale: 1
          }}
          animate={{
            scale: [1, 1.5, 1.5, 1, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatDelay: 0.3
          }}
        />
      </button>
      {filter && <div className='absolute inset-0 bg-black/10 z-10' />}
    </div>
  )
}
