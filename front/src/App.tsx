import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import { colors } from './colors'
import { About } from './ui/sections/About'
import { Contact } from './ui/sections/Contact'
import { History } from './ui/sections/History'
import { Home } from './ui/sections/Home'
import { Networks } from './ui/sections/Networks'
import { Skills } from './ui/sections/Skills'

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
      <Contact />
      <Footer />
    </>
  )
}
