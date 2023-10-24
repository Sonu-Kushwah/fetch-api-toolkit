// reducers.js
import { combineReducers } from 'redux';
import postReducer from '../PostSlice/index';

const rootReducer = combineReducers({
  post: postReducer,
  // Add other reducers if needed
});

export default rootReducer;
