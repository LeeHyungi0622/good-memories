import { useState, useCallback } from 'react';

const useInput = (INITIAL_VALUE = null) => {
    const [value, setter] = useState(INITIAL_VALUE);
    const onChange = useCallback((e) => {
        const { value } = e.target;
        setter(value);
    }, []);
    return [value, onChange];
}

export default useInput;