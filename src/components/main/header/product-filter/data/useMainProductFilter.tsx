import { useAppDispatch, useAppSelector } from '@libs/stores';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { setFilter } from '@libs/stores/product';

const useMainProductFilter = () => {
  const filter = useAppSelector((state) => state.product.filter);
  const [sort, setSort] = useState('sort');
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
  };

  const handleSetPageSize = (pageSize: number) => {
    dispatch(setFilter({ ...filter, pageSize }));
  };

  return { filter, handleSetPageSize, handleChange, sort };
};

export default useMainProductFilter;
