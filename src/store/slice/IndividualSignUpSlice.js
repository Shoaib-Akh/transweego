import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { xhrPost } from '../../utils/XHR'; 
const API_URL = `https://transweego-backend-production.up.railway.app/api/v1/`
export const IndividualSignUpApi = createAsyncThunk('user/CompanySignUp', async (credentials, thunkAPI) => {
  const response = await xhrPost(`${API_URL}pre-launch/individual`, credentials);
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
      .addCase(IndividualSignUpApi.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(IndividualSignUpApi.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.user = action.payload;
      })
      .addCase(IndividualSignUpApi.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;