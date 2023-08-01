import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setBreadcrumbs, setCategoryMenu, setSelectedCategory } from '@libs/stores/product';
import { Grid, Link, Typography, styled } from '@mui/material';
import { useRef } from 'react';

const useHeaderMenu = () => {
  const HeaderMenuLink = styled(Link)({
    '&:hover': {
      color: '#123ad4',
    },
  });

  const dispatch = useAppDispatch();
  const { hoverCategory, subCategories, categoryMenu, selectedCategory } = useAppSelector((state) => state.product);
  const headerMenuRef = useRef<HTMLDivElement>(null);

  const handleToggleHeaderMenu = (isShow: boolean) => {
    const headerMenuDiv = headerMenuRef.current;
    if (!headerMenuDiv) return;
    dispatch(setCategoryMenu({ ...categoryMenu, isShow }));
  };

  // TEST
  const selectedSubCategories = subCategories[hoverCategory];

  const menuRender = () => {
    const selectedSubCategories = subCategories[hoverCategory];
    const menuCol = [];
    const menuLength = (selectedSubCategories || []).length;

    for (let i = 0; i < menuLength; i++) {
      const menuTitle = Object.keys(selectedSubCategories[i])[0];
      const menus = selectedSubCategories[i][menuTitle];
      const category = selectedCategory || hoverCategory;

      menuCol.push(
        <Grid item xs={2} key={menuTitle} textAlign={'left'}>
          <Grid container direction={'column'}>
            <Grid item mb={1}>
              <HeaderMenuLink href="#" underline="hover">
                <Typography
                  fontWeight={800}
                  component={'span'}
                  fontSize={'0.95rem'}
                  onClick={() => {
                    if (!selectedCategory) {
                      // dispatch(setSelectedCategory(category));
                    }
                    dispatch(setBreadcrumbs([category, menuTitle]));
                  }}
                >
                  {menuTitle}
                </Typography>
              </HeaderMenuLink>
            </Grid>
            {menus?.map((menu) => (
              <Grid item key={menu} mt={1}>
                <HeaderMenuLink
                  href="#"
                  underline="hover"
                  fontSize={'0.75rem'}
                  // onClick={() => dispatch(setBreadcrumbs([category, menuTitle, menu]))}
                >
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

  return {
    menuRender,
    headerMenuRef,
    handleToggleHeaderMenu,
    selectedSubCategories,
    selectedCategory,
    dispatch,
    setSelectedCategory,
    hoverCategory,
    setBreadcrumbs,
  };
};

export default useHeaderMenu;
