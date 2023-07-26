import { Box, Grid } from '@mui/material';
import { useHeaderMenu } from './data';

const HeaderMenu = () => {
  const { subCategories, menuRender } = useHeaderMenu();
  return (
    <Box width={900} position={'absolute'}>
      <Grid
        container
        height={400}
        sx={{
          top: '500px',
          background: 'white',
          borderBottom: '1px solid #c9c9c9',
        }}
      >
        {menuRender('women')}
      </Grid>
    </Box>
  );
};

export default HeaderMenu;
