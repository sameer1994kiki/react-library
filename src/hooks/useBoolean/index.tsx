import { useMemo } from 'react';
import useToggle from '../useToggle';

interface Actions {
  setTrue: () => void;
  setFalse: () => void;
  toggle: (value?: boolean | undefined) => void;
}
const useBoolean = (defaultValue?: boolean): [boolean, Actions] => {
  if (defaultValue === void 0) {
    defaultValue = false;
  }
  const [state, { toggle }] = useToggle(defaultValue);

  const action = useMemo(() => {
    const setTrue = () => {
      toggle(true);
    };
    const setFalse = () => {
      toggle(false);
    };
    return {
      toggle,
      setTrue,
      setFalse,
    };
  }, [toggle]);

  return [state, action];
};
export default useBoolean;
