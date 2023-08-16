import { http } from '@libs/http';
import { ResProducts } from './mainProductList.types';

const mainProductListApi = () => {
  const fetchProducts = (limit: number, skip: number) =>
    // http.get<ResProducts>(`/products?limit=${limit}&skip=${skip}`).then((res) => res.data);
    http.get<ResProducts>(`v1/projects/hland-b77ce/databases/(default)/documents/categories/`).then((res) => res.data);

  return { fetchProducts };
};

export default mainProductListApi;
