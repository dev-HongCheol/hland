import { Container, Grid, styled } from '@mui/material';
import Header from '../header/Header';
import { MemberLayoutProps } from './data';

const MemberLayoutContainer = styled(Container)({
  paddingRight: '0 !important',
  paddingLeft: '0 !important',
});

const MemberLayout = ({ children }: MemberLayoutProps) => {
  return (
    <MemberLayoutContainer maxWidth={'xl'}>
      <Grid container direction="column">
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item id="content">
          {children}
        </Grid>
      </Grid>
    </MemberLayoutContainer>
  );
};

export default MemberLayout;
