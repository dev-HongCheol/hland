import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setBreadcrumbs, setCategoryMenu, setSelectedCategory } from '@libs/stores/product';

const useHeaderMenuList = () => {
  const dispatch = useAppDispatch();
  const { hoverCategory, categoryMenu } = useAppSelector((state) => state.product);

  const handleOnClickMenu = (menuNames: string[]) => {
    const newSelectedCategory = hoverCategory;
    dispatch(setSelectedCategory(newSelectedCategory));
    dispatch(setBreadcrumbs([newSelectedCategory, ...menuNames]));
    dispatch(setCategoryMenu({ ...categoryMenu, isShow: false }));
  };
  return { handleOnClickMenu };
};

export default useHeaderMenuList;
