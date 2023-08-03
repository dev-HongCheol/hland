import mainProductListApi from './mainProductList.api';
import { useQuery } from '@tanstack/react-query';

const useMainProductList = () => {
  const { fetchProducts } = mainProductListApi();
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProducts,
  });

  return { data, isLoading };
};

export default useMainProductList;
