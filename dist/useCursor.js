export default (r) => {
    const [x, setX] = r.useState(0);
    const [y, setY] = r.useState(0);
    r.useEffect(() => {
        window.addEventListener('mousemove', ({ x, y }) => {
            setX(x);
            setY(y);
        });
    }, []);
    return { x, y };
};
