import { http } from '@libs/http';
import { ResProducts } from './mainProductList.types';

const mainProductListApi = () => {
  const fetchProducts = (limit: number, skip: number) =>
    http.httpGet<ResProducts>(`/products?limit=${limit}&skip=${skip}`).then((res) => res.data);

  return { fetchProducts };
};

export default mainProductListApi;
