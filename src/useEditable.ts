import { useCallback, useEffect, useRef, useState } from 'react'
import useAddEventListener from './useAddEventListener'

export default <T extends HTMLElement>(initialState: string) => {
  const [state, setState] = useState(initialState)
  const editableElementRef = useRef<T | null>(null)
  const onRef = useCallback(
    (node: T | null) => {
      if (!node) return
      editableElementRef.current = node
      node.textContent = state
      node.focus()
    },
    [state]
  )
  const { ref } = useAddEventListener<'input', T>('input', ({ target }) => target.textContent && setState(target.textContent), { onRef })
  useEffect(() => {
    editableElementRef.current && (editableElementRef.current.textContent = state)
  }, [state])
  return [{ ref, contentEditable: true }, state, setState] as const
}
