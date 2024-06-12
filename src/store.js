// store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import userReducer from './api/loginSlice';
import serviceTypesReducer from './api/getServicesSlice';
import GetGenderReducer from './api/GetGenderSlice';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  user: persistReducer(persistConfig, userReducer),
  serviceTypes: serviceTypesReducer,
  GetGender:GetGenderReducer
});

const store = configureStore({
  reducer: rootReducer,
});

export const persistor = persistStore(store);
export default store;
