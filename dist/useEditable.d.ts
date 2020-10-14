/// <reference types="react" />
declare const _default: <T extends HTMLElement>(initialState: string) => readonly [{
    readonly ref: (node: T) => void;
    readonly contentEditable: true;
}, string, import("react").Dispatch<import("react").SetStateAction<string>>];
export default _default;
