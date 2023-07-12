import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CommonState {
  language: "ko" | "en";
}

const initialState: CommonState = {
  language: "ko",
};

export const commonSlice = createSlice({
  name: "common",
  initialState,
  reducers: {
    setLanguage: (state, { payload: language }: PayloadAction<"ko" | "en">) => {
      state.language = language;
    },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload;
    // },
  },
});

// Action creators are generated for each case reducer function
export const { setLanguage } = commonSlice.actions;
