import * as z from 'zod'

interface Limits {
  min: number
  max: number
}

const limitsErrorMessage = ({ min, max }: Limits) => {
  return min === max
    ? `Debe tener ${min} caracteres`
    : `Debe tener de ${min} a ${max} caracteres`
}

const nameLimits: Limits = { min: 6, max: 80 }
const nameLimitsErrorMessage = limitsErrorMessage(nameLimits)

const phoneLimits: Limits = { min: 10, max: 10 }
const phoneLimitsErrorMessage = limitsErrorMessage(phoneLimits)

const countryLimits: Limits = { min: 4, max: 31 }
const countryLimitsErrorMessage = limitsErrorMessage(countryLimits)

const subjectLimits: Limits = { min: 12, max: 512 }
const subjectLimitsErrorMessage = limitsErrorMessage(subjectLimits)

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

export const emailSchema = z.object({
  email: z.string()
    .email({ message: 'El correo electrónico no es válido.' })
    .max(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage })
})

export const contactEmailSchema = z.object({
  name: z.string()
    .min(nameLimits.min, { message: nameLimitsErrorMessage })
    .max(nameLimits.max, { message: nameLimitsErrorMessage }),
  email: emailSchema.shape.email,
  phone: z.string()
    .regex(phoneRegExp, { message: 'Número de teléfono inválido' })
    .min(phoneLimits.min, { message: phoneLimitsErrorMessage })
    .max(phoneLimits.max, { message: phoneLimitsErrorMessage }),
  country: z.string()
    .min(countryLimits.min, { message: countryLimitsErrorMessage })
    .max(countryLimits.max, { message: countryLimitsErrorMessage }),
  subject: z.string()
    .min(subjectLimits.min, { message: subjectLimitsErrorMessage })
    .max(subjectLimits.max, { message: subjectLimitsErrorMessage })
})

export type Inputs = z.infer<typeof contactEmailSchema>
