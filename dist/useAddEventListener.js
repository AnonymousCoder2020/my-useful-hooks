import { useCallback, useEffect, useRef } from 'react';
import useFlag from './useFlag';
export default (eventName, listener, { listenerOption, onRef, dep, initialRef } = {}) => {
    const refElement = useRef(null);
    const ref = useCallback(node => {
        var _a;
        onRef === null || onRef === void 0 ? void 0 : onRef(node);
        (_a = refElement === null || refElement === void 0 ? void 0 : refElement.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(eventName, listener);
        node === null || node === void 0 ? void 0 : node.addEventListener(eventName, listener, listenerOption);
        refElement.current = node;
    }, dep !== null && dep !== void 0 ? dep : []);
    useEffect(() => initialRef && ref(initialRef), initialRef ? dep !== null && dep !== void 0 ? dep : [] : []);
    const [flag, ban] = useFlag();
    // イベントリスナーの更新
    useEffect(() => {
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
    }, dep !== null && dep !== void 0 ? dep : []);
    return { ref, refElement };
};
