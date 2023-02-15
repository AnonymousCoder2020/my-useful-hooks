export default (r, listeners, { onRef, dep, initialRef } = {}) => {
    const refElement = r.useRef(null);
    const ref = r.useCallback(node => {
        if (refElement.current === node)
            return;
        onRef?.(node);
        listeners.forEach(listener => {
            refElement.current?.removeEventListener(...listener);
            node?.addEventListener(...listener);
        });
        refElement.current = node;
    }, dep ?? []);
    r.useEffect(() => initialRef && ref(initialRef), initialRef ? dep ?? [] : []);
    return { ref, refElement };
};
