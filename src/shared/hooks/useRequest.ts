import axios from 'axios';
import { useState } from 'react';

const useRequest = () => {
  const [loading, setLoading] = useState(false);

  const request = async (method: string, url: string, body?: unknown) => {
    setLoading(true);
    return await axios({
      method: method,
      url: url,
      data: body,
    })
      .then((result) => {
        setLoading(false);
        console.log(result.data);
        return result.data;
      })
      .catch((err) => console.log(err));
  };
  return {
    loading,
    request,
  };
};
export default useRequest;
