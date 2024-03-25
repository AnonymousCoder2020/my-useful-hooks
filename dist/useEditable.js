import useAddEventListener from './useAddEventListener';
export default (r, initialState) => {
    const [state, setState] = r.useState(initialState);
    const onRef = r.useCallback((node) => {
        if (!node)
            return;
        node.textContent = state;
        node.focus();
    }, [state]);
    const { ref, refEl } = useAddEventListener(r, 'input', ({ target }) => target.textContent && setState(target.textContent), {
        onRef,
        dep: [state]
    });
    r.useEffect(() => {
        refEl.current && (refEl.current.textContent = state);
    }, [state]);
    return [{ ref, contentEditable: true }, state, setState];
};
