import type React from 'react'
import useAddEventListener from './useAddEventListener'

export default <T extends HTMLElement>(r: typeof React, initialState: string) => {
  const [state, setState] = r.useState(initialState)
  const onRef = r.useCallback(
    (node: T | null) => {
      if (!node) return
      node.textContent = state
      node.focus()
    },
    [state]
  )
  const { ref, refEl } = useAddEventListener<'input', T>(r, 'input', ({ target }) => target.textContent && setState(target.textContent), {
    onRef,
    dep: [state]
  })
  r.useEffect(() => {
    refEl.current && (refEl.current.textContent = state)
  }, [state])
  return [{ ref, contentEditable: true }, state, setState] as const
}
