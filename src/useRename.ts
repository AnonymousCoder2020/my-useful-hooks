import { useEffect, useRef, useState } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import useAddEventListener from './useAddEventListener'

interface UseRenameArgs {
  initial: string
  input: string
  onRename?: (newState: string) => unknown
}

export default <T extends HTMLElement>({ initial, input, onRename }: UseRenameArgs) => {
  const [isRename, setIsRename] = useState(false)
  const ref = useRef<T | null>(null)
  useOnClickOutside(ref, () => setIsRename(false))
  useEffect(() => {
    if (!isRename && initial !== input) onRename?.(input)
  }, [isRename])
  useAddEventListener('keypress', ({ key }) => key === 'Enter' && setIsRename(false), ref)
  return [ref, isRename, setIsRename, { autoFocus: true }] as const
}
