export type CategoryMenu = {
  isShow: boolean;
  topPosition: number;
};

export type ProductListFilter = {
  pageSize: number;
  page: number;
  maxPage: number;
  sortColumn: string;
  sortDirection: 'asc' | 'desc';
};

export type Menu = {
  name: string;
  menus: string[];
};

export type Category = {
  name: string;
  subCategories: Menu[];
};

export type ProductState = {
  categories: Category[];
  selectedCategory: string;
  hoverCategory: string;
  breadcrumbs: string[];
  categoryMenu: CategoryMenu;
  productListFilter: ProductListFilter;
};
