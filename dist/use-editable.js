import { useCallback, useEffect, useRef, useState } from 'react';
export default (initialState) => {
    const [state, setState] = useState(initialState);
    const editableElementRef = useRef(null);
    const ref = useCallback((node) => {
        if (!node)
            return;
        editableElementRef.current = node;
        node.textContent = state;
        node.focus();
    }, [state]);
    useEffect(() => {
        editableElementRef.current && (editableElementRef.current.textContent = state);
    }, [state]);
    const onInput = useCallback(({ target }) => target.textContent && setState(target.textContent), []);
    return [{ ref, onInput, contentEditable: true }, state, setState];
};
