import { useEffect } from 'react';
export default (ref, eventName, callback, deps = [], listenerOpt) => {
    useEffect(() => {
        const { current: element } = ref;
        if (!element)
            return;
        element.addEventListener(eventName, callback, listenerOpt);
        return () => element.removeEventListener(eventName, callback);
    }, deps);
};
