/// <reference types="react" />
interface UseRenameArgs {
    initial: string;
    input: string;
    onRename?: (newState: string) => unknown;
}
declare const _default: <T extends HTMLElement>({ initial, input, onRename }: UseRenameArgs) => readonly [import("react").MutableRefObject<T | null>, boolean, import("react").Dispatch<import("react").SetStateAction<boolean>>, {
    readonly autoFocus: true;
}];
export default _default;
