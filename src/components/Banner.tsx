import React from 'react'
import styled from 'styled-components'

const Red = styled('span')({ color: 'crimson' })

const CatchPhrase = styled('h3')({
  color: 'crimson',
  textTransform: 'uppercase',
  fontSize: 'small',
  margin: 0
})

const HireButton = styled('button')({
  border: '2px solid crimson',
  outline: 'none',
  cursor: 'pointer',
  backgroundColor: 'crimson',
  borderRadius: '0.25rem',
  color: '#f2f3f5',
  padding: '0.5rem',
  fontWeight: 'bold'
})

const CvButton = styled(HireButton)({
  backgroundColor: 'transparent',
  color: 'crimson',
  marginLeft: '0.75rem'
})

const Title = styled('h1')({
  width: '35rem'
})

const Container = styled('div')({
  maxWidth: '70vw',
  minWidth: '40rem',
  margin: 'auto',
  flex: '1',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column'
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
