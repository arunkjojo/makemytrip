import { createSlice } from "@reduxjs/toolkit";

export const tripSlice = createSlice({
  name: "tripType",
  initialState: {
    tripType:"ONEWAY",
    fareType:"Regular"
  },
  reducers: {
    changeTrip: (state,action) => {
      return {
        ...state,
        tripType:action.payload.tripType
      }
    },
    changeFare: (state,action) => {
      return {
        ...state,
        fareType:action.payload.fareType
      }
    }
  },
});

export const { changeTrip, changeFare } = tripSlice.actions;

export default tripSlice.reducer;