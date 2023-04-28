import { createSlice } from "@reduxjs/toolkit";

const KEY = 'authentication-data';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    user: null
  },
  reducers: {
    save: (state, action) => {
      state.token = action.payload.data.token;
      state.user = action.payload.data.user;
      localStorage.setItem(KEY, JSON.stringify(action.payload.data));
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem(KEY);
    },
    reload: (state) => {
      const data = JSON.parse(localStorage.getItem(KEY));
      if(null !== data){
        state.token = data.token;
        state.user = data.user;
      }
    }
  }
});

export const { save, logout, reload } = userSlice.actions;

export default userSlice.reducer;