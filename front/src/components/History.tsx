import React from 'react'
import styled from 'styled-components'
import { colors } from '../colors'
import { Container as BaseContainer } from './Container'

const Section = styled('section')({
  backgroundColor: colors.lightgrey,
  padding: '4rem 0',
})

const Container = styled(BaseContainer)({
  flexDirection: 'row',
  flexWrap: 'wrap',
  padding: '2rem 0',
  justifyContent: 'space-between',
})

const Title = styled('h1')({
  textAlign: 'center',
  fontSize: '2rem',
})

const Subtitle = styled('p')({
  color: colors.darkgrey,
  textAlign: 'center',
})

const Card = styled('div')({
  backgroundColor: 'white',
  boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
  padding: '1rem',
  margin: '1rem',
  flex: 1,
  textAlign: 'center',
})

export function History(): JSX.Element {
  return (
    <Section id="history">
      <Title>History</Title>
      <Subtitle>They trusted me, why not you?</Subtitle>
      <Container>
        <Card>
          <img height="100" src="ausy.jpg" alt="Ausy" />
        </Card>
        <Card>
          <img height="100" src="cb.jpg" alt="Groupement des Cartes Bancaires" />
        </Card>
        <Card>
          <img height="100" src="mindef.jpg" alt="Ministère de la Défense" />
        </Card>
        <Card>
          <img height="100" src="sagem.jpg" alt="Safran Sagem" />
        </Card>
        <Card>
          <img height="100" src="metron.jpg" alt="Metron" />
        </Card>
        <Card>
          <img height="100" src="eh.jpg" alt="Euler Hermes" />
        </Card>
        <Card>
          <img height="100" src="kering.jpg" alt="Kering" />
        </Card>
      </Container>
    </Section>
  )
}
