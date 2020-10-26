import { cleanEnv, str } from 'envalid'

export const env = cleanEnv(
  process.env,
  {
    CAPTCHA_SECRET: str(),
    CLIENT_ID: str(),
    CLIENT_SECRET: str(),
    REFRESH_TOKEN: str(),
    STATIC_CONTENT_PATH: str(),
  },
  { strict: true }
)
