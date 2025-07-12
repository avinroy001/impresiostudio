import { configureStore } from '@reduxjs/toolkit';
import photographersReducer from './photographersSlice';

export const store = configureStore({
  reducer: { photographers: photographersReducer },
});
