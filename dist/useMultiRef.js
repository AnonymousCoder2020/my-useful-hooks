// @ts-ignore
import MultiRef from 'react-multi-ref/js/index.js';
export default (r) => {
    const [itemRefs] = r.useState(() => new MultiRef());
    return itemRefs;
};
