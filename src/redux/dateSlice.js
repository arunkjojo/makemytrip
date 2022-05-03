import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
  name: "date",
  initialState: {
    departure: new Date().toDateString(),
    return: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toDateString(),
  },
  reducers: {
    changeDate: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    }
  },
});

export const { changeDate } =
  dateSlice.actions;

export default dateSlice.reducer;