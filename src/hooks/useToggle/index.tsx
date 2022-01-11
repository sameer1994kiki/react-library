import { useState, useMemo } from 'react';

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: (value?: boolean | undefined) => void;
}
type IState = string | number | boolean | undefined;

const useToggle = (defaultValue?: IState, reverseValue?: IState): [IState, Actions] => {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  const [state, setState] = useState(defaultValue);
  const action = useMemo(() => {
    const reverseValueOrigin = reverseValue === undefined ? !defaultValue : reverseValue;
    const toggle = (value) => {
      if (value !== undefined) {
        setState(value);
        return;
      }
      setState((preState) => (preState === defaultValue ? reverseValueOrigin : defaultValue));
    };
    const setLeft = () => {
      setState(defaultValue);
    };
    const setRight = () => {
      setState(reverseValueOrigin);
    };
    return {
      toggle,
      setLeft,
      setRight,
    };
  }, [defaultValue, reverseValue]);
  return [state, action];
};

export default useToggle;
