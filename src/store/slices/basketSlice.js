import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, actions) => {
      const basketItem = actions.payload;
      state.items.push(basketItem);
    },
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;
