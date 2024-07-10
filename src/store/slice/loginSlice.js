import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { xhrPost } from '../../utils/XHR';
import { BASE_URL } from '../../config/app';
import { toast } from 'react-toastify';

export const login = createAsyncThunk('user/login', async (credentials, thunkAPI) => {
  const response = await xhrPost(`${BASE_URL}signin`, credentials);
  if (response.data?.message) {
    toast.success("Authorization code sent successfully")
  }
  return response.data?.message;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle',
    error: null,
    message: null
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(login.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;