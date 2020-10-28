import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'
import { Container as BaseContainer } from '../components/Container'

const Container = styled(BaseContainer)({
  flexDirection: 'row',
  padding: '2rem 0',
})

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

const Img = styled('img')({
  padding: '0 3rem',
  transition: 'all 0.3s ease-out',
  transform: 'scale(0.9)',
  ':hover': {
    transform: 'scale(1)',
  },
})

export function Networks(): JSX.Element {
  return (
    <Section id="networks">
      <Title>My networks</Title>
      <Subtitle>You can find me there</Subtitle>
      <Container>
        <a href="https://www.linkedin.com/in/sara-m-091785195" target="blank" rel="noopener noreferrer">
          <Img height="75" src="assets/networks/linkedin.png" alt="Linked In" />
        </a>
        <a href="https://www.malt.fr/profile/saramorillon" target="blank" rel="noopener noreferrer">
          <Img height="75" src="assets/networks/malt.png" alt="Malt" />
        </a>
        <a href="https://github.com/saramorillon" target="blank" rel="noopener noreferrer">
          <Img height="75" src="assets/networks/github.png" alt="Github" />
        </a>
      </Container>
    </Section>
  )
}
