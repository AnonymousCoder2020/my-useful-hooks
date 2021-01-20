import { DependencyList, useCallback, useEffect, useRef } from 'react'

type GlobalElements = Window | HTMLDocument | HTMLElement

type ListenerOption = boolean | AddEventListenerOptions | undefined

type Listener<K extends keyof WindowEventMap> = [K, (event: WindowEventMap[K]) => any, ListenerOption?]

type Listeners<L extends (keyof WindowEventMap)[]> = { [P in keyof L]: L[P] extends keyof WindowEventMap ? Listener<L[P]> : never }

type RefFunction<T extends GlobalElements> = (instance: T | null) => void

interface OptProps<T extends GlobalElements> {
  dep: DependencyList
  onRef: RefFunction<T>
  initialRef?: T
}

export default <K extends (keyof WindowEventMap)[], T extends GlobalElements>(
  listeners: Listeners<K>,
  { onRef, dep, initialRef }: Partial<OptProps<T>> = {}
) => {
  const refElement = useRef<T | null>(null)
  const ref = useCallback<RefFunction<T>>(node => {
    if (refElement.current === node) return
    onRef?.(node)
    listeners.forEach(listener => {
      refElement.current?.removeEventListener(...listener)
      node?.addEventListener(...listener)
    })
    refElement.current = node
  }, dep ?? [])
  useEffect(() => initialRef && ref(initialRef), (initialRef && dep) ?? [])
  return { ref, refElement }
}
