import { useCallback, useEffect, useRef, useState } from 'react'

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
  const onInput = useCallback(({ target }: React.ChangeEvent<T>) => target.textContent && setState(target.textContent), [])
  return [{ ref, onInput, contentEditable: true }, state, setState] as const
}
