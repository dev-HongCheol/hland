import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { useMutation } from '@tanstack/react-query';
import { getCategories } from './headerCategories.api';
import { setCategories } from '@libs/stores/product';
import muiTheme from '@libs/theme';
import { useMediaQuery } from '@mui/material';

const useHeaderCategories = () => {
  const { categories } = useAppSelector((state) => state.product);
  const dispatch = useAppDispatch();
  const isMdMoreThenScreen = useMediaQuery(muiTheme.breakpoints.up('md'));

  const categoriesMutation = useMutation({
    mutationFn: getCategories,
    onSuccess: (res) => {
      dispatch(setCategories(res.data));
    },
  });

  useEffect(() => {
    categoriesMutation.mutate();
  }, []);

  return { categories, isMdMoreThenScreen };
};

export default useHeaderCategories;
