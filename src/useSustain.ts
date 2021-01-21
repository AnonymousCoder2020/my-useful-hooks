import { isNumber } from 'lodash-es'
import { useCallback, useEffect, useState } from 'react'

interface UseSustainOpt {
  onStart: () => void
  onStop: () => void
}

export default (time: number, { onStart, onStop }: Partial<UseSustainOpt> = {}) => {
  const [flag, setFlag] = useState(false)
  const [id, setId] = useState<NodeJS.Timeout | number | undefined>()
  const sustain = useCallback(() => {
    setFlag(true)
    isNumber(id) && clearTimeout(id)
    setId(setTimeout(() => setFlag(false), time))
  }, [id])
  useEffect(() => (flag ? onStart?.() : onStop?.()), [flag])
  return [flag, sustain] as const
}
