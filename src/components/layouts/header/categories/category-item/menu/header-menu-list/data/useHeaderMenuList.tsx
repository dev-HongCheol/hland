import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setBreadcrumbs, setCategoryMenu, setSelectedCategory } from '@libs/stores/product';
import { useMediaQuery } from '@mui/material';
import muiTheme from '@libs/theme';

const useHeaderMenuList = () => {
  const dispatch = useAppDispatch();
  const { hoverCategory, categoryMenu } = useAppSelector((state) => state.product);
  const isMdMoreThenScreen = useMediaQuery(muiTheme.breakpoints.up('md'));

  const handleOnClickMenu = (menuNames: string[]) => {
    const newSelectedCategory = hoverCategory;
    dispatch(setSelectedCategory(newSelectedCategory));
    dispatch(setBreadcrumbs([newSelectedCategory, ...menuNames]));
    dispatch(setCategoryMenu({ ...categoryMenu, isShow: false }));
  };
  return { handleOnClickMenu, isMdMoreThenScreen };
};

export default useHeaderMenuList;
