export default (r, eventName, listener, { listenerOption, onRef, dep, initialRef } = {}) => {
    const refEl = r.useRef(null);
    const ref = r.useCallback(node => {
        onRef?.(node);
        refEl?.current?.removeEventListener(eventName, listener);
        node?.addEventListener(eventName, listener, listenerOption);
        refEl.current = node;
    }, dep ?? []);
    r.useEffect(() => initialRef && ref(initialRef), initialRef ? dep ?? [] : []);
    return { ref, refEl };
};
