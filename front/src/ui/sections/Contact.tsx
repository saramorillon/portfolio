import Axios from 'axios'
import React, { FormEvent, useReducer } from 'react'
import Reaptcha from 'reaptcha'
import styled from 'styled-components'
import { colors } from '../../colors'
import { initialValues, reducer } from '../../reducers/contact'
import { Container } from '../components/Container'

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
  opacity: 0,
})

const Button = styled('button')({
  border: `1px solid ${colors.grey}`,
  outline: 'none',
  cursor: 'pointer',
  padding: '1rem',
  margin: '1rem',
})

export function Contact(): JSX.Element {
  const [{ body, captcha, email, name, subject }, dispatch] = useReducer(reducer, initialValues)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    Axios.post('/contact', { body, captcha, email, name, subject })
  }

  function onVerify(token: string) {
    dispatch({ target: { name: 'captcha', value: token } })
  }

  return (
    <Section id="contact">
      <Title>Contact me</Title>
      <Subtitle>I speak english and french</Subtitle>
      <Container>
        <form onSubmit={onSubmit}>
          <HalfInput required onChange={dispatch} value={name} name="name" placeholder="Your name" />
          <HalfInput required onChange={dispatch} value={email} name="email" placeholder="Your e-mail" type="email" />
          <Input required onChange={dispatch} value={subject} name="subject" placeholder="Subject" />
          <Textarea required onChange={dispatch} value={body} name="body" placeholder="Message" rows={10} />
          <CaptchaBox>
            <Captcha sitekey="6LehqNoZAAAAAM6RJqbNlougu_eJvwULxp4wLX72" onVerify={onVerify} />
            <Checkbox required onChange={() => false} type="checkbox" checked={!!captcha} />
          </CaptchaBox>
          <Button>Send message</Button>
        </form>
      </Container>
    </Section>
  )
}
