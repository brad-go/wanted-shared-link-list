import React, { useState, useEffect } from 'react';
import { calcExpirationDate } from 'utils/format';
import { ApiReturnType } from 'types';

const useExpire = (link: ApiReturnType) => {
  const [expire, setExpire] = useState<string>('');
  useEffect(() => {
    setExpire(calcExpirationDate(link.expires_at));
    const interval = setInterval(() => {
      setExpire(calcExpirationDate(link.expires_at));
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return { expire };
};

export default useExpire;
