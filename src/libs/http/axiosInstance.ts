import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ErrorRespose } from './axios.types';
import { toast } from 'react-toastify';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
  responseType: 'json',
});

// 요청 인터셉터 추가하기
instance.interceptors.request.use(
  function (config) {
    config.url += `?key=${import.meta.env.VITE_FIREBASE_APIKEY}`;
    return config;
  },
  function (error) {
    // 요청 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

// 응답 인터셉터 추가하기
instance.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error: AxiosError<ErrorRespose>) {
    //TODO:응답코드가 없으면 우선은 무조건 500(서버에러)이다
    const status = error.response?.status || 500;

    if (status >= 400 && status < 500) {
      toast(error.response?.data.error.message);
    }

    return Promise.reject(error);
  },
);

const httpGet = <T>(url: string, config?: AxiosRequestConfig<unknown> | undefined) => instance.get<T>(url, config);

const httpPost = <T>(url: string, data?: unknown, config?: AxiosRequestConfig<unknown> | undefined) =>
  instance.post<T>(url, data, config);

const httpPut = <T>(url: string, data?: unknown, config?: AxiosRequestConfig<unknown> | undefined) =>
  instance.put<T>(url, data, config);

const httpDelete = <T>(url: string, config?: AxiosRequestConfig<unknown> | undefined) =>
  instance.delete<T>(url, config);

export default {
  instance,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
};
