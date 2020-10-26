import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'
import { Banner } from '../components/Banner'
import { Header } from '../components/Header'
import { Indicators } from '../components/Indicators'

const Background = styled('div')({
  backgroundImage: 'url(assets/background.jpg)',
  backgroundRepeat: 'no-repeat',
  height: '28rem',
  color: colors.white,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
})

export function Home(): JSX.Element {
  return (
    <section id="home">
      <Background>
        <Header />
        <Banner />
      </Background>
      <Indicators />
    </section>
  )
}
