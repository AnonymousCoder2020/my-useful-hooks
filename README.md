# my-useful-hooks

```
yarn add https://github.com/AnonymousCoder2020/my-useful-hooks
```

# Usage

useInput

```js
import r, { FC } from 'react'

const App: FC<{}> = () => {
  const [ref, v, setV] = useInput(r)
  return <input type='text' value={v} ref={ref} />
}
```
