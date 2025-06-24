import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    startDate: null,
    endDate: null,
};

const dateSlice = createSlice({
    name: 'date',
    initialState,
    reducers: {
      setDateRange: (state, action) => {
        state.startDate = action.payload.startDate;
        state.endDate = action.payload.endDate;
      },
    },
  });
  
  export const { setDateRange } = dateSlice.actions;
  export default dateSlice.reducer;