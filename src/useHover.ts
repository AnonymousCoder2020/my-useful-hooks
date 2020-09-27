import { useRef, useState } from 'react'
import useAddEventListener from './useAddEventListener'
export default <T extends HTMLElement>() => {
  const [isHover, setIsHover] = useState(false)
  const ref = useRef<T | null>(null)
  useAddEventListener(ref, 'mouseover', () => setIsHover(true))
  useAddEventListener(ref, 'mouseout', ({ relatedTarget }) => {
    if (!relatedTarget || (relatedTarget instanceof Node && ref.current?.contains(relatedTarget))) return
    setIsHover(false)
  })
  return [ref, isHover] as const
}
