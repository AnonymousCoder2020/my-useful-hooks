import type React from 'react';
interface UseSustainOpt {
    onStart: () => void;
    onStop: () => void;
}
declare const _default: (r: typeof React, time: number, { onStart, onStop }?: Partial<UseSustainOpt>) => readonly [boolean, () => void];
export default _default;
