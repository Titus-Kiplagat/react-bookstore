import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = 'TM31mm2TpbZshN2G81SX';
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

export const getBooksApi = createAsyncThunk('books/getBooks', async (_, { rejectWithValue }) => {
  try {
    const response = await axios.get(`${BASE_URL}${API_KEY}/books`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const postBookApi = createAsyncThunk('books/postBook', async (book, { rejectWithValue }) => {
  try {
    const response = await axios.post(`${BASE_URL}${API_KEY}/books`, book);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const deleteBookApi = createAsyncThunk('books/deleteBook', async (id, { rejectWithValue }) => {
  try {
    const response = await axios.delete(`${BASE_URL}${API_KEY}/books/${id}`);
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

const initialState = {
  bookItems: [],
  isLoading: false,
  error: undefined,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.bookItems.push(action.payload);
    },
    removeBook: (state, action) => {
      const id = action.payload;
      state.bookItems = state.bookItems.filter((book) => book.item_id !== id);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBooksApi.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(getBooksApi.fulfilled, (state, action) => {
        const books = action.payload;
        const bookItems = Object.keys((books)).map((itemId) => {
          const book = books[itemId][0];
          return {
            item_id: itemId,
            ...book,
          };
        });
        return {
          ...state,
          bookItems,
          isLoading: false,
        };
      })
      .addCase(getBooksApi.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(postBookApi.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(postBookApi.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(postBookApi.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(deleteBookApi.fulfilled, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
