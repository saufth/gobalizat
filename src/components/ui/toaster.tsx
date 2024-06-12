'use client'
import { Toaster as RadToaster } from 'sonner'

export function Toaster () {
  return (
    <RadToaster
      position='bottom-right'
      toastOptions={{
        style: {
          background: 'oklch(var(--background))',
          color: 'oklch(var(--foreground))',
          border: '1px solid oklch(var(--border))'
        }
      }}
    />
  )
}
