import { useRef, useState } from 'react'
import useAddEventListener from './useAddEventListener'
export default <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(initialState: string) => {
  const [state, setState] = useState(initialState ?? '')
  const ref = useRef<T | null>(null)
  useAddEventListener(ref, 'change', event => {
    const {
      target: { value },
    } = event
    setState(value)
  })
  return [{ ref, props: { value: state } }, state, setState] as const
}
