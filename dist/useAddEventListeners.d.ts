import { DependencyList } from 'react';
declare type GlobalElements = Window | HTMLDocument | HTMLElement;
declare type ListenerOption = boolean | AddEventListenerOptions | undefined;
declare type Listener<K extends keyof WindowEventMap> = [K, (event: WindowEventMap[K]) => any, ListenerOption?];
declare type Listeners<L extends (keyof WindowEventMap)[]> = {
    [P in keyof L]: L[P] extends keyof WindowEventMap ? Listener<L[P]> : never;
};
declare type RefFunction<T extends GlobalElements> = (instance: T | null) => void;
interface OptProps<T extends GlobalElements> {
    dep: DependencyList;
    onRef: RefFunction<T>;
    initialRef?: T;
}
declare const _default: <K extends (keyof WindowEventMap)[], T extends GlobalElements>(listeners: Listeners<K>, { onRef, dep, initialRef }?: Partial<OptProps<T>>) => {
    ref: RefFunction<T>;
    refElement: import("react").MutableRefObject<T | null>;
};
export default _default;
