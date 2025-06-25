import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDate: new Date(),
  endDate: new Date(),
};

const dateRangeSlice = createSlice({
  name: 'dateRange',
  initialState,
  reducers: {
    setDateRange: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
});

export const { setDateRange } = dateRangeSlice.actions;
export default dateRangeSlice.reducer;
