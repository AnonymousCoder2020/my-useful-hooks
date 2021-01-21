interface UseSustainOpt {
    onStart: () => void;
    onStop: () => void;
}
declare const _default: (time: number, { onStart, onStop }?: Partial<UseSustainOpt>) => readonly [boolean, () => void];
export default _default;
