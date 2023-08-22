import { useAppDispatch, useAppSelector } from '@libs/stores';
import { useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { setFilter } from '@libs/stores/product';

const useMainProductFilter = () => {
  const filter = useAppSelector((state) => state.product.filter);
  const [age, setAge] = useState('sort'); //TODO:
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleSetPageSize = (pageSize: number) => {
    dispatch(setFilter({ ...filter, pageSize }));
  };

  return { filter, handleSetPageSize, handleChange, age };
};

export default useMainProductFilter;
