import useAddEventListeners from './useAddEventListeners';
export default (r) => {
    const [isHover, setIsHover] = r.useState(false);
    const { ref } = useAddEventListeners(r, [
        ['mouseover', () => setIsHover(true)],
        [
            'mouseout',
            ({ relatedTarget, target }) => {
                if (!relatedTarget || (relatedTarget instanceof Node && target?.contains(relatedTarget)))
                    return;
                setIsHover(false);
            }
        ]
    ]);
    return [ref, isHover];
};
