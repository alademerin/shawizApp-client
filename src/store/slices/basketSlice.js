import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

const initialState = {
  items: [],
  total: 0,
  loading: false,
  error: null,
};

export const getBasketItems = createAsyncThunk(
  "basket/getBasketItems",
  async (_, { rejectWithValue }) => {
    try {
      const basketItems = await SecureStore.getItemAsync("basket");
      return basketItems;
    } catch (e) {
      rejectWithValue(e.messagge);
    }
  }
);

export const addToBasketItems = createAsyncThunk(
  "basket/addToBasket",
  async (item, { rejectWithValue }) => {
    try {
      const currentBasket = await SecureStore.getItemAsync("basket");
      const basketItems = currentBasket ? JSON.parse(currentBasket) : [];
      basketItems.push(item);
      await SecureStore.setItemAsync("basket", JSON.stringify(basketItems));
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
    incrementQuantity: (state, action) => {
      const basketIdx = action.payload;
      const item = state.items.find((item) => item.basketIdx === basketIdx);
      if (item) {
        item.quantity++;
        item.total = item.price * item.quantity;
      }
      state.total = state.items.reduce((total, item) => total + item.total, 0) || 0;

      SecureStore.setItemAsync("basket", JSON.stringify(state.items));
    },
    decrementQuantity: (state, action) => {
      const basketIdx = action.payload;
      const item = state.items.find((item) => item.basketIdx === basketIdx);
      if (item) {
        item.quantity--;
        item.total = item.price * item.quantity;
      }
      state.total = state.items.reduce((total, item) => total + item.total, 0) || 0;

      SecureStore.setItemAsync("basket", JSON.stringify(state.items));
    },
    clearBasket: (state, action) => {
      state.items = [];
      state.total=0
      SecureStore.deleteItemAsync("basket");
    },
  },
  extraReducers: (builder) => {
    builder
      //Thunk for retrieving basketItems
      .addCase(getBasketItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getBasketItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = JSON.parse(action.payload);
        state.total = state.items?.reduce((total, item) => total + item.total, 0) || 0;
        console.log(state.items);
      })
      .addCase(getBasketItems.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.log("failed");
      })
      .addCase(addToBasketItems.fulfilled, (state, action) => {
        state.items = action.payload;
        state.total = state.items?.reduce((total, item) => total + item.total, 0);
      });
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;
