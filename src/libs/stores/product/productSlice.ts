import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Category, CategoryMenu, ListOption, ProductState } from './product.types';

const initialState: ProductState = {
  categories: [],
  selectedCategory: '',
  hoverCategory: '',
  breadcrumbs: [],
  categoryMenu: {
    isShow: false,
    topPosition: 0,
  },
  listOption: {
    pageSize: 12,
    page: 1,
    maxPage: 0,
    sortColumn: 'id',
    sortDirection: 'asc',
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
    setListOption: (staet, { payload: listOption }: PayloadAction<ListOption>) => {
      staet.listOption = listOption;
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
  setListOption,
} = productSlice.actions;
