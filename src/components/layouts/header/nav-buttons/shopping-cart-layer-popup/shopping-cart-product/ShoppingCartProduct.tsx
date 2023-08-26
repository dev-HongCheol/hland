import { Grid, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ShoppingCartProductProps } from './data/shoppingCartProduct.types';
import useShoppingCartProduct from './data/useShoppingCartProduct';

const ShoppingCartProduct = ({ cartProduct, index, handleCheckedToggle }: ShoppingCartProductProps) => {
  const { handleRemoveCartPorduct } = useShoppingCartProduct(cartProduct, index, handleCheckedToggle);
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
