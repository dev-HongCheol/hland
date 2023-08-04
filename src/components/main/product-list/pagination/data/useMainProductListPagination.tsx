import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setListOption } from '@libs/stores/product';

const useMainProductListPagination = () => {
  const { listOption } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const handleSetPage = (_event: React.ChangeEvent<unknown>, page: number) => {
    dispatch(setListOption({ ...listOption, page }));
  };

  return { listOption, handleSetPage };
};

export default useMainProductListPagination;
