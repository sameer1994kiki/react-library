import { useState, useCallback, FC } from 'react';

const useSetState = <T extends object>(
  initialState,
): [T, (patch: Partial<T> | ((prevState: T) => Partial<T>)) => void] => {
  if (initialState === void 0) {
    initialState = {};
  }
  const [state, setState] = useState(initialState);
  const setMergeState = useCallback((patch) => {
    const isFunction = typeof patch === 'function';
    setState((prevState) => ({ ...prevState, ...(isFunction ? patch(prevState) : patch) }));
  }, []);
  return [state, setMergeState];
};

export default useSetState;
