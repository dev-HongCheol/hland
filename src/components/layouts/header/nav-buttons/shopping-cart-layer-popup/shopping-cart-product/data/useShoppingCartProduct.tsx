import { CartAddModalForm } from '@components/main/product-list/cart-add-modal/data';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setCartProductList } from '@libs/stores/cart';

const useShoppingCartProduct = (
  cartProduct: CartAddModalForm,
  index: number,
  handleCheckedToggle: (index: number) => void,
) => {
  const cartProductList = useAppSelector((state) => state.cart.cartProductList);
  const dispatch = useAppDispatch();

  const handleRemoveCartPorduct = () => {
    const findProductindex = cartProductList.findIndex(
      (_cartProduct) => cartProduct.product.id === _cartProduct.product.id,
    );

    if (findProductindex === -1) return;

    const newCartProductList = structuredClone(cartProductList);
    newCartProductList.splice(findProductindex, 1);
    index === 0 ? handleCheckedToggle(index) : handleCheckedToggle(index - 1);

    dispatch(setCartProductList(newCartProductList));
  };

  return { handleRemoveCartPorduct };
};

export default useShoppingCartProduct;
