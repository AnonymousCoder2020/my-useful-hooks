/// <reference types="react" />
declare const _default: (min: number, max: number) => {
    readonly state: readonly [number, import("react").Dispatch<import("react").SetStateAction<number>>];
    readonly method: {
        readonly dec: () => void;
        readonly inc: () => void;
    };
};
export default _default;
