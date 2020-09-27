import { DependencyList, MutableRefObject, useEffect } from 'react'
export default <K extends keyof WindowEventMap, T extends HTMLElement>(
  ref: MutableRefObject<T | null>,
  eventName: K,
  callback: (event: WindowEventMap[K] & { target: T }) => any,
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
