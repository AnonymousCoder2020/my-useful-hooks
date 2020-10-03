import { useCallback, useEffect, useRef, useState } from 'react';
import useAddEventListener from './useAddEventListener';
export default (initialState) => {
    const [state, setState] = useState(initialState);
    const editableElementRef = useRef(null);
    const ref = useCallback((node) => {
        if (!node)
            return;
        editableElementRef.current = node;
        node.textContent = state;
    }, [state]);
    useEffect(() => {
        editableElementRef.current && (editableElementRef.current.textContent = state);
    }, [state]);
    useAddEventListener(editableElementRef, 'input', ({ target }) => target.textContent && setState(target.textContent));
    return [{ ref, contentEditable: true }, state, setState];
};
