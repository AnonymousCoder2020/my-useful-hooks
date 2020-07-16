import { useRef, useEffect, DependencyList } from 'react'
type Listener<K extends keyof WindowEventMap> = [K, (event: WindowEventMap[K]) => any, (boolean | AddEventListenerOptions | undefined)?]

type Listeners<L extends (keyof WindowEventMap)[]> = { [P in keyof L]: L[P] extends keyof WindowEventMap ? Listener<L[P]> : never }

export default <R extends HTMLElement, L extends (keyof WindowEventMap)[]>(listeners: Listeners<L>, deps: DependencyList) => {
  const ref = useRef<R | null>(null)
  useEffect(() => {
    const { current: element } = ref
    if (!element) return
    listeners.forEach(listener => element.addEventListener(...listener))
    return () => {
      listeners.forEach(listener => element.removeEventListener(...listener))
    }
  }, deps)
  return ref
}
