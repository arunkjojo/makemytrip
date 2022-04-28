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
    showTraveller:false,
  },
  reducers: {
    changeClassCount: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        ...action.payload
      }
    },
    changeShowTraveller: (state, action) => {
      return {
        ...state,
        showTraveller: action.payload
      }
    }
  },
});

export const { changeClassCount, changeShowTraveller } = travellerSlice.actions;

export default travellerSlice.reducer;
