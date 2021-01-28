import { omit } from 'lodash-es'
import type { PlainAnyObject } from 'my-useful-type'
import { useMemo } from 'react'

export default <P extends PlainAnyObject, O extends string[]>(props: P, ...omitPropsName: O) => {
  return useMemo(() => omit(props, ...omitPropsName), [props])
}
