import { useEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import useAddEventListener from './useAddEventListener';
export default ({ initial, input, onRename }) => {
    const [isRename, setIsRename] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsRename(false));
    useEffect(() => {
        if (!isRename && initial !== input)
            onRename === null || onRename === void 0 ? void 0 : onRename(input);
    }, [isRename]);
    useAddEventListener(ref, 'keypress', ({ key }) => key === 'Enter' && setIsRename(false));
    return [{ ref, autoFocus: true }, isRename, setIsRename];
};
