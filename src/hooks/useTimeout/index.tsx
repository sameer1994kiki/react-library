import { useEffect } from 'react';

const useTimeout = (fn, delay) => {
  useEffect(() => {
    if (delay === undefined || delay === null) return;
    const timer = setTimeout(() => {
      fn();
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }),
    [delay];
};

export default useTimeout;
