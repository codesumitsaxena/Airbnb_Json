import { configureStore } from '@reduxjs/toolkit';
import wishlistReducer from '../features/wishlist/wishlistSlice';

export const store = configureStore({
  reducer: {
    wishlist: wishlistReducer,
  },
});
