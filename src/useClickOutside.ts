import type React from 'react'
import useOnClickOutside from 'use-onclickoutside' // TODO パッケージ先Reactに依存しない代替

export default <T extends HTMLElement>(r: typeof React, handler: Parameters<typeof useOnClickOutside>[1]) => {
  const ref = r.useRef<T | null>(null)
  useOnClickOutside(ref, handler)
  return ref
}
