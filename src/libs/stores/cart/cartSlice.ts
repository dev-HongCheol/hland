import { CartAddModalForm } from '@components/main/product-list/cart-add-modal/data/cartAddModal.types';
import { Product } from '@components/main/product-list/data';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartState, CartProductList } from './cartSlice.tpyes';

const initialState: CartState = {
  selectedProduct: null,
  cartAddModal: null,
  isShowCartAddModal: false,
  cartProductList: [],
  isShowShoppingCart: false,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setSelectedProduct: (state, { payload: selectedProduct }: PayloadAction<Product>) => {
      state.selectedProduct = selectedProduct;
    },
    setCartAddModal: (state, { payload: cartAddModal }: PayloadAction<CartAddModalForm | null>) => {
      state.cartAddModal = cartAddModal;
    },
    setIsShowCartAddModal: (state, { payload: isShowCartAddModal }: PayloadAction<boolean>) => {
      state.isShowCartAddModal = isShowCartAddModal;
    },
    setCartProductList: (state, { payload: cartProductList }: PayloadAction<CartProductList[]>) => {
      state.cartProductList = cartProductList;
    },
    setIsShowShoppingCart: (state, { payload: isShowShoppingCart }: PayloadAction<boolean>) => {
      state.isShowShoppingCart = isShowShoppingCart;
    },
  },
});

export const { setSelectedProduct, setCartAddModal, setIsShowCartAddModal, setCartProductList, setIsShowShoppingCart } =
  cartSlice.actions;
