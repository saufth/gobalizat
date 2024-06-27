'use client'
import { useRef, useTransition } from 'react'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/text-area'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { toast } from 'sonner'
import ReCAPTCHA from 'react-google-recaptcha'
import { PaperPlaneIcon } from '@radix-ui/react-icons'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { type Inputs, contactSchema } from '@/lib/validations/email'

const recaptchaSitekey = String(process.env.NEXT_PUBLIC_RECAPTCHA)

export default function ContactForm () {
  const [isPending, startTransition] = useTransition()

  const form = useForm<Inputs>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: ''
    }
  })

  const formRef = useRef<HTMLFormElement>(null)
  const recaptchaRef = useRef<ReCAPTCHA>(null)

  const onSubmit = async (data: Inputs) => {
    startTransition(async () => {
      if (!recaptchaRef.current?.getValue()) {
        toast.error('Porfavor, verifica que no eres un robot.')
        return
      }

      const response = await fetch('/api/email/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        switch (response.status) {
          case 422:
            toast.error('Entrada invalida.')
            break
          case 500:
            toast.error('Algo salió mal. Inténtalo de nuevo más tarde.')
            break
          default:
            toast.error('Algo salió mal. Inténtalo de nuevo más tarde.')
        }
        return
      }

      toast.success('Hemos recibido tu mensaje. En breve serás atendido por un asesor.')
      form.reset()
    })
  }

  return (
    <Form {...form}>
      <form
        className='space-y-4'
        // eslint-disable-next-line no-void
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
        ref={formRef}
      >
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nombre completo</FormLabel>
              <FormControl>
                <Input
                  placeholder='Tu nombre completo'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Correo electrónico</FormLabel>
              <FormControl>
                <Input
                  placeholder='ej. correo@ejemplo.com'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Número de teléfono</FormLabel>
              <FormControl>
                <Input
                  className='rounded-none'
                  placeholder='Ingresa un número de teléfono'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='subject'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Asunto</FormLabel>
              <FormControl>
                <Textarea
                  className='resize-none border-none ring-ring ring-1focus-visible:ring-ring'
                  rows={4}
                  placeholder='Cuéntanos ¿Cómo podemos ayudarte?'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='flex'>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={recaptchaSitekey}
          />
        </div>
        <Button
          className='[&>*]:text-accent-foreground lg:w-full'
          size='full'
          disabled={isPending}
        >
          {isPending
            ? (
              <span className='flex items-center gap-x-2'>
                Enviando <Icons.Spinner className='h-3 w-3' aria-hidden='true' />
              </span>)
            : (
              <span className='pt-px lg:pt-0 flex items-center gap-x-spacing-2 uppercase lg:font-medium text-xs lg:text-sm tracking-wider'>
                Enviar <PaperPlaneIcon className='h-3 xl:h-3 w-3.5 xl:w-3.5 [&>*]:fill-accent-foreground' aria-hidden='true' />
              </span>)}
        </Button>
      </form>
    </Form>
  )
}
