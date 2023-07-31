import { Grid } from '@mui/material';
import { MainHeaderBreadcrumbs } from './breadcrumbs';
import MainProductFilter from './product-filter/MainProductFilter';

const MainHeader = () => {
  return (
    <Grid container>
      <Grid
        container
        justifyContent={'space-between'}
        sx={{
          borderBottom: '1px solid #eee',
        }}
      >
        <Grid>
          <MainHeaderBreadcrumbs />
        </Grid>
        <Grid>
          <MainProductFilter />
        </Grid>
      </Grid>
      <Grid></Grid>
    </Grid>
  );
};

export default MainHeader;
