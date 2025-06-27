import { createSlice } from '@reduxjs/toolkit';

const guestSlice = createSlice({
  name: 'guest',
  initialState: {
    adult: 0,
    children: 0,
    infants: 0,
    pets: 0,
  },
  reducers: {
    setGuestCount: (state, action) => {
      const { type, value } = action.payload;
      state[type] = value;
    },
  },
});

export const { setGuestCount } = guestSlice.actions;
export default guestSlice.reducer;
