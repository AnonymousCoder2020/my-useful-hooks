import { useRef } from 'react';
import useOnClickOutside from 'use-onclickoutside';
export default (handler) => {
    const ref = useRef(null);
    useOnClickOutside(ref, handler);
    return ref;
};
