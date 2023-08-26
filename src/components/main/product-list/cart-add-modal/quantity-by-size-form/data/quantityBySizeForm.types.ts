import { Control } from 'react-hook-form';

export type QuantityBySizeFormProps = {
  control: Control<any>; //FIXME:타입 수정 필요
  size: string;
};

export type OrderCount = {
  size: string;
  count: number;
};
