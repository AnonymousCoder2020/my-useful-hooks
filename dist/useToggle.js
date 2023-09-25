import useAddEventListener from './useAddEventListener';
export default (r, initialState) => {
    const [check, setCore] = r.useState(initialState);
    const { ref, refElement } = useAddEventListener(r, 'change', ({ target }) => setCore(target.checked));
    const setCheck = r.useCallback((newCheck) => {
        const inputEl = refElement.current;
        if (!inputEl)
            return;
        setCore(newCheck);
        inputEl.checked = newCheck;
    }, []);
    return [ref, check, setCheck];
};
