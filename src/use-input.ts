import { useState, useCallback } from 'react'
export default <T extends HTMLInputElement | HTMLTextAreaElement>(initialState: string) => {
  const [state, setState] = useState(initialState ?? '')
  const onChange = useCallback(({ target: { value } }: React.ChangeEvent<T>) => {
    setState(value)
  }, [])
  return [{ value: state, onChange }, state, setState] as const
}
