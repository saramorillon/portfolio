import { cleanEnv, str } from 'envalid'

export const env = cleanEnv(
  process.env,
  { CAPTCHA_SECRET: str(), CLIENT_ID: str(), CLIENT_SECRET: str(), REFRESH_TOKEN: str() },
  { strict: true }
)
