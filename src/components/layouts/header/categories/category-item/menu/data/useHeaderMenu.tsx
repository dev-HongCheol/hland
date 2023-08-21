import { useAppSelector } from '@libs/stores';
import { setBreadcrumbs, setSelectedCategory } from '@libs/stores/product';
import { useRef } from 'react';

const useHeaderMenu = () => {
  const { hoverCategory, categories, selectedCategory } = useAppSelector((state) => state.product);
  const headerMenuRef = useRef<HTMLDivElement>(null);
  const selectedCategorySubs = categories.find((category) => category.name === hoverCategory)?.subCategories;

  return {
    headerMenuRef,
    selectedCategorySubs,
    selectedCategory,
    setSelectedCategory,
    setBreadcrumbs,
  };
};

export default useHeaderMenu;
