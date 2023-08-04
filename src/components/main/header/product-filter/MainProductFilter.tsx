import { Box, FormControl, Grid, Link, MenuItem, Select, SelectChangeEvent, styled } from '@mui/material';
import React from 'react';
import { useMainProductFilter } from './data';
import { useAppDispatch } from '@libs/stores';
import { setListOption } from '@libs/stores/product';

const LangLink = styled(Link)({
  padding: '6px',
  fontSize: '12px',
});

const MainProductFilter = () => {
  const { listOption } = useMainProductFilter();
  const [age, setAge] = React.useState('sort');
  const dispatch = useAppDispatch();
  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  const handleSetLimit = (limit: number) => {
    dispatch(setListOption({ ...listOption, limit }));
  };

  return (
    <Grid container columnGap={1.5} alignItems={'center'}>
      <Grid item>
        <Box sx={{ minWidth: 120 }}>
          <FormControl fullWidth>
            <Select
              id="product-filter-select-label"
              value={age}
              onChange={handleChange}
              size="small"
              sx={{
                '& fieldset': {
                  border: 'none',
                },
                fontSize: '0.9rem',
                color: '#747474',
              }}
              defaultValue="sort"
            >
              <MenuItem value={'sort'}>sort</MenuItem>
              {['최신 상품순', '베스트 상품순', '할인율 상품순', '상품평 많은순', '낮은 가격순', '높은 가격순'].map(
                (sortColumn) => (
                  <MenuItem
                    key={sortColumn}
                    value={sortColumn}
                    sx={{
                      fontSize: '0.6rem',
                    }}
                  >
                    {sortColumn}
                  </MenuItem>
                ),
              )}
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item fontSize={'0.7rem'} sx={{ paddingTop: '3px' }}>
        DISPLAY
      </Grid>
      {[12, 24, 36].map((limit) => (
        <Grid key={limit} item sx={{ width: '27px' }}>
          <LangLink
            underline="none"
            sx={{
              borderRadius: limit === listOption.limit ? '100%' : 'none',
              border: limit === listOption.limit ? '#000 1px solid !important' : '#FFF 1px solid !important',
              cursor: 'pointer',
            }}
            onClick={() => handleSetLimit(limit)}
          >
            {limit}
          </LangLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainProductFilter;
