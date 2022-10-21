import Axios, { AxiosInstance } from 'axios';

export const httpApi: AxiosInstance = Axios.create({
  baseURL: 'localhost:8080',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

httpApi.interceptors.response.use((response) => {
  if (response.status === 400) {
    return Promise.reject(response);
  }
  return response;
});
