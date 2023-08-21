import { http } from '@libs/http';
import { Category } from '@libs/stores/product/product.types';

const getCategories = () => http.get<Category[]>('categories.json');

export { getCategories };
