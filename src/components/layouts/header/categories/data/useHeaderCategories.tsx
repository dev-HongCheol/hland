import { useAppDispatch } from '@libs/stores';

import { getCategories } from './headerCategories.api';
import { setCategories } from '@libs/stores/product';
import muiTheme from '@libs/theme';
import { useMediaQuery } from '@mui/material';
import { useQuery } from '@tanstack/react-query';

const useHeaderCategories = () => {
  const dispatch = useAppDispatch();
  const isMdMoreThenScreen = useMediaQuery(muiTheme.breakpoints.up('md'));

  const { data: categoriesRes, isLoading } = useQuery({
    queryFn: getCategories,
    queryKey: ['categories.json'],
    onSuccess: (res) => {
      dispatch(setCategories(res.data));
    },
  });

  return { categoriesRes, isMdMoreThenScreen, isLoading };
};

export default useHeaderCategories;
