/// <reference types="react" />
declare const _default: <T extends HTMLInputElement | HTMLTextAreaElement>(initialState: string) => readonly [{
    readonly value: string;
    readonly onChange: ({ target: { value } }: import("react").ChangeEvent<T>) => void;
}, string, import("react").Dispatch<import("react").SetStateAction<string>>];
export default _default;
