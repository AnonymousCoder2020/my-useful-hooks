import { useCallback, useEffect, useRef, useState } from 'react'

export default <T extends HTMLElement>(initialState: string) => {
  const ref = useRef<T | null>(null)
  const [state, setState] = useState(initialState)
  const onInput = useCallback(({ target }: React.ChangeEvent<T>) => target.textContent && setState(target.textContent), [])
  useEffect(() => {
    if (ref.current) ref.current.textContent = state
  }, [state])
  return [{ ref, onInput }, state, setState] as const
}
