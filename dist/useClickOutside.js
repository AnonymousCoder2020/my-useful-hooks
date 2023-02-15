import useOnClickOutside from 'use-onclickoutside'; // TODO パッケージ先Reactに依存しない代替
export default (r, handler) => {
    const ref = r.useRef(null);
    useOnClickOutside(ref, handler);
    return ref;
};
