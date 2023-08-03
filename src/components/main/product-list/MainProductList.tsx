import { Grid } from '@mui/material';
import { MainProductItem } from './product-item';
import { useMainProductList } from './data';
import { Fragment } from 'react';

const MainProductList = () => {
  const { data, isLoading } = useMainProductList();
  return (
    <Grid container spacing={3} mt={1.5}>
      {data?.products.map((product) => (
        <Fragment key={product.id}>
          <Grid item lg={3} md={4} sm={6} xs={12}>
            <MainProductItem
              id={product.id}
              title={product.title}
              brand={product.brand}
              price={product.price}
              thumbnail={product.thumbnail}
            />
          </Grid>
        </Fragment>
      ))}
    </Grid>
  );
};

export default MainProductList;
