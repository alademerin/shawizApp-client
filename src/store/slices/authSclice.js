import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, actions) {
      state.isLoggedIn = true;
      const details = actions.payload;
      state.user = details.user;
      state.token = details.token;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
