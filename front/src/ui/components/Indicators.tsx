import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'

const Band = styled('div')({
  backgroundColor: colors.lightgrey,
  display: 'flex',
  justifyContent: 'space-around',
  padding: '3rem',
})

const Icon = styled('div')({
  borderRadius: '50%',
  backgroundColor: colors.secondary,
  padding: '0.5em',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: colors.white,
  fontSize: '2rem',
  marginRight: '0.75rem',
})

const Quantity = styled('div')({
  fontWeight: 'bold',
  fontSize: '1.5rem',
})

const Label = styled('div')({
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: colors.secondary,
  fontSize: '0.75rem',
})

const Flex = styled('div')({
  display: 'flex',
  alignItems: 'center',
})

interface IIndicatorProps {
  quantity: number
  label: string
  icon: JSX.Element
}

function Indicator({ icon, label, quantity }: IIndicatorProps) {
  return (
    <Flex>
      <Icon>{icon}</Icon>
      <div>
        <Quantity>{quantity}</Quantity>
        <Label>{label}</Label>
      </div>
    </Flex>
  )
}

export function Indicators(): JSX.Element {
  const customers = 7
  const exp = new Date().getFullYear() - 2014
  return (
    <Band>
      <Indicator quantity={customers} label="projects completed" icon={<FontAwesomeIcon icon="briefcase" />} />
      <Indicator quantity={customers} label="happy principals" icon={<FontAwesomeIcon icon="heart" />} />
      <Indicator quantity={exp} label="years of experience" icon={<FontAwesomeIcon icon="calendar-alt" />} />
    </Band>
  )
}
