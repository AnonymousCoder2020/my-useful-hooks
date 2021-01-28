import type { PlainAnyObject } from 'my-useful-type';
declare const _default: <P extends PlainAnyObject, O extends string[]>(props: P, ...omitPropsName: O) => Pick<P, Exclude<keyof P, O[number]>>;
export default _default;
