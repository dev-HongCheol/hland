import { Product } from '../../data';

export type MainProductItemProps = Pick<Product, 'id' | 'title' | 'price' | 'brand' | 'thumbnail'>;
