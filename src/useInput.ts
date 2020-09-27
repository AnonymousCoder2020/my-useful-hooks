import { useCallback, useState } from 'react'
export default <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
  initialState: string,
  handleChange?: (event: React.ChangeEvent<T>) => unknown
) => {
  const [state, setState] = useState(initialState ?? '')
  const onChange = useCallback(
    (event: React.ChangeEvent<T>) => {
      handleChange?.(event)
      const {
        target: { value },
      } = event
      setState(value)
    },
    [handleChange]
  )
  return [{ value: state, onChange }, state, setState] as const
}
