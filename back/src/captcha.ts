import Axios from 'axios'

export async function verifyCaptcha(captcha: string): Promise<void> {
  const response = await Axios.post('https://www.google.com/recaptcha/api/siteverify', {
    secret: process.env.SECRET,
    response: captcha,
  })
  if (!response.data.success) {
    throw new Error('Invalid captcha')
  }
}
