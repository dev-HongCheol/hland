import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setFilter } from '@libs/stores/product';

const useMainProductListPagination = () => {
  const { filter } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleSetPage = (_event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setFilter({ ...filter, page }));
  };

  return { filter, handleSetPage };
};

export default useMainProductListPagination;
