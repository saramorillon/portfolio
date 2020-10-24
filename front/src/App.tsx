import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { colors } from './colors'
import { About } from './components/About'
import { History } from './components/History'
import { Home } from './components/Home'
import { Networks } from './components/Networks'
import { Skills } from './components/Skills'

const GlobalStyle = createGlobalStyle({
  body: {
    margin: 0,
    backgroundColor: colors.white,
    color: colors.black,
    fontFamily: "'Noto Sans', sans-serif",
  },
})

const Footer = styled('footer')({
  height: '25em',
  backgroundColor: colors.black,
})

export function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Home />
      <About />
      <Skills />
      <Networks />
      <History />
      <Footer />
    </>
  )
}
