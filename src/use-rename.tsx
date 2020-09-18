import React, { useCallback, useEffect, useRef, useState } from 'react'
import useOnClickOutside from 'use-onclickoutside'

interface UseRenameArgs {
  initial: string
  use: [string, React.Dispatch<React.SetStateAction<string>>]
  onChange?: (newState: string) => unknown
}

export default <T extends HTMLInputElement | HTMLTextAreaElement>({ initial, use: [input, setInput], onChange }: UseRenameArgs) => {
  const [isRename, setIsRename] = useState(false)
  const ref = useRef<T | null>(null)
  useOnClickOutside(ref, () => setIsRename(false))
  useEffect(() => {
    if (!isRename && initial !== input) onChange?.(input)
  }, [isRename])
  const handlePressEnter = useCallback(({ key }: React.KeyboardEvent<T>) => key === 'Enter' && setIsRename(false), [])
  return {
    state: [isRename, setIsRename],
    input: [{ ref, onKeyPress: handlePressEnter, autoFocus: true }, input, setInput],
  } as const
}
