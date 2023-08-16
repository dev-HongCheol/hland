import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { ErrorRespose } from './axios.types';
import { toast } from 'react-toastify';
import i18n from '@libs/i18n';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
  responseType: 'json',
});

// 요청 인터셉터 추가하기
instance.interceptors.request.use(
  function (config) {
    const isAuthtUrl = config.url?.indexOf('v1/accounts') !== -1;
    console.log(isAuthtUrl);

    isAuthtUrl
      ? (config.baseURL = 'https://identitytoolkit.googleapis.com')
      : (config.baseURL = 'https://content-firestore.googleapis.com');

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
      toast.error(i18n.t(`message.error.${error.response?.data.error.message}`));
      // throw new Error(error.response?.data.error.message);
    }

    return Promise.reject(error);
  },
);

const http = {
  get: <T>(url: string, config?: AxiosRequestConfig<unknown> | undefined) => instance.get<T>(url, config),

  post: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<unknown> | undefined) =>
    instance.post<T>(url, data, config),

  put: <T>(url: string, data?: unknown, config?: AxiosRequestConfig<unknown> | undefined) =>
    instance.put<T>(url, data, config),

  delete: <T>(url: string, config?: AxiosRequestConfig<unknown> | undefined) => instance.delete<T>(url, config),
};

export default http;
