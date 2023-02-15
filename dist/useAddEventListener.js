import useFlag from './useFlag';
export default (r, eventName, listener, { listenerOption, onRef, dep, initialRef } = {}) => {
    const refElement = r.useRef(null);
    const ref = r.useCallback(node => {
        onRef?.(node);
        refElement?.current?.removeEventListener(eventName, listener);
        node?.addEventListener(eventName, listener, listenerOption);
        refElement.current = node;
    }, dep ?? []);
    r.useEffect(() => initialRef && ref(initialRef), initialRef ? dep ?? [] : []);
    const [flag, ban] = useFlag(r);
    // イベントリスナーの更新
    r.useEffect(() => {
        const el = refElement.current;
        if (!el)
            return;
        const onBeforeMount = () => el.removeEventListener(eventName, listener);
        if (flag) {
            ban();
            return onBeforeMount;
        }
        el.addEventListener(eventName, listener);
        return onBeforeMount;
    }, dep ?? []);
    return { ref, refElement };
};
