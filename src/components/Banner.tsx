import React from 'react'
import styled from 'styled-components'
import { colors } from '../colors'
import { Container } from './Container'

const Red = styled('span')({ color: colors.main })

const CatchPhrase = styled('h3')({
  color: colors.main,
  textTransform: 'uppercase',
  fontSize: 'small',
  margin: 0
})

const HireButton = styled('button')({
  border: `2px solid ${colors.main}`,
  outline: 'none',
  cursor: 'pointer',
  backgroundColor: colors.main,
  borderRadius: '0.25rem',
  color: colors.white,
  padding: '0.5rem',
  fontWeight: 'bold'
})

const CvButton = styled(HireButton)({
  backgroundColor: 'transparent',
  color: colors.main,
  marginLeft: '0.75rem'
})

const Title = styled('h1')({
  width: '35rem'
})

export function Banner(): JSX.Element {
  return (
    <Container>
      <CatchPhrase>Passionate Javascript freelance developer</CatchPhrase>
      <Title>
        Hi, i&apos;m <Red>Sara Morillon</Red>. I build web applications and softwares.
      </Title>
      <div>
        <HireButton>Hire me</HireButton>
        <CvButton>Download my CV</CvButton>
      </div>
    </Container>
  )
}
