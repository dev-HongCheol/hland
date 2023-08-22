import { useAppDispatch, useAppSelector } from '@libs/stores';
import mainProductListApi from './mainProductList.api';
import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { setFilter } from '@libs/stores/product';
import { Filter } from '@libs/stores/product/product.types';

const useMainProductList = () => {
  const { filter, breadcrumbs } = useAppSelector((state) => state.product);
  const { fetchProducts } = mainProductListApi();
  const dispatch = useAppDispatch();

  const getProductList = async (_filter: Filter) => {
    console.log(_filter);

    const startAt = _filter.startAt ? _filter.pageSize * (filter.page - 1) : undefined;
    const endAt = _filter.endAt ? _filter.pageSize + 1 : undefined;
    const res = await fetchProducts({
      orderBy: _filter.orderBy,
      equalTo: _filter.equalTo,
      startAt,
      endAt,
    });
    return res;
  };

  useEffect(() => {
    console.log(breadcrumbs);
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

  return { data, isLoading };
};

export default useMainProductList;
