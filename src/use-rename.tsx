import React, { useCallback, useEffect, useRef, useState } from 'react'
import useOnClickOutside from 'use-onclickoutside'

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
  const handlePressEnter = useCallback(({ key }: React.KeyboardEvent<T>) => key === 'Enter' && setIsRename(false), [])
  return [{ ref, onKeyPress: handlePressEnter, autoFocus: true }, isRename, setIsRename] as const
}
