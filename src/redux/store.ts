import { configureStore } from '@reduxjs/toolkit';
import { baseApi } from './api/api';
import cartReducer from './features/cartSlice'; // Update the path to your cartSlice

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    cart: cartReducer, // Add the cart slice here
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
