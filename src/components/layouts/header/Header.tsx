import { AppBar, Box, Container, Toolbar, Typography, styled } from '@mui/material';
import useHeader from './data/useHeader';
import NavButtons from './nav-buttons/NavButtons';
import { HeaderCategories } from './categories';
import muiTheme from '@libs/theme';

const LogoTypographyStyle = styled(Typography)(({ theme }) => ({
  position: 'absolute',
  [theme.breakpoints.down('md')]: {
    left: '0',
    padding: '5%',
    fontSize: '1.6rem',
  },
  [theme.breakpoints.up('md')]: {
    left: '50%',
    transform: 'translate(-50%, -50%)',
    top: '50%',
    fontSize: '3rem',
  },
  textDecoration: 'none',
  transitionProperty: 'opacity',
  transitionDuration: '0.1s',
  transitionTimingFunction: 'easeOut',
}));

function Header() {
  const { headerInfo, categoriesHeight } = useHeader();

  return (
    <Box display="block" height={headerInfo.height + categoriesHeight}>
      <AppBar
        position="fixed"
        color="transparent"
        sx={{
          boxShadow: 'none',
          height: headerInfo.height,
          bgcolor: headerInfo.isDense ? 'black' : 'white',
          transitionProperty: 'height',
          transitionDuration: '0.4s',
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            height: '100%',
            paddingRight: '0 !important',
            paddingLeft: '0 !important',
          }}
        >
          <Toolbar sx={{ height: '100%', maxWidth: `${muiTheme.breakpoints.values.xl}px`, margin: '0 auto' }}>
            <LogoTypographyStyle
              variant="h3"
              color="black"
              sx={{
                display: headerInfo.isDense ? 'none' : 'block',
              }}
            >
              {headerInfo.isDense ? 'H.LAND' : 'H'}
            </LogoTypographyStyle>

            <LogoTypographyStyle
              variant="h3"
              color="white"
              sx={{
                display: headerInfo.isDense ? 'block' : 'none',
              }}
            >
              H
            </LogoTypographyStyle>

            <NavButtons isHeaderDense={headerInfo.isDense} />
          </Toolbar>
          <HeaderCategories />
        </Container>
      </AppBar>
    </Box>
  );
}
export default Header;
