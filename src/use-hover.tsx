import React, { useCallback, useRef, useState } from 'react'
export const useHover = <T extends HTMLElement>() => {
  const [isHover, setIsHover] = useState(false)
  const targetRef = useRef<T | null>(null)
  const handleMouseOver = useCallback(({}: React.MouseEvent) => {
    setIsHover(true)
  }, [])
  const handleMouseOut = useCallback(({ relatedTarget }: React.MouseEvent) => {
    if (!relatedTarget || (relatedTarget instanceof Node && targetRef.current?.contains(relatedTarget))) return
    setIsHover(false)
  }, [])
  return [
    {
      ref: targetRef,
      onMouseOver: handleMouseOver,
      onMouseOut: handleMouseOut,
    },
    isHover,
  ] as const
}
