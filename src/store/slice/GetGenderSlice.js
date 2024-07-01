

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { xhrGet } from '../../utils/XHR';

const API_URL = `https://transweego-backend-production.up.railway.app/api/v1/`;

export const GetGenderType = createAsyncThunk(
  'serviceTypes/getServiceTypes',
  async (_, thunkAPI) => {
    try {
      const response = await xhrGet(`${API_URL}pre-launch/genders`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const GetGenderSlice = createSlice({
  name: 'GetGenderType',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetGenderType.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(GetGenderType.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(GetGenderType.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default GetGenderSlice.reducer;

