export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  subCategory: string;
  menu: string;
  thumbnail: string;
  images: string[];
  discountAmount: number;
  salesQuantity: number;
};

export type ResProducts = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

export type QueryString = {
  orderBy?: string;
  startAt?: number;
  endAt?: number;
  equalTo?: unknown;
};
