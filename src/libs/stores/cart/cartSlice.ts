import { CartAddModalForm } from '@components/main/product-list/cart-add-modal/data/cartAddModal.types';
import { Product } from '@components/main/product-list/data';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { CartState } from './cartSlice.tpyes';

const initialState: CartState = {
  selectedProduct: null,
  cartAddModal: null,
  isShowCartAddModal: false,
  cartList: [],
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
    setCartList: (state, { payload: cartList }: PayloadAction<CartAddModalForm[]>) => {
      state.cartList = cartList;
    },
    setIsShowShoppingCart: (state, { payload: isShowShoppingCart }: PayloadAction<boolean>) => {
      state.isShowShoppingCart = isShowShoppingCart;
    },
  },
});

export const { setSelectedProduct, setCartAddModal, setIsShowCartAddModal, setCartList, setIsShowShoppingCart } =
  cartSlice.actions;
