import { DependencyList, MutableRefObject, useCallback, useRef } from 'react'

type ListenerOption = boolean | AddEventListenerOptions | undefined

type Listener<K extends keyof WindowEventMap> = [K, (event: WindowEventMap[K]) => any, ListenerOption?]

type Listeners<L extends (keyof WindowEventMap)[]> = { [P in keyof L]: L[P] extends keyof WindowEventMap ? Listener<L[P]> : never }

export type MutableRef<T extends HTMLElement> = MutableRefObject<T | null> | ((instance: T | null) => void) | null

interface OptProps<T extends HTMLElement> {
  dep: DependencyList
  onRef: (node: T) => unknown
}

export default <K extends (keyof WindowEventMap)[], T extends HTMLElement>(listeners: Listeners<K>, { onRef, dep }: Partial<OptProps<T>> = {}) => {
  const refElement = useRef<T | null>(null)
  const ref = useCallback((node: T) => {
    onRef?.(node)
    listeners.forEach(listener => {
      refElement.current?.removeEventListener(...listener)
      node.addEventListener(...listener)
    })
    refElement.current = node
  }, dep ?? [])
  return { ref, refElement }
}
