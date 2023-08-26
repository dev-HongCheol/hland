import { InferType, array, boolean, number, object, string } from 'yup';
import { Product } from '../../data';

export const cartAddModalSchema = object().shape({
  // TODO: 회원정보 추가 필요
  product: object()
    .shape({
      id: number().required(),
      title: string().required(),
      description: string().required(),
      price: number().required(),
      stock: number().required(),
      brand: string().required(),
      category: string().required(),
      subCategory: string().required(),
      menu: string().required(),
      thumbnail: string().required(),
      images: array().of(string()),
      discountAmount: number().required(),
      salesQuantity: number().required(),
    })
    .required(),
  orderCounts: array()
    .of(
      object().shape({
        size: string().required(),
        count: number().required().min(1).max(99),
      }),
    )
    .required(),
  totalAmount: number().required(),
  checked: boolean().required(),
});

export type CartAddModalForm = InferType<typeof cartAddModalSchema>;

export type CartAddModalProps = {
  product: Product;
};
