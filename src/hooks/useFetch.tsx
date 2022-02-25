import React, { useState, useEffect } from 'react';
import { fetchApi } from 'api';
import type { ApiReturnType } from 'types';

const useFetch = () => {
  const [links, setLinks] = useState<ApiReturnType[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchApi();
        setLinks(data);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);
  return links;
};

export default useFetch;
