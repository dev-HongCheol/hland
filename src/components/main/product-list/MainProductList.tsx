import { Grid } from '@mui/material';
import { MainProductItem } from './product-item';
import { useMainProductList } from './data';
import { Fragment } from 'react';
import { MainProductListPagination } from './pagination';
import { Spinner } from '@components/layouts/spinner';

const MainProductList = () => {
  const { data, isLoading } = useMainProductList();
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <Grid container direction={'column'} alignItems={'center'}>
      <Grid item>
        <Grid container spacing={3}>
          {data?.map((product) => (
            <Fragment key={product.id}>
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <MainProductItem product={product} />
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
