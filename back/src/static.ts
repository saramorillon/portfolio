import Koa from 'koa'
import serve from 'koa-static'
import path from 'path'

export const staticApp = new Koa()
staticApp.use(serve(path.join(__dirname, '..', '..', 'front', 'dist')))
