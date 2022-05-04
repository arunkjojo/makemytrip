import { createSlice } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
  name: "tripType",
  initialState: {
    tripType:"ONEWAY"
  },
  reducers: {
    changeTrip: (state,action) => {
      return {
        ...state,
        tripType:action.payload
      }
    }
  },
});

export const { changeTrip } = tripSlice.actions;

export default tripSlice.reducer;