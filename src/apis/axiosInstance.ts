import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://json-server-beryl.vercel.app/api',
  timeout: 5000,
});

instance.interceptors.request.use(
  config => {
    console.info('calling api');
    return config;
  },
  error => {
    return Promise.reject(error.response);
  }
);
instance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response);
  }
);

export default instance;
