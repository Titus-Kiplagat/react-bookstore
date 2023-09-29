import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Fiction', 'Non-Fiction', 'Classic', 'Comic', 'Graphic Novel', 'Subject Matter', 'Target Audience', 'Personal Finance', 'Others'],
  status: [],
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    getCategoriesStatus: (state) => {
      state.status = ['Under construction'];
    },
  },
});

export const { getCategoriesStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;
