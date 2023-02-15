import type React from 'react';
interface UseRenameArgs {
    initial: string;
    input: string;
    onRename?: (newState: string) => unknown;
}
declare const _default: <T extends HTMLElement>(r: typeof React, { initial, input, onRename }: UseRenameArgs) => readonly [{
    readonly ref: (instance: T | null) => void;
    readonly autoFocus: true;
}, boolean, React.Dispatch<React.SetStateAction<boolean>>];
export default _default;
