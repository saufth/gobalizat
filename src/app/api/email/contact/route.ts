import nodemailer from 'nodemailer'
import { z } from 'zod'
import { contactSchema } from '@/lib/validations/email'
import { siteConfig, contactEmail } from '@/config/site'

export async function POST (req: Request) {
  const input = contactSchema.parse(await req.json())

  try {
    const transporter = nodemailer.createTransport({
      name: String(process.env.EMAIL_NAMESERVER),
      host: String(process.env.EMAIL_HOST),
      port: 465,
      secure: true,
      auth: {
        user: contactEmail,
        pass: String(process.env.EMIAL_CONTACT)
      }
    })

    await transporter.sendMail({
      from: `${siteConfig.name} ${contactEmail}`,
      to: contactEmail,
      subject: 'Nuevo mensaje desde formulario web',
      html: `
        <p><b>Nombre:</b> ${input.name}</p>
        <p><b>Correo electrónico:</b> ${input.email}</p>
        <p><b>Teléfono:</b> ${input.phone}</p>
        <p><b>Asunto:</b> ${input.subject}</p>
      `
    }).then(() => (
      transporter.sendMail({
        from: `${siteConfig.name}`,
        to: input.email,
        subject: `${input.name}, hemos recibido tu mensaje en ${siteConfig.name}`,
        html: `
          <h1><b>¡Gracias por contactarnos!</b></h1>
          <p>Un miembro de nuestro equipo se comunicará contigo en breve.</p>
        `
      })
    ))

    return new Response(null, { status: 200 })
  } catch (err) {
    if (err instanceof z.ZodError) {
      return new Response('Something went wrong', { status: 422 })
    }

    if (err instanceof Error) {
      return new Response('Something went wrong', { status: 500 })
    }

    return new Response('Something went wrong', { status: 500 })
  }
}
