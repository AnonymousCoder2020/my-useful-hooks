import type React from 'react';
import type { DependencyList } from 'react';
type GlobalElements = Window | HTMLDocument | HTMLElement;
type ListenerOption = boolean | AddEventListenerOptions | undefined;
type Listener<K extends keyof WindowEventMap> = [K, (event: WindowEventMap[K]) => any, ListenerOption?];
type Listeners<L extends (keyof WindowEventMap)[]> = {
    [P in keyof L]: L[P] extends keyof WindowEventMap ? Listener<L[P]> : never;
};
type RefFunction<T extends GlobalElements> = (instance: T | null) => void;
interface OptProps<T extends GlobalElements> {
    dep: DependencyList;
    onRef: RefFunction<T>;
    initialRef?: T;
}
declare const _default: <K extends (keyof WindowEventMap)[], T extends GlobalElements>(r: typeof React, listeners: Listeners<K>, { onRef, dep, initialRef }?: Partial<OptProps<T>>) => {
    ref: RefFunction<T>;
    refEl: React.MutableRefObject<T | null>;
};
export default _default;
