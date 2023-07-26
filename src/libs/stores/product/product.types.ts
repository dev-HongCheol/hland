export type Categories = {
  [key: string]: string | string[];
};

export type ProductMenu = {
  [key: string]: string[];
};

export type SubCategories = {
  [key: string]: ProductMenu[];
};

export type ProductState = {
  categories: Categories;
  subCategories: SubCategories;
  selectedCategory: string;
};
