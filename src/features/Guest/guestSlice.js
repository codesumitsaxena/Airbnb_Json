// src/redux/guestSlice.js
import { createSlice } from "@reduxjs/toolkit";

const guestSlice = createSlice({
  name: "guest",
  initialState: {
    adults: 0,
    children: 0,
    infants: 0,
    pets: 0,
  },
  reducers: {
    setGuests: (state, action) => {
      return { ...state, ...action.payload };
    },
    incrementAdult: (state) => {
      if (state.adults < 3) state.adults += 1;
    },
    decrementAdult: (state) => {
      if (state.adults > 0) state.adults -= 1;
    },
    incrementChildren: (state) => {
      if (state.children < 1) state.children += 1;
    },
    decrementChildren: (state) => {
      if (state.children > 0) state.children -= 1;
    },
    incrementInfants: (state) => {
      if (state.infants < 5) state.infants += 1;
    },
    decrementInfants: (state) => {
      if (state.infants > 0) state.infants -= 1;
    },
    incrementPets: (state) => {
      if (state.pets < 1) state.pets += 1;
    },
    decrementPets: (state) => {
      if (state.pets > 0) state.pets -= 1;
    },
  },
});

export const {
  setGuests,
  incrementAdult,
  decrementAdult,
  incrementChildren,
  decrementChildren,
  incrementInfants,
  decrementInfants,
  incrementPets,
  decrementPets,
} = guestSlice.actions;

export default guestSlice.reducer;
