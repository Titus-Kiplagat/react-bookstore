import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoriesStatus: (state) => {
      state.categories = ['Under construction'];
    },
  },
});

export const { getCategoriesStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
