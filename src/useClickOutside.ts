import { useRef } from 'react'
import useOnClickOutside from 'use-onclickoutside'

export default <T extends HTMLElement>(handler: Parameters<typeof useOnClickOutside>[1]) => {
  const ref = useRef<T | null>(null)
  useOnClickOutside(ref, handler)
  return ref
}
