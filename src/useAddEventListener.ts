import type React from 'react'
import type { DependencyList } from 'react'

type GlobalElements = Window | HTMLDocument | HTMLElement

type RefFunction<T extends GlobalElements> = (instance: T | null) => void

interface OptProps<T extends GlobalElements> {
  dep: DependencyList
  listenerOption: boolean | AddEventListenerOptions | undefined
  onRef: RefFunction<T>
  initialRef?: T
}

export default <K extends keyof WindowEventMap, T extends GlobalElements>(
  r: typeof React,
  eventName: K,
  listener: (event: WindowEventMap[K] & { target: T }) => any,
  { listenerOption, onRef, dep, initialRef }: Partial<OptProps<T>> = {}
) => {
  const refEl = r.useRef<T | null>(null)
  const ref = r.useCallback<RefFunction<T>>(node => {
    onRef?.(node)
    refEl?.current?.removeEventListener(eventName, listener as EventListener)
    node?.addEventListener(eventName, listener as EventListener, listenerOption)
    refEl.current = node
  }, dep ?? [])
  r.useEffect(() => initialRef && ref(initialRef), initialRef ? dep ?? [] : [])
  return { ref, refEl }
}
