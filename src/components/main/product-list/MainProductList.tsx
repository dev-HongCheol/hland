import { Grid } from '@mui/material';
import { MainProductItem } from './product-item';
import { useMainProductList } from './data';
import { Fragment } from 'react';
import { MainProductListPagination } from './pagination';

const MainProductList = () => {
  const { data, isLoading } = useMainProductList();
  return (
    <Grid container direction={'column'} alignItems={'center'}>
      <Grid item>
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
      </Grid>

      <Grid item xs={'auto'}>
        <MainProductListPagination />
      </Grid>
    </Grid>
  );
};

export default MainProductList;
