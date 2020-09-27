import { useCallback, useEffect, useRef, useState } from 'react'
import useAddEventListener from './useAddEventListener'

export default <T extends HTMLElement>(initialState: string) => {
  const [state, setState] = useState(initialState)
  const editableElementRef = useRef<T | null>(null)
  const ref = useCallback(
    (node: T | null) => {
      if (!node) return
      editableElementRef.current = node
      node.textContent = state
      node.focus()
    },
    [state]
  )
  useEffect(() => {
    editableElementRef.current && (editableElementRef.current.textContent = state)
  }, [state])
  useAddEventListener(editableElementRef, 'input', ({ target }) => target.textContent && setState(target.textContent))
  return [{ ref, props: { contentEditable: true } }, state, setState] as const
}
