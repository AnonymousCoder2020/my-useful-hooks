import { useState, useCallback } from 'react';
export default (initialState) => {
    const [state, setState] = useState(initialState !== null && initialState !== void 0 ? initialState : '');
    const onChange = useCallback(({ target: { value } }) => {
        setState(value);
    }, []);
    return {
        props: { value: state, onChange },
        state: [state, setState],
    };
};