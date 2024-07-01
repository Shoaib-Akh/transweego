// store.js

import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { combineReducers } from 'redux';
import userReducer from '../slice/IndividualSignUpSlice'
import serviceTypesReducer from '../../store/slice/getServicesSlice';
import GetGenderReducer from '../../store/slice/GetGenderSlice';

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
