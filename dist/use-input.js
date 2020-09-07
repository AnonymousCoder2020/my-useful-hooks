import { useCallback, useState } from 'react';
export default (initialState, handleChange) => {
    const [state, setState] = useState(initialState !== null && initialState !== void 0 ? initialState : '');
    const onChange = useCallback((event) => {
        handleChange(event);
        const { target: { value }, } = event;
        setState(value);
    }, []);
    return [{ value: state, onChange }, state, setState];
};
