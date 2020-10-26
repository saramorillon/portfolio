import { cleanEnv, str } from 'envalid'

const processEnv = { CAPTCHA_SITE_KEY: process.env.POI_APP_CAPTCHA_SITE_KEY }
export const env = cleanEnv(processEnv, { CAPTCHA_SITE_KEY: str() }, { strict: true })
