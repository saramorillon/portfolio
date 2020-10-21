import classnames from 'classnames'
import React from 'react'
import styled from 'styled-components'
import { useScroll } from '../hooks/useScroll'
import { Link } from './Link'

const Menu = styled('ul')({
  listStyleType: 'none',
  margin: 0,
  padding: '1.5rem 0 1rem 0',
  display: 'flex',
  justifyContent: 'center',
  transition: 'background-color .5s ease-out',
  position: 'absolute',
  width: '100%',
  color: '#f2f3f5',
  '&.fixed': {
    color: '#303030',
    backgroundColor: '#E8E9EB',
    position: 'fixed',
    width: '100%'
  }
})

const MenuItem = styled('li')({
  margin: '0 1rem'
})

export function Header(): JSX.Element {
  const { y } = useScroll()

  return (
    <Menu className={classnames({ fixed: y > 0 })}>
      <MenuItem>
        <Link to="home">Home</Link>
      </MenuItem>
      <MenuItem>
        <Link to="about">About</Link>
      </MenuItem>
      <MenuItem>
        <Link to="skills">Skills</Link>
      </MenuItem>
      <MenuItem>
        <Link to="history">History</Link>
      </MenuItem>
      <MenuItem>
        <Link to="contact">Contact</Link>
      </MenuItem>
    </Menu>
  )
}
