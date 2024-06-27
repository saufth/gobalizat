import * as z from 'zod'

interface Limits {
  min: number
  max: number
}

const createLimitErrorMessage = ({ min, max }: Limits) => {
  return {
    message: min === max
      ? `Debe tener ${min} caracteres`
      : `Debe tener de ${min} a ${max} caracteres`
  }
}

const nameLimits: Limits = { min: 6, max: 80 }
const phoneLimits: Limits = { min: 10, max: 10 }
const subjectLimits: Limits = { min: 12, max: 512 }

const errorMessages = {
  email: { message: 'El correo electrónico no es válido.' },
  phone: { message: 'El número de teléfono no es válido' },
  nameLimit: createLimitErrorMessage(nameLimits),
  phoneLimit: createLimitErrorMessage(phoneLimits),
  subjectLimit: createLimitErrorMessage(subjectLimits)
}

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const contactSchema = z.object({
  name: z.string()
    .min(nameLimits.min, errorMessages.nameLimit)
    .max(nameLimits.max, errorMessages.nameLimit),
  email: z.string()
    .email(errorMessages.email)
    .min(nameLimits.min, errorMessages.nameLimit)
    .max(nameLimits.max, errorMessages.nameLimit),
  phone: z.string()
    .regex(phoneRegExp, errorMessages.phone)
    .min(phoneLimits.min, errorMessages.phoneLimit)
    .max(phoneLimits.max, errorMessages.phoneLimit),
  subject: z.string()
    .min(subjectLimits.min, errorMessages.subjectLimit)
    .max(subjectLimits.max, errorMessages.subjectLimit)
})

export type Inputs = z.infer<typeof contactSchema>
