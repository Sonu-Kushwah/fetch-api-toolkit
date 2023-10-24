// postSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios'; // You might need to install axios

const initialState = {
  posts: [],
  status: 'idle',
  error: null,
};

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  return response.data;
});

const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.posts = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
