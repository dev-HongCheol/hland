import { useAppDispatch, useAppSelector } from '@libs/stores';
import mainProductListApi from './mainProductList.api';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { setFilter } from '@libs/stores/product';
import { Filter } from '@libs/stores/product/product.types';
import { http } from '@libs/http';

const useMainProductList = () => {
  const { filter, breadcrumbs } = useAppSelector((state) => state.product);
  const { selectedProduct } = useAppSelector((state) => state.cart);
  const { fetchProducts } = mainProductListApi();
  const dispatch = useAppDispatch();

  const getProductList = async (_filter: Filter) => {
    const startAt = _filter.startAt !== undefined ? _filter.pageSize * (filter.page - 1) : undefined;
    const endAt = _filter.endAt ? _filter.pageSize + 1 : undefined;

    // TODO:testcode
    const res = await fetchProducts({
      /* orderBy: _filter.orderBy,
      equalTo: _filter.equalTo,
      startAt,
      endAt, */
    });
    return res;
  };

  useEffect(() => {
    if (breadcrumbs.length > 0) {
      dispatch(
        setFilter({
          ...filter,
          orderBy: '"category"',
          equalTo: `"${breadcrumbs[0]}"`,
          startAt: undefined,
          endAt: undefined,
        }),
      );
    }
  }, [breadcrumbs]);

  const { data, isLoading } = useQuery({
    queryKey: ['products', filter],
    queryFn: () => getProductList(filter),
  });

  return { data, isLoading, selectedProduct };
};

export default useMainProductList;
