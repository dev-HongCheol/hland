import { useAppDispatch, useAppSelector } from '@libs/stores';
import mainProductListApi from './mainProductList.api';
import { useQuery } from '@tanstack/react-query';
import { setListOption } from '@libs/stores/product';

const useMainProductList = () => {
  const listOption = useAppSelector((state) => state.product.listOption);
  const { fetchProducts } = mainProductListApi();
  const dispatch = useAppDispatch();

  const getProductList = async () => {
    const skip = listOption.limit * (listOption.page - 1);
    const res = await fetchProducts(listOption.limit, skip);
    const totalPage = res.total;
    const limitSize = res.limit;

    const maxPage = Math.ceil(totalPage / limitSize);
    dispatch(setListOption({ ...listOption, maxPage }));
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['products', listOption.page, listOption.limit],
    queryFn: getProductList,
  });

  return { data, isLoading };
};

export default useMainProductList;
