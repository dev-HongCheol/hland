import { http } from '@libs/http';
import { ResProducts } from './mainProductList.types';

const mainProductListApi = () => {
  const fetchProducts = () => http.httpGet<ResProducts>('/products').then((res) => res.data);

  return { fetchProducts };
};

export default mainProductListApi;
