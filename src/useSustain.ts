import { isNumber } from 'lodash-es'
import type React from 'react'

interface UseSustainOpt {
  onStart: () => void
  onStop: () => void
}

export default (r: typeof React, time: number, { onStart, onStop }: Partial<UseSustainOpt> = {}) => {
  const [flag, setFlag] = r.useState(false)
  const [id, setId] = r.useState<NodeJS.Timeout | number | undefined>()
  const sustain = r.useCallback(() => {
    setFlag(true)
    isNumber(id) && clearTimeout(id)
    setId(setTimeout(() => setFlag(false), time))
  }, [id])
  r.useEffect(() => (flag ? onStart?.() : onStop?.()), [flag])
  return [flag, sustain] as const
}
