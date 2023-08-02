import Main from '@components/main';
import { Grid } from '@mui/material';
import MainHeaderContainer from './MainHeaderContainer';
import MainProductCategoryContainer from './MainProductNavContainer';

const MainContainer = () => {
  return (
    <Grid container direction={'column'} maxWidth={'xl'} mx={'auto'} px={7}>
      <Grid item>
        <MainHeaderContainer />
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <MainProductCategoryContainer />
        </Grid>
        <Grid item xs={10}>
          <Main />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MainContainer;
