import { useCallback, useState } from 'react';
export default () => {
    const [flag, setFlag] = useState(true);
    const ban = useCallback(() => {
        setFlag(false);
    }, []);
    return [flag, ban];
};
