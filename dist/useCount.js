export default (r, min, max) => {
    const [count, setCount] = r.useState(0);
    const inc = r.useCallback(() => {
        setCount(count => {
            const incCount = count + 1;
            return max < incCount ? min : incCount;
        });
    }, [min, max]);
    const dec = r.useCallback(() => {
        setCount(count => {
            const decCount = count - 1;
            return decCount < min ? max : decCount;
        });
    }, [min, max]);
    return {
        state: [count, setCount],
        method: { dec, inc }
    };
};
