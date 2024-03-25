import useOnClickOutside from 'use-onclickoutside'; // TODO パッケージ先Reactに依存しない代替
import useAddEventListener from './useAddEventListener';
export default (r, { initial, input, onRename }) => {
    const [isRename, setIsRename] = r.useState(false);
    const { ref, refEl } = useAddEventListener(r, 'keypress', ({ key }) => key === 'Enter' && setIsRename(false));
    useOnClickOutside(refEl, () => setIsRename(false));
    r.useEffect(() => {
        if (!isRename && initial !== input)
            onRename?.(input);
    }, [isRename]);
    return [{ ref, autoFocus: true }, isRename, setIsRename];
};
