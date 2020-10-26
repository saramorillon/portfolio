import classnames from 'classnames'
import React from 'react'
import styled from 'styled-components'
import { colors } from '../../colors'
import { useScroll } from '../../hooks/useScroll'
import { ScrollLink } from '../scroll/ScrollLink'

const Menu = styled('ul')({
  listStyleType: 'none',
  margin: 0,
  padding: '1.5rem 0 1rem 0',
  display: 'flex',
  justifyContent: 'center',
  transition: 'background-color .5s ease-out',
  position: 'absolute',
  width: '100%',
  color: colors.white,
  '&.fixed': {
    color: colors.black,
    backgroundColor: colors.lightgrey,
    position: 'fixed',
    width: '100%',
    zIndex: 1,
  },
})

const MenuItem = styled('li')({
  margin: '0 1rem',
})

export function Header(): JSX.Element {
  const { y } = useScroll()

  return (
    <Menu className={classnames({ fixed: y > 0 })}>
      <MenuItem>
        <ScrollLink to="home">Home</ScrollLink>
      </MenuItem>
      <MenuItem>
        <ScrollLink to="about">About</ScrollLink>
      </MenuItem>
      <MenuItem>
        <ScrollLink to="skills">Skills</ScrollLink>
      </MenuItem>
      <MenuItem>
        <ScrollLink to="networks">Networks</ScrollLink>
      </MenuItem>
      <MenuItem>
        <ScrollLink to="history">History</ScrollLink>
      </MenuItem>
      <MenuItem>
        <ScrollLink to="contact">Contact</ScrollLink>
      </MenuItem>
    </Menu>
  )
}
