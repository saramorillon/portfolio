import classnames from 'classnames'
import React, { PropsWithChildren, useCallback, useState } from 'react'
import styled from 'styled-components'
import { useScrollEffect } from '../hooks/useScroll'

const Button = styled('span')({
  padding: '0.25rem 0',
  textTransform: 'uppercase',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all .3s ease-in-out 0s',
  hr: {
    transform: 'scaleX(0)'
  },
  '&.active': {
    color: 'crimson',
    hr: {
      transform: 'scaleX(1)'
    }
  }
})

const Underline = styled('hr')({
  height: '2px',
  border: 'none',
  background: 'crimson',
  transform: 'scaleX(0)',
  transition: 'all .3s ease-in-out 0s'
})

export function Link({ to, children }: PropsWithChildren<{ to: string }>): JSX.Element {
  const [active, setActive] = useState(false)

  const handler = useCallback(() => {
    const elem = document.getElementById(to)
    const rect = elem?.getBoundingClientRect() || { y: 0, height: 0 }
    if (rect.y <= 0 && rect.y + rect.height > 0) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [to])

  useScrollEffect(handler)

  const onClick = useCallback(() => {
    const elem = document.getElementById(to)
    const rect = elem?.getBoundingClientRect() || { y: 0, height: 0 }
    window.scrollTo({ top: rect.y, behavior: 'smooth' })
  }, [to])

  return (
    <Button onClick={onClick} className={classnames({ active })}>
      {children}
      <Underline />
    </Button>
  )
}
