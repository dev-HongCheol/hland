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

// TODO: Testcode
const cartProductList = [
  {
    product: {
      brand: 'ROVO',
      category: 'BEUATY',
      createAt: '2023-01-05T02:34:39.741Z',
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
    },
    orderCounts: [
      {
        size: 'S',
        count: 1,
      },
      {
        size: 'M',
        count: 1,
      },
    ],
    totalAmount: 22000,
  },
  {
    product: {
      brand: 'CODWUR',
      category: 'LIVING',
      createAt: '2023-01-12T16:23:30.690Z',
      description: 'Lepzisub ibimema mus sok mepgus.',
      discountAmount: 38000,
      id: 3,
      images: ['https://picsum.photos/300'],
      menu: '컵&텀블러',
      price: 94000,
      salesQuantity: 3,
      stock: 10,
      subCategory: '주방용품',
      thumbnail: 'https://imagecdn.skstoa.com/goods/625/30408625_g.jpg',
      title: 'UP RES.',
    },
    orderCounts: [
      {
        size: 'L',
        count: 1,
      },
      {
        size: 'M',
        count: 1,
      },
    ],
    totalAmount: 76000,
  },
  {
    product: {
      brand: 'TABZESUC',
      category: 'MEN',
      createAt: '2023-06-11T14:30:23.442Z',
      description: 'Apuipidej jarsorjo ni koforoh zad.',
      discountAmount: 0,
      id: 5,
      images: ['https://picsum.photos/300'],
      menu: '타이',
      price: 76000,
      salesQuantity: 1,
      stock: 6,
      subCategory: '기타',
      thumbnail: 'https://imagecdn.skstoa.com/goods/625/30408625_g.jpg',
      title: 'WOIRAFEK ZUG.',
    },
    orderCounts: [
      {
        size: 'S',
        count: 2,
      },
      {
        size: 'M',
        count: 3,
      },
      {
        size: 'L',
        count: 1,
      },
    ],
    totalAmount: 456000,
  },
  {
    product: {
      brand: 'NOPHOKEJ',
      category: 'WOMEN',
      createAt: '2023-01-30T14:41:24.314Z',
      description: 'Hutuw siebogep vuwu uco rizsom.',
      discountAmount: 47000,
      id: 7,
      images: ['https://picsum.photos/300'],
      menu: '진',
      price: 34000,
      salesQuantity: 0,
      stock: 7,
      subCategory: '하의',
      thumbnail: 'https://imagecdn.skstoa.com/goods/625/30408625_g.jpg',
      title: 'KAHED PICTADKO.',
    },
    orderCounts: [
      {
        size: 'S',
        count: 1,
      },
      {
        size: 'L',
        count: 3,
      },
    ],
    totalAmount: 188000,
  },
];

const NavButtons = ({ isHeaderDense }: HeaderStyleProps) => {
  const dispatch = useAppDispatch();
  const handleShopplingCartToggle = (isShow: boolean) => {
    dispatch(setIsShowShoppingCart(isShow));
  };
  // const { cartProductList } = useAppSelector((state) => state.cart);
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
