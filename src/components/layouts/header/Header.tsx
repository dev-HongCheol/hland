import { AppBar, Box, Container, Toolbar, Typography, styled } from '@mui/material';
import useHeader from './data/useHeader';
import NavButtons from './nav-buttons/NavButtons';
import { HeaderCategories } from './categories';
import { HeaderMenu } from './menu';

const LogoTypographyStyle = styled(Typography)({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  textDecoration: 'none',
  transitionProperty: 'opacity',
  transitionDuration: '0.1s',
  transitionTimingFunction: 'easeOut',
});

function Header() {
  const { headerInfo, categoriesHeight, categoryMenu } = useHeader();
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
          maxWidth="xl"
          sx={{
            height: '100%',
            paddingRight: '0 !important',
            paddingLeft: '0 !important',
          }}
        >
          <Toolbar sx={{ height: '100%' }}>
            <LogoTypographyStyle
              variant="h3"
              color="block"
              sx={{
                opacity: headerInfo.isDense ? 0 : 1,
              }}
            >
              H.LAND
            </LogoTypographyStyle>

            <LogoTypographyStyle
              variant="h3"
              color="white"
              sx={{
                opacity: headerInfo.isDense ? 1 : 0,
              }}
            >
              H
            </LogoTypographyStyle>

            <NavButtons isHeaderDense={headerInfo.isDense} />
          </Toolbar>
          <HeaderCategories />
        </Container>
        {categoryMenu.isShow && <HeaderMenu topPosition={categoryMenu.topPosition} />}
      </AppBar>
    </Box>
  );
}
export default Header;
