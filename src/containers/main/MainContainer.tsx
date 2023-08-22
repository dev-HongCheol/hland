import Main from '@components/main';
import { MainHeader } from '@components/main/header';
import { MainProductNav } from '@components/main/product-nav';
import muiTheme from '@libs/theme';
import { Grid, useMediaQuery } from '@mui/material';

const MainContainer = () => {
  const isMdMoreThenScreen = useMediaQuery(muiTheme.breakpoints.up('md'));
  return (
    <Grid container direction={'column'} maxWidth={'xl'} mx={'auto'} px={isMdMoreThenScreen ? 7 : 1}>
      <Grid item>
        <MainHeader />
      </Grid>
      <Grid container mt={4}>
        <Grid
          item
          xs={2}
          sx={{
            display: {
              md: 'block',
              xs: 'none',
            },
          }}
        >
          <MainProductNav />
        </Grid>
        <Grid item xs={isMdMoreThenScreen ? 10 : 12}>
          <Main />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContainer;
