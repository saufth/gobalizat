export interface BackgroundVideoProps {
  src: string
}

export function BackgroundVideo ({ src }: BackgroundVideoProps) {
  return (
    <div className='absolute inset-0 overflow-hidden z-0'>
      <video
        className='w-full h-full object-cover relative'
        width={1920}
        height={1080}
        controls={false}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        controlsList='nodownload noplaybackrate'
      >
        <source src={src} type='video/mp4' />
      </video>
      <div className='absolute inset-0 bg-black/60 z-10' />
    </div>
  )
}
