import { useCallback, useEffect, useState } from 'react';
import useAddEventListener from './useAddEventListener';
export default (initialState) => {
    const [state, setState] = useState(initialState);
    const onRef = useCallback((node) => {
        if (!node)
            return;
        node.textContent = state;
        node.focus();
    }, [state]);
    const { ref, refElement } = useAddEventListener('input', ({ target }) => target.textContent && setState(target.textContent), {
        onRef,
        dep: [state],
    });
    useEffect(() => {
        refElement.current && (refElement.current.textContent = state);
    }, [state]);
    return [{ ref, contentEditable: true }, state, setState];
};
