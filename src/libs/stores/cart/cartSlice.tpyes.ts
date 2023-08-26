import { CartAddModalForm } from '@components/main/product-list/cart-add-modal/data';
import { Product } from '@components/main/product-list/data';

export type CartState = {
  selectedProduct: Product | null;
  cartAddModal: CartAddModalForm | null;
  isShowCartAddModal: boolean;
  cartProductList: CartAddModalForm[];
  isShowShoppingCart: boolean;
};
