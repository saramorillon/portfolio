import classnames from 'classnames'
import React, { PropsWithChildren, useCallback, useState } from 'react'
import styled from 'styled-components'
import { colors } from '../colors'
import { useScrollEffect } from '../hooks/useScroll'

const Button = styled('span')({
  textTransform: 'uppercase',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'all .3s ease-in-out 0s',
  hr: {
    transform: 'scaleX(0)',
  },
  '&.active': {
    color: colors.main,
    hr: {
      transform: 'scaleX(1)',
    },
  },
})

const Underline = styled('hr')({
  height: '2px',
  border: 'none',
  background: colors.main,
  transform: 'scaleX(0)',
  transition: 'all .3s ease-in-out 0s',
})

const debouncers: { [key: string]: NodeJS.Timeout } = {}

export function Link({ to, children }: PropsWithChildren<{ to: string }>): JSX.Element {
  const [active, setActive] = useState(false)

  const handler = useCallback(() => {
    clearTimeout(debouncers[to])
    debouncers[to] = setTimeout(() => {
      const elem = document.getElementById(to)
      const rect = elem?.getBoundingClientRect() || { y: 0, height: 0 }
      if (rect.y <= 100 && rect.y + rect.height > 100) {
        setActive(true)
      } else {
        setActive(false)
      }
    }, 100)
  }, [to])

  useScrollEffect(handler)

  const onClick = useCallback(() => {
    const elem = document.getElementById(to)
    const rect = elem?.getBoundingClientRect() || { y: 0, height: 0 }
    window.scrollTo({ top: rect.y + window.pageYOffset, behavior: 'smooth' })
  }, [to])

  return (
    <Button onClick={onClick} className={classnames({ active })}>
      {children}
      <Underline />
    </Button>
  )
}
