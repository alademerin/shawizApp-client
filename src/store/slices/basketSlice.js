import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, actions) => {
      const newItem = actions.payload;
      state.items.push(newItem);
    },
  },
});

export const basketActions = basketSlice.actions;

export default basketSlice.reducer;
