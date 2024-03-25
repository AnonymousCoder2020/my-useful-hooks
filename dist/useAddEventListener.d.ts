import type React from 'react';
import type { DependencyList } from 'react';
type GlobalElements = Window | HTMLDocument | HTMLElement;
type RefFunction<T extends GlobalElements> = (instance: T | null) => void;
interface OptProps<T extends GlobalElements> {
    dep: DependencyList;
    listenerOption: boolean | AddEventListenerOptions | undefined;
    onRef: RefFunction<T>;
    initialRef?: T;
}
declare const _default: <K extends keyof WindowEventMap, T extends GlobalElements>(r: typeof React, eventName: K, listener: (event: WindowEventMap[K] & {
    target: T;
}) => any, { listenerOption, onRef, dep, initialRef }?: Partial<OptProps<T>>) => {
    ref: RefFunction<T>;
    refEl: React.MutableRefObject<T | null>;
};
export default _default;
