import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { xhrPost } from '../utils/XHR';
const API_URL = process.env.API_URL;
console.log("API_URL",API_URL);
export const ComponySignUpApi = createAsyncThunk('user/ComponySignUp', async (credentials, thunkAPI) => {
  const response = await xhrPost(`${API_URL}pre-launch/company`, credentials);
  return response.data;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ComponySignUpApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(ComponySignUpApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(ComponySignUpApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;