import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  userInfo: null,
};

const appSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find(
        (p) => p.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.products.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    increaseQty: (state, action) => {
      const item = state.products.find(
        (p) => p.id === action.payload
      );

      if (item) item.quantity += 1;
    },

    decreaseQty: (state, action) => {
      const item = state.products.find(
        (p) => p.id === action.payload
      );

      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.products = state.products.filter(
          (p) => p.id !== action.payload
        );
      }
    },

    removeItem: (state, action) => {
      state.products = state.products.filter(
        (p) => p.id !== action.payload
      );
    },

setUser: (state, action) => {
  state.userInfo = action.payload;
},
LogOutUser: (state) => {
  state.userInfo = null;
},
  },
});

export const {
  addToCart,
  increaseQty,
  decreaseQty,
  removeItem,
  setUser,
  LogOutUser,
} = appSlice.actions;

export default appSlice.reducer;