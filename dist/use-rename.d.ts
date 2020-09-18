import React from 'react';
interface UseRenameArgs {
    initial: string;
    input: string;
    onRename?: (newState: string) => unknown;
}
declare const _default: <T extends HTMLElement>({ initial, input, onRename }: UseRenameArgs) => readonly [{
    readonly ref: React.MutableRefObject<T | null>;
    readonly onKeyPress: ({ key }: React.KeyboardEvent<T>) => false | void;
    readonly autoFocus: true;
}, boolean, React.Dispatch<React.SetStateAction<boolean>>];
export default _default;
