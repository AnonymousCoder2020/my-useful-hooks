import type React from 'react'
import type { DependencyList } from 'react'

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
  r: typeof React,
  listeners: Listeners<K>,
  { onRef, dep, initialRef }: Partial<OptProps<T>> = {}
) => {
  const refElement = r.useRef<T | null>(null)
  const ref = r.useCallback<RefFunction<T>>(node => {
    if (refElement.current === node) return
    onRef?.(node)
    listeners.forEach(listener => {
      refElement.current?.removeEventListener(...listener)
      node?.addEventListener(...listener)
    })
    refElement.current = node
  }, dep ?? [])
  r.useEffect(() => initialRef && ref(initialRef), initialRef ? dep ?? [] : [])
  return { ref, refElement }
}
