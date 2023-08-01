export type Categories = {
  [key: string]: string | string[];
};

export type ProductMenu = {
  [key: string]: string[];
};

export type SubCategories = {
  [key: string]: ProductMenu[];
};

export type CategoryMenu = {
  isShow: boolean;
  topPosition: number;
};

export type ProductState = {
  categories: Categories;
  subCategories: SubCategories;
  selectedCategory: string;
  hoverCategory: string;
  breadcrumbs: string[];
  categoryMenu: CategoryMenu;
};
