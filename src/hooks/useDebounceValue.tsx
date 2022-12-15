import { useEffect, useState } from 'react';

/**
 * Cuando deja de escribir despues de 1 segundo se
 * captura el valor del INPUT
 * @returns
 */
export const useDebounceValue = (input: string, time: number = 500) => {
    const [debounceValue, setDebounceValue] = useState(input);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(input);
        }, time);

        return () => {
            clearTimeout(timeout);
        }
    }, [input]);

    return debounceValue;
}
