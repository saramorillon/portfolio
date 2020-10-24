import Axios from 'axios'
import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import Router from 'koa-router'
import nodemailer from 'nodemailer'

export const mailApp = new Koa()
const router = new Router()

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

async function verifyCaptcha(captcha: string): Promise<boolean> {
  return Axios.post('https://www.google.com/recaptcha/api/siteverify', {
    secret: process.env.SECRET,
    response: captcha,
  })
}

async function sendMail(name: string, from: string, subject: string, html: string): Promise<boolean> {
  return transport.sendMail({
    to: 'sara.morillon.pro@gmail.com',
    subject: 'You received an email from your portfolio',
    html: `<em>You received an email from ${name} &lt;<a href="mailto:${from}">${from}</a>&gt;</em><h4>${subject}</h4><p>${html}</p>`,
  })
}

router.post('/', async (ctx: Koa.Context) => {
  const { name, email, subject, body, captcha } = ctx.request.body
  try {
    await verifyCaptcha(captcha)
    await sendMail(name, email, subject, body)
    ctx.status = 204
  } catch (error) {
    ctx.status = 500
  }
})

mailApp.use(bodyParser())
mailApp.use(router.routes())
mailApp.use(router.allowedMethods())
