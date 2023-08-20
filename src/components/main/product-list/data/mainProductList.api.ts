import { http } from '@libs/http';
import { ResProducts } from './mainProductList.types';

const mainProductListApi = () => {
  const uri = 'v1/projects/hland-b77ce/databases/(default)/documents';
  const fetchProducts = (limit: number, skip: number) =>
    // http.get<ResProducts>(`/products?limit=${limit}&skip=${skip}`).then((res) => res.data);
    // http.get<ResProducts>(`${uri}categories/women/`).then((res) => res.data);
    http.get<ResProducts>(`${uri}/women/test/nO76Zywm9Se5HHg8S7fh/`).then((res) => res.data);

  return { fetchProducts };
};

export default mainProductListApi;
