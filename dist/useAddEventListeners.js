export default (r, listeners, { onRef, dep, initialRef } = {}) => {
    const refEl = r.useRef(null);
    const ref = r.useCallback(node => {
        if (refEl.current === node)
            return;
        onRef?.(node);
        listeners.forEach(listener => {
            refEl.current?.removeEventListener(...listener);
            node?.addEventListener(...listener);
        });
        refEl.current = node;
    }, dep ?? []);
    r.useEffect(() => initialRef && ref(initialRef), initialRef ? dep ?? [] : []);
    return { ref, refEl };
};
