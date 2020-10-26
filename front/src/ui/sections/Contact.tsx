import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Axios from 'axios'
import classnames from 'classnames'
import React, { ChangeEvent, createRef, FormEvent, useCallback, useReducer, useState } from 'react'
import { Slide, toast, ToastContainer } from 'react-toastify'
import Reaptcha from 'reaptcha'
import styled, { CSSProp } from 'styled-components'
import { colors } from '../../colors'
import { env } from '../../env'
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

const inputProps: CSSProp = {
  width: 'calc(100% - 2rem)',
  display: 'inline-block',
  padding: '0.5rem 0.75rem',
  margin: '0.5rem 1rem',
  boxSizing: 'border-box',
  borderRadius: '0.25rem',
  border: `1px solid ${colors.secondary}`,
  fontFamily: 'inherit',
  ':focus': {
    outline: '1px auto ' + colors.secondary,
  },
}

const Input = styled('input')(inputProps)

const HalfInput = styled(Input)({
  width: 'calc(50% - 2rem)',
})

const Textarea = styled('textarea')({
  ...inputProps,
  resize: 'none',
})

const Button = styled('button')({
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0.75rem',
  margin: '0.5rem 1rem',
  borderRadius: '0.25rem',
  fontWeight: 'bold',
  backgroundColor: colors.secondary,
  color: colors.white,
  fontFamily: 'inherit',
  display: 'flex',
  alignItems: 'center',
})

const Icon = styled('div')({
  padding: '0.25rem',
  '& svg': {
    display: 'block',
  },
})

export function Contact(): JSX.Element {
  const captchaRef = createRef<Reaptcha>()
  const [{ body, email, name, subject }, dispatch] = useReducer(reducer, initialValues)
  const [loading, setLoading] = useState(false)

  const onSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault()
      captchaRef.current?.execute()
    },
    [captchaRef]
  )

  const onVerify = useCallback(
    (captcha: string) => {
      setLoading(true)
      Axios.post('/contact', { body, captcha, email, name, subject })
        .then(() => {
          toast.success('Your message has been sent. You will received a confirmation by email')
          dispatch('reset')
        })
        .catch(() => {
          toast.error('An error occurred while sending you message. Please try again later')
        })
        .finally(() => {
          setLoading(false)
        })
    },
    [body, email, name, subject]
  )

  const onChange = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch({ name: e.target.name, value: e.target.value })
    },
    [dispatch]
  )

  return (
    <Section id="contact">
      <Title>Contact me</Title>
      <Subtitle>I speak english and french</Subtitle>
      <Container>
        <form onSubmit={onSubmit}>
          <HalfInput required onChange={onChange} value={name} name="name" placeholder="Your name" />
          <HalfInput required onChange={onChange} value={email} name="email" placeholder="Your e-mail" type="email" />
          <Input required onChange={onChange} value={subject} name="subject" placeholder="Subject" />
          <Textarea required onChange={onChange} value={body} name="body" placeholder="Message" rows={10} />
          <Button disabled={loading} className={classnames({ spin: loading })}>
            <Icon>{loading ? <FontAwesomeIcon icon="spinner" spin /> : <FontAwesomeIcon icon="envelope" />}</Icon>
            <div>Send message</div>
          </Button>
        </form>
      </Container>
      <Reaptcha ref={captchaRef} sitekey={env.CAPTCHA_SITE_KEY} onVerify={onVerify} size="invisible" />
      <ToastContainer position="bottom-center" hideProgressBar transition={Slide} />
    </Section>
  )
}
