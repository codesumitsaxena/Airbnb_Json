import { configureStore } from '@reduxjs/toolkit';
import likeReducer from '../features/likes/LikeSlice';
import dateRangeReducer from '../features/likes/DateSelector/DateSlice';
import GuestReducer from '../features/Guest/guestSlice';

export const store = configureStore({
  reducer: {
    likes: likeReducer,
    dateRange: dateRangeReducer,
    guest: GuestReducer,
    },
});
