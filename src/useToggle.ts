import type React from 'react'
import useAddEventListener from './useAddEventListener'
export default (r: typeof React, initialState: boolean) => {
  const [check, setCore] = r.useState(initialState)
  const { ref, refElement } = useAddEventListener<'change', HTMLInputElement>(r, 'change', ({ target }) => setCore(target.checked))
  const setCheck = r.useCallback((newCheck: boolean) => {
    const inputEl = refElement.current
    if (!inputEl) return
    setCore(newCheck)
    inputEl.checked = newCheck
  }, [])
  return [ref, check, setCheck] as const
}
