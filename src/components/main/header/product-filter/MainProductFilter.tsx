import styled from '@emotion/styled';
import { useMainProductFilter } from './data';
import { Box, FormControl, Grid, Link, MenuItem, Select } from '@mui/material';

const LangLink = styled(Link)({
  padding: '6px',
  fontSize: '12px',
});

const MainProductFilter = () => {
  const { filter, handleSetPageSize, handleChange, age } = useMainProductFilter();

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
      <Grid
        item
        fontSize={'0.7rem'}
        sx={{
          paddingTop: '3px',
          display: {
            md: 'block',
            xs: 'none',
          },
        }}
      >
        DISPLAY
      </Grid>
      {[12, 24, 36].map((pageSize) => (
        <Grid
          key={pageSize}
          item
          sx={{
            width: '27px',
            display: {
              md: 'block',
              xs: 'none',
            },
          }}
        >
          <LangLink
            underline="none"
            sx={{
              borderRadius: pageSize === filter.pageSize ? '100%' : 'none',
              border: pageSize === filter.pageSize ? '#000 1px solid !important' : '#FFF 1px solid !important',
              cursor: 'pointer',
            }}
            onClick={() => handleSetPageSize(pageSize)}
          >
            {pageSize}
          </LangLink>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainProductFilter;
