import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    increase: (state, action) => {
      // state.value = state.value + 1; // sans immer
      state.value += 1; // avec immer
    },
    decrease: (state, action) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    }
  }
});

export const { increase, decrease, reset } = counterSlice.actions;

export default counterSlice.reducer;