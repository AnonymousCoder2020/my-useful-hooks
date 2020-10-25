import { useState } from 'react';
import MultiRef from 'react-multi-ref';
export default () => {
    const [itemRefs] = useState(() => new MultiRef());
    return itemRefs;
};
