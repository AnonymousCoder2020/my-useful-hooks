import type React from 'react'
export default <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(r: typeof React, initialState: string) => {
  const [state, setState] = r.useState(initialState ?? '')
  const onChange = r.useCallback(({ target: { value } }: React.ChangeEvent<T>) => setState(value), [])
  return [{ value: state, onChange }, state, setState] as const
}
