import useAddEventListener from './useAddEventListener';
export default (r, initialState) => {
    const [core, setCore] = r.useState(initialState ?? '');
    const { ref, refElement } = useAddEventListener(r, 'change', ({ target }) => setCore(target.value));
    const setState = r.useCallback((newState) => {
        const inputEl = refElement.current;
        if (!inputEl)
            return;
        setCore(newState);
        inputEl.value = newState;
    }, []);
    return [ref, core, setState];
};
