import { useState, useCallback } from 'react'
export default (min: number, max: number) => {
  const [count, setCount] = useState(0)
  const inc = useCallback(() => {
    setCount(count => {
      const incCount = count + 1
      return max < incCount ? min : incCount
    })
  }, [min, max])
  const dec = useCallback(() => {
    setCount(count => {
      const decCount = count - 1
      return decCount < min ? max : decCount
    })
  }, [min, max])
  return {
    state: [count, setCount],
    method: { dec, inc },
  } as const
}
