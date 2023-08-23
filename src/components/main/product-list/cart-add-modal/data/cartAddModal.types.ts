import { InferType, array, number, object, string } from 'yup';

export const cartAddModalSchema = object().shape({
  // TODO: 회원정보 추가 필요
  pId: number().required(),
  orderCounts: array()
    .of(
      object().shape({
        size: string().required(),
        count: number().required().min(1).max(99),
      }),
    )
    .required(),
  totalAmount: number().required(),
});

export type CartAddModalForm = InferType<typeof cartAddModalSchema>;
