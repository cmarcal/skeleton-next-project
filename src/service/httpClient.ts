import axios from 'axios';

export const Api = axios.create({
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    Accept: '*/*',
		mode:'no-cors'
  },
  baseURL: '',
});

Api.interceptors.request.use((config) => {
  return config;
});