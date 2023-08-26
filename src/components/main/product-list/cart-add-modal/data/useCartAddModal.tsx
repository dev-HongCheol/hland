import { useAppDispatch, useAppSelector } from '@libs/stores';
import { setCartProductList, setIsShowCartAddModal, setIsShowShoppingCart } from '@libs/stores/cart';
import { useTranslation } from 'react-i18next';
import { Product } from '../../data';
import { useEffect, useState } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { CartAddModalForm, cartAddModalSchema } from '.';
import { toast } from 'react-toastify';

const useCartAddModal = (product: Product) => {
  const { isShowCartAddModal, cartProductList } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  const handleClose = () => dispatch(setIsShowCartAddModal(false));
  const { t } = useTranslation();
  const isDiscount = product.discountAmount !== 0;
  const price = !isDiscount ? product.price : product.discountAmount;
  const [size, setSize] = useState('');
  const [totalAmount, setTotalAmount] = useState(0);

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value as string);
  };

  const { control, handleSubmit, setValue, getValues, watch, reset } = useForm({
    defaultValues: { product: { ...product }, orderCounts: [], totalAmount: 0 },
    resolver: yupResolver(cartAddModalSchema),
  });

  const handleSubmitAddCart = (cartProduct: CartAddModalForm) => {
    if (cartProduct.totalAmount === 0) {
      toast.info(t('product.cartAddModal.selectionRequiredMsg'));
      return;
    }

    //TODO: api post 추가 필여
    dispatch(setCartProductList([...cartProductList, cartProduct]));
    dispatch(setIsShowShoppingCart(true));
    handleClose();
  };

  // 모달 open - productId세팅, close - form 초기화
  useEffect(() => {
    if (isShowCartAddModal) {
      setValue('product', product);
      console.log(getValues('product'));
    } else {
      reset();
      setSize('');
    }
  }, [isShowCartAddModal]);

  // 총 합계 금액 계산
  useEffect(() => {
    const orderCounts = getValues('orderCounts');
    const totalCount = orderCounts.reduce((preVal, curVal) => {
      preVal += curVal.count;
      return preVal;
    }, 0);
    const totalAmount = totalCount * price;
    setTotalAmount(totalAmount);
    setValue('totalAmount', totalAmount);
  }, [watch('orderCounts')]);

  return {
    t,
    isShowCartAddModal,
    handleChange,
    handleClose,
    handleSubmit,
    handleSubmitAddCart,
    isDiscount,
    size,
    control,
    totalAmount,
  };
};

export default useCartAddModal;
