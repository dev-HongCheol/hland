import { useAppSelector } from '@libs/stores';
import { Grid, Typography } from '@mui/material';

const useHeaderMenu = () => {
  const subCategories = useAppSelector((state) => state.product.subCategories);

  const menuRender = (category: string) => {
    const selectedSubCategories = subCategories[category];
    const menuCol = [];
    const menuLength = selectedSubCategories.length;
    console.log('selectedSubCategories', selectedSubCategories);

    for (let i = 0; i < menuLength; i++) {
      const menuTitle = Object.keys(selectedSubCategories[i])[0];
      const menus = selectedSubCategories[i][menuTitle];

      menuCol.push(
        <Grid item xs={2} key={menuTitle}>
          <Grid container direction={'column'}>
            <Grid item>
              <Typography fontWeight={600}>{menuTitle}</Typography>
            </Grid>
            {menus?.map((menu) => (
              <Grid item key={menu}>
                {menu}
              </Grid>
            ))}
          </Grid>
        </Grid>,
      );
    }

    return menuCol;
  };
  return { subCategories, menuRender };
};

export default useHeaderMenu;
