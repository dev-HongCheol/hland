import { useAppSelector } from '@libs/stores';
import { Menu } from '@libs/stores/product/product.types';
import { useEffect, useState } from 'react';

const useProductNavCategory = () => {
  const { categories, selectedCategory, breadcrumbs } = useAppSelector((state) => state.product);
  const [selectedCategorySubs, setSelectedCategorySubs] = useState<Menu[]>();

  useEffect(() => {
    const _selectedCategorySubs =
      categories.find((category) => category.name === selectedCategory)?.subCategories || [];
    setSelectedCategorySubs(_selectedCategorySubs);
  }, [selectedCategory, categories]);

  return { selectedCategorySubs, breadcrumbs };
};

export default useProductNavCategory;
