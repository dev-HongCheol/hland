import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CategoryMenu, ListOption, ProductState } from './product.types';

const initialState: ProductState = {
  categories: {
    WOMEN: 'womens-dresses',
    MEN: 'mens-shirts',
    SHOSE: ['womens-shoes', 'mens-shoes'],
    BAG: 'womens-bags',
  },
  subCategories: {
    WOMEN: [
      { 상의: ['셔츠', '티셔츠', '블라우스', '니트', '카디건', '후드', '스웨트 셔츠'] },
      { 하의: ['팬츠', '레깅스'] },
      { 드레스: ['롱 슬리브 드레스', '하프 슬리브 드레스'] },
      { 아우터: ['자켓', '코드'] },
      { '비치 웨어': ['비치 웨어'] },
      { 기타: ['양말', '레깅스', '벨트', '스카프/머플러'] },
    ],
    MEN: [
      { 상의: ['셔츠', '티셔츠', '블라우스', '니트', '카디건', '후드', '스웨트 셔츠'] },
      { 하의: ['팬츠', '레깅스'] },
      { 아우터: ['자켓', '코드'] },
      { '비치 웨어': ['비치 웨어'] },
      { 기타: ['양말', '레깅스', '벨트', '스카프/머플러'] },
    ],
    SHOSE: [
      { 상의: ['셔츠', '티셔츠', '블라우스', '니트', '카디건', '후드', '스웨트 셔츠'] },
      { 기타: ['양말', '레깅스', '벨트', '스카프/머플러'] },
    ],
    BAG: [{ 상의: ['셔츠', '티셔츠', '블라우스', '니트', '카디건', '후드', '스웨트 셔츠'] }],
  },
  selectedCategory: '',
  hoverCategory: '',
  breadcrumbs: [],
  categoryMenu: {
    isShow: false,
    topPosition: 0,
  },
  listOption: {
    limit: 20,
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
  setSelectedCategory,
  setCategoryMenu,
  setHoverCategory,
  setBreadcrumbs,
  toggleCategoryMenu,
  setListOption,
} = productSlice.actions;
