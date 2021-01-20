import { useCallback, useRef } from 'react';
export default (listeners, { onRef, dep, initialRef } = {}) => {
    const refElement = useRef(initialRef !== null && initialRef !== void 0 ? initialRef : null);
    const ref = useCallback(node => {
        if (refElement.current === node)
            return;
        onRef === null || onRef === void 0 ? void 0 : onRef(node);
        listeners.forEach(listener => {
            var _a;
            (_a = refElement.current) === null || _a === void 0 ? void 0 : _a.removeEventListener(...listener);
            node === null || node === void 0 ? void 0 : node.addEventListener(...listener);
        });
        refElement.current = node;
    }, dep !== null && dep !== void 0 ? dep : []);
    return { ref, refElement };
};
