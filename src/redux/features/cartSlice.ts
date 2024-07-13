import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { baseApi } from '../api/api';


export interface CartState {
  items: { productId: string; quantity: number }[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const existingItem = state.items.find(item => item.productId === action.payload.productId);
      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        state.items.push(action.payload);
      }
    },
    updateQuantity: (state, action: PayloadAction<{ productId: string; quantity: number }>) => {
      const item = state.items.find(item => item.productId === action.payload.productId);
      if (item) {
        item.quantity = action.payload.quantity;
      }
    },
    removeItem: (state, action: PayloadAction<{ productId: string }>) => {
      state.items = state.items.filter(item => item.productId !== action.payload.productId);
    },
    clearCart: (state) => {
        state.items = [];
      },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(baseApi.endpoints.getCart.matchFulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addMatcher(baseApi.endpoints.updateCart.matchFulfilled, (state, action) => {
        const item = state.items.find(item => item.productId === action.payload.productId);
        if (item) {
          item.quantity = action.payload.quantity;
        }
      })
      .addMatcher(baseApi.endpoints.removeFromCart.matchFulfilled, (state, action) => {
        state.items = state.items.filter(item => item.productId !== action.payload);
      });
  },


});

export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
