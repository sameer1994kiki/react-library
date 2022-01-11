import { useState, useCallback } from 'react';
import useUpdateEffect from '../useUpdateEffect';

const isFunction = (value) => typeof value === 'function';

const useLocalStorage = () => {
  function useStorageState(key, defaultValue) {
    const storage = window.localStorage;
    const getStoredValue = () => {
      const raw = storage.getItem(key);
      if (raw) {
        try {
          return JSON.parse(raw);
        } catch (e) {}
      }
      if (isFunction(defaultValue)) {
        return defaultValue();
      }
      return defaultValue;
    };
    const [state, setState] = useState(getStoredValue());
    useUpdateEffect(() => {
      setState(getStoredValue());
    }, [key]);

    const update = useCallback(
      (value) => {
        if (typeof value === undefined) {
          storage.removeItem(key);
          setState(undefined);
        } else {
          storage.setItem(key, JSON.stringify(value));
          setState(value);
        }
      },
      [key],
    );
    return [state, update];
  }
  return useStorageState;
};

export default useLocalStorage;
