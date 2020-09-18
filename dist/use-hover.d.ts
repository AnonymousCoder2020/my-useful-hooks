import React from 'react';
declare const _default: <T extends HTMLElement>() => readonly [{
    readonly ref: React.MutableRefObject<T | null>;
    readonly onMouseOver: ({}: React.MouseEvent) => void;
    readonly onMouseOut: ({ relatedTarget }: React.MouseEvent) => void;
}, boolean];
export default _default;
