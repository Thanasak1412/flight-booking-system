import axios from 'axios';
import { cookies } from 'next/headers';

import { TOKEN_TYPE } from '@/config/config';
import { BASE_URL } from '@/config/env';

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use((reqConfig) => {
  const cookieStore = cookies();

  console.log('request body => ', JSON.stringify(reqConfig.data, null, 2));
  console.log('request url => ', `${reqConfig.baseURL}${reqConfig.url}`);

  const accessToken = cookieStore.get('accessToken');

  if (accessToken) {
    reqConfig.headers.Authorization = `${TOKEN_TYPE} ${accessToken.value}`;
  }

  return reqConfig;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    Promise.reject(new Error(error?.response.data || 'Something went wrong'));
  }
);

export default axiosInstance;
