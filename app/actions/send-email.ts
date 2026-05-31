'use server'

import { ContactEmail } from '@/components/contact-email'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

type ContactFormState = {
  error: string | null
  success: boolean
}

export async function sendEmail(formData: FormData): Promise<ContactFormState> {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    return {
      error: 'Missing fields',
      success: false,
    }
  }

  try {
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev'
    const toEmail =
      process.env.RESEND_TO_EMAIL ||
      process.env.CONTACT_EMAIL ||
      'ignaciofigueroadev@gmail.com'

    const data = await resend.emails.send({
      from: `Services · Ignacio Figueroa <${fromEmail}>`,
      to: [toEmail],
      subject: `[Service Request] ${name} — ${email}`,
      replyTo: [email],
      react: ContactEmail({ name, email, message }) as React.ReactElement,
    })

    if (data.error) {
      console.error('[send-email] Resend error:', data.error)
      return {
        error: data.error.message,
        success: false,
      }
    }

    return {
      error: null,
      success: true,
    }
  } catch (err: unknown) {
    console.error('[send-email] Exception during email send:', err)
    return {
      error: 'Internal Server Error',
      success: false,
    }
  }
}
