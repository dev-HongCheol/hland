import { Stack, Pagination } from '@mui/material';
import useMainProductListPagination from './data/useMainProductListPagination';

const MainProductListPagination = () => {
  const { listOption, handleSetPage } = useMainProductListPagination();
  return (
    <Stack spacing={2}>
      <Pagination
        count={listOption.maxPage}
        variant="outlined"
        page={listOption.page}
        sx={{
          '.MuiPaginationItem-page': {
            border: 'none',
            borderRadius: '0',
            backgroundColor: '#FFF !important',
            boxSizing: 'border-box',
            borderBottom: '2px solid #FFF',
          },
          '.Mui-selected': {
            borderBottom: '2px solid #000',
          },
        }}
        onChange={handleSetPage}
      />
    </Stack>
  );
};

export default MainProductListPagination;
