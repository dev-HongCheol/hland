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

import CloseIcon from '@mui/icons-material/Close';
import { ShoppingCartProduct } from './shopping-cart-product';
import { ShoppingCartLayerPopupProps, useShoppingCartLayerPopup } from './data';

const ShoppingCartLayerPopupDiv = styled(Box)({
  position: 'absolute',
  right: '20px',
  display: 'none',
});

const ShoppingCartLayerPopup = ({ cartProductList }: ShoppingCartLayerPopupProps) => {
  const { t, isShowShoppingCart, handleShopplingCartToggle, handleCartAllSelect, isAllChecked, handleCheckedToggle } =
    useShoppingCartLayerPopup(cartProductList);
  return (
    <ShoppingCartLayerPopupDiv
      sx={{
        display: isShowShoppingCart ? 'block' : 'none',
      }}
      onMouseEnter={() => handleShopplingCartToggle(true)}
      onMouseLeave={() => handleShopplingCartToggle(false)}
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
                <ListItemText id={'shoppingCartTotalCheckbox'} primary={t('header.shoppingCart.selectAll')} />
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
                  <ListItemButton role={undefined} onClick={handleCheckedToggle(index)} dense sx={{ p: 0 }}>
                    <ListItemIcon sx={{ minWidth: 'auto' }}>
                      <Checkbox
                        edge="start"
                        checked={cartProduct.checked}
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
                      primary={
                        <ShoppingCartProduct
                          cartProduct={cartProduct}
                          index={index}
                          handleCheckedToggle={handleCheckedToggle}
                        />
                      }
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
                {t('header.shoppingCart.btnShoppingBasket')}
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
                {t('header.shoppingCart.btnBuyNow')}
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </ShoppingCartLayerPopupDiv>
  );
};
export default ShoppingCartLayerPopup;
