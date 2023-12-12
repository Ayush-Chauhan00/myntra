import { createSlice } from "@reduxjs/toolkit";
const Itemslice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    }
  }

});
export const itemsActions = Itemslice.actions;
export default Itemslice;
