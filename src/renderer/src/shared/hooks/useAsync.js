import { useEffect, useState } from 'react';

export default function useAsync(fn, { init = false } = {}) {
  const [loading, setLoading] = useState(init);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  function cbFn(...args) {
    return fn(...args).then((resData) => {
      setData(resData);
      return resData;
    }).catch((err) => {
      setError(err);
      throw err;
    }).finally(() => {
      setLoading(false);
    });
  }

  useEffect(() => {
    if (init) cbFn();
  }, []);

  return {
    execute: cbFn,
    loading,
    error,
    data,
  };
}
