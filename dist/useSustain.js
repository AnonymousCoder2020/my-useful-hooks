import { isNumber } from 'lodash-es';
export default (r, time, { onStart, onStop } = {}) => {
    const [flag, setFlag] = r.useState(false);
    const [id, setId] = r.useState();
    const sustain = r.useCallback(() => {
        setFlag(true);
        isNumber(id) && clearTimeout(id);
        setId(setTimeout(() => setFlag(false), time));
    }, [id]);
    r.useEffect(() => (flag ? onStart?.() : onStop?.()), [flag]);
    return [flag, sustain];
};
