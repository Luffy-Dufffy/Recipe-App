import { useEffect, useState } from 'react';

function useLocalStorage(key, defaultValue) {
    const [value, setValue] = useState(() => {
        let currentValue;

        try {
            const item = localStorage.getItem(key);
            currentValue = item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error("Error parsing localStorage value", error);
            currentValue = defaultValue;
        }

        return currentValue;
    });

    useEffect(() => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.error("Error setting localStorage value", error);
        }
    }, [key, value]);

    return [value, setValue];
}

export default useLocalStorage;
