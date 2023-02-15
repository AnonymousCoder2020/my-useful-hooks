import type React from 'react'
import MultiRef from 'react-multi-ref'

export default <K, V>(r: typeof React) => {
  const [itemRefs] = r.useState(() => new MultiRef<K, V>())
  return itemRefs
}
