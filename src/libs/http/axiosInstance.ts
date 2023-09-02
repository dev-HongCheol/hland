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
    const isFireStoreUrl = config.url?.indexOf('(default)') !== -1;

    if (isAuthtUrl) {
      config.baseURL = import.meta.env.VITE_AUTH_SERVER;
      config.url += `?key=${import.meta.env.VITE_FIREBASE_APIKEY}`;
    } else if (isFireStoreUrl) {
      config.baseURL = import.meta.env.VITE_FIRESOTRE_SERVER;

      const storageUser = sessionStorage.getItem('user');
      if (storageUser) {
        const user = JSON.parse(storageUser);

        config.headers.Authorization = `Bearer ${user.idToken}`;
        // config.headers['x-goog-user-project'] = 'hland-b77ce';
      }
      config.url += `?key=${import.meta.env.VITE_FIREBASE_APIKEY}`;
    } else {
      config.baseURL = import.meta.env.VITE_PRODUCT_SERVER;
    }

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
    if ((response.config.url || '').indexOf('.json') > 0) {
      response.data = Object.values(response.data);
    }
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
