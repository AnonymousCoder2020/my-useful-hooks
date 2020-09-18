import React from 'react';
interface UseRenameArgs {
    initial: string;
    use: [string, React.Dispatch<React.SetStateAction<string>>];
    onChange?: (newState: string) => unknown;
}
declare const _default: <T extends HTMLInputElement | HTMLTextAreaElement>({ initial, use: [input, setInput], onChange }: UseRenameArgs) => {
    readonly state: readonly [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    readonly input: readonly [{
        readonly ref: React.MutableRefObject<T | null>;
        readonly onKeyPress: ({ key }: React.KeyboardEvent<T>) => false | void;
        readonly autoFocus: true;
    }, string, React.Dispatch<React.SetStateAction<string>>];
};
export default _default;
