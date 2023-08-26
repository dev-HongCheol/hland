import { Grid, IconButton, styled } from '@mui/material';
import { LanguageToggleButton } from './language-toggle-button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { ShoppingCartCount } from './shopping-cart-count';
import { ShoppingCartLayerPopup } from './shopping-cart-layer-popup';
import { ROUTES } from '@libs/router/data';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setIsShowShoppingCart } from '@libs/stores/cart';
import { useCallback } from 'react';

type HeaderStyleProps = {
  isHeaderDense: boolean;
};

export type ShoppingCartDisplay = 'block' | 'none';

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isHeaderDense',
})(({ isHeaderDense }: HeaderStyleProps) => ({
  color: `${isHeaderDense ? '#fff' : '#333'}!important`,
  fontSize: '14px',
  '&:hover': {
    color: `${isHeaderDense ? '#fff' : '#123ad4'}!important`,
    cursor: 'pointer',
  },
  textDecoration: 'none',
}));

const NavButtons = ({ isHeaderDense }: HeaderStyleProps) => {
  const dispatch = useAppDispatch();
  const handleShopplingCartToggle = (isShow: boolean) => {
    dispatch(setIsShowShoppingCart(isShow));
  };

  const { cartProductList } = useAppSelector((state) => state.cart);
  const count = useCallback(() => {
    return cartProductList.length;
  }, [cartProductList]);

  return (
    <Grid container justifyContent={'end'} alignItems={'center'} columnSpacing={2}>
      <Grid item xs={'auto'}>
        <LanguageToggleButton isHeaderDense={isHeaderDense} />
      </Grid>
      <Grid item xs={'auto'}>
        <NavLink isHeaderDense={isHeaderDense} to={ROUTES.ACCOUNT.LOG_IN.path}>
          LOG IN
        </NavLink>
      </Grid>
      <Grid item xs={'auto'}>
        <NavLink isHeaderDense={isHeaderDense} to={ROUTES.ACCOUNT.SIGN_UP.path}>
          SIGN UP
        </NavLink>
      </Grid>
      <Grid item color={`${isHeaderDense ? '#fff' : '#333'}!important`}>
        |
      </Grid>
      <Grid item>
        {/* TODO:TEST onMouseLeave={() => handleShopplingCartToggle(false)}*/}
        <div onMouseOver={() => handleShopplingCartToggle(true)}>
          <Grid container alignItems={'center'}>
            <IconButton size="large" sx={{ color: isHeaderDense ? '#fff' : '#333', p: 0, marginRight: 2 }}>
              <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <ShoppingCartCount count={count()} />
          </Grid>
          <ShoppingCartLayerPopup cartProductList={cartProductList} />
        </div>
      </Grid>
    </Grid>
  );
};

export default NavButtons;
