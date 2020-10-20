import React from 'react'
import { FaBriefcase, FaCalendarAlt, FaHeart } from 'react-icons/fa'
import styled from 'styled-components'

const Band = styled('div')({
  backgroundColor: '#E8E9EB',
  display: 'flex',
  justifyContent: 'space-around',
  padding: '3rem'
})

const Icon = styled('div')({
  borderRadius: '50%',
  backgroundColor: 'crimson',
  width: '3rem',
  height: '3rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '#f2f3f5',
  fontSize: '2rem',
  marginRight: '0.75rem'
})

const Quantity = styled('div')({
  fontWeight: 'bold',
  fontSize: '1.5rem'
})

const Label = styled('div')({
  fontWeight: 'bold',
  textTransform: 'uppercase',
  color: 'crimson',
  fontSize: '0.75rem'
})

const Flex = styled('div')({
  display: 'flex',
  alignItems: 'center'
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
      <Indicator quantity={customers} label="projects completed" icon={<FaBriefcase />} />
      <Indicator quantity={customers} label="happy clients" icon={<FaHeart />} />
      <Indicator quantity={exp} label="years of experience" icon={<FaCalendarAlt />} />
    </Band>
  )
}
