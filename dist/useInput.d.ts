/// <reference types="react" />
declare const _default: <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(initialState: string) => readonly [{
    readonly ref: import("react").MutableRefObject<T | null>;
    readonly props: {
        readonly value: string;
    };
}, string, import("react").Dispatch<import("react").SetStateAction<string>>];
export default _default;
