import { useCallback, useEffect, useRef, useState } from 'react';
export default (initialState) => {
    const ref = useRef(null);
    const [state, setState] = useState(initialState);
    const onInput = useCallback(({ target }) => target.textContent && setState(target.textContent), []);
    useEffect(() => {
        if (ref.current)
            ref.current.textContent = state;
    }, [state]);
    return [{ ref, onInput }, state, setState];
};
