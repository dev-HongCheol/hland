import { CartAddModalForm } from '@components/main/product-list/cart-add-modal/data';
import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setCartProductList, setIsShowShoppingCart } from '@libs/stores/cart';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const useShoppingCartLayerPopup = (cartProductList: CartAddModalForm[]) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { isShowShoppingCart } = useAppSelector((state) => state.cart);

  const handleCheckedToggle = (_index: number) => () => {
    const newCartProductList = structuredClone(cartProductList);
    const findCartProduct = newCartProductList.find((_cartProduct, index) => index === _index);
    if (!findCartProduct) return;

    findCartProduct.checked = !findCartProduct.checked;
    dispatch(setCartProductList(newCartProductList));
  };

  const handleShopplingCartToggle = (isShow: boolean) => {
    if (isShowShoppingCart !== isShow) dispatch(setIsShowShoppingCart(isShow));
  };

  const [isAllChecked, setIsAllChecked] = useState(false);

  const getAllChecked = useCallback(() => {
    const _isAllChecked = cartProductList.every((cartProduct) => cartProduct.checked);
    return _isAllChecked;
  }, [cartProductList]);

  const hanldeSetCartPorductChecked = (checked: boolean) => {
    const newCartProductList = structuredClone(cartProductList);
    newCartProductList.forEach((productList) => (productList.checked = checked));

    dispatch(setCartProductList(newCartProductList));
  };

  const handleCartAllSelect = () => {
    const allChecked = getAllChecked();
    hanldeSetCartPorductChecked(!allChecked);
    setIsAllChecked(!allChecked);
  };

  useEffect(() => {
    setIsAllChecked(getAllChecked());
  }, [cartProductList]);

  return { t, isShowShoppingCart, handleShopplingCartToggle, handleCartAllSelect, isAllChecked, handleCheckedToggle };
};

export default useShoppingCartLayerPopup;
