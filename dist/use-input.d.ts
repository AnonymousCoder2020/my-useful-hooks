/// <reference types="react" />
declare const _default: (initialState: string) => readonly [{
    readonly value: string;
    readonly onChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
}, string, import("react").Dispatch<import("react").SetStateAction<string>>];
export default _default;
