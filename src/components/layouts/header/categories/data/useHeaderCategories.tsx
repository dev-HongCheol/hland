import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { useMutation } from '@tanstack/react-query';
import { getCategories } from './headerCategories.api';
import { setCategories } from '@libs/stores/product';

const useHeaderCategories = () => {
  const { categories } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();

  const categoriesMutation = useMutation({
    mutationFn: getCategories,
    onSuccess: (res) => {
      console.log(res.data);

      dispatch(setCategories(res.data));
    },
  });

  useEffect(() => {
    categoriesMutation.mutate();
  }, []);

  return { categories };
};

export default useHeaderCategories;
