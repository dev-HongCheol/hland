import { Box, Grid } from '@mui/material';
import { HanderMenuProps, useHeaderMenu } from './data';
import { HeaderMenuList } from './header-menu-list';

const HeaderMenu = ({ topPosition }: HanderMenuProps) => {
  const { headerMenuRef, selectedCategorySubs } = useHeaderMenu();

  return (
    <div
      ref={headerMenuRef}
      style={{
        top: topPosition,
        background: 'white',
        transition: '.3s ease-out',
        borderBottom: '1px solid #dddddd',
        borderTop: '1px solid #dddddd',
        position: 'absolute',
        width: '100%',
        left: 0,
        textAlign: 'center',
      }}
    >
      <Box maxWidth={900} mx={'auto'} width={'90%'}>
        <Grid container height={400} pt={6}>
          {selectedCategorySubs?.map((subCategories) => (
            <HeaderMenuList
              key={subCategories.name}
              topMenuName={subCategories.name}
              subMenuNames={subCategories.menus}
            />
          ))}
          {/* {menuRender()} */}
        </Grid>
      </Box>
    </div>
  );
};
export default HeaderMenu;
