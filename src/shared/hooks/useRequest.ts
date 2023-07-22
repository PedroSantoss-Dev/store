import axios, { AxiosError } from 'axios';
import { useEffect, useState } from 'react';

import { PRODUCT } from '../constants/urls';

type RequestError = AxiosError | null;

type UseRequestOpitions<T> = {
  initialData?: T | null;
};
const useRequest = <T>(url: string, options: UseRequestOpitions<T> = {}) => {
  const { initialData = null } = options;
  const [data, setData] = useState<T | null>(initialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<RequestError | unknown>(null);

  const login = async (username: string, password: string) => {
    await axios({
      method: 'post',
      url: url,
      data: {
        username: username,
        password: password,
      },
    }).then((response) => {
      console.log(response.data);
    });
  };
  const get = async () => {
    if (url === PRODUCT) {
      await axios({
        method: 'get',
        url: url,
      })
        .then((response) => {
          setData(response.data);
          setLoading(false);
          setError(null);
        })
        .catch((error) => setError(error));
    }
  };

  useEffect(() => {
    get();
  }, []);
  return { get, data, loading, error, login };
};

export default useRequest;
