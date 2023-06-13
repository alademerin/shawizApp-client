import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const initialState = {
  items: [],
  total: 0,
};

export const getBasketItems = createAsyncThunk("basket/getBasketItems", async () => {
  const basketItems = await SecureStore.getItemAsync("basket");
  return basketItems;
});

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, actions) => {
      const newItem = actions.payload;
      state.items.push(newItem);
      state.total = state.items.reduce((total, item) => total + item.total, 0);
    },
    getBasketTotal: (state, action) => {
      const basketTotal = state.items.reduce((acc, cur) => ((acc.total += cur), total), []);
      state.total = basketTotal;
    },
  },
  extraReducers: {
    [getBasketItems.fulfilled]: (state, action) => {
      state.items = JSON.parse(action.payload);
      state.total = state.items.reduce((total, item) => total + item.total, 0);
    },
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;
