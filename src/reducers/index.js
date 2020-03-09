import { combineReducers } from '@reduxjs/toolkit';
import visibilityFilterReducer from '../features/filtersSlice';
import apiReducer from '../features/apiSlice';

const rootReducer = combineReducers({
  visibilityFilter: visibilityFilterReducer,
  api: apiReducer,
});

export default rootReducer;
