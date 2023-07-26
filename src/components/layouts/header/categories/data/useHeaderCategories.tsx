import { useAppSelector } from '@libs/stores';

const useHeaderCategories = () => {
  const { categories } = useAppSelector((state) => state.product);
  return { categories };
};

export default useHeaderCategories;
