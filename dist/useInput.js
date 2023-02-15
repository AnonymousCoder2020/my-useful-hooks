export default (r, initialState) => {
    const [state, setState] = r.useState(initialState ?? '');
    const onChange = r.useCallback(({ target: { value } }) => setState(value), []);
    return [{ value: state, onChange }, state, setState];
};
