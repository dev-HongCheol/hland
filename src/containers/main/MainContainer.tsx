import Main from '@components/main';
import { MainHeader } from '@components/main/header';
import { MainProductNav } from '@components/main/product-nav';
import { Grid } from '@mui/material';

const MainContainer = () => {
  return (
    <Grid container direction={'column'} maxWidth={'xl'} mx={'auto'} px={7}>
      <Grid item>
        <MainHeader />
      </Grid>
      <Grid container mt={4}>
        <Grid item xs={2}>
          <MainProductNav />
        </Grid>
        <Grid item xs={10}>
          <Main />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContainer;
