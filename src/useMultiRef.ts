import { useState } from 'react'
import MultiRef from 'react-multi-ref'

export default <K, V>() => {
  const [itemRefs] = useState(() => new MultiRef<K, V>())
  return itemRefs
}
