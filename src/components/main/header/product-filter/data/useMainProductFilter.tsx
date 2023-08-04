import { useAppSelector } from '@libs/stores';

const useMainProductFilter = () => {
  const listOption = useAppSelector((state) => state.product.listOption);

  return { listOption };
};

export default useMainProductFilter;
