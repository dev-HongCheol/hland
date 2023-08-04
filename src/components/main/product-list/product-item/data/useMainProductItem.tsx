import { useRef } from 'react';

const useMainProductItem = () => {
  const productOverlapLayerRef = useRef<HTMLDivElement>(null);

  const handleToggleOverlapLayer = (isShow: boolean) => {
    if (productOverlapLayerRef.current) {
      productOverlapLayerRef.current.style.display = isShow ? 'block' : 'none';
    }
  };

  const handleClickAddCart = (id: number) => {
    console.log('handeClickAddCart', id);
  };

  const handleClickAddLike = (id: number) => {
    console.log('handleClickAddLike', id);
  };

  return { productOverlapLayerRef, handleToggleOverlapLayer, handleClickAddCart, handleClickAddLike };
};

export default useMainProductItem;
