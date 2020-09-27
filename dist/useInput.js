import { useRef, useState } from 'react';
import useAddEventListener from './useAddEventListener';
export default (initialState) => {
    const [state, setState] = useState(initialState !== null && initialState !== void 0 ? initialState : '');
    const ref = useRef(null);
    useAddEventListener(ref, 'change', event => {
        const { target: { value }, } = event;
        setState(value);
    });
    return [{ ref, props: { value: state } }, state, setState];
};
