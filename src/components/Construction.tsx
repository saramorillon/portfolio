import React from 'react'
import styled from 'styled-components'

const Page = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100vh',
})

export function Construction(): JSX.Element {
  return (
    <Page>
      <h1>Coming soon</h1>
      <p>This website is under construction. Please come back later</p>
    </Page>
  )
}
