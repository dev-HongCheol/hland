import { Grid } from '@mui/material';
import { MainHeaderBreadcrumbs } from './breadcrumbs';
import MainProductFilter from './product-filter/MainProductFilter';
import muiTheme from '@libs/theme';

const MainHeader = () => {
  return (
    <Grid container>
      <Grid
        container
        justifyContent={'space-between'}
        sx={{
          borderBottom: '1px solid #eee',
        }}
        alignItems={'center'}
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
