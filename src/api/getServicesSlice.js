

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { xhrGet } from '../utils/XHR';

const API_URL = `https://transweego-backend-production.up.railway.app/api/v1/`;

export const getServiceTypes = createAsyncThunk(
  'serviceTypes/getServiceTypes',
  async (_, thunkAPI) => {
    try {
      const response = await xhrGet(`${API_URL}pre-launch/service-types`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

const serviceTypesSlice = createSlice({
  name: 'serviceTypes',
  initialState: {
    list: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getServiceTypes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getServiceTypes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.list = action.payload;
      })
      .addCase(getServiceTypes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default serviceTypesSlice.reducer;

