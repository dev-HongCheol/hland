import { http } from '@libs/http';
import { Product } from '.';

const mainProductListApi = () => {
  const fetchProducts = (limit: number, skip: number) =>
    http.get<Product[]>(`products.json?limit=${limit}&skip=${skip}`).then((res) => res.data);

  return { fetchProducts };
};

export default mainProductListApi;
