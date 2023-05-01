import { createSlice } from "@reduxjs/toolkit";
import authenticationService from "../service/authenticationService";

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: null,
    user: null
  },
  reducers: {
    save: (state, action) => {
      authenticationService.saveToken(action.payload.data.token);
      state.token = authenticationService.getToken();
      state.user = authenticationService.getUserData();
    },
    logout: (state) => {
      state.token = null;
      state.user = null;
      authenticationService.removeToken();
    },
    reload: (state) => {
      if( authenticationService.hasToken() && authenticationService.tokenIsValid() ) {
        state.token = authenticationService.getToken();
        state.user = authenticationService.getUserData();
      } else {
        authenticationService.removeToken();
      }
    }
  }
});

export const { save, logout, reload } = userSlice.actions;

export default userSlice.reducer;