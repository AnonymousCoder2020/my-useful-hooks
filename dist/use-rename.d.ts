import React from 'react';
declare const _default: <T extends HTMLInputElement | HTMLTextAreaElement>(initialState: string, handleChange?: ((newState: string) => unknown) | undefined) => {
    readonly state: readonly [boolean, React.Dispatch<React.SetStateAction<boolean>>];
    readonly input: readonly [{
        readonly ref: React.MutableRefObject<T | null>;
        readonly onKeyPress: ({ key }: React.KeyboardEvent<T>) => false | void;
        readonly autoFocus: true;
        readonly value: string;
        readonly onChange: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
    }, string, React.Dispatch<React.SetStateAction<string>>];
};
export default _default;
