import type React from 'react';
declare const _default: <T extends HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(r: typeof React, initialState: string) => readonly [{
    readonly value: string;
    readonly onChange: ({ target: { value } }: React.ChangeEvent<T>) => void;
}, string, React.Dispatch<React.SetStateAction<string>>];
export default _default;
