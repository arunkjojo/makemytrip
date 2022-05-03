import { createSlice } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
  name: "tripType",
  initialState: {
    id:1,
    value:"ONEWAY"
  },
  reducers: {
    changeTrip: (state, action) => {
      return {
        ...state,
        ...action.payload
      }
    }
  },
});

export const { changeTrip } = tripSlice.actions;

export default tripSlice.reducer;