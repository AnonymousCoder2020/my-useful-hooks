import { omit } from 'lodash-es'
import type { PlainAnyObject } from 'my-useful-type'
import type React from 'react'

export default <P extends PlainAnyObject, O extends string[]>(r: typeof React, props: P, ...omitPropsName: O) => {
  return r.useMemo(() => omit(props, ...omitPropsName), [props])
}
