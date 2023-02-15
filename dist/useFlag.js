export default (r) => {
    const [flag, setFlag] = r.useState(true);
    const ban = r.useCallback(() => setFlag(false), []);
    return [flag, ban];
};
