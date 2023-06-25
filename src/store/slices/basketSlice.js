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

export const addToBasketItems = createAsyncThunk(
  "basket/addToBasket",
  async (item, { rejectWithValue }) => {
    try {
      // Retrieve the current basket from SecureStore
      const currentBasket = await SecureStore.getItemAsync("basket");
      // Parse the retrieved basket JSON or initialize an empty array
      const basketItems = currentBasket ? JSON.parse(currentBasket) : [];
      // Add the new item to the basket
      basketItems.push(item);
      // Store the updated basket in SecureStore
      await SecureStore.setItemAsync("basket", JSON.stringify(basketItems));
      // Return the updated basket items
      return basketItems;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

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
      console.log('the total is', state.total)
    },
    [addToBasketItems.fulfilled]: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;
