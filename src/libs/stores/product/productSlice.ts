import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
import { ProductState } from './product.types';

const initialState: ProductState = {
  categories: {
    women: 'womens-dresses',
    men: 'mens-shirts',
    shoes: ['womens-shoes', 'mens-shoes'],
    bag: 'womens-bags',
  },
};

export const productSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    // setLanguage: (state, { payload: language }: PayloadAction<string>) => {
    //   state.language = language;
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
// export const { setLanguage } = productSlice.actions;
