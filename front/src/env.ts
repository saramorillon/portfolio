import { cleanEnv, str } from 'envalid'

export const env = cleanEnv(process.env, { POI_APP_SITE_KEY: str() }, { strict: true })
