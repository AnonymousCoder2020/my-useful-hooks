import { useRef, useState } from 'react';
import useAddEventListener from './useAddEventListener';
export default () => {
    const [isHover, setIsHover] = useState(false);
    const ref = useRef(null);
    useAddEventListener(ref, 'mouseover', () => setIsHover(true));
    useAddEventListener(ref, 'mouseout', ({ relatedTarget }) => {
        var _a;
        if (!relatedTarget || (relatedTarget instanceof Node && ((_a = ref.current) === null || _a === void 0 ? void 0 : _a.contains(relatedTarget))))
            return;
        setIsHover(false);
    });
    return [ref, isHover];
};
