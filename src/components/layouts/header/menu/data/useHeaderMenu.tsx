import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setCategoryMenu } from '@libs/stores/product';
import { Grid, Typography } from '@mui/material';
import { useRef } from 'react';

const useHeaderMenu = () => {
  const dispatch = useAppDispatch();
  const { selectedCategory, subCategories, categoryMenu } = useAppSelector((state) => state.product);
  const headerMenuRef = useRef<HTMLDivElement>(null);

  const handleToggleHeaderMenu = (isShow: boolean) => {
    const headerMenuDiv = headerMenuRef.current;
    if (!headerMenuDiv) return;
    headerMenuDiv.style.opacity = isShow ? '1' : '0';
    dispatch(setCategoryMenu({ ...categoryMenu, isShow }));
  };

  const menuRender = () => {
    const selectedSubCategories = subCategories[selectedCategory];
    const menuCol = [];
    const menuLength = (selectedSubCategories || []).length;

    for (let i = 0; i < menuLength; i++) {
      const menuTitle = Object.keys(selectedSubCategories[i])[0];
      const menus = selectedSubCategories[i][menuTitle];

      menuCol.push(
        <Grid item xs={2} lg={1.5} key={menuTitle}>
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

  return { menuRender, headerMenuRef, handleToggleHeaderMenu };
};

export default useHeaderMenu;
