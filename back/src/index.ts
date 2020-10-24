import Koa from 'koa'
import mount from 'koa-mount'
import { mailApp } from './mail'
import { staticApp } from './static'

const app = new Koa()
app.use(mount('/', staticApp))
app.use(mount('/contact', mailApp))

app.listen(3000, () => {
  console.log('Listener on port 3000')
})
