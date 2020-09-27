import { DependencyList, MutableRefObject, useEffect } from 'react'
export default <K extends keyof WindowEventMap, T extends HTMLElement>(
  eventName: K,
  callback: (event: WindowEventMap[K] & { target: T }) => any,
  ref: MutableRefObject<T | null>,
  deps: DependencyList = [],
  listenerOpt?: boolean | AddEventListenerOptions | undefined
) => {
  useEffect(() => {
    const { current: element } = ref
    if (!element) return
    element.addEventListener(eventName, callback as EventListener, listenerOpt)
    return () => element.removeEventListener(eventName, callback as EventListener)
  }, deps)
}
