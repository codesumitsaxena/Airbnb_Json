import {createSlice} from '@reduxjs/toolkit'

const initialState = {
  likedItems: {}, 
};

const likeSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const id = action.payload;
      state.likedItems[id] = !state.likedItems[id];
    }
  }
});

export const { toggleLike } = likeSlice.actions;
export default likeSlice.reducer;
