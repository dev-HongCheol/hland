import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Category, CategoryMenu, Filter, ProductState } from './product.types';

const initialState: ProductState = {
  categories: [],
  selectedCategory: '',
  hoverCategory: '',
  breadcrumbs: [],
  categoryMenu: {
    isShow: false,
    topPosition: 0,
  },
  filter: {
    pageSize: 12,
    page: 1,
    maxPage: 0,
    sortColumn: 'id',
    sortDirection: 'asc',
    orderBy: '"id"',
    startAt: 0,
    endAt: 13,
  },
};

export const productSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setCategories: (state, { payload: categories }: PayloadAction<Category[]>) => {
      state.categories = categories;
    },
    setSelectedCategory: (state, { payload: selectedCategory }: PayloadAction<string>) => {
      state.selectedCategory = selectedCategory;
    },
    setHoverCategory: (state, { payload: hoverCategory }: PayloadAction<string>) => {
      state.hoverCategory = hoverCategory;
    },
    setCategoryMenu: (state, { payload: categoryMenu }: PayloadAction<CategoryMenu>) => {
      state.categoryMenu = { ...categoryMenu };
    },
    toggleCategoryMenu: (state, { payload: isShow }: PayloadAction<boolean>) => {
      state.categoryMenu.isShow = isShow;
    },
    setBreadcrumbs: (state, { payload: breadcrumbs }: PayloadAction<string[]>) => {
      state.breadcrumbs = breadcrumbs;
    },
    setFilter: (staet, { payload: filter }: PayloadAction<Filter>) => {
      staet.filter = filter;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setCategories,
  setSelectedCategory,
  setCategoryMenu,
  setHoverCategory,
  setBreadcrumbs,
  toggleCategoryMenu,
  setFilter,
} = productSlice.actions;
