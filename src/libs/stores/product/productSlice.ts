import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from './product.types';

const initialState: ProductState = {
  categories: {
    women: 'womens-dresses',
    men: 'mens-shirts',
    shoes: ['womens-shoes', 'mens-shoes'],
    bag: 'womens-bags',
  },
  subCategories: { women: [{ 드레스: ['롱 슬리브 드레스', '하프 슬리브 드레스'] }, { 상의: ['셔츠', '티셔츠'] }] },
  selectedCategory: '',
};

export const productSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setSelectedCategory: (state, { payload: selectedCategory }: PayloadAction<string>) => {
      state.selectedCategory = selectedCategory;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setSelectedCategory } = productSlice.actions;
