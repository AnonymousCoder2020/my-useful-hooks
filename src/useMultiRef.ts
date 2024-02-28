import type React from 'react'
import type MultiRefInstance from 'react-multi-ref'
// @ts-ignore
import MultiRef from 'react-multi-ref/js/index.js'

export default <K, V>(r: typeof React) => {
  const [itemRefs] = r.useState(() => new (MultiRef as { new (): MultiRefInstance<K, V> })())
  return itemRefs
}
