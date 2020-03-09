import { createSlice } from '@reduxjs/toolkit';

const apiSlice = createSlice({
  name: 'api',
  initialState: { isValid: false },
  reducers: {
    updateApiData: {
      reducer() {
        return { isValid: true, data: 'test' };
      },
    },
    invalidateApiData: {
      reducer() {
        return { isValid: false };
      },
    },
  },
});

export const { updateApiData, invalidateApiData } = apiSlice.actions;

export default apiSlice.reducer;

export const fetchApiData = () => (dispatch) => {
  dispatch(updateApiData);
};

// export function fetchApiData() {
//   async (dispatch) => {
//     const response = await fetch('https://www.reddit.com/r/pizza.json');
//     //   .then((response) => response.json())
//     //   .then((json) => dispatch({ type: FETCH_API_DATA, data: json }));
//     return dispatch(updateApiData);
//   };
// }
