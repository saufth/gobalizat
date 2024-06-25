import nodemailer from 'nodemailer'
import { z } from 'zod'
import { contactEmailSchema } from '@/lib/validations/email'
import { siteConfig, contactEmail } from '@/config/site'

export async function POST (req: Request) {
  const input = contactEmailSchema.parse(await req.json())

  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.globalizat.com',
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: contactEmail,
        pass: String(process.env.GAPP)
      }
    })

    await transporter.sendMail({
      from: siteConfig.name,
      to: input.email,
      subject: `${input.name}, hemos recibido tu mensaje en ${siteConfig.name}`,
      html: `
        <h1><b>¡Gracias por contactarnos!</b></h1>
        <p>Un miembro de nuestro equipo se comunicará con usted en breve.</p>
      `
    })

    await transporter.sendMail({
      from: siteConfig.name,
      to: contactEmail,
      subject: 'Nuevo mensaje desde formulario web',
      html: `
        <p><b>Nombre:</b> ${input.name}</p>
        <p><b>Correo electrónico:</b> ${input.email}</p>
        <p><b>Teléfono:</b> ${input.phone}</p>
        <p><b>Asunto:</b> ${input.subject}</p>
      `
    })

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
