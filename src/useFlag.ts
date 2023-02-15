import type React from 'react'

export default (r: typeof React) => {
  const [flag, setFlag] = r.useState(true)
  const ban = r.useCallback(() => setFlag(false), [])
  return [flag, ban] as const
}
