import { CartAddModalForm } from '@components/main/product-list/cart-add-modal/data';
import { Product } from '@components/main/product-list/data';

export interface CartProductList extends CartAddModalForm {
  checked: boolean;
}

export type CartState = {
  selectedProduct: Product | null;
  cartAddModal: CartAddModalForm | null;
  isShowCartAddModal: boolean;
  cartProductList: CartProductList[];
  isShowShoppingCart: boolean;
};
