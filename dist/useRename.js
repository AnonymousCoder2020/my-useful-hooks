import { useEffect, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import useAddEventListener from './useAddEventListener';
export default ({ initial, input, onRename }) => {
    const [isRename, setIsRename] = useState(false);
    const { ref, refElement } = useAddEventListener('keypress', ({ key }) => key === 'Enter' && setIsRename(false));
    useOnClickOutside(refElement, () => setIsRename(false));
    useEffect(() => {
        if (!isRename && initial !== input)
            onRename === null || onRename === void 0 ? void 0 : onRename(input);
    }, [isRename]);
    return [{ ref, autoFocus: true }, isRename, setIsRename];
};
