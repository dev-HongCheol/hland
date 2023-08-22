import { useAppDispatch, useAppSelector } from '@libs/stores';
import mainProductListApi from './mainProductList.api';
import { useQuery } from '@tanstack/react-query';
import { setListOption } from '@libs/stores/product';

const useMainProductList = () => {
  const listOption = useAppSelector((state) => state.product.listOption);
  const { fetchProducts } = mainProductListApi();
  const dispatch = useAppDispatch();

  const getProductList = async () => {
    const startAt = listOption.limit * (listOption.page - 1);
    const endAt = listOption.limit + 1;
    const res = await fetchProducts({
      orderBy: '"id"',
      startAt,
      endAt,
    });
    console.log(res);

    // const maxPage = Math.ceil(totalPage / limitSize);
    // dispatch(setListOption({ ...listOption, maxPage }));
    return res;
  };

  const { data, isLoading } = useQuery({
    queryKey: ['products', listOption.page, listOption.limit],
    queryFn: getProductList,
  });

  return { data, isLoading };
};

export default useMainProductList;
