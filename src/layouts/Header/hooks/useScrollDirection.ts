import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { useState } from 'react'

export const useScrollDirection = () => {
  const [direction, setDirection] = useState<'up' | 'down'>('up')
  useScrollPosition(({ prevPos, currPos }) => {
    console.info(currPos.y, prevPos.y)
    if (currPos.y > prevPos.y) setDirection('up')
    else {
      setDirection('down')
    }
  }, [])
  return direction
}
