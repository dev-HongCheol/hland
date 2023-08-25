export type CartState = {
  selectedProduct: Product | null;
  cartAddModal: CartAddModalForm | null;
  isShowCartAddModal: boolean;
  cartList: CartAddModalForm[];
  isShowShoppingCart: boolean;
};
