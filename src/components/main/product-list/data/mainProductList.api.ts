import { http } from '@libs/http';
import { Product, QueryString } from '.';

const mainProductListApi = () => {
  const fetchProducts = (queryString: QueryString) =>
    http.get<Product[]>(`products.json`, { params: queryString }).then((res) => res.data);

  return { fetchProducts };
};

export default mainProductListApi;
