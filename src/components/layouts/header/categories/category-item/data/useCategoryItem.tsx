import { useRef } from 'react';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setCategoryMenu } from '@libs/stores/product';

const useCategoryItem = () => {
  const dispacth = useAppDispatch();
  const categoryItemRef = useRef<HTMLDivElement>(null);

  const { categoryMenu, selectedCategory } = useAppSelector((state) => state.product);

  const dispatchCategoryMenu = (isShow: boolean) => {
    const categoryItemLink = categoryItemRef.current;
    if (!categoryItemLink) return;
    const topPosition = categoryItemLink.getBoundingClientRect().bottom;

    dispacth(setCategoryMenu({ isShow, topPosition }));
  };
  return {
    dispacth,
    dispatchCategoryMenu,
    categoryItemRef,
    categoryMenu,
    selectedCategory,
  };
};

export default useCategoryItem;
