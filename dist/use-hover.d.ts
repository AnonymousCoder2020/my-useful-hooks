import React from 'react';
export declare const useHover: <T extends HTMLElement>() => readonly [{
    readonly ref: React.MutableRefObject<T | null>;
    readonly onMouseOver: ({}: React.MouseEvent) => void;
    readonly onMouseOut: ({ relatedTarget }: React.MouseEvent) => void;
}, boolean];
