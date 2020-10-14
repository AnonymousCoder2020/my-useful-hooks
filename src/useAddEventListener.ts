import { DependencyList, MutableRefObject, useCallback, useRef } from 'react'

export type MutableRef<T extends HTMLElement> = MutableRefObject<T | null> | ((instance: T | null) => void) | null

interface OptProps<T extends HTMLElement> {
  dep: DependencyList
  listenerOption: boolean | AddEventListenerOptions | undefined
  onRef: (node: T) => unknown
}

export default <K extends keyof WindowEventMap, T extends HTMLElement>(
  eventName: K,
  listener: (event: WindowEventMap[K] & { target: T }) => any,
  { listenerOption, onRef, dep }: Partial<OptProps<T>> = {}
) => {
  const refElement = useRef<T | null>(null)
  const ref = useCallback((node: T) => {
    onRef?.(node)
    refElement?.current?.removeEventListener(eventName, listener as EventListener)
    if (!node) return
    node.addEventListener(eventName, listener as EventListener, listenerOption)
    refElement.current = node
  }, dep ?? [])
  return { ref, refElement }
}
