import { Box, FormControl, Grid, Link, MenuItem, Select, SelectChangeEvent, styled } from '@mui/material';
import React from 'react';

const LangLink = styled(Link)({
  padding: '6px',
  fontSize: '12px',
  '&:hover': {
    borderRadius: '100%',
    border: '#000 1px solid !important',
    cursor: 'pointer',
  },
  border: '#FFF 1px solid !important',
});

const MainProductFilter = () => {
  const [age, setAge] = React.useState('sort');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
      </Grid>
      <Grid item fontSize={'0.7rem'} sx={{ paddingTop: '3px' }}>
        DISPLAY
      </Grid>
      {[20, 40, 80].map((pageSize) => (
        <Grid key={pageSize} item sx={{ width: '27px' }}>
          <LangLink underline="none">{pageSize}</LangLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainProductFilter;
