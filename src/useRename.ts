import type React from 'react'
import useOnClickOutside from 'use-onclickoutside' // TODO パッケージ先Reactに依存しない代替
import useAddEventListener from './useAddEventListener'

interface UseRenameArgs {
  initial: string
  input: string
  onRename?: (newState: string) => unknown
}

export default <T extends HTMLElement>(r: typeof React, { initial, input, onRename }: UseRenameArgs) => {
  const [isRename, setIsRename] = r.useState(false)
  const { ref, refEl } = useAddEventListener<'keypress', T>(r, 'keypress', ({ key }) => key === 'Enter' && setIsRename(false))
  useOnClickOutside(refEl, () => setIsRename(false))
  r.useEffect(() => {
    if (!isRename && initial !== input) onRename?.(input)
  }, [isRename])
  return [{ ref, autoFocus: true }, isRename, setIsRename] as const
}
