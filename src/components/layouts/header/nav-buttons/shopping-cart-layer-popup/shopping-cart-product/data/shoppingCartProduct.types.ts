import { CartAddModalForm } from '@components/main/product-list/cart-add-modal/data';

export type ShoppingCartProductProps = {
  cartProduct: CartAddModalForm;
  index: number;
  handleCheckedToggle: (index: number) => void;
};
