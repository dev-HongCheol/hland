import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CategoryMenu, ProductState } from './product.types';

const initialState: ProductState = {
  categories: {
    women: 'womens-dresses',
    men: 'mens-shirts',
    shoes: ['womens-shoes', 'mens-shoes'],
    bag: 'womens-bags',
  },
  subCategories: {
    women: [
      { 상의: ['셔츠', '티셔츠', '블라우스', '니트', '카디건', '후드', '스웨트 셔츠'] },
      { 하의: ['팬츠', '레깅스'] },
      { 드레스: ['롱 슬리브 드레스', '하프 슬리브 드레스'] },
      { 아우터: ['자켓', '코드'] },
      { '비치 웨어': ['비치 웨어'] },
      { 기타: ['양말', '레깅스', '벨트', '스카프/머플러'] },
    ],
  },
  selectedCategory: '',
  categoryMenu: {
    isShow: false,
    topPosition: 0,
  },
};

export const productSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload: selectedCategory }: PayloadAction<string>) => {
      state.selectedCategory = selectedCategory;
    },
    setCategoryMenu: (state, { payload: categoryMenu }: PayloadAction<CategoryMenu>) => {
      state.categoryMenu = { ...categoryMenu };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedCategory, setCategoryMenu } = productSlice.actions;
