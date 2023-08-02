import { Grid, IconButton, Link, styled } from '@mui/material';
import { LanguageToggleButton } from './language-toggle-button';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { ShoppingCartCount } from './shopping-cart-count';
import { useEffect, useRef, useState } from 'react';
import { ShoppingCartLayerPopup } from './shopping-cart-layer-popup';

type HeaderStyleProps = {
  isHeaderDense: boolean;
};

const NavLink = styled(Link, {
  shouldForwardProp: (prop) => prop !== 'isHeaderDense',
})(({ isHeaderDense }: HeaderStyleProps) => ({
  color: `${isHeaderDense ? '#fff' : '#333'}!important`,
  fontSize: '14px',
  '&:hover': {
    color: `${isHeaderDense ? '#fff' : '#123ad4'}!important`,
    cursor: 'pointer',
  },
}));

const NavButtons = ({ isHeaderDense }: HeaderStyleProps) => {
  const [isShow, setIsShow] = useState(false);
  const ShoppingCartLayerPopupRef = useRef<HTMLDivElement>(null);

  const handleShopplingCartLayerToggle = (isShow: boolean) => {
    setIsShow(isShow);
  };

  const handleHiddenShoppingCartLayerPopup = () => {
    setIsShow(false);
  };

  useEffect(() => {
    const shoppingCartLayerPopup = ShoppingCartLayerPopupRef.current;
    if (!shoppingCartLayerPopup) return;
    shoppingCartLayerPopup.addEventListener('mouseleave', () => {
      handleHiddenShoppingCartLayerPopup();
    });
    return () => {
      shoppingCartLayerPopup.removeEventListener('mouseleave', handleHiddenShoppingCartLayerPopup);
    };
  }, []);

  return (
    <Grid container justifyContent={'end'} alignItems={'center'} columnSpacing={2}>
      <Grid item xs={'auto'}>
        <LanguageToggleButton isHeaderDense={isHeaderDense} />
      </Grid>
      <Grid item xs={'auto'}>
        <NavLink isHeaderDense={isHeaderDense} underline="none">
          LOG IN
        </NavLink>
      </Grid>
      <Grid item xs={'auto'}>
        <NavLink isHeaderDense={isHeaderDense} underline="none">
          SIGN UP
        </NavLink>
      </Grid>
      <Grid item color={`${isHeaderDense ? '#fff' : '#333'}!important`}>
        |
      </Grid>
      <Grid item>
        <div
          onMouseOver={() => handleShopplingCartLayerToggle(true)}
          onMouseLeave={() => handleShopplingCartLayerToggle(false)}
        >
          <Grid container alignItems={'center'}>
            <IconButton size="large" sx={{ color: isHeaderDense ? '#fff' : '#333' }}>
              <ShoppingBagOutlinedIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <ShoppingCartCount />
          </Grid>
          <ShoppingCartLayerPopup
            ref={ShoppingCartLayerPopupRef}
            isShow={isShow}
            handleHiddenShoppingCartLayerPopup={handleHiddenShoppingCartLayerPopup}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default NavButtons;
