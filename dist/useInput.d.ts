/// <reference types="react" />
declare const _default: <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(initialState: string, handleChange?: ((event: import("react").ChangeEvent<T>) => unknown) | undefined) => readonly [{
    readonly value: string;
    readonly onChange: (event: import("react").ChangeEvent<T>) => void;
}, string, import("react").Dispatch<import("react").SetStateAction<string>>];
export default _default;
