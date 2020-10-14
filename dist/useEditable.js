import { useCallback, useEffect, useRef, useState } from 'react';
import useAddEventListener from './useAddEventListener';
export default (initialState) => {
    const [state, setState] = useState(initialState);
    const editableElementRef = useRef(null);
    const onRef = useCallback((node) => {
        if (!node)
            return;
        editableElementRef.current = node;
        node.textContent = state;
        node.focus();
    }, [state]);
    const { ref } = useAddEventListener('input', ({ target }) => target.textContent && setState(target.textContent), { onRef });
    useEffect(() => {
        editableElementRef.current && (editableElementRef.current.textContent = state);
    }, [state]);
    return [{ ref, contentEditable: true }, state, setState];
};
