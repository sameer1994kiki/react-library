import { useState, useCallback } from 'react';

const useUpdate = (): (() => void) => {
  const [state, setState] = useState({});
  return useCallback(() => {
    setState({});
  }, []);
};
export default useUpdate;
