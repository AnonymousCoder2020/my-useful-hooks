/// <reference types="react" />
interface UseRenameArgs {
    initial: string;
    input: string;
    onRename?: (newState: string) => unknown;
}
declare const _default: <T extends HTMLElement>({ initial, input, onRename }: UseRenameArgs) => readonly [{
    readonly ref: (node: T) => void;
    readonly autoFocus: true;
}, boolean, import("react").Dispatch<import("react").SetStateAction<boolean>>];
export default _default;
