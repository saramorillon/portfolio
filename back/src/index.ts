import Koa from 'koa'
import bodyParser from 'koa-bodyparser'
import mount from 'koa-mount'
import Router from 'koa-router'
import serve from 'koa-static'
import path from 'path'
import { verifyCaptcha } from './captcha'
import { env } from './env'
import { sendConfirmation, sendMail } from './mail'

const staticApp = new Koa()

staticApp.use(serve(path.join(__dirname, env.STATIC_CONTENT_PATH)))

const mailApp = new Koa()
const router = new Router()

router.post('/', async (ctx: Koa.Context) => {
  const { name, email, subject, body, captcha } = ctx.request.body
  try {
    await verifyCaptcha(captcha)
    await sendMail(name, email, subject, body)
    await sendConfirmation(name, email, subject, body)
    ctx.status = 204
  } catch (error) {
    ctx.body = error.message
    ctx.status = 500
  }
})

mailApp.use(bodyParser())
mailApp.use(router.routes())
mailApp.use(router.allowedMethods())

const app = new Koa()
app.use(mount('/', staticApp))
app.use(mount('/contact', mailApp))

app.listen(3000, () => {
  console.log('Listener on port 3000')
})
