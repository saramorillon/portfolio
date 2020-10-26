import React from 'react'
import { FaBook, FaGamepad, FaLaptopCode, FaMusic } from 'react-icons/fa'
import styled from 'styled-components'
import { colors } from '../../colors'
import { Container as BaseContainer } from '../components/Container'

const Container = styled(BaseContainer)({
  flexDirection: 'row',
  alignItems: 'start',
  padding: '2rem 0',
})

const Title = styled('h1')({
  fontSize: '2rem',
})

const Presentation = styled('div')({
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
})

const Paragraph = styled('p')({
  color: colors.darkgrey,
})

const Citation = styled('blockquote')({
  fontStyle: 'italic',
  borderLeft: `5px solid ${colors.grey}`,
  padding: '1.5rem',
})

const Red = styled('p')({
  color: colors.main,
  fontWeight: 'bold',
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

const Love = styled('article')({
  padding: '2rem 0',
})

const Img = styled('img')({
  marginRight: '2rem',
})

interface IIndicatorProps {
  icon: JSX.Element
  label: string
}

const Flex = styled('div')({
  display: 'inline-block',
  marginBottom: '1rem',
  paddingRight: '1rem',
})

const Icon = styled('span')({
  display: 'inline-flex',
  borderRadius: '50%',
  backgroundColor: colors.main,
  color: colors.white,
  width: '2rem',
  height: '2rem',
  justifyContent: 'center',
  alignItems: 'center',
  marginRight: '0.5rem',
})

const Label = styled('span')({
  fontWeight: 'bold',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
})

function Indicator({ icon, label }: IIndicatorProps) {
  return (
    <Flex>
      <Icon>{icon}</Icon>
      <Label>{label}</Label>
    </Flex>
  )
}

export function About(): JSX.Element {
  return (
    <section id="about">
      <Container>
        <Img src="assets/me.png" />
        <Presentation>
          <article>
            <Title>About me</Title>
            <Paragraph>
              Hi! I&apos;m Sara. I build web applications and softwares since 2014, and I love it! As a passionate
              developer, I put quality at the heart of my work because customer satisfaction is my priority.
            </Paragraph>
            <Red>Let&apos;s make something awesome together.</Red>
            <Citation>It&apos;s not a job, it&apos;s my passion</Citation>
          </article>
          <article>
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
          </article>
          <Love>
            <Indicator icon={<FaLaptopCode />} label="Computing science" />
            <Indicator icon={<FaBook />} label="Books" />
            <Indicator icon={<FaGamepad />} label="Video games" />
            <Indicator icon={<FaMusic />} label="Music" />
          </Love>
        </Presentation>
      </Container>
    </section>
  )
}
