import React from 'react'
import { NavHashLink } from 'react-router-hash-link'
import styled from 'styled-components'

const Menu = styled('ul')({
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  display: 'flex',
  justifyContent: 'center'
})

const MenuItem = styled('li')({
  margin: '2rem 1rem',
  textTransform: 'uppercase',
  fontWeight: 'bold'
})

const Anchor = styled(NavHashLink)({
  textDecoration: 'none',
  color: '#303030',
  padding: '0.25rem 0',
  '&.active': { color: 'crimson', borderBottom: '3px solid crimson' }
})

export function Header(): JSX.Element {
  return (
    <Menu>
      <MenuItem>
        <Anchor smooth to="#">
          Home
        </Anchor>
      </MenuItem>
      <MenuItem>
        <Anchor smooth to="#about">
          About
        </Anchor>
      </MenuItem>
      <MenuItem>
        <Anchor smooth to="#skills">
          Skills
        </Anchor>
      </MenuItem>
      <MenuItem>
        <Anchor smooth to="#history">
          History
        </Anchor>
      </MenuItem>
      <MenuItem>
        <Anchor smooth to="#contact">
          Contact
        </Anchor>
      </MenuItem>
    </Menu>
  )
}
