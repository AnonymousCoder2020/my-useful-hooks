import type { PlainAnyObject } from 'my-useful-type';
import type React from 'react';
declare const _default: <P extends PlainAnyObject, O extends string[]>(r: typeof React, props: P, ...omitPropsName: O) => Pick<P, Exclude<keyof P, O[number]>>;
export default _default;
