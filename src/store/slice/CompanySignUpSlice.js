import React from 'react';
import { useDispatch } from 'react-redux';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../../config/app';
import { xhrPost } from '../../utils/XHR';

// Async thunk for API call
export const CompanySignupApi = createAsyncThunk('user/CompanySignUp', async (formData, thunkAPI) => {

  console.log("formData=-=-=",formData);
  try {
    const response = await xhrPost(`${BASE_URL}company`, formData);
    return response.data; // Assuming response is JSON and contains user data or status
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message); // Handle error if API call fails
  }
});

// Redux slice for user state management
const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: null,
    status: 'idle', // Status can be 'idle', 'loading', 'succeeded', 'failed'
    error: null,
  },
  reducers: {
    logout: (state) => {
      state.user = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(CompanySignupApi.pending, (state) => {
        state.status = 'loading'; // Set loading state while API call is in progress
      })
      .addCase(CompanySignupApi.fulfilled, (state, action) => {
        state.status = 'succeeded'; // API call succeeded, update status
        state.user = action.payload; // Update user state with API response data
      })
      .addCase(CompanySignupApi.rejected, (state, action) => {
        state.status = 'failed'; // API call failed, update status
        state.error = action.payload; // Store error message in state
      });
  },
});

// Export actions for external use
export const { logout } = userSlice.actions;

// Export reducer for Redux store configuration
export default userSlice.reducer;