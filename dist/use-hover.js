import { useCallback, useRef, useState } from 'react';
export default () => {
    const [isHover, setIsHover] = useState(false);
    const targetRef = useRef(null);
    const handleMouseOver = useCallback(({}) => {
        setIsHover(true);
    }, []);
    const handleMouseOut = useCallback(({ relatedTarget }) => {
        var _a;
        if (!relatedTarget || (relatedTarget instanceof Node && ((_a = targetRef.current) === null || _a === void 0 ? void 0 : _a.contains(relatedTarget))))
            return;
        setIsHover(false);
    }, []);
    return [
        {
            ref: targetRef,
            onMouseOver: handleMouseOver,
            onMouseOut: handleMouseOut,
        },
        isHover,
    ];
};
