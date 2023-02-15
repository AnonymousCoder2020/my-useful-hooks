import type React from 'react'
import useAddEventListeners from './useAddEventListeners'
export default <T extends HTMLElement>(r: typeof React) => {
  const [isHover, setIsHover] = r.useState(false)
  const { ref } = useAddEventListeners<['mouseover', 'mouseout'], T>(r, [
    ['mouseover', () => setIsHover(true)],
    [
      'mouseout',
      ({ relatedTarget, target }) => {
        if (!relatedTarget || (relatedTarget instanceof Node && (target as T)?.contains(relatedTarget))) return
        setIsHover(false)
      }
    ]
  ])
  return [ref, isHover] as const
}
