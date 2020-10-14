import { useEffect, useState } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import useAddEventListener from './useAddEventListener'

interface UseRenameArgs {
  initial: string
  input: string
  onRename?: (newState: string) => unknown
}

export default <T extends HTMLElement>({ initial, input, onRename }: UseRenameArgs) => {
  const [isRename, setIsRename] = useState(false)
  const { ref, refElement } = useAddEventListener<'keypress', T>('keypress', ({ key }) => key === 'Enter' && setIsRename(false))
  useOnClickOutside(refElement, () => setIsRename(false))
  useEffect(() => {
    if (!isRename && initial !== input) onRename?.(input)
  }, [isRename])
  return [{ ref, autoFocus: true }, isRename, setIsRename] as const
}
