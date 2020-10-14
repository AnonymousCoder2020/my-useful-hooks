import { useState } from 'react'
import useAddEventListeners from './useAddEventListeners'
export default <T extends HTMLElement>() => {
  const [isHover, setIsHover] = useState(false)
  const { ref } = useAddEventListeners<['mouseover', 'mouseout'], T>([
    ['mouseover', () => setIsHover(true)],
    [
      'mouseout',
      ({ relatedTarget, target }) => {
        if (!relatedTarget || (relatedTarget instanceof Node && (target as T)?.contains(relatedTarget))) return
        setIsHover(false)
      },
    ],
  ])
  return [ref, isHover] as const
}
