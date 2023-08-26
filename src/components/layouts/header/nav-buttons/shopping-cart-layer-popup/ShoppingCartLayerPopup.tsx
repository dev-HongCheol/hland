import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  styled,
} from '@mui/material';
import { useState, useEffect, useCallback } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import i18n from '@libs/i18n';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setIsShowShoppingCart } from '@libs/stores/cart';
import { CartAddModalForm } from '@components/main/product-list/cart-add-modal/data';
import { ShoppingCartProduct } from './shopping-cart-product';

const ShoppingCartLayerPopupDiv = styled(Box)({
  position: 'absolute',
  right: '20px',
  display: 'none',
});

export type ShoppingCartLayerPopupProps = {
  cartProductList: CartAddModalForm[];
};

const ShoppingCartLayerPopup = ({ cartProductList }: ShoppingCartLayerPopupProps) => {
  const { t } = i18n;
  const [checked, setChecked] = useState<number[]>([]);

  const dispatch = useAppDispatch();
  const { isShowShoppingCart } = useAppSelector((state) => state.cart);

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };

  const handleShopplingCartToggle = (isShow: boolean) => {
    dispatch(setIsShowShoppingCart(isShow));
  };

  const [isAllChecked, setIsAllChecked] = useState(false);

  const getAllChecked = useCallback(() => {
    return checked.length === cartProductList.length;
  }, [checked.length, cartProductList.length]);

  const handleCartAllSelect = () => {
    const allChecked = getAllChecked();
    setIsAllChecked(!allChecked);
    if (allChecked) {
      setChecked([]);
    } else {
      const cartIndexArray: number[] = [];
      cartProductList.forEach((_cartProduct, index) => {
        cartIndexArray.push(index);
      });

      setChecked(cartIndexArray);
    }
  };

  useEffect(() => {
    console.log(checked);

    setIsAllChecked(getAllChecked());
  }, [checked.length]);

  return (
    <ShoppingCartLayerPopupDiv
      sx={{
        display: isShowShoppingCart ? 'block' : 'none',
      }}
      onMouseEnter={() => handleShopplingCartToggle(true)}
      // onMouseLeave={() => handleShopplingCartToggle(false)}//TODO:TEST
    >
      <Grid
        container
        direction={'column'}
        p={2}
        flexWrap={'nowrap'}
        sx={{
          border: 1,
          width: '280px',
          height: '440px',
          zIndex: 1,
          background: 'white',
        }}
      >
        <Grid item textAlign={'right'}>
          <IconButton sx={{ padding: 0 }} onClick={() => handleShopplingCartToggle(false)}>
            <CloseIcon />
          </IconButton>
        </Grid>

        <Grid item>
          {t('header.shoppingCart.title')}({cartProductList.length})
        </Grid>

        <Grid item>
          <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItem disablePadding>
              <ListItemButton role={undefined} dense sx={{ p: 0 }} onClick={() => handleCartAllSelect()}>
                <ListItemIcon sx={{ minWidth: 'auto' }}>
                  <Checkbox
                    edge="start"
                    checked={isAllChecked}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{
                      'aria-labelledby': 'shoppingCartTotalCheckbox',
                    }}
                  />
                </ListItemIcon>
                <ListItemText id={'shoppingCartTotalCheckbox'} primary={`전체선택`} />
              </ListItemButton>
            </ListItem>

            <Box
              height={263}
              sx={{
                overflowY: 'scroll',
              }}
            >
              {cartProductList.map((cartProduct, index) => (
                <ListItem disablePadding key={cartProduct.product.id}>
                  <ListItemButton role={undefined} onClick={handleToggle(index)} dense sx={{ p: 0 }}>
                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                      <Checkbox
                        edge="start"
                        checked={checked.indexOf(index) !== -1}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': `aria-labelledby-${cartProduct.product.id}` }}
                        sx={{ py: 0 }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{
                        m: 0,
                      }}
                      id={`aria-labelledby-${cartProduct.product.id}`}
                      primary={<ShoppingCartProduct cartProduct={cartProduct} />}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </Box>
          </List>
        </Grid>
        <Grid item>
          <Grid container>
            <Grid item xs={6}>
              <Button
                variant="outlined"
                fullWidth
                sx={{
                  borderRadius: 0,
                }}
              >
                장바구니
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                sx={{
                  borderRadius: 0,
                }}
              >
                바로구매
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ShoppingCartLayerPopupDiv>
  );
};
export default ShoppingCartLayerPopup;
