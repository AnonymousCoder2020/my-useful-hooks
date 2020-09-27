import { useEffect, useState } from 'react'
export default () => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  useEffect(() => {
    window.addEventListener('mousemove', ({ x, y }) => {
      setX(x)
      setY(y)
    })
  }, [])
  return { x, y }
}
