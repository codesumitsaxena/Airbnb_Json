import { configureStore } from '@reduxjs/toolkit';
import likeReducer from '../features/likes/LikeSlice';

export const store = configureStore({
  reducer: {
    likes: likeReducer
  }
});
