import { createSlice } from "@reduxjs/toolkit";

export const travellerSlice = createSlice({
  name: "traveller",
  initialState: {
    count: {
      adult: 1,
      children: 0,
      infant: 0,
      total: 1,
    },
    classes: "Economy/Premium Economy",
  },
  reducers: {
    changeClassCount: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  },
});

export const { changeClassCount } = travellerSlice.actions;

export default travellerSlice.reducer;