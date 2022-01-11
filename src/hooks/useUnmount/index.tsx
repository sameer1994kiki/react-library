import { useEffect } from 'react';

const useUnmount = (fn: () => void): void => {
  useEffect(() => {
    return fn;
  }, []);
};
export default useUnmount;
