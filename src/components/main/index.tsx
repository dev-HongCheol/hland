import { http } from '@libs/http';
import { useQuery } from '@tanstack/react-query';

type Product = {
  id: number;
  title: string;
};

type ResProducts = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

const Main = () => {
  const fetchProducts = () => http.httpGet<ResProducts>('/products').then((res) => res.data);

  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  console.log('isLoading', isLoading);
  return (
    <>
      {data?.products.map((product: Product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </>
  );
};

export default Main;
