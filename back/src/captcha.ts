import Axios from 'axios'
import qs from 'querystring'

const url = 'https://www.google.com/recaptcha/api/siteverify'
const headers = { 'Content-Type': 'application/x-www-form-urlencoded' }

export async function verifyCaptcha(captcha: string): Promise<void> {
  const body = qs.stringify({ secret: process.env.SECRET, response: captcha })
  const response = await Axios.post(url, body, { headers })
  if (!response.data.success) {
    throw new Error('Invalid captcha')
  }
}
