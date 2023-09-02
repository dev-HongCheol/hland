import { http } from '@libs/http';
import { Product, QueryString } from '.';

const mainProductListApi = () => {
  const fetchProducts = (queryString: QueryString) =>
    http
      .get<Product[]>(`projects/hland-b77ce/databases/(default)/documents/categories/`, { params: queryString })
      .then((res) => res.data);

  return { fetchProducts };
};

export default mainProductListApi;
