import MultiRef from 'react-multi-ref';
export default (r) => {
    const [itemRefs] = r.useState(() => new MultiRef());
    return itemRefs;
};
