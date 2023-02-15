import type React from 'react';
declare const _default: (r: typeof React, min: number, max: number) => {
    readonly state: readonly [number, React.Dispatch<React.SetStateAction<number>>];
    readonly method: {
        readonly dec: () => void;
        readonly inc: () => void;
    };
};
export default _default;
