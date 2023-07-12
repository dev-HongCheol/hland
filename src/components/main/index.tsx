import { useQuery } from 'react-query';

type Product = {
  id: number;
  title: string;
};

const Main = () => {
  const fetchProducts = async () => {
    return fetch('https://dummyjson.com/products').then((res) => res.json());
  };

  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ['todos'],
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
