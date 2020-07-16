/// <reference types="react" />
declare const _default: (initialState: string) => {
    readonly props: {
        readonly value: string;
        readonly onChange: ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => void;
    };
    readonly state: readonly [string, import("react").Dispatch<import("react").SetStateAction<string>>];
};
export default _default;
