import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setIsShowShoppingCart } from '@libs/stores/cart';
import { useCallback } from 'react';

const useNavButtons = () => {
  const dispatch = useAppDispatch();
  const { cartProductList, isShowShoppingCart } = useAppSelector((state) => state.cart);
  const handleShopplingCartToggle = (isShow: boolean) => {
    if (isShow !== isShowShoppingCart) dispatch(setIsShowShoppingCart(isShow));
  };

  const count = useCallback(() => {
    return cartProductList.length;
  }, [cartProductList]);
  return { handleShopplingCartToggle, count, cartProductList };
};

export default useNavButtons;
