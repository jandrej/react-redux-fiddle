import { createSlice } from '@reduxjs/toolkit';

export const VISIBILITY_FILTERS = {
  SHOW_A: 'SHOW_A',
  SHOW_B: 'SHOW_B',
};

const filtersSlice = createSlice({
  name: 'visibilityFilters',
  initialState: VISIBILITY_FILTERS.SHOW_A,
  reducers: {
    setVisibilityFilter(state, action) {
      return action.payload;
    },
  },
});

export const { setVisibilityFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
