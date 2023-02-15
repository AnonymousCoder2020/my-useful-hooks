import type React from 'react'
import dayjs from 'dayjs'
// stateの中身を、1秒おきに最新のdayjsに更新
export default (r: typeof React) => {
  const [nowDayjs, setNowDayjs] = r.useState(dayjs())
  const interval = r.useRef<NodeJS.Timer>()
  r.useEffect(() => {
    interval.current = setInterval(() => setNowDayjs(dayjs()), 1000)
  }, [])
  return [nowDayjs, interval] as const
}
