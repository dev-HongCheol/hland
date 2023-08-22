import { Container, Grid, styled, useMediaQuery } from '@mui/material';
import { DefaultLayoutProps } from './data';
import Header from '../header/Header';
import { MainBanner } from '../main-banner';
import muiTheme from '@libs/theme';

const DefaultLayoutStyle = styled(Container)({
  paddingRight: '0 !important',
  paddingLeft: '0 !important',
});

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <DefaultLayoutStyle maxWidth={false}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sx={{ display: useMediaQuery(muiTheme.breakpoints.up('md')) ? 'block' : 'none' }}>
          <MainBanner />
        </Grid>
        <Grid item id="content">
          {children}
        </Grid>
      </Grid>
    </DefaultLayoutStyle>
  );
};

export default DefaultLayout;
