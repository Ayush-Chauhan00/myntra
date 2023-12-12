import { configureStore } from "@reduxjs/toolkit";
import Itemslice from "./itemSlice";
import fetchStatusSlice from "./fetchstatusSlice";
import BagSlice from "./bagSlice";

const myntraStore = configureStore({
  reducer: {
    items: Itemslice.reducer,
    fetchStatus: fetchStatusSlice.reducer,
    bag: BagSlice.reducer
  }
})
export default myntraStore;