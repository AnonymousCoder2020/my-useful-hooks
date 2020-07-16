import { useRef, useEffect } from 'react';
export default (listeners, deps) => {
    const ref = useRef(null);
    useEffect(() => {
        const { current: element } = ref;
        if (!element)
            return;
        listeners.forEach(listener => element.addEventListener(...listener));
        return () => {
            listeners.forEach(listener => element.removeEventListener(...listener));
        };
    }, deps);
    return ref;
};
