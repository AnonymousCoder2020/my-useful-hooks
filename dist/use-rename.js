import { useCallback, useEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
export default ({ initial, use: [input, setInput], onChange }) => {
    const [isRename, setIsRename] = useState(false);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsRename(false));
    useEffect(() => {
        if (!isRename && initial !== input)
            onChange === null || onChange === void 0 ? void 0 : onChange(input);
    }, [isRename]);
    const handlePressEnter = useCallback(({ key }) => key === 'Enter' && setIsRename(false), []);
    return {
        state: [isRename, setIsRename],
        input: [{ ref, onKeyPress: handlePressEnter, autoFocus: true }, input, setInput],
    };
};
