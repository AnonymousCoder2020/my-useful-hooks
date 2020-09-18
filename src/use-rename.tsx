import React, { useCallback, useEffect, useRef, useState } from 'react'
import useOnClickOutside from 'use-onclickoutside'
import useInput from './use-input'
export const useRename = <T extends HTMLInputElement | HTMLTextAreaElement>(initialState: string, handleChange?: (newState: string) => unknown) => {
  const [isRename, setIsRename] = useState(false)
  const [props, input, setInput] = useInput(initialState)
  const ref = useRef<T | null>(null)
  useOnClickOutside(ref, () => setIsRename(false))
  useEffect(() => {
    if (!isRename && initialState !== input) handleChange?.(input)
  }, [isRename])
  const handlePressEnter = useCallback(({ key }: React.KeyboardEvent<T>) => key === 'Enter' && setIsRename(false), [])
  return {
    state: [isRename, setIsRename],
    input: [{ ...props, ref, onKeyPress: handlePressEnter, autoFocus: true }, input, setInput],
  } as const
}
