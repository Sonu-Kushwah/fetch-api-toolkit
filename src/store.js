// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './Redux/Reducer'; // Combine your reducers

const store = configureStore({
  reducer: rootReducer,
});

export default store;
