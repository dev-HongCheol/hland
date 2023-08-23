import { Grid } from '@mui/material';
import { MainProductItem } from './product-item';
import { Product, useMainProductList } from './data';
import { Fragment } from 'react';
import { MainProductListPagination } from './pagination';
import { Spinner } from '@components/layouts/spinner';
import { CartAddModal } from './cart-add-modal';
// TODO: TEST

const modalTestData: Product = {
  brand: 'ROVO',
  category: 'BEUATY',
  description: 'Zumnipij zil hog rulsise fa.',
  discountAmount: 11000,
  id: 2,
  images: ['https://picsum.photos/300'],
  menu: '토너',
  price: 88000,
  salesQuantity: 8,
  stock: 3,
  subCategory: '스킨케어',
  thumbnail: 'https://imagecdn.skstoa.com/goods/625/30408625_g.jpg',
  title: 'FETDUWIJ SAMEV.',
  discountPercentage: 0,
  rating: 0,
};

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

      <CartAddModal product={modalTestData} />
    </Grid>
  );
};

export default MainProductList;
