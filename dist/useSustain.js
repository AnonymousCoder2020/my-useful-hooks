import { isNumber } from 'lodash-es';
import { useCallback, useEffect, useState } from 'react';
export default (time, { onStart, onStop } = {}) => {
    const [flag, setFlag] = useState(false);
    const [id, setId] = useState();
    const sustain = useCallback(() => {
        setFlag(true);
        isNumber(id) && clearTimeout(id);
        setId(setTimeout(() => setFlag(false), time));
    }, [id]);
    useEffect(() => (flag ? onStart === null || onStart === void 0 ? void 0 : onStart() : onStop === null || onStop === void 0 ? void 0 : onStop()), [flag]);
    return [flag, sustain];
};
