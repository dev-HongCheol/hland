import { useTranslation } from 'react-i18next';
import { Control, useFieldArray, useWatch } from 'react-hook-form';
import { CartAddModalForm } from '../../data';
import { OrderCount } from '../QuantityBySizeForm';
import { useEffect } from 'react';

const useQuantityBySizeForm = (control: Control<any>, size: string) => {
  const { t } = useTranslation();
  const { append, remove, update } = useFieldArray({
    control,
    name: 'orderCounts',
  });

  const orderCounts = useWatch<CartAddModalForm>({
    name: 'orderCounts',
    control,
  }) as OrderCount[];

  // 리스트에 없는 경우만 추가
  useEffect(() => {
    // 기본(빈) 셀릭트 박스 값인 경우 무시
    if (!size) return;
    const findIndex = orderCounts.findIndex((orderCount) => orderCount.size === size);
    if (findIndex === -1) append({ size, count: 1 });
  }, [size, append]);

  const handleUpdateOrderCount = (index: number, _count: number | string) => {
    const count = Number(_count);
    if (count > 0 && count < 100) update(index, { ...orderCounts[index], count });
  };
  return {
    t,
    orderCounts,
    handleUpdateOrderCount,
    remove,
  };
};

export default useQuantityBySizeForm;
