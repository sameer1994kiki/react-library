import { useEffect, useRef } from 'react';

const useInterval = (fn, delay, options) => {
  const immediate = options === null || options === void 0 ? void 0 : options.immediate;
  const fnRef = useRef();
  fnRef.current = fn;

  useEffect(() => {
    if (delay === undefined || delay === null) return;
    let _a;
    if (delay === undefined || delay === null) return;
    if (immediate) {
      (_a = fnRef.current) === null || _a === void 0 ? void 0 : _a.call(fnRef);
    }
    const timer = setInterval(() => {
      let _a;

      (_a = fnRef.current) === null || _a === void 0 ? void 0 : _a.call(fnRef);
    }, delay);
    return () => {
      clearInterval(timer);
    };
  }),
    [delay];
};

export default useInterval;
