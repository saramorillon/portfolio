import React from 'react'
import styled from 'styled-components'
import { colors } from '../colors'
import { Container as BaseContainer } from './Container'

const Container = styled(BaseContainer)({
  flexDirection: 'row',
  alignItems: 'start',
  padding: '2rem 0',
})

const Presentation = styled('div')({
  flex: 1,
})

const Paragraph = styled('p')({
  color: colors.darkgrey,
})

const Row = styled('div')({
  display: 'flex',
  padding: '0.5rem 0',
})

const Term = styled('div')({
  fontWeight: 'bold',
  width: '10rem',
})

const Desc = styled('div')({
  color: colors.main,
  fontWeight: 'bold',
  flex: 1,
})

const Love = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem 0',
})

const Img = styled('img')({
  marginRight: '2rem',
})

export function About(): JSX.Element {
  return (
    <Container id="about">
      <Img src="me.png" />
      <Presentation>
        <h1>About me</h1>
        <Paragraph>Hi! I&apos;m Sara. I build web applications and softwares.</Paragraph>
        <Paragraph>My job is not a job, it&apos;s a passion!</Paragraph>
        <Row>
          <Term>Name:</Term>
          <Desc>Sara Morillon</Desc>
        </Row>
        <Row>
          <Term>Date of birth:</Term>
          <Desc>June 08, 1991</Desc>
        </Row>
        <Row>
          <Term>Location:</Term>
          <Desc>Around Paris, France</Desc>
        </Row>
        <Love>
          {/* <Indicator small icon={<FaBook />} title="Books" />
          <Indicator small icon={<FaLaptopCode />} title="Computing science" />
          <Indicator small icon={<FaGamepad />} title="Video games" />
          <Indicator small icon={<FaMusic />} title="Music" /> */}
        </Love>
      </Presentation>
    </Container>
  )
}
