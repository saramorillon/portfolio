import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    type: 'OAuth2',
    user: 'sara.morillon.pro@gmail.com',
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
})

export async function sendMail(name: string, from: string, subject: string, html: string): Promise<boolean> {
  return transport.sendMail({
    to: 'sara.morillon.pro@gmail.com',
    subject: `${name} sent you a message`,
    html: `<p>You received an email from <strong>${name}</strong> &lt;<a href="mailto:${from}">${from}</a>&gt;</p>
<hr />
<h4>${subject}</h4>
<p>${html}</p>`,
  })
}

export async function sendConfirmation(name: string, to: string, subject: string, html: string): Promise<boolean> {
  return transport.sendMail({
    to,
    subject: 'Thank you for your message',
    html: `<p>Dear ${name},<p/>
<p>Thank you for your message. You can find a duplicate below.</p>
<p>Best regards,<br />Sara Morillon</p>
<hr />
<h4>${subject}</h4>
<p>${html}</p>`,
  })
}
