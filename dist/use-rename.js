import { useCallback, useEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
export default ({ initial, input, onRename }) => {
    const [isRename, setIsRename] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsRename(false));
    useEffect(() => {
        if (!isRename && initial !== input)
            onRename === null || onRename === void 0 ? void 0 : onRename(input);
    }, [isRename]);
    const handlePressEnter = useCallback(({ key }) => key === 'Enter' && setIsRename(false), []);
    return [{ ref, onKeyPress: handlePressEnter, autoFocus: true }, isRename, setIsRename];
};
