import type React from 'react'
import useAddEventListener from './useAddEventListener'
export default <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(r: typeof React, initialState: string) => {
  const [core, setCore] = r.useState(initialState ?? '')
  const { ref, refEl } = useAddEventListener<'input', T>(r, 'input', ({ target }) => setCore(target.value))
  const setState = r.useCallback((newState: string) => {
    const inputEl = refEl.current
    if (!inputEl) return
    setCore(newState)
  }, [])
  return [ref, core, setState] as const
}
