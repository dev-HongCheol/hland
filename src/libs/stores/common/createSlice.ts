import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { CommonState, HeaderInfo } from './common.types';

const initialState: CommonState = {
  language: 'ko',
  headerInfo: {
    height: 128,
    isDense: false,
  },
};

export const commonSlice = createSlice({
  name: 'common',
  initialState,
  reducers: {
    setLanguage: (state, { payload: language }: PayloadAction<string>) => {
      state.language = language;
    },
    setHeaderInfo: (state, { payload: headerInfo }: PayloadAction<HeaderInfo>) => {
      state.headerInfo = { ...headerInfo };
    },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage, setHeaderInfo } = commonSlice.actions;
