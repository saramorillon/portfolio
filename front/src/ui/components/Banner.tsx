import React from 'react'
import styled, { CSSObject } from 'styled-components'
import { colors } from '../../colors'
import { Container } from './Container'

const Red = styled('span')({ color: colors.primary })

const CatchPhrase = styled('h3')({
  color: colors.primary,
  textTransform: 'uppercase',
  fontSize: 'small',
  margin: 0,
})

const buttonStyle: CSSObject = {
  border: `2px solid ${colors.primary}`,
  outline: 'none',
  cursor: 'pointer',
  backgroundColor: colors.primary,
  borderRadius: '0.25rem',
  color: colors.white,
  padding: '0.5rem',
  fontWeight: 'bold',
}

const HireButton = styled('button')(buttonStyle)

const CvButton = styled('a')({
  ...buttonStyle,
  textDecoration: 'none',
  backgroundColor: 'transparent',
  color: colors.primary,
  marginLeft: '0.75rem',
})

const Title = styled('h1')({
  width: '35rem',
})

export function Banner(): JSX.Element {
  function onClick() {
    const elem = document.getElementById('contact')
    const rect = elem?.getBoundingClientRect() || { y: 0, height: 0 }
    window.scrollTo({ top: rect.y, behavior: 'smooth' })
  }

  return (
    <Container>
      <CatchPhrase>Passionate Javascript freelance developer</CatchPhrase>
      <Title>
        Hi, i&apos;m <Red>Sara Morillon</Red>. I build web applications and softwares.
      </Title>
      <div>
        <HireButton onClick={onClick}>Hire me</HireButton>
        <CvButton href="assets/cv.pdf" target="_blank" rel="noopener noreferrer">
          Download my CV
        </CvButton>
      </div>
    </Container>
  )
}
