import axios, { AxiosRequestConfig } from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_SERVER,
  responseType: 'json',
});

// 요청 인터셉터 추가하기
instance.interceptors.request.use(
  function (config) {
    // 요청이 전달되기 전에 작업 수행
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
  function (error) {
    // 2xx 외의 범위에 있는 상태 코드는 이 함수를 트리거 합니다.
    // 응답 오류가 있는 작업 수행
    return Promise.reject(error);
  },
);

const httpGet = <T>(url: string, config?: AxiosRequestConfig<unknown> | undefined) => instance.get<T>(url, config);

const httpPost = (url: string, data?: unknown, config?: AxiosRequestConfig<unknown> | undefined) => {
  instance.post(url, data, config);
};

const httpPut = (url: string, data?: unknown, config?: AxiosRequestConfig<unknown> | undefined) => {
  instance.put(url, data, config);
};

const httpDelete = (url: string, config?: AxiosRequestConfig<unknown> | undefined) => {
  instance.delete(url, config);
};

export default {
  instance,
  httpGet,
  httpPost,
  httpPut,
  httpDelete,
};
