import { CartAddModalForm } from '@components/main/product-list/cart-add-modal/data';
import { Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setCartProductList } from '@libs/stores/cart';
export type ShoppingCartProductProps = {
  cartProduct: CartAddModalForm;
  index: number;
  handleCheckedToggle: (index: number) => void;
};
const ShoppingCartProduct = ({ cartProduct, index, handleCheckedToggle }: ShoppingCartProductProps) => {
  const cartProductList = useAppSelector((state) => state.cart.cartProductList);
  const dispatch = useAppDispatch();

  const handleRemoveCartPorduct = () => {
    const findProductindex = cartProductList.findIndex(
      (_cartProduct) => cartProduct.product.id === _cartProduct.product.id,
    );

    if (findProductindex === -1) return;

    const newCartProductList = structuredClone(cartProductList);
    newCartProductList.splice(findProductindex, 1);
    index === 0 ? handleCheckedToggle(index) : handleCheckedToggle(index - 1);

    dispatch(setCartProductList(newCartProductList));
  };

  return (
    <Grid container direction={'column'}>
      <Grid item textAlign={'right'}>
        <IconButton
          aria-label="close Modal"
          onClick={(event) => {
            event.preventDefault();
            event.stopPropagation();
            handleRemoveCartPorduct();
          }}
          sx={{
            p: 0,
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Grid>
      <Grid item>
        <Grid container columnSpacing={1}>
          <Grid item width={50}>
            <img src={cartProduct.product.thumbnail} width={'100%'} />
          </Grid>
          <Grid item xs>
            <Typography fontSize={'0.7rem'} fontWeight={700}>
              {cartProduct.product.brand}
            </Typography>
            <Typography fontSize={'0.65rem'} color={'rgb(150, 150, 150)'}>
              {cartProduct.product.title}
            </Typography>
            <Typography fontSize={'0.7rem'} fontWeight={600} component={'span'}>
              {cartProduct.totalAmount.toLocaleString()}
            </Typography>

            {cartProduct.orderCounts.map((order) => (
              <Typography fontSize={'0.65rem'} color={'rgb(150, 150, 150)'} key={order.size}>
                {order.size} - {order.count}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ShoppingCartProduct;
