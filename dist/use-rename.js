import { useCallback, useEffect, useRef, useState } from 'react';
import useOnClickOutside from 'use-onclickoutside';
import useInput from './use-input';
export const useRename = (initialState, handleChange) => {
    const [isRename, setIsRename] = useState(false);
    const [props, input, setInput] = useInput(initialState);
    const ref = useRef(null);
    useOnClickOutside(ref, () => setIsRename(false));
    useEffect(() => {
        if (!isRename && initialState !== input)
            handleChange === null || handleChange === void 0 ? void 0 : handleChange(input);
    }, [isRename]);
    const handlePressEnter = useCallback(({ key }) => key === 'Enter' && setIsRename(false), []);
    return {
        state: [isRename, setIsRename],
        input: [{ ...props, ref, onKeyPress: handlePressEnter, autoFocus: true }, input, setInput],
    };
};
