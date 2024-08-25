import axios from 'axios';
import { cookies } from 'next/headers';
import https from 'https';
import fs from 'fs';
import path from 'path';

import { TOKEN_TYPE } from '@/config/config';
import { BASE_URL, NODE_ENV } from '@/config/env';

// Load the CA certificate from /certificate directory
const caPath = path.resolve(process.cwd(), 'certificates/localhost.pem');
const ca = fs.readFileSync(caPath);

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  httpsAgent: new https.Agent({
    ca,
    rejectUnauthorized: NODE_ENV === 'production',
  }),
});

axiosInstance.interceptors.request.use((reqConfig) => {
  const cookieStore = cookies();

  console.log('request body => ', JSON.stringify(reqConfig.data, null, 2));
  console.log('request url => ', `${reqConfig.baseURL}${reqConfig.url}`);

  const token = cookieStore.get('token');

  if (token) {
    reqConfig.headers.Authorization = `${TOKEN_TYPE} ${token.value}`;
  }

  return reqConfig;
});

axiosInstance.interceptors.response.use(
  (res) => res,
  (error) => {
    console.log('err => ', JSON.stringify(error, null, 2));

    Promise.reject(new Error(error?.response.data || 'Something went wrong'));
  }
);

export default axiosInstance;
