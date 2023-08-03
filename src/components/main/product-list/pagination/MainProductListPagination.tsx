import { Stack, Pagination } from '@mui/material';

const MainProductListPagination = () => {
  return (
    <Stack spacing={2}>
      <Pagination
        count={10}
        variant="outlined"
        sx={{
          '.MuiPaginationItem-page': {
            border: 'none',
            borderRadius: '0',
            backgroundColor: '#FFF !important',
            boxSizing: 'border-box',
            borderBottom: '2px solid #FFF',
            '&:hover': {
              borderBottom: '2px solid #000',
            },
          },
        }}
      />
    </Stack>
  );
};

export default MainProductListPagination;
