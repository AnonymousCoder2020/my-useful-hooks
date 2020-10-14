import { DependencyList, useCallback, useRef } from 'react'

type RefFunction<T extends HTMLElement> = (instance: T | null) => void

interface OptProps<T extends HTMLElement> {
  dep: DependencyList
  listenerOption: boolean | AddEventListenerOptions | undefined
  onRef: RefFunction<T>
}

export default <K extends keyof WindowEventMap, T extends HTMLElement>(
  eventName: K,
  listener: (event: WindowEventMap[K] & { target: T }) => any,
  { listenerOption, onRef, dep }: Partial<OptProps<T>> = {}
) => {
  const refElement = useRef<T | null>(null)
  const ref = useCallback<RefFunction<T>>(node => {
    onRef?.(node)
    refElement?.current?.removeEventListener(eventName, listener as EventListener)
    node?.addEventListener(eventName, listener as EventListener, listenerOption)
    refElement.current = node
  }, dep ?? [])
  return { ref, refElement }
}
