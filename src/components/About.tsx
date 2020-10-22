import React from 'react'
import { FaBook, FaGamepad, FaLaptopCode, FaMusic } from 'react-icons/fa'
import styled from 'styled-components'
import { colors } from '../colors'
import { Container as BaseContainer } from './Container'

const Container = styled(BaseContainer)({
  flexDirection: 'row',
  alignItems: 'stretch',
  padding: '2rem 0',
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
  // color: colors.grey,
  fontStyle: 'italic',
  borderLeft: `5px solid ${colors.grey}`,
  padding: '1.5rem',
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
  display: 'flex',
  justifyContent: 'space-between',
  padding: '2rem 0',
  marginTop: '2rem',
})

const Img = styled('img')({
  marginRight: '2rem',
})

interface IIndicatorProps {
  icon: JSX.Element
  label: string
}

const Flex = styled('div')({
  display: 'flex',
  alignItems: 'center',
  borderLeft: `2px solid ${colors.main}`,
  padding: '0 1rem',
  '&:first-child': {
    borderLeft: 'none',
  },
})

const Icon = styled('div')({
  borderRadius: '50%',
  backgroundColor: colors.main,
  padding: '0.5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.white,
  marginRight: '0.75rem',
})

const Label = styled('div')({
  fontWeight: 'bold',
  fontSize: '0.75rem',
  textTransform: 'uppercase',
})

function Indicator({ icon, label }: IIndicatorProps) {
  return (
    <Flex>
      <Icon>{icon}</Icon>
      <div>
        <Label>{label}</Label>
      </div>
    </Flex>
  )
}

export function About(): JSX.Element {
  return (
    <Container>
      <Img src="me.png" />
      <Presentation>
        <article>
          <h1>About me</h1>
          <Paragraph>
            Hi! I&apos;m Sara. I build web applications and softwares since 2014, and I love it! From data modeling to
            UI and UX design, my expertise is at your disposition.
          </Paragraph>
          <Citation>My job is not a job, it&apos;s a passion</Citation>
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
          <Indicator icon={<FaBook />} label="Books" />
          <Indicator icon={<FaLaptopCode />} label="Computing science" />
          <Indicator icon={<FaGamepad />} label="Video games" />
          <Indicator icon={<FaMusic />} label="Music" />
        </Love>
      </Presentation>
    </Container>
  )
}
