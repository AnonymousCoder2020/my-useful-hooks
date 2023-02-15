import type React from 'react'
import type { DependencyList } from 'react'
import useFlag from './useFlag'

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
  const refElement = r.useRef<T | null>(null)
  const ref = r.useCallback<RefFunction<T>>(node => {
    onRef?.(node)
    refElement?.current?.removeEventListener(eventName, listener as EventListener)
    node?.addEventListener(eventName, listener as EventListener, listenerOption)
    refElement.current = node
  }, dep ?? [])
  r.useEffect(() => initialRef && ref(initialRef), initialRef ? dep ?? [] : [])
  const [flag, ban] = useFlag(r)
  // イベントリスナーの更新
  r.useEffect(() => {
    const el = refElement.current
    if (!el) return
    const onBeforeMount = () => el.removeEventListener(eventName, listener as EventListener)
    if (flag) {
      ban()
      return onBeforeMount
    }
    el.addEventListener(eventName, listener as EventListener)
    return onBeforeMount
  }, dep ?? [])
  return { ref, refElement }
}
