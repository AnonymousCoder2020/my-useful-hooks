/// <reference types="react" />
interface UseRenameArgs {
    initial: string;
    input: string;
    onRename?: (newState: string) => unknown;
}
declare const _default: <T extends HTMLElement>({ initial, input, onRename }: UseRenameArgs) => readonly [{
    readonly ref: import("react").MutableRefObject<T | null>;
    readonly autoFocus: true;
}, boolean, import("react").Dispatch<import("react").SetStateAction<boolean>>];
export default _default;
