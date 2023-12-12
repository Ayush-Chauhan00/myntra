import { createSlice } from "@reduxjs/toolkit";
const fetchStatusSlice = createSlice({
  name: 'fetchstatus',
  initialState: {
    fetchDone: false,
    currentlyFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
      return state;
    },
    markFetchingStarted: (state) => {
      state.currentlyFetching = true;
      return state;
    },
    markFetchingFinished: (state) => {
      state.currentlyFetching = false;
      return state;
    }
  }


});
export const fetchStatusSliceActions = fetchStatusSlice.actions;
export default fetchStatusSlice;