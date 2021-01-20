import { DependencyList, useCallback, useRef } from 'react'

type GlobalElements = Window | HTMLDocument | HTMLElement

type RefFunction<T extends GlobalElements> = (instance: T | null) => void

interface OptProps<T extends GlobalElements> {
  dep: DependencyList
  listenerOption: boolean | AddEventListenerOptions | undefined
  onRef: RefFunction<T>
  initialRef?: T
}

export default <K extends keyof WindowEventMap, T extends GlobalElements>(
  eventName: K,
  listener: (event: WindowEventMap[K] & { target: T }) => any,
  { listenerOption, onRef, dep, initialRef }: Partial<OptProps<T>> = {}
) => {
  const refElement = useRef<T | null>(initialRef ?? null)
  const ref = useCallback<RefFunction<T>>(node => {
    onRef?.(node)
    refElement?.current?.removeEventListener(eventName, listener as EventListener)
    node?.addEventListener(eventName, listener as EventListener, listenerOption)
    refElement.current = node
  }, dep ?? [])
  return { ref, refElement }
}
