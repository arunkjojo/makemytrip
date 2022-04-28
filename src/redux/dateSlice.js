import { createSlice } from "@reduxjs/toolkit";

export const dateSlice = createSlice({
  name: "date",
  initialState: {
    departure: {
      date: new Date().toDateString()
    },
    returns: {
      date: new Date(new Date().getTime() + 24 * 60 * 60 * 1000).toDateString()
    },
    showDate: false,
  },
  reducers: {
    changeDate: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        ...action.payload,
      };
    },
    changeShowDate: (state, action) => {
      console.log(action.payload);
      return {
        ...state,
        showDate: action.payload,
      };
    }
  },
});

export const { changeDate, changeShowDate } =
  dateSlice.actions;

export default dateSlice.reducer;
