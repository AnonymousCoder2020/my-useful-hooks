import { useState, useCallback } from 'react'
export default (initialState: string) => {
  const [state, setState] = useState(initialState ?? '')
  const onChange = useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setState(value)
  }, [])
  return [{ value: state, onChange }, state, setState] as const
}
