import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setBreadcrumbs, setCategoryMenu, setHoverCategory, setSelectedCategory } from '@libs/stores/product';
import muiTheme from '@libs/theme';
import { useMediaQuery } from '@mui/material';

const useCategoryItem = () => {
  const dispacth = useAppDispatch();
  const categoryItemRef = useRef<HTMLDivElement>(null);
  const { categoryMenu, selectedCategory, hoverCategory } = useAppSelector((state) => state.product);
  const isMdMoreThenScreen = useMediaQuery(muiTheme.breakpoints.up('md'));

  const handleShowCategoryMenu = (isShow: boolean) => {
    const categoryItemLink = categoryItemRef.current;
    if (!categoryItemLink) return;
    const topPosition = categoryItemLink.getBoundingClientRect().bottom;
    dispacth(setCategoryMenu({ isShow, topPosition }));
  };

  const handleHoverCategoryDiv = (isShow: boolean, categoryName: string) => {
    dispacth(setHoverCategory(categoryName));
    handleShowCategoryMenu(isShow);
  };

  const handleClickCategoryItem = (isShow: boolean, categoryName: string) => {
    dispacth(setSelectedCategory(categoryName));
    dispacth(setBreadcrumbs([categoryName]));
    handleShowCategoryMenu(isShow);
  };

  return {
    dispacth,
    handleShowCategoryMenu,
    handleHoverCategoryDiv,
    handleClickCategoryItem,
    categoryItemRef,
    categoryMenu,
    selectedCategory,
    hoverCategory,
    isMdMoreThenScreen,
  };
};

export default useCategoryItem;
