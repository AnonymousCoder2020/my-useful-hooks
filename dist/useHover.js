import { useState } from 'react';
import useAddEventListeners from './useAddEventListeners';
export default () => {
    const [isHover, setIsHover] = useState(false);
    const { ref } = useAddEventListeners([
        ['mouseover', () => setIsHover(true)],
        [
            'mouseout',
            ({ relatedTarget, target }) => {
                var _a;
                if (!relatedTarget || (relatedTarget instanceof Node && ((_a = target) === null || _a === void 0 ? void 0 : _a.contains(relatedTarget))))
                    return;
                setIsHover(false);
            },
        ],
    ]);
    return [ref, isHover];
};
