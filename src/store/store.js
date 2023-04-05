import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSclice";
import basketSlice from "./slices/basketSlice";

export const store = configureStore({
  reducer: {
    auth: authSlice,
    basket: basketSlice,
  },
});
