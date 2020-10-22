import React from 'react'
import { FaStar } from 'react-icons/fa'
import styled from 'styled-components'
import { colors } from '../colors'
import { Container } from './Container'

const Section = styled('section')({
  backgroundColor: colors.lightgrey,
  padding: '4rem 0',
})

const Title = styled('h1')({
  textAlign: 'center',
})

const Flex = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
})

const SkillName = styled('h2')({
  fontSize: '1.5rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
})

const Stars = styled('div')({
  color: colors.main,
  fontSize: '1.5rem',
})

const Card = styled('article')({
  backgroundColor: 'white',
  boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, 0.15)',
  width: '10rem',
  height: '10rem',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '2rem',
})

interface ISkillProps {
  name: string
  stars: number
}

function Skill({ name, stars }: ISkillProps): JSX.Element {
  return (
    <Card>
      <SkillName>{name}</SkillName>
      <Stars>{new Array(stars).fill(<FaStar />).map((icon) => icon)}</Stars>
    </Card>
  )
}

export function Skills(): JSX.Element {
  return (
    <Section id="skills">
      <Container>
        <article>
          <Title>My skills</Title>
          <Flex>
            <Skill name="Node.js" stars={3} />
            <Skill name="React" stars={3} />
            <Skill name="Design" stars={2} />
            <Skill name="Data" stars={2} />
          </Flex>
        </article>
      </Container>
    </Section>
  )
}
