import { useState, useCallback } from 'react'
export default (initialState: string) => {
  const [state, setState] = useState(initialState ?? '')
  const onChange = useCallback(({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => {
    setState(value)
  }, [])
  return {
    props: { value: state, onChange },
    state: [state, setState],
  } as const
}
