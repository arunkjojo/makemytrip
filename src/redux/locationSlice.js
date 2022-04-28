import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    from: {
      id: 1,
      name: "Mumbai",
      contry: "India",
      code: "MOB",
      description: "Chhatrapati Shivaji International Airport",
    },
    to: {
      id: 2,
      name: "Delhi",
      contry: "India",
      code: "DEL",
      description: "Delhi Airport",
    },
    showLocation: false,
  },
  reducers: {
    changeFromLocation: (state, action) => {
      return {
        ...state,
        from: action.payload
      };
    },
    changeToLocation: (state, action) => {
      return {
        ...state,
        to: action.payload
      };
    },
    changeShowLocation: (state, action) => {
      return {
        ...state,
        showLocation: action.payload
      };
    },
    toggleLocation: (state, action) => {
      return {
        ...state,
        from: action.payload.to,
        to: action.payload.from
      }
    },
  },
});

export const {
  changeFromLocation,
  changeToLocation,
  changeShowLocation,
  toggleLocation,
} = locationSlice.actions;

export default locationSlice.reducer;
