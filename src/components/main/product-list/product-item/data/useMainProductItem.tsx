import { useAppDispatch } from '@libs/stores';
import { useRef } from 'react';
import { Product } from '../../data';
import { setIsShowCartAddModal, setSelectedProduct } from '@libs/stores/cart';

const useMainProductItem = () => {
  const productOverlapLayerRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();

  const handleToggleOverlapLayer = (isShow: boolean) => {
    if (productOverlapLayerRef.current) {
      productOverlapLayerRef.current.style.display = isShow ? 'block' : 'none';
    }
  };

  const handleClickAddCart = (product: Product) => {
    dispatch(setIsShowCartAddModal(true));
    dispatch(setSelectedProduct(product));
  };

  const handleClickAddLike = (id: number) => {
    console.log('handleClickAddLike', id);
  };

  return { productOverlapLayerRef, handleToggleOverlapLayer, handleClickAddCart, handleClickAddLike };
};

export default useMainProductItem;
