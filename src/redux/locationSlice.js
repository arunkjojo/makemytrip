import { createSlice } from "@reduxjs/toolkit";

export const locationSlice = createSlice({
  name: "location",
  initialState: {
    from: {
      id: 'r2',
      name: "Mumbai",
      contry: "India",
      code: "MOB",
      description: "Chhatrapati Shivaji International Airport",
    },
    to: {
      id: 'r1',
      name: "Delhi",
      contry: "India",
      code: "DEL",
      description: "Delhi Airport",
    }
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
  toggleLocation,
} = locationSlice.actions;

export default locationSlice.reducer;