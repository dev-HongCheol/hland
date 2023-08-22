export type CategoryMenu = {
  isShow: boolean;
  topPosition: number;
};

export type Filter = {
  pageSize: number;
  page: number;
  maxPage: number;
  sortColumn: string;
  sortDirection: 'asc' | 'desc';
  orderBy?: string;
  startAt?: number;
  endAt?: number;
  equalTo?: unknown;
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
  filter: Filter;
};
