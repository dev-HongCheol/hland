import { useQuery } from "react-query";

const Main = () => {
  const fetchProducts = async () => {
    return fetch("https://dummyjson.com/products").then((res) => res.json());
  };

  // Queries
  const { data, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchProducts,
  });
  console.log("isLoading", isLoading);
  return (
    <>
      {data?.products.map((product: any) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </>
  );
};

export default Main;
