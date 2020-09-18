/// <reference types="react" />
declare const _default: <T extends HTMLElement>(initialState: string) => readonly [{
    readonly ref: import("react").MutableRefObject<T | null>;
    readonly onInput: ({ target }: import("react").ChangeEvent<T>) => void | "" | null;
}, string, import("react").Dispatch<import("react").SetStateAction<string>>];
export default _default;
