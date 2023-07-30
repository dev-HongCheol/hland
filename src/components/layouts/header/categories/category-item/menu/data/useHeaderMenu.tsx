import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setCategoryMenu } from '@libs/stores/product';
import { Grid, Link, Typography, styled } from '@mui/material';
import { useRef } from 'react';

const useHeaderMenu = () => {
  const HeaderMenuLink = styled(Link)({
    '&:hover': {
      color: '#123ad4',
    },
  });

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
      // console.log(menuTitle);

      menuCol.push(
        <Grid item xs={2} key={menuTitle} textAlign={'left'}>
          <Grid container direction={'column'}>
            <Grid item mb={1}>
              <HeaderMenuLink href="#" underline="hover">
                <Typography fontWeight={800} component={'span'} fontSize={'0.95rem'}>
                  {menuTitle}
                </Typography>
              </HeaderMenuLink>
            </Grid>
            {menus?.map((menu) => (
              <Grid item key={menu} mt={1}>
                <HeaderMenuLink href="#" underline="hover" fontSize={'0.75rem'}>
                  {menu}
                </HeaderMenuLink>
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
