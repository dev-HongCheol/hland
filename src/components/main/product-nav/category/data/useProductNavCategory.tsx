import { useAppSelector } from '@libs/stores';
import { ProductMenu, SubCategories } from '@libs/stores/product/product.types';
import { useEffect, useState } from 'react';

const useProductNavCategory = () => {
  const { subCategories, selectedCategory } = useAppSelector((state) => state.product);

  const [selectedSubMenu, setSelectedSubMenu] = useState<ProductMenu[]>();

  useEffect(() => {
    const selectedSubMenu = subCategories[selectedCategory];

    setSelectedSubMenu(selectedSubMenu);
  }, []);

  return { selectedSubMenu };
};

export default useProductNavCategory;
