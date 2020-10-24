import Axios from 'axios'
import React, { createRef, FormEvent, useState } from 'react'
import Reaptcha from 'reaptcha'
import styled from 'styled-components'
import { colors } from '../colors'
import { Container } from './Container'

const Section = styled('section')({
  padding: '4rem 0',
})

const Title = styled('h1')({
  textAlign: 'center',
  fontSize: '2rem',
})

const Subtitle = styled('p')({
  color: colors.darkgrey,
  textAlign: 'center',
})

const Input = styled('input')({
  display: 'inline-block',
  padding: '0.5rem 0.75rem',
  margin: '1rem',
  width: 'calc(100% - 2rem)',
  boxSizing: 'border-box',
})

const HalfInput = styled(Input)({
  width: 'calc(50% - 2rem)',
})

const Textarea = styled('textarea')({
  display: 'inline-block',
  padding: '0.5rem 0.75rem',
  resize: 'none',
  margin: '1rem',
  width: 'calc(100% - 2rem)',
  boxSizing: 'border-box',
})

const CaptchaBox = styled('div')({
  position: 'relative',
})

const Captcha = styled(Reaptcha)({
  margin: '1rem',
})

const Checkbox = styled('input')({
  pointerEvents: 'none',
  position: 'absolute',
  zIndex: -1,
  top: '50px',
  left: '31px',
})

const Button = styled('button')({
  border: `1px solid ${colors.grey}`,
  outline: 'none',
  cursor: 'pointer',
  padding: '1rem',
  margin: '1rem',
})

export function Contact(): JSX.Element {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [subject, setSubject] = useState<string>('')
  const [body, setBody] = useState<string>('')
  const [captcha, setCaptcha] = useState<string>('')
  const captchaRef = createRef<Reaptcha>()

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    Axios.post('/contact', { name, email, subject, body, captcha })
  }

  function onVerify(token: string) {
    setCaptcha(token)
  }

  return (
    <Section id="contact">
      <Title>Contact me</Title>
      <Subtitle>I speak english and french</Subtitle>
      <Container>
        <form onSubmit={onSubmit}>
          <HalfInput
            name="name"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <HalfInput
            name="email"
            type="email"
            placeholder="Your e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            name="subject"
            placeholder="Subject"
            required
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <Textarea
            name="body"
            placeholder="Message"
            required
            rows={10}
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <CaptchaBox>
            <Captcha ref={captchaRef} sitekey="6LehqNoZAAAAAM6RJqbNlougu_eJvwULxp4wLX72" onVerify={onVerify} />
            <Checkbox type="checkbox" checked={!!captcha} required onChange={() => false} />
          </CaptchaBox>
          <Button>Send message</Button>
        </form>
      </Container>
    </Section>
  )
}
