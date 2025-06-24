import { createSlice } from '@reduxjs/toolkit';

// 🔹 Shuruaati state: likedItems ka ek khaali array
const initialState = {
  likedItems: [], // yahan hum sab liked card ki id rakhenge
};

// 🔹 Slice banate hain — ye Redux ke liye ek chhota sa module hota hai
const wishlistSlice = createSlice({
  name: 'wishlist',         // Slice ka naam
  initialState: initialState, // Shuruaati state
  reducers: {
    // 🔹 Action: toggleLike
    toggleLike: (state, action) => {
      const id = action.payload; // action ke through id milti hai

      // Agar already liked hai → to unlike (remove from list)
      if (state.likedItems.includes(id)) {
        state.likedItems = state.likedItems.filter(item => item !== id);
      } 
      // Agar nahi liked → to like (add to list)
      else {
        state.likedItems.push(id);
      }
    },
  },
});

// 🔹 Action aur reducer ko export karna jaruri hai
export const { toggleLike } = wishlistSlice.actions;
export default wishlistSlice.reducer;
